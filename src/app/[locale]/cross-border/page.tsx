import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, getServicesLabel, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getSeoGuideSectionContent } from "@/lib/seo-guide-sections";
import { getSeoGuideCards } from "@/lib/seo-landing-pages";
import { getBreadcrumbJsonLd, getSeoContent } from "@/lib/seo";

export async function generateMetadata(props: PageProps<"/[locale]/cross-border">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const seo = getSeoContent(locale);
  return {
    ...buildMetadata(locale, dict.crossBorder.title, seo.crossBorder.description, "cross-border"),
    keywords: seo.crossBorder.keywords,
  };
}

export default async function CrossBorderPage(props: PageProps<"/[locale]/cross-border">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const servicesLabel = getServicesLabel(locale);
  const rows = [dict.crossBorder.marketEntry, dict.crossBorder.investor, dict.crossBorder.language];
  const guideCards = getSeoGuideCards(locale);
  const guideSection = getSeoGuideSectionContent(locale);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: dict.crossBorder.title, url: `https://interlex.work${localePath(locale, "cross-border")}` },
        ])}
      />
      <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{dict.crossBorder.eyebrow}</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
              {dict.crossBorder.introTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">{dict.crossBorder.introBody}</p>
          </div>
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] p-5">
            <p className="text-sm leading-7 text-[var(--ink)]">{dict.crossBorder.introSide}</p>
          </div>
        </div>
      </section>

      <section className="mt-6 overflow-hidden border border-[color:rgba(0,9,36,0.08)] bg-white">
        <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)] md:px-8">
          <p>{dict.crossBorder.tableLabel}</p>
          <p>{dict.regionLinks[0].name}</p>
          <p>{dict.regionLinks[1].name}</p>
        </div>
        {rows.map((row) => (
          <div key={row.title} className="grid grid-cols-1 gap-4 border-b border-[color:rgba(0,9,36,0.08)] px-6 py-6 text-sm leading-7 text-[var(--ink)] md:grid-cols-[0.9fr_1fr_1fr] md:px-8">
            <h2 className="font-display text-3xl leading-none text-[var(--primary)]">{row.title}</h2>
            <p>{row.kz}</p>
            <p>{row.ge}</p>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        {dict.regionLinks.map((region, index) => (
          <article key={region.domain} className={`border px-6 py-7 ${index === 1 ? "border-[var(--primary)] bg-[var(--primary)] text-white" : "border-[color:rgba(0,9,36,0.08)] bg-white"}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{region.language}</p>
            <h2 className={`mt-3 font-display text-4xl leading-none ${index === 1 ? "text-white" : "text-[var(--primary)]"}`}>{region.name}</h2>
            <p className={`mt-3 text-sm leading-7 ${index === 1 ? "text-white/72" : "text-[var(--muted)]"}`}>{region.strapline}</p>
            <ul className={`mt-5 space-y-3 text-sm leading-7 ${index === 1 ? "text-white/80" : "text-[var(--ink)]"}`}>
              {region.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={region.href}
                className={`inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${index === 1 ? "btn-white" : "btn-primary"}`}
              >
                {region.domain}
              </a>
              <a
                href={region.servicesHref}
                className={`inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${index === 1 ? "border-white/18 bg-transparent text-white hover:bg-white/8" : "btn-light"}`}
              >
                {servicesLabel}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{guideSection.crossBorder.label}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">
            {guideSection.crossBorder.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">{guideSection.crossBorder.body}</p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {guideCards.map((card) => (
            <Link
              key={card.slug}
              href={localePath(locale, card.slug)}
              className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-5 transition-colors hover:border-[color:rgba(117,91,0,0.28)] hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{card.eyebrow}</p>
              <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.03em] text-[var(--primary)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{dict.crossBorder.needHelpLabel}</p>
            <h2 className="mt-3 font-display text-4xl leading-none tracking-[-0.04em] text-[var(--primary)]">{dict.crossBorder.needHelpTitle}</h2>
          </div>
          <Link
            href={localePath(locale, "contact")}
            className="btn-light inline-flex items-center justify-center border bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
          >
            {dict.crossBorder.needHelpCta}
          </Link>
        </div>
      </section>
    </main>
  );
}
