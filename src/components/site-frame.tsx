import Link from "next/link";
import { getDictionary, localePath, locales, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

type Props = Readonly<{
  children: React.ReactNode;
  locale: Locale;
  dict: ReturnType<typeof getDictionary>;
}>;

export function SiteFrame({ children, locale, dict }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(182,198,243,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.65)_0%,rgba(247,249,252,0)_22%)]" />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-[color:rgba(15,32,68,0.08)] bg-[rgba(247,249,252,0.9)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8 xl:px-12 xl:py-5">
          <Link href={localePath(locale)} className="flex items-center gap-4">
            <span className="inline-flex h-11 w-11 items-center justify-center border border-[color:rgba(0,9,36,0.12)] bg-white font-display text-xl text-[var(--primary)] shadow-sm">
              IL
            </span>
            <div className="leading-none">
              <p className="font-display text-[1.9rem] tracking-[-0.04em] text-[var(--primary)]">{dict.site.brand}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.26em] text-[color:rgba(25,28,30,0.56)]">{dict.site.hubLabel}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-[color:rgba(25,28,30,0.62)] md:flex">
            {dict.nav.map((item) => (
              <Link
                key={item.slug}
                href={localePath(locale, item.slug)}
                className="border-b border-transparent pb-1 transition-colors hover:border-[var(--accent)] hover:text-[var(--primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={localePath(locale, "cross-border")}
            className="inline-flex items-center border border-[color:rgba(0,9,36,0.12)] bg-[var(--primary)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--primary-soft)]"
          >
            {dict.site.compareMarkets}
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-7xl justify-end border-t border-[color:rgba(0,9,36,0.06)] px-5 py-2 md:px-8 xl:px-12">
          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      <div className="pt-[7.6rem] md:pt-[8rem]">{children}</div>

      <footer className="border-t border-[color:rgba(0,9,36,0.06)] bg-[var(--surface-low)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8 xl:px-12">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[color:rgba(25,28,30,0.56)]">{dict.site.brand}</p>
            <h2 className="font-display text-4xl leading-none tracking-[-0.04em] text-[var(--primary)]">{dict.site.footerTitle}</h2>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">{dict.site.footerBody}</p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[color:rgba(25,28,30,0.56)]">{dict.site.markets}</p>
            <div className="space-y-4">
              {dict.regionLinks.map((region) => (
                <a
                  key={region.domain}
                  href={region.href}
                  className="block border border-[color:rgba(0,9,36,0.08)] bg-white px-4 py-4 transition-colors hover:border-[color:rgba(117,91,0,0.24)]"
                >
                  <p className="font-display text-2xl text-[var(--primary)]">{region.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{region.domain}</p>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.24em] text-[color:rgba(25,28,30,0.56)]">{dict.site.contact}</p>
            <div className="space-y-4">
              {dict.contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  className="block border border-[color:rgba(0,9,36,0.08)] bg-white px-4 py-4 transition-colors hover:border-[color:rgba(117,91,0,0.24)]"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">{channel.label}</p>
                  <p className="mt-2 text-lg text-[var(--primary)]">{channel.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{channel.note}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
