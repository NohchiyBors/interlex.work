import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getDictionary, buildMetadata, hasLocale, localePath, locales } from "@/lib/i18n";
import { getHubSeoPage, getHubSeoPageSlugs, type HubSeoPageContent } from "@/lib/hub-seo-pages";
import { getBreadcrumbJsonLd } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
};

const routeTargets = {
  kz: "https://interlex.kz",
  ge: "https://interlex.ge",
} as const;

export const dynamicParams = false;

function normalizeHeading(title: string) {
  return title.replace(/\s+[—-]\s+InterLex$/u, "");
}

async function resolvePage(props: Props) {
  const { locale, slug } = await props.params;
  if (!hasLocale(locale)) notFound();

  const slugPath = slug.join("/");
  const page = getHubSeoPage(locale, slugPath);
  if (!page) notFound();

  return { locale, slugPath, page };
}

function getRelatedPages(locale: Parameters<typeof getHubSeoPage>[0], slugs: string[]) {
  return slugs
    .map((slug) => getHubSeoPage(locale, slug))
    .filter((page): page is HubSeoPageContent => page !== null);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getHubSeoPageSlugs().map((slug) => ({
      locale,
      slug: slug.split("/"),
    })),
  );
}

export async function generateMetadata(props: Props) {
  const { locale, slugPath, page } = await resolvePage(props);

  return buildMetadata(locale, page.title, page.description, slugPath);
}

export default async function HubSeoRoutePage(props: Props) {
  const { locale, slugPath, page } = await resolvePage(props);
  const dictionary = getDictionary(locale);
  const relatedPages = getRelatedPages(locale, page.related);
  const nextHref = page.target === "hub" ? localePath(locale, "cross-border") : routeTargets[page.target];
  const nextLabel =
    page.target === "hub"
      ? dictionary.nav.find((item) => item.slug === "cross-border")?.label ?? "Cross-border"
      : page.target === "kz"
        ? "interlex.kz"
        : "interlex.ge";

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "InterLex", url: `https://interlex.work${localePath(locale)}` },
          { name: page.title, url: `https://interlex.work${localePath(locale, slugPath)}` },
        ])}
      />

      <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{page.eyebrow}</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
              {normalizeHeading(page.title)}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">{page.description}</p>
          </div>
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{page.summaryLabel}</p>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{page.intro}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={localePath(locale, "contact")}
            className="btn-primary inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
          >
            {page.primaryCta}
          </Link>
          {page.target === "hub" ? (
            <Link
              href={nextHref}
              className="btn-light inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
            >
              {nextLabel}
            </Link>
          ) : (
            <a
              href={nextHref}
              className="btn-light inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
            >
              {nextLabel}
            </a>
          )}
        </div>
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{page.pointsLabel}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">
              {normalizeHeading(page.title)}
            </h2>
          </div>
          <div className="space-y-4">
            {page.points.map((item) => (
              <article key={item} className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5">
                <div className="flex gap-3 text-sm leading-7 text-[var(--ink)]">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
        <article className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{page.routeLabel}</p>
          <h2 className="mt-3 font-display text-4xl leading-none text-[var(--primary)]">{page.routeTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{page.routeBody}</p>
        </article>

        <article className="border border-[var(--primary)] bg-[var(--primary)] px-6 py-7 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(220,192,162,0.88)]">{page.routeLabel}</p>
          <h2 className="mt-3 font-display text-4xl leading-none text-white">{nextLabel}</h2>
          <p className="mt-4 text-sm leading-7 text-white/78">{page.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {page.target === "hub" ? (
              <Link
                href={nextHref}
                className="btn-white inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
              >
                {nextLabel}
              </Link>
            ) : (
              <a
                href={nextHref}
                className="btn-white inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
              >
                {nextLabel}
              </a>
            )}
            <Link
              href={localePath(locale, "contact")}
              className="inline-flex items-center justify-center border border-white/18 bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/8"
            >
              {page.primaryCta}
            </Link>
          </div>
        </article>
      </section>

      {relatedPages.length > 0 ? (
        <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{page.routeLabel}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)]">
              {dictionary.site.compareMarkets}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{page.intro}</p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {relatedPages.map((relatedPage) => (
              <Link
                key={relatedPage.slug}
                href={localePath(locale, relatedPage.slug)}
                className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-5 transition-colors hover:border-[color:rgba(117,91,0,0.28)] hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{relatedPage.eyebrow}</p>
                <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.03em] text-[var(--primary)]">
                  {normalizeHeading(relatedPage.title)}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{relatedPage.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
