import { notFound } from "next/navigation";
import { buildMetadata, getDictionary, hasLocale, localePath } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbJsonLd } from "@/lib/seo";
import { InvestModal } from "@/components/invest-modal";

export async function generateMetadata(props: PageProps<"/[locale]/invest-projects">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const ap = dict.antimonyProject;
  return buildMetadata(locale, ap.title, ap.body.substring(0, 160), "invest-projects");
}

const antimonyData = [
  { purity: "97% Sb", cycle: "~30", revenue: "$1 862 000", profit: "$300 000", roi: "22,7%", lme: "80% ($18 624/t)", recommended: false },
  { purity: "99,65%+ Sb", cycle: "60–75", revenue: "$2 400 000", profit: "$798 000", roi: "60,5%", lme: "100% ($24 000/t)", recommended: true },
];

const ANTIMONY_PROJECT_NAME = "Товарная сурьма — Замкнутый цикл";

export default async function AntimonyProjectPage(props: PageProps<"/[locale]/invest-projects">) {
  const { locale } = await props.params;
  if (!hasLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const ip = dict.investProjects;
  const ap = dict.antimonyProject;

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 md:px-8 xl:px-12 xl:pt-12">
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: dict.nav[0].label, url: `https://interlex.work${localePath(locale)}` },
          { name: ip.title, url: `https://interlex.work${localePath(locale, "invest-projects")}` },
          { name: ap.title, url: `https://interlex.work${localePath(locale, "invest-projects")}/antimony` },
        ])}
      />

      {/* Project header */}
      <section className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-8 shadow-sm md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">{ap.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-[-0.04em] text-[var(--primary)] md:text-5xl">
              {ap.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{ap.body}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 lg:items-end">
            <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-5 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">{ap.investLabel}</p>
              <p className="mt-1 font-display text-4xl leading-none text-[var(--primary)]">$1 320 000</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{ap.roiLabel}</p>
            </div>
            <InvestModal
              projectName={ANTIMONY_PROJECT_NAME}
              triggerLabel={ap.requestCta}
              locale={locale}
              triggerClass="btn-primary inline-flex w-full items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors lg:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Variants table */}
      <section className="mt-6 overflow-x-auto border border-[color:rgba(0,9,36,0.08)] bg-white">
        <div className="min-w-[700px]">
          <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr_1fr] border-b border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
            <p>{ap.variantCol}</p>
            <p>{ap.purityCol}</p>
            <p>{ap.cycleCol}</p>
            <p>{ap.revenueCol}</p>
            <p>{ap.profitCol}</p>
            <p>ROI</p>
          </div>
          {antimonyData.map((v, i) => {
            const name = i === 0 ? ap.variantAName : ap.variantBName;
            return (
              <div
                key={name}
                className={`grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr_1fr] border-b border-[color:rgba(0,9,36,0.08)] px-6 py-5 text-sm ${v.recommended ? "bg-[color:rgba(117,91,0,0.04)]" : ""}`}
              >
                <div>
                  <p className="font-semibold text-[var(--primary)]">{name}</p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{v.lme}</p>
                  {v.recommended && (
                    <span className="mt-1.5 inline-block border border-[color:rgba(117,91,0,0.3)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      {ap.maxMarginBadge}
                    </span>
                  )}
                </div>
                <p className="self-center font-medium text-[var(--ink)]">{v.purity}</p>
                <p className="self-center text-[var(--ink)]">{v.cycle}</p>
                <p className="self-center text-[var(--ink)]">{v.revenue}</p>
                <p className="self-center font-medium text-[var(--ink)]">{v.profit}</p>
                <p className={`self-center font-semibold ${v.recommended ? "text-[var(--accent)]" : "text-[var(--ink)]"}`}>{v.roi}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advantages + Operational params */}
      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="border border-[color:rgba(0,9,36,0.08)] bg-[var(--surface-low)] px-6 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{ap.advantagesEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--primary)]">{ap.advantagesTitle}</h2>
          <ul className="mt-5 space-y-3">
            {[ap.advantage1, ap.advantage2, ap.advantage3, ap.advantage4].map((adv) => (
              <li key={adv} className="flex gap-3 text-sm leading-7 text-[var(--ink)]">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-[color:rgba(0,9,36,0.08)] bg-white px-6 py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">{ap.operationalEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--primary)]">{ap.operationalTitle}</h2>
          <ul className="mt-5 space-y-4">
            {([
              [ap.op1Label, ap.op1Value],
              [ap.op2Label, ap.op2Value],
              [ap.op3Label, ap.op3Value],
              [ap.op4Label, ap.op4Value],
              [ap.op5Label, ap.op5Value],
            ] as [string, string][]).map(([label, value]) => (
              <li key={label} className="grid gap-0.5 text-sm">
                <span className="font-semibold text-[var(--primary)]">{label}</span>
                <span className="leading-6 text-[var(--muted)]">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommendation banner */}
      <section className="mt-6 border border-[color:rgba(0,9,36,0.08)] bg-[var(--primary)] px-6 py-8 text-white md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(220,192,162,0.82)]">{ap.recommendationEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white">{ap.recommendationTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">{ap.recommendationBody}</p>
          </div>
          <div className="flex shrink-0 items-center">
            <InvestModal
              projectName={ANTIMONY_PROJECT_NAME}
              triggerLabel={ap.discussCta}
              locale={locale}
              triggerClass="btn-white inline-flex items-center justify-center border px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
