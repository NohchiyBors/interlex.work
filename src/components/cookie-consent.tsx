"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  EU_LOCALES,
  getCookieConsentCopy,
  type CookieConsentCopy,
} from "@/lib/cookie-consent-copy";
import { localePath, type Locale } from "@/lib/i18n";

// Cookie consent surface for the InterLex hub.
//
// Two flows live in this single component:
//   * Strict opt-in banner — for visitors detected as EU/EEA. The user must
//     pick Accept or Decline before Google Analytics receives a `consent
//     update` signal. Until then, Consent Mode v2 keeps analytics_storage
//     denied and no _ga cookies are written.
//   * Soft notice — for non-EU visitors. Analytics is granted automatically
//     on mount and a dismissible notice explains the situation; the user
//     can still revoke later from the /cookies page.
//
// Detection signals are intentionally client-side so the layout stays
// statically rendered. Locale is the primary signal (de/fr/it/es =>
// strict). Timezone is the secondary signal — visitors arriving on a
// non-EU locale but whose browser sits in an EU/EEA timezone are upgraded
// to the strict flow.
//
// The "change my decision" button on /[locale]/cookies dispatches a
// `interlex:cookie-consent:reopen` event which forces the banner back
// into view regardless of stored decision.

type StoredDecision = "accepted" | "declined" | "acknowledged";

const REOPEN_EVENT = "interlex:cookie-consent:reopen";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;
const PENDING_SNAPSHOT = "pending:";

function noopSubscribe() {
  return () => {};
}

// EU/EEA timezone names. Extra signal on top of locale-based detection so
// that an English-speaking Berlin visitor still hits the strict banner.
const EU_TIMEZONES = new Set<string>([
  "Europe/Vienna",
  "Europe/Brussels",
  "Europe/Sofia",
  "Europe/Zagreb",
  "Europe/Nicosia",
  "Europe/Prague",
  "Europe/Copenhagen",
  "Europe/Tallinn",
  "Europe/Helsinki",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Athens",
  "Europe/Budapest",
  "Europe/Dublin",
  "Europe/Rome",
  "Europe/Riga",
  "Europe/Vilnius",
  "Europe/Luxembourg",
  "Europe/Malta",
  "Europe/Amsterdam",
  "Europe/Warsaw",
  "Europe/Lisbon",
  "Europe/Bucharest",
  "Europe/Bratislava",
  "Europe/Ljubljana",
  "Europe/Madrid",
  "Europe/Stockholm",
  "Europe/Oslo",
  "Europe/Reykjavik",
  "Europe/Vaduz",
]);

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = document.cookie.match(new RegExp(`(^|;\\s*)${escaped}=([^;]*)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function writeCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") return;
  const secure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax${secure}`;
}

function pushConsent(state: "granted" | "denied") {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  const update = {
    analytics_storage: state,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
  // The inline default-consent script in [locale]/layout.tsx defines a
  // global `gtag()` synchronously during HTML parsing, so by the time the
  // user interacts with the banner this function exists. We still fall
  // back to a raw dataLayer push so analytics never silently drops on
  // pages that loaded the banner before the script ran (defensive only).
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", update);
    return;
  }
  if (!w.dataLayer) w.dataLayer = [];
  w.dataLayer.push(["consent", "update", update]);
}

function detectIsEU(locale: Locale): boolean {
  if (EU_LOCALES.has(locale)) return true;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && EU_TIMEZONES.has(tz)) return true;
  } catch {
    // Intl unavailable — fall back to locale-only signal.
  }
  return false;
}

function parseStoredDecision(value: string | null): StoredDecision | null {
  return value === "accepted" || value === "declined" || value === "acknowledged" ? value : null;
}

function buildConsentSnapshot(locale: Locale) {
  if (typeof window === "undefined" || typeof document === "undefined") return PENDING_SNAPSHOT;
  const region = detectIsEU(locale) ? "eu" : "non-eu";
  return `${region}:${parseStoredDecision(readCookie(COOKIE_CONSENT_STORAGE_KEY)) ?? ""}`;
}

type Props = Readonly<{
  locale: Locale;
}>;

