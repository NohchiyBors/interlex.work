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
  label: "Work Formats",
  title: "InterLex packages the work around the result, not around isolated answers.",
  intro:
    "The hub should present clear commercial formats for market entry, cross-border structuring, and ongoing support, while keeping final execution in the right market-specific team.",
  cta: "Discuss Project",
  packages: [
    {
      name: "Market Entry",
      body: "For founders and operating teams preparing to enter Kazakhstan or Georgia with a clear legal and business launch plan.",
      points: [
        "Jurisdiction and route selection",
        "Launch roadmap and company setup logic",
        "Tax and compliance framing before execution",
      ],
    },
    {
      name: "Cross-border Structuring",
      body: "For investors, holding structures, and international groups that need to design ownership, tax posture, and operating logic across markets.",
      points: [
        "Jurisdiction comparison and structure design",
        "Holding and investor-facing logic",
        "Transfer into the correct country-specific team",
      ],
    },
    {
      name: "Ongoing Support",
      body: "For clients who already know the market and need a clean transition into legal, accounting, and implementation support.",
      points: [
        "Handoff into Kazakhstan or Georgia",
        "Local compliance and accounting coordination",
        "Support after setup and launch",
      ],
    },
  ],
};

const localizedSalesContent: Partial<Record<Locale, SalesContent>> = {
  en: fallbackContent,
  ru: {
    label: "Форматы работы",
    title: "InterLex продает не отдельные ответы, а рабочие решения под конкретный результат.",
    intro:
      "На главной клиент должен сразу видеть понятные форматы сотрудничества: выход на рынок, международное структурирование и дальнейшее сопровождение. Это помогает быстро понять, с чего начинать, какой формат работы подходит под задачу и какой следующий шаг нужен уже сейчас.",
    cta: "Обсудить проект",
    packages: [
      {
        name: "Выход на рынок",
        body: "Для собственников и операционных команд, которым нужно выйти в Казахстан или Грузию с понятным планом запуска, регистрации и сопровождения.",
        points: [
          "Выбор юрисдикции и логики входа",
          "План регистрации компании и запуска",
          "Налоговая и compliance-логика до начала исполнения",
        ],
      },
      {
        name: "Международное структурирование",
        body: "Для инвесторов, холдингов и международных групп, которым нужно правильно собрать структуру владения, налоговую модель и операционную архитектуру.",
        points: [
          "Сравнение юрисдикций и сборка структуры",
          "Логика владения, инвестора и операционного контура",
          "Подготовка сделки по покупке актива, due diligence и переговорного контура",
          "Передача проекта в правильную страновую команду",
        ],
      },
      {
        name: "Локальное сопровождение",
        body: "Для клиентов, которые уже понимают рынок и хотят быстро перейти в локальную юридическую, бухгалтерскую и операционную работу.",
        points: [
          "Передача проекта в Казахстан или Грузию без потери контекста",
          "Локальный compliance, бухгалтерия и юридическая поддержка",
          "Сопровождение после регистрации и запуска",
        ],
      },
    ],
  },
};

export function getSalesContent(locale: Locale): SalesContent {
  return localizedSalesContent[locale] ?? fallbackContent;
}
