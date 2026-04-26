import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, getServicesLabel, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getSeoGuideSectionContent } from "@/lib/seo-guide-sections";
import { getSeoGuideCards } from "@/lib/seo-landing-pages";
import { getServiceScopeContent } from "@/lib/service-scope";
import { getFaqJsonLd, getOrganizationJsonLd, getSeoContent, getWebsiteJsonLd } from "@/lib/seo";
import { getSalesContent } from "@/lib/sales-content";

export async function generateMetadata(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const seo = getSeoContent(locale);
  return {
    ...buildMetadata(locale, dict.site.title, seo.home.description),
    keywords: seo.home.keywords,
  };
}

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const seo = getSeoContent(locale);
  const servicesLabel = getServicesLabel(locale);
  const sales = getSalesContent(locale);
  const guideCards = getSeoGuideCards(locale);
  const guideSection = getSeoGuideSectionContent(locale);
  const serviceScope = getServiceScopeContent(locale);

  return (
    <main>
      <JsonLd data={[getOrganizationJsonLd(locale), getWebsiteJsonLd(locale), getFaqJsonLd(seo.home.faqItems)]} />
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 pb-12 pt-8 md:px-8 xl:px-12 xl:pt-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10 xl:px-10 xl:py-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">{dict.home.eyebrow}</p>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl lg:text-7xl">
              {dict.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">{dict.home.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={locale === "ru" ? localePath(locale, "contact") : localePath(locale, "cross-border")}
                className="btn-primary inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                {dict.home.primaryCta}
              </Link>
              <Link
                href={localePath(locale, "about")}
                className="btn-light inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
              >
                {dict.home.secondaryCta}
              </Link>
            </div>
          </div>
          </div>

          <div className="flex flex-col gap-6">
          <div className="relative min-h-[220px] overflow-hidden border border-[color:rgba(0,9,36,0.08)]">
            <Image
              src="/images/img-hub.svg"
              alt="InterLex — Kazakhstan and Georgia"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8 md:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{dict.home.logicLabel}</p>
            <div className="mt-5 space-y-6">
              {dict.home.notes.map((note, index) => (
                <div key={note} className="flex gap-4">
                  <span className="font-display text-3xl leading-none text-[var(--accent)]">0{index + 1}</span>
                  <p className="pt-1 text-sm leading-7 text-[var(--ink)]">{note}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border border-[color:rgba(0,9,36,0.08)] bg-white p-5">
              <p className="text-sm leading-7 text-[var(--muted)]">{dict.home.logicBody}</p>
            </div>
          </div>
        </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          {dict.regionLinks.map((region) => (
            <article key={region.domain} className="relative overflow-hidden border border-[color:rgba(0,9,36,0.08)] bg-white p-7 shadow-sm">
              <div className="absolute right-0 top-0 h-full w-2 bg-[var(--accent)]" />
              <div className="relative flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{region.language}</p>
                <h2 className="mt-3 font-display text-4xl leading-none text-[var(--primary)]">{region.name}</h2>
                <p className="mt-2 text-base text-[var(--muted)]">{region.domain}</p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ink)]">{region.strapline}</p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--ink)]">
                  {region.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={region.href}
                    className="btn-primary inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
                  >
                    {region.domain}
                  </a>
                  <a
                    href={region.servicesHref}
                    className="btn-light inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
                  >
                    {servicesLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{dict.home.positioningLabel}</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)] md:text-5xl">
              {dict.home.positioningTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">{dict.home.positioningBody}</p>
          </div>

          <div className="grid gap-4">
            {dict.home.sections.map((section) => (
              <Link
                key={section.slug}
                href={localePath(locale, section.slug)}
                className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5 transition-colors hover:border-[color:rgba(117,91,0,0.28)] hover:bg-[var(--surface-low)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{section.label}</p>
                <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.03em] text-[var(--primary)]">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{section.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{guideSection.home.label}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)] md:text-5xl">
              {guideSection.home.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{guideSection.home.body}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{serviceScope.intentLabel}</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)] md:text-5xl">
              {serviceScope.intentTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">{serviceScope.intentBody}</p>
          </div>

          <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{serviceScope.directoryLabel}</p>
            <h3 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">
              {serviceScope.directoryTitle}
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{serviceScope.directoryBody}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {serviceScope.groups.map((group) => (
                <article key={group.category} className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">{group.category}</p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink)]">
                    {group.services.map((service) => (
                      <div key={service} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{sales.label}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)] md:text-5xl">
              {sales.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{sales.intro}</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {sales.packages.map((item) => (
              <article key={item.name} className="flex h-full flex-col border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-5">
                <h3 className="font-display text-3xl leading-none text-[var(--primary)]">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-7 text-[var(--ink)]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={localePath(locale, "contact")}
                  className="btn-primary mt-6 inline-flex items-center justify-center border px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
                >
                  {sales.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{seo.home.searchLabel}</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">
                {seo.home.searchTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">{seo.home.searchIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {seo.home.searchCards.map((card) => (
                <article key={card.title} className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-5">
                  <h3 className="font-display text-3xl leading-none text-[var(--primary)]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{seo.home.faqLabel}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">{seo.home.faqTitle}</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {seo.home.faqItems.map((item) => (
              <article key={item.question} className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5">
                <h3 className="font-display text-3xl leading-none text-[var(--primary)]">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
