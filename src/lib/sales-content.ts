import type { Locale } from "@/lib/i18n";

type SalesPackage = {
  name: string;
  body: string;
  points: string[];
};

type SalesContent = {
  label: string;
  title: string;
  intro: string;
  cta: string;
  packages: SalesPackage[];
};

const fallbackContent: SalesContent = {
  label: "Service Packages",
  title: "InterLex packages the mandate, not just the conversation.",
  intro:
    "The hub should sell clear bundled solutions for company setup, cross-border structuring, and ongoing support, while still routing execution into the right market-specific team.",
  cta: "Discuss Package",
  packages: [
    {
      name: "Market Entry Package",
      body: "For founders and operating teams preparing to enter Kazakhstan or Georgia with a clear legal and business setup plan.",
      points: [
        "Jurisdiction and route selection",
        "Company setup and launch roadmap",
        "Tax and compliance framing before execution",
      ],
    },
    {
      name: "Cross-border Structuring Package",
      body: "For investors, holding structures, and international groups comparing how to structure ownership, tax posture, and operating logic.",
      points: [
        "Jurisdiction comparison and structuring logic",
        "Investor-facing setup and holding architecture",
        "Routing into the right country-specific track",
      ],
    },
    {
      name: "Operational Support Package",
      body: "For clients who already know the market and need a clean handoff into local legal, accounting, and implementation support.",
      points: [
        "Execution handoff into Kazakhstan or Georgia",
        "Local compliance and accounting coordination",
        "Ongoing support after setup",
      ],
    },
  ],
};

const localizedSalesContent: Partial<Record<Locale, SalesContent>> = {
  en: fallbackContent,
  ru: {
    label: "Пакеты услуг",
    title: "InterLex продаёт не отдельные ответы, а готовые рабочие решения.",
    intro:
      "Хаб должен показывать клиенту понятные пакеты услуг: запуск бизнеса, cross-border структурирование и дальнейшее сопровождение. Это усиливает и SEO, и конверсию, а исполнение остаётся у правильной страновой команды.",
    cta: "Обсудить пакет",
    packages: [
      {
        name: "Пакет выхода на рынок",
        body: "Для фаундеров и операционных команд, которым нужно выйти в Казахстан или Грузию с понятной юридической и бизнес-моделью.",
        points: [
          "Выбор юрисдикции и рабочего маршрута",
          "План регистрации компании и запуска",
          "Налоговая и compliance-логика до старта исполнения",
        ],
      },
      {
        name: "Пакет cross-border структурирования",
        body: "Для инвесторов, холдингов и международных групп, которым нужно сравнить структуру владения, налоговую модель и операционную архитектуру.",
        points: [
          "Сравнение юрисдикций и structuring logic",
          "Investor-facing setup и логика холдинга",
          "Перевод проекта в правильный страновой контур",
        ],
      },
      {
        name: "Пакет локального сопровождения",
        body: "Для клиентов, которые уже понимают рынок и хотят быстро перейти в локальную юридическую, бухгалтерскую и операционную работу.",
        points: [
          "Передача в Казахстан или Грузию без потери контекста",
          "Локальный compliance, бухгалтерия и поддержка",
          "Сопровождение после регистрации и запуска",
        ],
      },
    ],
  },
};

export function getSalesContent(locale: Locale): SalesContent {
  return localizedSalesContent[locale] ?? fallbackContent;
}
