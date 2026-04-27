import path from "node:path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { briefIds, getBriefById, type BriefId } from "@/lib/brief-copy";
import { verifyTurnstile } from "@/lib/turnstile";
import { getBriefAutoreplyTemplate } from "@/lib/autoreply-copy";
import {
  buildContextLines,
  collectServerRequestContext,
  type ClientContext,
} from "@/lib/request-context";
import type { Locale } from "@/lib/i18n";

export const runtime = "nodejs";

function pickBriefCopyLocale(locale: string): Locale {
  // Briefs metadata only exists in ru, en, ka — collapse other locales to en.
  if (locale === "ru" || locale === "ka") return locale as Locale;
  return "en";
}

function sanitizeClientContext(value: unknown): ClientContext | undefined {
  if (!value || typeof value !== "object") return undefined;
  const v = value as Record<string, unknown>;
  const str = (x: unknown, max: number) =>
    typeof x === "string" ? x.trim().slice(0, max) || undefined : undefined;
  const num = (x: unknown) => (typeof x === "number" && Number.isFinite(x) ? x : undefined);
  const bool = (x: unknown) => (typeof x === "boolean" ? x : undefined);
  const arr = (x: unknown, max: number) =>
    Array.isArray(x)
      ? x
          .map((s) => (typeof s === "string" ? s.slice(0, 40) : ""))
          .filter(Boolean)
          .slice(0, max)
      : undefined;

  const utmRaw = v.utm;
  let utm: Record<string, string> | undefined;
  if (utmRaw && typeof utmRaw === "object") {
    utm = {};
    for (const [k, val] of Object.entries(utmRaw as Record<string, unknown>)) {
      if (typeof val === "string" && k.length <= 40) {
        utm[k.slice(0, 40)] = val.slice(0, 200);
      }
    }
    if (Object.keys(utm).length === 0) utm = undefined;
  }

  const colorScheme = str(v.colorScheme, 8);
  return {
    pagePath: str(v.pagePath, 260),
    pageUrl: str(v.pageUrl, 500),
    referrer: str(v.referrer, 500),
    screenWidth: num(v.screenWidth),
    screenHeight: num(v.screenHeight),
    pixelRatio: num(v.pixelRatio),
    viewportWidth: num(v.viewportWidth),
    viewportHeight: num(v.viewportHeight),
    language: str(v.language, 16),
    languages: arr(v.languages, 12),
    platform: str(v.platform, 80),
    timezone: str(v.timezone, 64),
    hardwareConcurrency: num(v.hardwareConcurrency),
    deviceMemoryGb: num(v.deviceMemoryGb),
    touchPoints: num(v.touchPoints),
    colorScheme: colorScheme === "light" || colorScheme === "dark" ? colorScheme : undefined,
    reducedMotion: bool(v.reducedMotion),
    utm,
    sessionMs: num(v.sessionMs),
  };
}

