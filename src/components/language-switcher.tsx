"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

const languageLabels: Record<Locale, string> = {
  en: "Language",
  ru: "Язык",
  zh: "语言",
  it: "Lingua",
  fr: "Langue",
  ka: "ენა",
  de: "Sprache",
  ar: "اللغة",
  tr: "Dil",
  es: "Idioma",
};

const localeMeta: Record<Locale, { native: string; badge: string }> = {
  en: { native: "English", badge: "EN" },
  ru: { native: "Русский", badge: "RU" },
  zh: { native: "中文", badge: "ZH" },
  it: { native: "Italiano", badge: "IT" },
  fr: { native: "Français", badge: "FR" },
  ka: { native: "ქართული", badge: "KA" },
  de: { native: "Deutsch", badge: "DE" },
  ar: { native: "العربية", badge: "AR" },
  tr: { native: "Türkçe", badge: "TR" },
  es: { native: "Español", badge: "ES" },
};

type Props = {
  locale: Locale;
  mobileInMenu?: boolean;
};

function replaceLocaleInPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");

  if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}`;
}

export function LanguageSwitcher({ locale, mobileInMenu = false }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    router.push(replaceLocaleInPath(pathname, nextLocale));
  }

  return (
    <div className={`flex flex-col gap-1.5 md:gap-2 ${mobileInMenu ? "" : "md:items-end"}`}>
      {!mobileInMenu && (
        <div className="hidden flex-wrap justify-end gap-1.5 md:flex">
          {locales.map((item) => {
            const active = item === locale;
            const meta = localeMeta[item];

            return (
              <button
                key={item}
                type="button"
                onClick={() => switchLocale(item)}
                title={meta.native}
                aria-label={meta.native}
                className={`inline-flex h-9 min-w-9 items-center justify-center border px-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
                  active
                    ? "btn-primary font-semibold"
                    : "border-[color:rgba(0,9,36,0.08)] bg-white hover:border-[color:rgba(117,91,0,0.28)]"
                }`}
              >
                <span aria-hidden>{meta.badge}</span>
              </button>
            );
          })}
        </div>
      )}

      <label
        className={`flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] md:text-[11px] md:tracking-[0.18em] ${
          mobileInMenu ? "justify-between" : "self-end"
        }`}
      >
        <span>{languageLabels[locale]}</span>
        <select
          value={locale}
          onChange={(event) => switchLocale(event.target.value as Locale)}
          className={`border border-[color:rgba(0,9,36,0.12)] bg-white text-xs text-[var(--primary)] outline-none transition-colors hover:border-[color:rgba(117,91,0,0.28)] ${
            mobileInMenu ? "min-w-0 flex-1 px-3 py-2" : "min-w-[8rem] px-2.5 py-1.5 md:min-w-[10rem] md:px-3 md:py-2"
          }`}
        >
          {locales.map((item) => {
            const meta = localeMeta[item];

            return (
              <option key={item} value={item}>
                {meta.native}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
