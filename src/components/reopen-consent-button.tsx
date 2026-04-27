"use client";

import { dispatchCookieConsentReopen } from "@/components/cookie-consent";

// Small client-side wrapper used on /[locale]/cookies so the policy page
// can stay a server component while still letting the user reopen the
// consent banner via a button. Lives next to `<CookieConsent />` for
// discoverability.

type Props = Readonly<{
  label: string;
}>;

export function ReopenConsentButton({ label }: Props) {
  return (
    <button
      type="button"
      onClick={() => dispatchCookieConsentReopen()}
      className="btn-primary inline-flex items-center border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
    >
      {label}
    </button>
  );
}