type BriefRequestBody = {
  briefId?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  locale?: unknown;
  website?: unknown;
  clientContext?: unknown;
  cfTurnstileToken?: unknown;
};

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function sanitize(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

// Убираем \r и \n чтобы предотвратить email header injection
function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]/g, "");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidBriefId(value: unknown): value is BriefId {
  return typeof value === "string" && (briefIds as readonly string[]).includes(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: BriefRequestBody;

  try {
    body = (await request.json()) as BriefRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  // Honeypot
  if (isNonEmptyString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const turnstileToken = typeof body.cfTurnstileToken === "string" ? body.cfTurnstileToken : null;
  const turnstileOk = await verifyTurnstile(turnstileToken);
  if (!turnstileOk) {
    return NextResponse.json({ error: "Bot verification failed." }, { status: 403 });
  }

  const briefId = isValidBriefId(body.briefId) ? body.briefId : null;
  if (!briefId) {
    return NextResponse.json({ error: "Invalid brief selection." }, { status: 400 });
  }

  const name = sanitizeHeader(sanitize(body.name, 120));
  const email = sanitizeHeader(sanitize(body.email, 160));
  const phone = sanitizeHeader(sanitize(body.phone, 80));
  const locale = sanitizeHeader(sanitize(body.locale, 16)) || "en";

  if (name.length < 2 || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide valid contact details." }, { status: 400 });
  }

  const briefMeta = getBriefById(pickBriefCopyLocale(locale), briefId);
  if (!briefMeta) {
    return NextResponse.json({ error: "Brief not found." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST ?? "mailserver-gx9xlsuj0u69qaftpm783f2m";
  const smtpPortValue = process.env.SMTP_PORT ?? "25";
  const smtpUser = process.env.SMTP_USER || undefined;
  const smtpPass = process.env.SMTP_PASS || undefined;
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "hello@interlex.work";
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "noreply@host.ickz.net";

  const smtpPort = Number.parseInt(smtpPortValue, 10);
  if (Number.isNaN(smtpPort)) {
    return NextResponse.json({ error: "Email transport is not configured." }, { status: 500 });
  }

  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
  const smtpAuth = process.env.SMTP_AUTH !== "false" && (smtpUser || smtpPass);

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: smtpAuth ? { user: smtpUser, pass: smtpPass } : undefined,
  });

  // Resolve the docx file path — public/briefs/ is served statically but we
  // need the filesystem path for the nodemailer attachment.
  const brifsBaseDir = path.resolve(process.cwd(), "public", "briefs");
  const briefFilePath = path.resolve(brifsBaseDir, briefMeta.filename);
  if (!briefFilePath.startsWith(brifsBaseDir + path.sep)) {
    console.error("[brief] path traversal attempt", { filename: briefMeta.filename });
    return NextResponse.json({ error: "Invalid brief file." }, { status: 400 });
  }

  const serverContext = collectServerRequestContext(request);
  const clientContext = sanitizeClientContext(body.clientContext);
  const ctxLines = buildContextLines(serverContext, clientContext);

  // ── Email to client ───────────────────────────────────────────────────────
  const template = getBriefAutoreplyTemplate(locale);
  const clientSubject = template.subject(briefMeta.title);
  const clientText = template.text(name, briefMeta.title);
  const clientHtml = template.html(escapeHtml(name), escapeHtml(briefMeta.title));

  // ── Notification to InterLex ──────────────────────────────────────────────
  const notifySubject = `[interlex.work/briefs] ${briefMeta.title} — ${name}`;

  const notifyText = [
    "New brief request from interlex.work/briefs",
    "",
    "── Submission ──",
    `Brief: ${briefMeta.title} (${briefId})`,
    `File: ${briefMeta.filename}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Locale: ${locale}`,
    "",
    "── Visitor context ──",
    ctxLines.text,
  ].join("\n");

  const notifyHtml = `
    <h1 style="margin:0 0 12px;font:600 18px/1.3 sans-serif">New brief request — interlex.work/briefs</h1>
    <h2 style="margin:18px 0 8px;font:600 14px/1.2 sans-serif;color:#001F3F">Submission</h2>
    <table role="presentation" cellspacing="0" cellpadding="6" style="border-collapse:collapse;font-size:13px;line-height:1.4">
      <tr><td style="color:#666;padding-right:14px"><strong>Brief</strong></td><td>${escapeHtml(briefMeta.title)} (${escapeHtml(briefId)})</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>File</strong></td><td>${escapeHtml(briefMeta.filename)}</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Phone</strong></td><td>${escapeHtml(phone || "-")}</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Locale</strong></td><td>${escapeHtml(locale)}</td></tr>
    </table>
    <h2 style="margin:18px 0 8px;font:600 14px/1.2 sans-serif;color:#001F3F">Visitor context</h2>
    ${ctxLines.html}
  `;

  try {
    // Send brief to client
    await transporter.sendMail({
      from: contactFromEmail,
      to: email,
      replyTo: contactToEmail,
      subject: clientSubject,
      text: clientText,
      html: clientHtml,
      attachments: [
        {
          filename: briefMeta.filename,
          path: briefFilePath,
        },
      ],
    });

    // Send lead notification to InterLex
    await transporter.sendMail({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: notifySubject,
      text: notifyText,
      html: notifyHtml,
    });
  } catch (err) {
    console.error("[brief] sendMail failed", {
      smtpPort,
      smtpSecure,
      smtpAuth: !!smtpAuth,
      briefId,
      error: err instanceof Error ? err.message : String(err),
    });
    return NextResponse.json({ error: "Email transport error." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
