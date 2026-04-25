import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { marketValues, type ContactMarket } from "@/lib/contact-form-copy";

export const runtime = "nodejs";

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

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 160);
  const phone = sanitize(body.phone, 80);
  const company = sanitize(body.company, 160);
  const message = sanitize(body.message, 4000);
  const locale = sanitize(body.locale, 16);
  const pagePath = sanitize(body.pagePath, 260);
  const sourceSurface = sanitize(body.sourceSurface, 80);
  const referrer = sanitize(body.referrer, 500);
  const market = isValidMarket(body.market) ? body.market : "other";
  const marketLabel = sanitize(body.marketLabel, 80) || market;

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

  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const userAgent = request.headers.get("user-agent") ?? "";

  const text = [
    "New inquiry from interlex.work",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Company: ${company || "-"}`,
    `Market: ${marketLabel} (${market})`,
    `Locale: ${locale || "-"}`,
    `Page: ${pagePath || "-"}`,
    `Source: ${sourceSurface || "-"}`,
    `Referrer: ${referrer || "-"}`,
    `IP: ${forwardedFor || "-"}`,
    `User-Agent: ${userAgent || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h1>New inquiry from interlex.work</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
    <p><strong>Market:</strong> ${escapeHtml(marketLabel)} (${escapeHtml(market)})</p>
    <p><strong>Locale:</strong> ${escapeHtml(locale || "-")}</p>
    <p><strong>Page:</strong> ${escapeHtml(pagePath || "-")}</p>
    <p><strong>Source:</strong> ${escapeHtml(sourceSurface || "-")}</p>
    <p><strong>Referrer:</strong> ${escapeHtml(referrer || "-")}</p>
    <p><strong>IP:</strong> ${escapeHtml(forwardedFor || "-")}</p>
    <p><strong>User-Agent:</strong> ${escapeHtml(userAgent || "-")}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  try {
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
      smtpHost,
      smtpPort,
      smtpSecure,
      smtpAuth: !!smtpAuth,
      contactToEmail,
      contactFromEmail,
      error: err instanceof Error ? err.message : String(err),
    });
    return NextResponse.json({ error: "Email transport error." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
