import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ReopenConsentButton } from "@/components/reopen-consent-button";
import { getCookieConsentCopy } from "@/lib/cookie-consent-copy";
import { baseUrl, buildMetadata, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { getBreadcrumbJsonLd } from "@/lib/seo";

// Cookie policy page. Static per locale, content lives in
// `src/lib/cookie-consent-copy.ts` so the banner and the page stay in
// sync. The "Change my decision" CTA is the only client-side island —
// everything else renders on the server.

export async function generateMetadata(props: PageProps<"/[locale]/cookies">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const copy = getCookieConsentCopy(locale);
  return buildMetadata(locale, copy.page.metaTitle, copy.page.metaDescription, "cookies");
}

export default async function CookiesPage(props: PageProps<"/[locale]/cookies">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const copy = getCookieConsentCopy(locale);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `${baseUrl}${localePath(locale)}` },
          { name: copy.page.title, url: `${baseUrl}${localePath(locale, "cookies")}` },
        ])}
      />

      <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{copy.page.eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
          {copy.page.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">{copy.page.lead}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[color:rgba(25,28,30,0.56)]">
          {copy.page.updatedLabel}: {copy.page.updatedValue}
        </p>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        {copy.page.sections.map((section, index) => (
          <article
            key={section.title}
            className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-7 md:px-8"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">0{index + 1}</p>
            <h2 className="mt-2 font-display text-3xl leading-none text-[var(--primary)]">{section.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--ink)]">{section.body}</p>
            {section.bullets ? (
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--ink)]">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="border-s-2 border-[var(--accent)] ps-4 text-[color:rgba(25,28,30,0.86)]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{copy.page.table.label}</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[color:rgba(0,9,36,0.12)] text-xs uppercase tracking-[0.18em] text-[color:rgba(25,28,30,0.56)]">
                <th className="py-3 pr-4 font-semibold">{copy.page.table.headers.name}</th>
                <th className="py-3 pr-4 font-semibold">{copy.page.table.headers.provider}</th>
                <th className="py-3 pr-4 font-semibold">{copy.page.table.headers.purpose}</th>
                <th className="py-3 pr-2 font-semibold">{copy.page.table.headers.lifetime}</th>
              </tr>
            </thead>
            <tbody>
              {copy.page.table.rows.map((row) => (
                <tr key={row.name} className="border-b border-[color:rgba(0,9,36,0.06)] align-top">
                  <td className="py-3 pr-4 font-mono text-[12px] text-[var(--primary)]">{row.name}</td>
                  <td className="py-3 pr-4 text-[var(--ink)]">{row.provider}</td>
                  <td className="py-3 pr-4 leading-6 text-[var(--ink)]">{row.purpose}</td>
                  <td className="py-3 pr-2 text-[var(--muted)]">{row.lifetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--primary)] px-6 py-8 text-white md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(220,192,162,0.82)]">
            {copy.page.withdraw.label}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-white">
            {copy.page.withdraw.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[rgba(255,255,255,0.78)]">{copy.page.withdraw.body}</p>
          <div className="mt-6">
            <ReopenConsentButton label={copy.page.withdraw.cta} />
          </div>
        </div>

        <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-8 md:px-8 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{copy.page.contact.label}</p>
          <h2 className="mt-4 font-display text-3xl leading-none text-[var(--primary)]">{copy.page.contact.title}</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--ink)]">{copy.page.contact.body}</p>
          <a
            href={`mailto:${copy.page.contact.email}`}
            className="mt-5 inline-flex items-center text-base font-medium text-[var(--primary)] underline-offset-4 hover:underline"
          >
            {copy.page.contact.email}
          </a>
        </div>
      </section>
    </main>
  );
}
