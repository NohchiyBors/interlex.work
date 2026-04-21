"use client";

import { usePathname, useRouter } from "next/navigation";
import { getDictionary, locales, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

function replaceLocaleInPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");

  if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}`;
}

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return;
    router.push(replaceLocaleInPath(pathname, nextLocale));
  }

  return (
    <div className="flex flex-col gap-2 md:items-end">
      <div className="flex flex-wrap gap-1.5">
        {locales.map((item) => {
          const dict = getDictionary(item);
          const active = item === locale;

          return (
            <button
              key={item}
              type="button"
              onClick={() => switchLocale(item)}
              title={dict.localeNative}
              aria-label={dict.localeNative}
              className={`inline-flex h-9 w-9 items-center justify-center border text-base transition-colors ${
                active
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                  : "border-[color:rgba(0,9,36,0.08)] bg-white hover:border-[color:rgba(117,91,0,0.28)]"
              }`}
            >
              <span aria-hidden>{dict.flag}</span>
            </button>
          );
        })}
      </div>

      <label className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
        <span>Language</span>
        <select
          value={locale}
          onChange={(event) => switchLocale(event.target.value as Locale)}
          className="border border-[color:rgba(0,9,36,0.12)] bg-white px-3 py-2 text-xs uppercase tracking-[0.12em] text-[var(--primary)] outline-none transition-colors hover:border-[color:rgba(117,91,0,0.28)]"
        >
          {locales.map((item) => {
            const dict = getDictionary(item);

            return (
              <option key={item} value={item}>
                {dict.flag} {dict.localeNative}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
