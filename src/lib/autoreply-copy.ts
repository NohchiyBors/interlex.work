// Shared copy for the automated client-facing emails sent by /api/brief
// (delivers the requested intake brief) and /api/contact (acknowledges a
// new inquiry). Both autoreplies follow the same conventions:
//
// * The public follow-up address `PUBLIC_CONTACT_EMAIL` is hard-coded so it
//   never drifts away from the email body when internal CONTACT_TO_EMAIL is
//   reconfigured for routing or BCC purposes.
// * WhatsApp is intentionally NOT mentioned in autoreplies. WhatsApp lives
//   on the site itself as a primary CTA — the autoreply only points the
//   client to a single email address to avoid mixed signals.
// * A do-not-reply disclaimer is included in every locale because the
//   `From` address is a noreply mailbox and the recipient should follow up
//   to `hello@interlex.work` rather than reply to the autoreply itself.
//
// Localized for ru / en / ka. Other locales fall back to English. This
// matches the brief catalogue language coverage; the contact form is
// available in more locales but the autoreply intentionally stays on the
// same three-language footprint as the rest of the email layer.

export const PUBLIC_CONTACT_EMAIL = "hello@interlex.work";

type AutoreplyLocale = "ru" | "en" | "ka";

export type BriefAutoreplyTemplate = Readonly<{
  subject: (briefTitle: string) => string;
  text: (name: string, briefTitle: string) => string;
  html: (escapedName: string, escapedBriefTitle: string) => string;
}>;

export type ContactAutoreplyTemplate = Readonly<{
  subject: string;
  text: (name: string) => string;
  html: (escapedName: string) => string;
}>;

function pickAutoreplyLocale(locale: string): AutoreplyLocale {
  if (locale === "ru") return "ru";
  if (locale === "ka") return "ka";
  return "en";
}

const briefTemplates: Record<AutoreplyLocale, BriefAutoreplyTemplate> = {
  ru: {
    subject: (briefTitle) => `InterLex — ваш бриф: ${briefTitle}`,
    text: (name, briefTitle) =>
      `Здравствуйте, ${name}!\n\nВо вложении — бриф «${briefTitle}».\n\nЗаполните его и отправьте на ${PUBLIC_CONTACT_EMAIL}.\n\nЭто письмо отправлено автоматически — пожалуйста, не отвечайте на него, напишите на контактный адрес выше.\n\nС уважением,\nКоманда InterLex`,
    html: (escapedName, escapedBriefTitle) => `
    <p>Здравствуйте, ${escapedName}!</p>
    <p>Во вложении вы найдёте бриф <strong>${escapedBriefTitle}</strong>.</p>
    <p>Заполните его и отправьте на <a href="mailto:${PUBLIC_CONTACT_EMAIL}">${PUBLIC_CONTACT_EMAIL}</a>.</p>
    <p style="color:#666;font-size:13px"><em>Это письмо отправлено автоматически — пожалуйста, не отвечайте на него, напишите на контактный адрес выше.</em></p>
    <p>С уважением,<br/>Команда InterLex</p>
    `,
  },
  en: {
    subject: (briefTitle) => `InterLex — your brief: ${briefTitle}`,
    text: (name, briefTitle) =>
      `Hello ${name},\n\nPlease find attached the brief "${briefTitle}".\n\nFill it in and send it to ${PUBLIC_CONTACT_EMAIL}.\n\nThis message was sent automatically — please do not reply to it, write to the contact address above.\n\nBest regards,\nInterLex Team`,
    html: (escapedName, escapedBriefTitle) => `
    <p>Hello ${escapedName},</p>
    <p>Please find attached the brief <strong>${escapedBriefTitle}</strong>.</p>
    <p>Fill it in and send it to <a href="mailto:${PUBLIC_CONTACT_EMAIL}">${PUBLIC_CONTACT_EMAIL}</a>.</p>
    <p style="color:#666;font-size:13px"><em>This message was sent automatically — please do not reply to it, write to the contact address above.</em></p>
    <p>Best regards,<br/>InterLex Team</p>
    `,
  },
  ka: {
    subject: (briefTitle) => `InterLex — თქვენი ბრიფი: ${briefTitle}`,
    text: (name, briefTitle) =>
      `გამარჯობა, ${name}!\n\nთანდართულია ბრიფი „${briefTitle}“.\n\nშეავსეთ და გამოგზავნეთ მისამართზე ${PUBLIC_CONTACT_EMAIL}.\n\nეს წერილი ავტომატურად გაიგზავნა — გთხოვთ, არ უპასუხოთ მას, დაგვიკავშირდით ზემოთ მითითებულ მისამართზე.\n\nპატივისცემით,\nInterLex-ის გუნდი`,
    html: (escapedName, escapedBriefTitle) => `
    <p>გამარჯობა, ${escapedName}!</p>
    <p>თანდართულად ნახავთ ბრიფს <strong>${escapedBriefTitle}</strong>.</p>
    <p>შეავსეთ და გამოგზავნეთ მისამართზე <a href="mailto:${PUBLIC_CONTACT_EMAIL}">${PUBLIC_CONTACT_EMAIL}</a>.</p>
    <p style="color:#666;font-size:13px"><em>ეს წერილი ავტომატურად გაიგზავნა — გთხოვთ, არ უპასუხოთ მას, დაგვიკავშირდით ზემოთ მითითებულ მისამართზე.</em></p>
    <p>პატივისცემით,<br/>InterLex-ის გუნდი</p>
    `,
  },
};

