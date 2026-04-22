import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, hasLocale, localePath } from "@/lib/i18n";
import { getMarketEntryIntentSection, getMarketEntryScopeSection } from "@/lib/seo-page-sections";
import { getSeoGuideSectionContent } from "@/lib/seo-guide-sections";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/seo";
import {
  getCrossBorderStructuringContent,
  getInternationalMarketEntryContent,
  getKazakhstanVsGeorgiaContent,
} from "@/lib/seo-landing-pages";

export async function generateMetadata(props: PageProps<"/[locale]/international-market-entry">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const content = getInternationalMarketEntryContent(locale);

  return {
    ...buildMetadata(locale, content.title, content.description, "international-market-entry"),
    keywords: content.keywords,
  };
}

export default async function InternationalMarketEntryPage(props: PageProps<"/[locale]/international-market-entry">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const content = getInternationalMarketEntryContent(locale);
  const structuringPage = getCrossBorderStructuringContent(locale);
  const comparisonPage = getKazakhstanVsGeorgiaContent(locale);
  const guideSection = getSeoGuideSectionContent(locale);
  const intentSection = getMarketEntryIntentSection(locale);
  const scopeSection = getMarketEntryScopeSection(locale);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={[
          getBreadcrumbJsonLd([
            { name: "InterLex", url: `https://interlex.work${localePath(locale)}` },
            { name: content.title, url: `https://interlex.work${localePath(locale, content.slug)}` },
          ]),
          getFaqJsonLd(content.faqItems),
        ]}
      />

      <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{content.eyebrow}</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
              {content.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">{content.heroBody}</p>
          </div>
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{content.overviewLabel}</p>
            <h2 className="mt-3 font-display text-3xl leading-none text-[var(--primary)]">{content.overviewTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{content.overviewBody}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={localePath(locale, "contact")}
            className="btn-primary inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
          >
            {content.primaryCta}
          </Link>
          <Link
            href={localePath(locale, structuringPage.slug)}
            className="inline-flex items-center justify-center border border-[color:rgba(0,9,36,0.12)] bg-[var(--surface-low)] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)] transition-colors hover:bg-white"
          >
            {content.secondaryCta}
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{content.decisionLabel}</p>
          <h2 className="mt-3 font-display text-4xl leading-none text-[var(--primary)]">{content.decisionTitle}</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink)]">
            {content.decisionItems.map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{content.timingLabel}</p>
          <h2 className="mt-3 font-display text-4xl leading-none text-[var(--primary)]">{content.timingTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{content.timingBody}</p>
        </article>
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{intentSection.label}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">{intentSection.title}</h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{intentSection.body}</p>
          </div>
          <div className="space-y-4">
            {intentSection.items?.map((item) => (
              <article key={item} className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-5">
                <div className="flex gap-3 text-sm leading-7 text-[var(--ink)]">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{content.comparisonLabel}</p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">{content.comparisonTitle}</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-5">
            <h3 className="font-display text-3xl leading-none text-[var(--primary)]">{content.kzTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{content.kzBody}</p>
          </article>
          <article className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5">
            <h3 className="font-display text-3xl leading-none text-[var(--primary)]">{content.geTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{content.geBody}</p>
          </article>
        </div>
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{scopeSection.label}</p>
        <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">{scopeSection.title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{scopeSection.body}</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {scopeSection.items?.map((item) => (
            <article key={item} className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5">
              <div className="flex gap-3 text-sm leading-7 text-[var(--ink)]">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{guideSection.related.label}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">
            {guideSection.related.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">{guideSection.related.body}</p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {[comparisonPage, structuringPage].map((page) => (
            <Link
              key={page.slug}
              href={localePath(locale, page.slug)}
              className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-5 transition-colors hover:border-[color:rgba(117,91,0,0.28)] hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{page.eyebrow}</p>
              <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.03em] text-[var(--primary)]">{page.heroTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{page.overviewBody}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{content.faqLabel}</p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">{content.faqTitle}</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {content.faqItems.map((item) => (
            <article key={item.question} className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5">
              <h3 className="font-display text-3xl leading-none text-[var(--primary)]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
