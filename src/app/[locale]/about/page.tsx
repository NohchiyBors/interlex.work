import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd, getSeoContent } from "@/lib/seo";

export async function generateMetadata(props: PageProps<"/[locale]/about">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const seo = getSeoContent(locale);
  return {
    ...buildMetadata(locale, dict.about.title, seo.about.description, "about"),
    keywords: seo.about.keywords,
  };
}

export default async function AboutPage(props: PageProps<"/[locale]/about">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: dict.about.title, url: `https://interlex.work${localePath(locale, "about")}` },
        ])}
      />
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{dict.about.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
            {dict.about.introTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{dict.about.introBody}</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative min-h-[220px] overflow-hidden border border-[color:rgba(0,9,36,0.08)]">
            <Image
              src="/images/img-about.jpg"
              alt="InterLex team — professional legal and business advisory"
              fill
              className="object-cover"
            />
          </div>
          <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{dict.about.principlesLabel}</p>
          <div className="mt-5 space-y-5">
            {dict.about.principles.map((item, index) => (
              <div key={item.title} className="border border-[color:rgba(0,9,36,0.08)] bg-white px-4 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">0{index + 1}</p>
                <h2 className="mt-2 font-display text-3xl leading-none text-[var(--primary)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{dict.about.practiceLabel}</p>
          <div className="mt-5 space-y-5 text-sm leading-7 text-[var(--ink)]">
            {dict.about.practice.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {dict.regionLinks.map((region) => (
            <article key={region.domain} className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">{region.language}</p>
              <h2 className="mt-3 font-display text-3xl leading-none text-[var(--primary)]">{region.name}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{region.strapline}</p>
              <a
                href={region.href}
                className="btn-light mt-6 inline-flex items-center border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
              >
                {region.domain}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--primary)] px-6 py-8 text-white md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(220,192,162,0.82)]">{dict.about.nextLabel}</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-none tracking-[-0.04em] text-white">{dict.about.nextTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-[rgba(255,255,255,0.72)]">{dict.about.nextBody}</p>
          </div>
          <Link
            href={localePath(locale, "cross-border")}
            className="btn-white inline-flex items-center justify-center border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors"
          >
            {dict.about.nextCta}
          </Link>
        </div>
      </section>
    </main>
  );
}
