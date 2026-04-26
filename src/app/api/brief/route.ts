import path from "node:path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { briefIds, getBriefById, type BriefId } from "@/lib/brief-copy";
import type { Locale } from "@/lib/i18n";

export const runtime = "nodejs";

// Client email is localized for the three brief-supported languages: ru, en, ka.
// Other locales fall back to the English template (matches the briefs UI fallback).
type ClientEmailTemplate = Readonly<{
  subject: (briefTitle: string) => string;
  text: (name: string, briefTitle: string) => string;
  html: (escapedName: string, escapedBriefTitle: string) => string;
}>;

const clientEmailTemplates: Record<"ru" | "en" | "ka", ClientEmailTemplate> = {
  ru: {
    subject: (briefTitle) => `InterLex — ваш бриф: ${briefTitle}`,
    text: (name, briefTitle) =>
      `Здравствуйте, ${name}!\n\nВо вложении — бриф «${briefTitle}».\nЗаполните и отправьте нам в ответ на это письмо или через WhatsApp: https://wa.me/77000070021\n\nС уважением,\nКоманда InterLex`,
    html: (escapedName, escapedBriefTitle) => `
    <p>Здравствуйте, ${escapedName}!</p>
    <p>Во вложении вы найдёте бриф <strong>${escapedBriefTitle}</strong>.</p>
    <p>Заполните его и отправьте нам в ответ на это письмо или через WhatsApp: <a href="https://wa.me/77000070021">wa.me/77000070021</a>.</p>
    <p>Мы свяжемся с вами в ближайшее время.</p>
    <p>С уважением,<br/>Команда InterLex</p>
    `,
  },
  en: {
    subject: (briefTitle) => `InterLex — your brief: ${briefTitle}`,
    text: (name, briefTitle) =>
      `Hello ${name},\n\nPlease find attached the brief "${briefTitle}".\nFill it in and reply to this email or reach us on WhatsApp: https://wa.me/77000070021\n\nBest regards,\nInterLex Team`,
    html: (escapedName, escapedBriefTitle) => `
    <p>Hello ${escapedName},</p>
    <p>Please find attached the brief <strong>${escapedBriefTitle}</strong>.</p>
    <p>Fill it in and send it back to us by replying to this email or via WhatsApp: <a href="https://wa.me/77000070021">wa.me/77000070021</a>.</p>
    <p>We will be in touch shortly.</p>
    <p>Best regards,<br/>InterLex Team</p>
    `,
  },
  ka: {
    subject: (briefTitle) => `InterLex — თქვენი ბრიფი: ${briefTitle}`,
    text: (name, briefTitle) =>
      `გამარჯობა, ${name}!\n\nთანდართულია ბრიფი „${briefTitle}“.\nშეავსეთ და გამოგვიგზავნეთ ამ წერილზე პასუხად ან WhatsApp-ით: https://wa.me/77000070021\n\nპატივისცემით,\nInterLex-ის გუნდი`,
    html: (escapedName, escapedBriefTitle) => `
    <p>გამარჯობა, ${escapedName}!</p>
    <p>თანდართულად ნახავთ ბრიფს <strong>${escapedBriefTitle}</strong>.</p>
    <p>შეავსეთ და გამოგვიგზავნეთ ამ წერილზე პასუხად ან WhatsApp-ით: <a href="https://wa.me/77000070021">wa.me/77000070021</a>.</p>
    <p>მალე დაგიკავშირდებით.</p>
    <p>პატივისცემით,<br/>InterLex-ის გუნდი</p>
    `,
  },
};

function pickClientEmailTemplate(locale: string): ClientEmailTemplate {
  if (locale === "ru") return clientEmailTemplates.ru;
  if (locale === "ka") return clientEmailTemplates.ka;
  return clientEmailTemplates.en;
}

function pickBriefCopyLocale(locale: string): Locale {
  // Briefs metadata only exists in ru, en, ka — collapse other locales to en.
  if (locale === "ru" || locale === "ka") return locale as Locale;
  return "en";
}

type BriefRequestBody = {
  briefId?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  locale?: unknown;
  website?: unknown;
};

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function sanitize(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
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

  const briefId = isValidBriefId(body.briefId) ? body.briefId : null;
  if (!briefId) {
    return NextResponse.json({ error: "Invalid brief selection." }, { status: 400 });
  }

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 160);
  const phone = sanitize(body.phone, 80);
  const locale = sanitize(body.locale, 16) || "en";

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
  const briefFilePath = path.join(process.cwd(), "public", "briefs", briefMeta.filename);

  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";

  // ── Email to client ───────────────────────────────────────────────────────
  const template = pickClientEmailTemplate(locale);
  const clientSubject = template.subject(briefMeta.title);
  const clientText = template.text(name, briefMeta.title);
  const clientHtml = template.html(escapeHtml(name), escapeHtml(briefMeta.title));

  // ── Notification to InterLex ──────────────────────────────────────────────
  const notifySubject = `[interlex.work/briefs] ${briefMeta.title} — ${name}`;

  const notifyText = [
    "New brief request from interlex.work/briefs",
    "",
    `Brief: ${briefMeta.title} (${briefId})`,
    `File: ${briefMeta.filename}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Locale: ${locale}`,
    `IP: ${forwardedFor || "-"}`,
  ].join("\n");

  const notifyHtml = `
    <h2>New brief request — interlex.work/briefs</h2>
    <p><strong>Brief:</strong> ${escapeHtml(briefMeta.title)} (${escapeHtml(briefId)})</p>
    <p><strong>File:</strong> ${escapeHtml(briefMeta.filename)}</p>
    <hr />
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Locale:</strong> ${escapeHtml(locale)}</p>
    <p><strong>IP:</strong> ${escapeHtml(forwardedFor || "-")}</p>
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
      smtpHost,
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
