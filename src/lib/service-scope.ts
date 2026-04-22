import type { Locale } from "@/lib/i18n";

type ServiceScopeGroup = {
  category: string;
  services: string[];
};

type ServiceScopeContent = {
  intentLabel: string;
  intentTitle: string;
  intentBody: string;
  directoryLabel: string;
  directoryTitle: string;
  directoryBody: string;
  groups: ServiceScopeGroup[];
};

const content: Record<"en" | "ru", ServiceScopeContent> = {
  ru: {
    intentLabel: "Чем помогает InterLex",
    intentTitle: "InterLex нужен там, где важно не просто заказать услугу, а правильно собрать весь проект.",
    intentBody:
      "Мы подключаемся, когда нужно выбрать юрисдикцию, запустить компанию, выстроить структуру владения, пройти банковые и налоговые вопросы, наладить бухгалтерское и юридическое сопровождение, а при необходимости подготовить инвестиционный проект, сделку или due diligence. Если вы планируете купить актив в Казахстане или Грузии, InterLex может взять на себя скрининг цели, проверку рисков, структурирование сделки и координацию переговоров, включая проекты, где требуется рабочее взаимодействие с государством.",
    directoryLabel: "Практики InterLex",
    directoryTitle: "Ключевые направления, с которыми команда работает на практике",
    directoryBody:
      "Ниже собраны основные сервисные направления InterLex. На главной это не каталог ради каталога, а быстрый обзор того, какие задачи мы можем взять в работу и довести до результата.",
    groups: [
      {
        category: "Запуск",
        services: ["Регистрация бизнеса"],
      },
      {
        category: "Оптимизация",
        services: ["Специальные режимы и зоны"],
      },
      {
        category: "Сопровождение",
        services: ["Бухгалтерия и юридическая поддержка"],
      },
      {
        category: "Управление",
        services: ["Корпоративный менеджмент"],
      },
      {
        category: "Операции",
        services: ["Компания под управлением", "Банковское сопровождение"],
      },
      {
        category: "Инвестиции",
        services: ["Инвесторская поддержка и GR"],
      },
      {
        category: "Сделки",
        services: ["M&A-консультирование", "Due diligence"],
      },
    ],
  },
  en: {
    intentLabel: "What InterLex Solves",
    intentTitle: "InterLex is useful when the client needs more than one isolated service.",
    intentBody:
      "The team helps frame the whole mandate: choose the jurisdiction, launch the company, design the ownership and tax logic, organise banking and compliance, maintain accounting and legal continuity, and support transactions, investor work, or due diligence where needed.",
    directoryLabel: "InterLex Practices",
    directoryTitle: "Core service lines the team handles in practice",
    directoryBody:
      "Below is a compact overview of InterLex service lines. On the homepage, this should work as a capability snapshot rather than as a cloned local catalogue.",
    groups: [
      {
        category: "Launch",
        services: ["Business Registration"],
      },
      {
        category: "Optimisation",
        services: ["Special Regimes and Zones"],
      },
      {
        category: "Continuity",
        services: ["Accounting and Legal Support"],
      },
      {
        category: "Governance",
        services: ["Corporate Management"],
      },
      {
        category: "Operations",
        services: ["Company Under Management", "Banking Support"],
      },
      {
        category: "Investment",
        services: ["Investor Support and GR"],
      },
      {
        category: "Transactions",
        services: ["M&A Advisory", "Due Diligence"],
      },
    ],
  },
};

export function getServiceScopeContent(locale: Locale): ServiceScopeContent {
  return locale === "ru" ? content.ru : content.en;
}
