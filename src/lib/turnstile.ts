/**
 * Cloudflare Turnstile — server-side token verification.
 *
 * Docs: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 *
 * Test keys (always pass, use in dev / CI):
 *   NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY = 1x00000000000000000000AA
 *   CF_TURNSTILE_SECRET               = 1x0000000000000000000000000000000AA
 */

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(token: string | undefined | null): Promise<boolean> {
  const secret = process.env.CF_TURNSTILE_SECRET;

  // Если секрет не настроен — пропускаем проверку (локальная разработка без Cloudflare).
  // На проде переменная ОБЯЗАНА быть задана.
  if (!secret) {
    console.warn("[turnstile] CF_TURNSTILE_SECRET is not set — skipping verification");
    return true;
  }

  if (!token) return false;

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });

    if (!res.ok) return false;

    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[turnstile] verification request failed", err);
    return false;
  }
}