const contactTemplates: Record<AutoreplyLocale, ContactAutoreplyTemplate> = {
  ru: {
    subject: "InterLex — мы получили ваш запрос",
    text: (name) =>
      `Здравствуйте, ${name}!\n\nВаш запрос получен. Мы свяжемся с вами в ближайшее время.\n\nЕсли что-то срочное — напишите нам напрямую: ${PUBLIC_CONTACT_EMAIL}\n\nЭто письмо отправлено автоматически — пожалуйста, не отвечайте на него, напишите на контактный адрес выше.\n\nС уважением,\nКоманда InterLex`,
    html: (escapedName) => `
    <p>Здравствуйте, ${escapedName}!</p>
    <p>Ваш запрос получен. Мы свяжемся с вами в ближайшее время.</p>
    <p>Если что-то срочное — напишите нам напрямую: <a href="mailto:${PUBLIC_CONTACT_EMAIL}">${PUBLIC_CONTACT_EMAIL}</a>.</p>
    <p style="color:#666;font-size:13px"><em>Это письмо отправлено автоматически — пожалуйста, не отвечайте на него, напишите на контактный адрес выше.</em></p>
    <p>С уважением,<br/>Команда InterLex</p>
    `,
  },
  en: {
    subject: "InterLex — we received your request",
    text: (name) =>
      `Hello ${name},\n\nYour request has been received. We will get back to you shortly.\n\nIf anything is urgent, please contact us directly: ${PUBLIC_CONTACT_EMAIL}\n\nThis message was sent automatically — please do not reply to it, write to the contact address above.\n\nBest regards,\nInterLex Team`,
    html: (escapedName) => `
    <p>Hello ${escapedName},</p>
    <p>Your request has been received. We will get back to you shortly.</p>
    <p>If anything is urgent, please contact us directly: <a href="mailto:${PUBLIC_CONTACT_EMAIL}">${PUBLIC_CONTACT_EMAIL}</a>.</p>
    <p style="color:#666;font-size:13px"><em>This message was sent automatically — please do not reply to it, write to the contact address above.</em></p>
    <p>Best regards,<br/>InterLex Team</p>
    `,
  },
  ka: {
    subject: "InterLex — თქვენი მოთხოვნა მიღებულია",
    text: (name) =>
      `გამარჯობა, ${name}!\n\nთქვენი მოთხოვნა მიღებულია. მალე დაგიკავშირდებით.\n\nთუ რამე სასწრაფოა, მოგვწერეთ უშუალოდ: ${PUBLIC_CONTACT_EMAIL}\n\nეს წერილი ავტომატურად გაიგზავნა — გთხოვთ, არ უპასუხოთ მას, დაგვიკავშირდით ზემოთ მითითებულ მისამართზე.\n\nპატივისცემით,\nInterLex-ის გუნდი`,
    html: (escapedName) => `
    <p>გამარჯობა, ${escapedName}!</p>
    <p>თქვენი მოთხოვნა მიღებულია. მალე დაგიკავშირდებით.</p>
    <p>თუ რამე სასწრაფოა, მოგვწერეთ უშუალოდ: <a href="mailto:${PUBLIC_CONTACT_EMAIL}">${PUBLIC_CONTACT_EMAIL}</a>.</p>
    <p style="color:#666;font-size:13px"><em>ეს წერილი ავტომატურად გაიგზავნა — გთხოვთ, არ უპასუხოთ მას, დაგვიკავშირდით ზემოთ მითითებულ მისამართზე.</em></p>
    <p>პატივისცემით,<br/>InterLex-ის გუნდი</p>
    `,
  },
};

export function getBriefAutoreplyTemplate(locale: string): BriefAutoreplyTemplate {
  return briefTemplates[pickAutoreplyLocale(locale)];
}

export function getContactAutoreplyTemplate(locale: string): ContactAutoreplyTemplate {
  return contactTemplates[pickAutoreplyLocale(locale)];
}
