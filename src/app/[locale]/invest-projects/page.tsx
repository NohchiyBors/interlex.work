import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { InvestModal } from "@/components/invest-modal";
import Link from "next/link";

export async function generateMetadata(props: PageProps<"/[locale]/invest-projects">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return buildMetadata(locale, dict.investProjects.title, dict.investProjects.description, "invest-projects");
}

export default async function InvestProjectsPage(props: PageProps<"/[locale]/invest-projects">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const ip = dict.investProjects;
  const ap = dict.antimonyProject;
  const kp = dict.khorgosProject;
  const op = dict.orangerieProject;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: ip.title, url: `https://interlex.work${localePath(locale, "invest-projects")}` },
        ])}
      />

      {/* Hero */}
      <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{ip.eyebrow}</p>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-[-0.04em] text-[var(--primary)] md:text-6xl">
              {ip.introTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">{ip.introBody}</p>
          </div>
          <div className="hidden flex-col gap-4 lg:flex">
            <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] p-5">
              <p className="text-sm leading-7 text-[var(--ink)]">{ip.introSide}</p>
            </div>
          </div>
        </div>
      </section>

      {/* For investors / For project owners */}
      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{ip.forInvestorsEyebrow}</p>
          <h2 className="mt-3 font-display text-4xl leading-none text-[var(--primary)]">{ip.forInvestorsTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{ip.forInvestorsBody}</p>
          <div className="mt-6">
            <InvestModal
              projectName={ip.title}
              triggerLabel={ip.forInvestorsCta}
              locale={locale}
              triggerClass="btn-primary inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
            />
          </div>
        </article>
        <article className="border border-[var(--primary)] bg-[var(--primary)] px-6 py-7 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{ip.forOwnersEyebrow}</p>
          <h2 className="mt-3 font-display text-4xl leading-none text-white">{ip.forOwnersTitle}</h2>
          <p className="mt-3 text-sm leading-7 text-white/72">{ip.forOwnersBody}</p>
          <div className="mt-6">
            <Link href={localePath(locale, "contact")} className="btn-white inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors">
              {ip.forOwnersCta}
            </Link>
          </div>
        </article>
      </section>

      {/* Project cards */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">

        {/* Khorgos card */}
        <article className="flex flex-col border border-[color:rgba(0,9,36,0.08)] bg-white">
          <div className="border-b border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{kp.eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.03em] text-[var(--primary)]">{kp.title}</h2>
          </div>
          <div className="flex flex-1 flex-col px-6 py-6">
            <p className="flex-1 text-sm leading-7 text-[var(--muted)]">{kp.body}</p>
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[color:rgba(0,9,36,0.06)] pt-5">
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">IRR 21%</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{kp.badgeLabel}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">$5,8M</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">NPV</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">$9,45M</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">CAPEX</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                href={`${localePath(locale, "invest-projects")}/khorgos`}
                className="btn-primary inline-flex flex-1 items-center justify-center border px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                {kp.requestCta}
              </Link>
            </div>
          </div>
        </article>

        {/* Antimony card */}
        <article className="flex flex-col border border-[color:rgba(0,9,36,0.08)] bg-white">
          <div className="border-b border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{ap.eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.03em] text-[var(--primary)]">{ap.title}</h2>
          </div>
          <div className="flex flex-1 flex-col px-6 py-6">
            <p className="flex-1 text-sm leading-7 text-[var(--muted)]">{ap.body}</p>
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[color:rgba(0,9,36,0.06)] pt-5">
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">60,5%</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">ROI</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">$798K</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{ap.profitCol}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">$1,32M</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{ap.investLabel}</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                href={`${localePath(locale, "invest-projects")}/antimony`}
                className="btn-primary inline-flex flex-1 items-center justify-center border px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                {ap.requestCta}
              </Link>
            </div>
          </div>
        </article>

        {/* Orangerie Hills card */}
        <article className="flex flex-col border border-[color:rgba(0,9,36,0.08)] bg-white">
          <div className="border-b border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{op.eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.03em] text-[var(--primary)]">{op.title}</h2>
          </div>
          <div className="flex flex-1 flex-col px-6 py-6">
            <p className="flex-1 text-sm leading-7 text-[var(--muted)]">{op.body}</p>
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[color:rgba(0,9,36,0.06)] pt-5">
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">15%</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{op.yieldCol}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">$57K</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{op.noiCol}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--primary)]">$380K</p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">{op.param4Label}</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                href={`${localePath(locale, "invest-projects")}/orangerie-hills`}
                className="btn-primary inline-flex flex-1 items-center justify-center border px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
              >
                {op.requestCta}
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
