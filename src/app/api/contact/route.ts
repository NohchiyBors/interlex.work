import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { marketValues, type ContactMarket } from "@/lib/contact-form-copy";
import { verifyTurnstile } from "@/lib/turnstile";
import { getContactAutoreplyTemplate } from "@/lib/autoreply-copy";
import {
  buildContextLines,
  collectServerRequestContext,
  type ClientContext,
} from "@/lib/request-context";

export const runtime = "nodejs";

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

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  market?: unknown;
  marketLabel?: unknown;
  message?: unknown;
  website?: unknown;
  locale?: unknown;
  pagePath?: unknown;
  sourceSurface?: unknown;
  referrer?: unknown;
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

function isValidMarket(value: unknown): value is ContactMarket {
  return typeof value === "string" && marketValues.includes(value as ContactMarket);
}

function parseRecipients(value: string) {
  return value
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean);
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
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  if (isNonEmptyString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const turnstileToken = typeof body.cfTurnstileToken === "string" ? body.cfTurnstileToken : null;
  const turnstileOk = await verifyTurnstile(turnstileToken);
  if (!turnstileOk) {
    return NextResponse.json({ error: "Bot verification failed." }, { status: 403 });
  }

  const name = sanitizeHeader(sanitize(body.name, 120));
  const email = sanitizeHeader(sanitize(body.email, 160));
  const phone = sanitizeHeader(sanitize(body.phone, 80));
  const company = sanitizeHeader(sanitize(body.company, 160));
  const message = sanitize(body.message, 4000); // message — тело письма, \n допустимы
  const locale = sanitizeHeader(sanitize(body.locale, 16));
  const pagePath = sanitize(body.pagePath, 260);
  const sourceSurface = sanitizeHeader(sanitize(body.sourceSurface, 80));
  const referrer = sanitize(body.referrer, 500);
  const market = isValidMarket(body.market) ? body.market : "other";
  const marketLabel = sanitizeHeader(sanitize(body.marketLabel, 80) || market);

  if (name.length < 2 || message.length < 10 || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide valid contact details." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST ?? "mailserver-gx9xlsuj0u69qaftpm783f2m";
  const smtpPortValue = process.env.SMTP_PORT ?? "25";
  const smtpUser = process.env.SMTP_USER || undefined;
  const smtpPass = process.env.SMTP_PASS || undefined;
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "hello@interlex.work";
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "noreply@host.ickz.net";
  const contactBccEmail = process.env.CONTACT_BCC_EMAIL;

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

  const serverContext = collectServerRequestContext(request);
  const clientContext = sanitizeClientContext(body.clientContext);
  const ctxLines = buildContextLines(
    serverContext,
    clientContext ?? {
      pagePath: pagePath || undefined,
      referrer: referrer || undefined,
    },
  );

  const text = [
    "New inquiry from interlex.work",
    "",
    "── Submission ──",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Company: ${company || "-"}`,
    `Market: ${marketLabel} (${market})`,
    `Locale: ${locale || "-"}`,
    `Source: ${sourceSurface || "-"}`,
    "",
    "── Visitor context ──",
    ctxLines.text,
    "",
    "── Message ──",
    message,
  ].join("\n");

  const html = `
    <h1 style="margin:0 0 12px;font:600 18px/1.3 sans-serif">New inquiry from interlex.work</h1>
    <h2 style="margin:18px 0 8px;font:600 14px/1.2 sans-serif;color:#001F3F">Submission</h2>
    <table role="presentation" cellspacing="0" cellpadding="6" style="border-collapse:collapse;font-size:13px;line-height:1.4">
      <tr><td style="color:#666;padding-right:14px"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Phone</strong></td><td>${escapeHtml(phone || "-")}</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Company</strong></td><td>${escapeHtml(company || "-")}</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Market</strong></td><td>${escapeHtml(marketLabel)} (${escapeHtml(market)})</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Locale</strong></td><td>${escapeHtml(locale || "-")}</td></tr>
      <tr><td style="color:#666;padding-right:14px"><strong>Source</strong></td><td>${escapeHtml(sourceSurface || "-")}</td></tr>
    </table>
    <h2 style="margin:18px 0 8px;font:600 14px/1.2 sans-serif;color:#001F3F">Visitor context</h2>
    ${ctxLines.html}
    <h2 style="margin:18px 0 8px;font:600 14px/1.2 sans-serif;color:#001F3F">Message</h2>
    <p style="font-size:14px;line-height:1.5">${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  try {
    // Lead notification to InterLex.
    await transporter.sendMail({
      to: parseRecipients(contactToEmail),
      bcc: contactBccEmail ? parseRecipients(contactBccEmail) : undefined,
      from: contactFromEmail,
      replyTo: email,
      subject: `[interlex.work] ${marketLabel} inquiry from ${name}`,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] sendMail failed", {
      smtpPort,
      smtpSecure,
      smtpAuth: !!smtpAuth,
      error: err instanceof Error ? err.message : String(err),
    });
    return NextResponse.json({ error: "Email transport error." }, { status: 500 });
  }

  // Autoreply to the client. Failure here must not break the lead pipeline:
  // the InterLex notification has already been delivered, so we log and
  // continue rather than returning 500 to the form.
  try {
    const autoreply = getContactAutoreplyTemplate(locale);
    await transporter.sendMail({
      from: contactFromEmail,
      to: email,
      replyTo: parseRecipients(contactToEmail),
      subject: autoreply.subject,
      text: autoreply.text(name),
      html: autoreply.html(escapeHtml(name)),
    });
  } catch (err) {
    console.error("[contact] autoreply sendMail failed", {
      to: email,
      error: err instanceof Error ? err.message : String(err),
    });
  }

  return NextResponse.json({ ok: true });
}
