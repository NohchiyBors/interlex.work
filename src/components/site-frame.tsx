import Image from "next/image";
import Link from "next/link";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
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
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 px-4 py-3 md:gap-6 md:px-8 md:py-4 xl:flex-nowrap xl:px-12 xl:py-5">
          <Link href={localePath(locale)} className="flex shrink-0 items-center gap-4">
            <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-[0.9rem] border border-[color:rgba(0,9,36,0.08)] bg-white shadow-sm md:hidden">
              <Image src="/brand/IL_symbol.svg" alt="InterLex" fill className="object-contain p-1.5" priority />
            </span>
            <div className="hidden md:flex md:flex-col md:gap-1">
              <span className="relative h-[2.9rem] w-[13rem]">
                <Image src="/brand/IL_logo_dark.svg" alt="InterLex" fill className="object-contain object-left" priority />
              </span>
              <p className="pl-1 text-[10px] uppercase tracking-[0.26em] text-[color:rgba(25,28,30,0.56)]">{dict.site.hubLabel}</p>
            </div>
            <div className="leading-none md:hidden">
              <p className="font-display text-[1.35rem] tracking-[-0.04em] text-[var(--primary)]">{dict.site.brand}</p>
              <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-[color:rgba(25,28,30,0.5)]">{dict.site.hubLabel}</p>
            </div>
          </Link>

          <nav className="order-3 hidden basis-full items-center justify-center gap-6 border-t border-[color:rgba(0,9,36,0.06)] pt-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-[color:rgba(25,28,30,0.62)] md:flex xl:order-none xl:basis-auto xl:flex-1 xl:justify-center xl:border-t-0 xl:pt-0">
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
            className="btn-primary ml-auto inline-flex shrink-0 items-center border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors md:px-4 md:text-xs md:tracking-[0.18em] xl:ml-0"
          >
            {dict.site.compareMarkets}
          </Link>

          <details className="order-4 basis-full border-t border-[color:rgba(0,9,36,0.06)] pt-3 md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between border border-[color:rgba(0,9,36,0.08)] bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
              <span>Меню</span>
              <span aria-hidden>+</span>
            </summary>
            <div className="mt-2 grid gap-2">
              {dict.nav.map((item) => (
                <Link
                  key={item.slug}
                  href={localePath(locale, item.slug)}
                  className="border border-[color:rgba(0,9,36,0.08)] bg-white px-3 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:rgba(25,28,30,0.72)] transition-colors hover:border-[var(--accent)] hover:text-[var(--primary)]"
                >
                  {item.label}
                </Link>
              ))}
              <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-3 py-2.5">
                <LanguageSwitcher locale={locale} mobileInMenu />
              </div>
            </div>
          </details>
        </div>

        <div className="mx-auto hidden w-full max-w-7xl justify-end border-t border-[color:rgba(0,9,36,0.06)] px-4 py-1.5 md:flex md:px-8 md:py-2 xl:px-12">
          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      <div className="pt-[4.9rem] md:pt-[10.5rem] xl:pt-[8rem]">{children}</div>

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
