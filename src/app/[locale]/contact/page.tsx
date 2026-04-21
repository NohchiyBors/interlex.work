import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, hasLocale } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd, getSeoContent } from "@/lib/seo";
import { localePath } from "@/lib/i18n";

export async function generateMetadata(props: PageProps<"/[locale]/contact">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const seo = getSeoContent(locale);
  return {
    ...buildMetadata(locale, dict.contactPage.title, seo.contact.description, "contact"),
    keywords: seo.contact.keywords,
  };
}

export default async function ContactPage(props: PageProps<"/[locale]/contact">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: dict.contactPage.title, url: `https://interlex.work${localePath(locale, "contact")}` },
        ])}
      />
      <section className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
        <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{dict.contactPage.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
            {dict.contactPage.introTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{dict.contactPage.introBody}</p>
        </div>

        <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{dict.contactPage.flowLabel}</p>
          <ol className="mt-5 space-y-4">
            {dict.contactPage.steps.map((step, index) => (
              <li key={step} className="flex gap-4 border border-[color:rgba(0,9,36,0.08)] bg-white px-4 py-4">
                <span className="font-display text-3xl leading-none text-[var(--accent)]">0{index + 1}</span>
                <span className="pt-1 text-sm leading-7 text-[var(--ink)]">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {dict.contactChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            className="border border-[color:rgba(0,9,36,0.08)] bg-white px-5 py-5 transition-colors hover:border-[color:rgba(117,91,0,0.28)] hover:bg-[var(--surface-low)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{channel.label}</p>
            <h2 className="mt-3 font-display text-3xl leading-none text-[var(--primary)]">{channel.value}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{channel.note}</p>
          </a>
        ))}
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--primary)] px-6 py-8 text-white md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(220,192,162,0.82)]">{dict.contactPage.closingLabel}</p>
            <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-white">{dict.contactPage.closingTitle}</h2>
          </div>
          <p className="text-sm leading-7 text-[rgba(255,255,255,0.72)]">{dict.contactPage.closingBody}</p>
        </div>
      </section>
    </main>
  );
}