export function CookieConsent({ locale }: Props) {
  const copy = useMemo<CookieConsentCopy>(() => getCookieConsentCopy(locale), [locale]);
  const consentSnapshot = useSyncExternalStore(
    noopSubscribe,
    () => buildConsentSnapshot(locale),
    () => PENDING_SNAPSHOT,
  );
  const [region, storedValue] = consentSnapshot.split(":") as ["pending" | "eu" | "non-eu", string];
  const storedDecision = parseStoredDecision(storedValue);
  // `null` means "no interaction during this page view".
  const [decision, setDecision] = useState<StoredDecision | null>(null);
  const [forceOpen, setForceOpen] = useState(false);
  const effectiveDecision = decision ?? storedDecision;
  const isEU = region === "eu";

  useEffect(() => {
    if (!storedDecision) return;
    // Replay the stored decision into the consent layer on every mount —
    // this matters for users that accepted earlier but landed on a fresh
    // page that just re-applied the `denied` defaults.
    pushConsent(storedDecision === "accepted" || storedDecision === "acknowledged" ? "granted" : "denied");
  }, [storedDecision]);

  useEffect(() => {
    function reopen() {
      setForceOpen(true);
    }
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const persist = useCallback((next: StoredDecision) => {
    writeCookie(COOKIE_CONSENT_STORAGE_KEY, next, ONE_YEAR_SECONDS);
    setDecision(next);
    setForceOpen(false);
    pushConsent(next === "accepted" || next === "acknowledged" ? "granted" : "denied");
  }, []);

  // Auto-grant for non-EU visitors who have not yet seen the notice. This
  // keeps GA running for non-EU traffic per the project decision while
  // staying inside the same Consent Mode plumbing.
  useEffect(() => {
    if (region === "non-eu" && effectiveDecision === null) {
      pushConsent("granted");
    }
  }, [region, effectiveDecision]);

  // Hide the banner once the user has made (or implicitly made) a choice,
  // unless an explicit reopen was requested.
  if (region === "pending") return null;
  if (effectiveDecision !== null && !forceOpen) return null;

  const policyHref = localePath(locale, "cookies");

  if (isEU) {
    return (
      <div
        role="dialog"
        aria-modal="false"
        aria-label={copy.banner.lead}
        className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-6"
      >
        <div className="mx-auto w-full max-w-3xl border border-[color:rgba(15,32,68,0.12)] bg-white/95 p-5 shadow-[0_18px_60px_-30px_rgba(0,9,36,0.45)] backdrop-blur-xl sm:p-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{copy.banner.lead}</p>
            <p className="text-sm leading-6 text-[color:rgba(25,28,30,0.78)]">
              {copy.banner.notice}{" "}
              <Link href={policyHref} className="border-b border-[var(--accent)] text-[var(--primary)] hover:opacity-80">
                {copy.banner.policyLinkLabel}
              </Link>
              .
            </p>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => persist("accepted")}
              className="btn-primary inline-flex items-center border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors"
            >
              {copy.banner.acceptLabel}
            </button>
            <button
              type="button"
              onClick={() => persist("declined")}
              className="btn-light inline-flex items-center border border-[color:rgba(0,9,36,0.12)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors"
            >
              {copy.banner.declineLabel}
            </button>
            <Link
              href={policyHref}
              className="ml-auto text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)] underline-offset-4 hover:underline"
            >
              {copy.banner.manageLabel}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Non-EU notice — analytics is already auto-granted, this is purely a
  // courtesy disclosure and a route into the policy page.
  return (
    <div
      role="status"
      aria-label={copy.banner.lead}
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center gap-3 border border-[color:rgba(15,32,68,0.12)] bg-white/95 p-4 shadow-[0_12px_40px_-24px_rgba(0,9,36,0.4)] backdrop-blur-xl sm:p-5">
        <p className="flex-1 text-sm leading-6 text-[color:rgba(25,28,30,0.78)]">
          <span className="mr-1 font-semibold text-[var(--primary)]">{copy.banner.lead}</span>
          {copy.banner.notice}{" "}
          <Link href={policyHref} className="border-b border-[var(--accent)] text-[var(--primary)] hover:opacity-80">
            {copy.banner.policyLinkLabel}
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={() => persist("acknowledged")}
          className="btn-primary inline-flex shrink-0 items-center border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors"
          aria-label={copy.banner.closeLabel}
        >
          {copy.banner.okLabel}
        </button>
      </div>
    </div>
  );
}

// Helper used by the /cookies "change my decision" button. Lives next to
// the component so the event name stays a single source of truth.
export function dispatchCookieConsentReopen() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(REOPEN_EVENT));
}
