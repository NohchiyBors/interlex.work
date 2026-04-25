import type { Metadata } from "next";

export const locales = ["en", "ru", "zh", "it", "fr", "ka", "de", "ar", "tr", "es"] as const;
export const defaultLocale = "en";
export const baseUrl = "https://interlex.work";

export type Locale = (typeof locales)[number];

type NavItem = {
  slug: "" | "about" | "cross-border" | "contact" | "briefs";
  label: string;
};

type RegionLink = {
  name: string;
  domain: string;
  href: string;
  servicesHref: string;
  language: string;
  strapline: string;
  points: string[];
};

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  note: string;
};

type Dictionary = {
  lang: string;
  dir: "ltr" | "rtl";
  localeLabel: string;
  localeNative: string;
  flag: string;
  servicesLabel: string;
  site: {
    title: string;
    description: string;
    brand: string;
    tagline: string;
    hubLabel: string;
    compareMarkets: string;
    menuLabel: string;
    markets: string;
    contact: string;
    footerTitle: string;
    footerBody: string;
  };
  nav: NavItem[];
  home: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    logicLabel: string;
    notes: string[];
    logicBody: string;
    positioningLabel: string;
    positioningTitle: string;
    positioningBody: string;
    sections: { label: string; slug: "about" | "cross-border" | "contact"; title: string; body: string }[];
  };
  about: {
    title: string;
    description: string;
    eyebrow: string;
    introTitle: string;
    introBody: string;
    principlesLabel: string;
    principles: { title: string; body: string }[];
    practiceLabel: string;
    practice: string[];
    nextLabel: string;
    nextTitle: string;
    nextBody: string;
    nextCta: string;
  };
  crossBorder: {
    title: string;
    description: string;
    eyebrow: string;
    introTitle: string;
    introBody: string;
    introSide: string;
    tableLabel: string;
    marketEntry: { title: string; kz: string; ge: string };
    investor: { title: string; kz: string; ge: string };
    language: { title: string; kz: string; ge: string };
    needHelpLabel: string;
    needHelpTitle: string;
    needHelpCta: string;
  };
  contactPage: {
    title: string;
    description: string;
    eyebrow: string;
    introTitle: string;
    introBody: string;
    flowLabel: string;
    steps: string[];
    closingLabel: string;
    closingTitle: string;
    closingBody: string;
  };
  regionLinks: RegionLink[];
  contactChannels: ContactChannel[];
};

const sharedDomains = [
  { domain: "interlex.kz", href: "https://interlex.kz", servicesHref: "https://interlex.kz/services" },
  { domain: "interlex.ge", href: "https://interlex.ge", servicesHref: "https://interlex.ge/services" },
] as const;

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, slug = "") {
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function buildMetadata(locale: Locale, title: string, description: string, slug = ""): Metadata {
  const pathname = localePath(locale, slug);
  const url = new URL(pathname, baseUrl);
  const languages = Object.fromEntries(locales.map((item) => [item, localePath(item, slug)]));
  languages["x-default"] = localePath(defaultLocale, slug);

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages,
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: "InterLex",
      type: "website",
      locale,
      images: [
        {
          url: `${baseUrl}${localePath(locale, "opengraph-image")}`,
          width: 1200,
          height: 630,
          alt: "InterLex global hub",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${localePath(locale, "twitter-image")}`],
    },
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    lang: "en",
    dir: "ltr",
    localeLabel: "EN",
    localeNative: "English",
    flag: "🇬🇧",
    servicesLabel: "Services",
    site: {
      title: "InterLex Global Hub",
      description: "Global hub for InterLex with multilingual routing into Kazakhstan and Georgia.",
      brand: "InterLex",
      tagline: "Two Markets. One Partner.",
      hubLabel: "Global Hub",
      compareMarkets: "Compare Markets",
      menuLabel: "Menu",
      markets: "Markets",
      contact: "Contact",
      footerTitle: "A global front door with local execution where it belongs.",
      footerBody: "interlex.work stays intentionally light: it frames the mandate, explains the regional logic, and routes the client into the right market-specific site.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "About" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contact" },
      { slug: "briefs", label: "Briefs" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "One brand, multiple language routes, two market destinations.",
      lead: "interlex.work is the multilingual front door for InterLex. It explains the brand, frames the mandate, and routes the client into the correct market-specific site.",
      primaryCta: "Explore Cross-border",
      secondaryCta: "Read About InterLex",
      logicLabel: "Hub Logic",
      notes: [
        "One InterLex brand with separate market-focused destinations.",
        "Cross-border framing on the hub, local execution on the country domain.",
        "Multilingual entry without turning the hub into a duplicate services catalogue.",
      ],
      logicBody: "If the work already belongs to a specific jurisdiction, go directly to the country site. If the structure still needs to be defined, start from the hub.",
      positioningLabel: "Positioning",
      positioningTitle: "Cross-border legal and business advisory with a clearer global entry point.",
      positioningBody: "The hub should feel international, premium, and precise while staying lighter than the market-specific sites.",
      sections: [
        { label: "About", slug: "about", title: "Who InterLex is and why the hub exists separately.", body: "The global site explains the brand, the client profile, and the routing logic without absorbing local execution." },
        { label: "Cross-border", slug: "cross-border", title: "How Kazakhstan and Georgia fit into one advisory picture.", body: "Use the comparison page to orient mandates touching entry, structuring, tax posture, and operations." },
        { label: "Contact", slug: "contact", title: "A multilingual intake point before the handoff into the right track.", body: "The contact page keeps the first conversation simple and routes it into the correct domain and team." },
      ],
    },
    about: {
      title: "About",
      description: "Learn how InterLex structures its global hub and routes mandates into Kazakhstan and Georgia.",
      eyebrow: "About InterLex",
      introTitle: "A global-facing brand with market-specific legal and business execution.",
      introBody: "InterLex uses interlex.work as a clean multilingual hub. This is where the client meets the brand, understands the regional map, and sees how Kazakhstan and Georgia work inside one advisory system.",
      principlesLabel: "Why This Structure Works",
      principles: [
        { title: "Brand first, execution second", body: "InterLex presents one brand architecture while keeping execution on the jurisdiction-specific site that owns the work." },
        { title: "Cross-border orientation", body: "The hub is where a client understands the relationship between markets before choosing the delivery route." },
        { title: "Regional depth stays regional", body: "Detailed service catalogues, local SEO logic, and execution stay inside interlex.kz and interlex.ge." },
      ],
      practiceLabel: "InterLex In Practice",
      practice: [
        "The hub is for orientation, positioning, and the first routing decision.",
        "Kazakhstan and Georgia then carry the deeper market-specific detail and execution pathways.",
        "This split keeps the brand architecture cleaner and reduces duplication across languages and markets.",
      ],
      nextLabel: "Next Step",
      nextTitle: "See how the two market tracks compare.",
      nextBody: "The cross-border page makes the split explicit before the client moves into a regional site.",
      nextCta: "Open Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Compare the InterLex Kazakhstan and Georgia tracks and route the mandate into the right market site.",
      eyebrow: "Cross-border",
      introTitle: "Two market sites, one brand-level routing decision.",
      introBody: "Use this page when the mandate is still being framed. It clarifies the different roles of Kazakhstan and Georgia inside the InterLex system.",
      introSide: "The hub does not try to close the entire mandate on one page. Its job is to reduce ambiguity and point the client into the delivery environment that matches the logic of the work.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Market entry",
        kz: "Entity setup, local compliance, operational launch, accounting, and tax support for teams entering Kazakhstan.",
        ge: "Holding and operating structures, FIZ logic, special regimes, and setup models for teams comparing Georgia pathways.",
      },
      investor: {
        title: "Investor profile",
        kz: "Best when the mandate turns on local execution, local counterparties, or operational work inside Kazakhstan.",
        ge: "Best when the mandate turns on international structuring, flexibility, and investor-facing architecture.",
      },
      language: {
        title: "Working languages",
        kz: "Communication can be in English, Russian, Georgian, or Kazakh, and translators can be engaged for any other language when needed.",
        ge: "Communication can be in English, Russian, Georgian, or Kazakh, and translators can be engaged for any other language when needed.",
      },
      needHelpLabel: "Need Routing Help?",
      needHelpTitle: "Start with a brand-level conversation, then move into the correct track.",
      needHelpCta: "Open Contact",
    },
    contactPage: {
      title: "Contact",
      description: "Start a brand-level InterLex conversation and route the mandate into Kazakhstan or Georgia.",
      eyebrow: "Contact",
      introTitle: "Start with the mandate. Route with precision after that.",
      introBody: "The global hub is the right place for first contact when the matter still needs framing. Once the structure is clear, the conversation moves into the Kazakhstan or Georgia market site.",
      flowLabel: "Intake Flow",
      steps: [
        "Describe the markets involved.",
        "Outline whether the matter is exploratory, transactional, or already in execution.",
        "The mandate is then routed into the correct country site or handled first as a brand-level cross-border discussion.",
      ],
      closingLabel: "First Conversation",
      closingTitle: "Start at the right level, then move into the right market.",
      closingBody: "Use the hub for an initial conversation, fast orientation, and a clear next step. Once the mandate is framed, the work moves into interlex.kz or interlex.ge, where the market-specific detail and execution belong.",
    },
    regionLinks: [
      {
        name: "Kazakhstan",
        ...sharedDomains[0],
        language: "RU-first market site",
        strapline: "Market entry, legal support, accounting, tax, and ongoing execution in Kazakhstan.",
        points: [
          "Built for founders, investors, and operating teams entering or scaling in Kazakhstan.",
          "Best fit when the mandate depends on local filings, local execution, or Russian-language market work.",
          "Use this route when the work belongs inside the Kazakhstan delivery environment.",
        ],
      },
      {
        name: "Georgia",
        ...sharedDomains[1],
        language: "EN-first market site",
        strapline: "Structuring, FIZ pathways, tax positioning, and cross-border operating support in Georgia.",
        points: [
          "Built for international clients comparing entry models, holding logic, and regional structures.",
          "Best fit when the mandate depends on Georgia-specific regimes, English-first workflow, or investor-facing setup.",
          "Use this route when the Georgia site should carry the jurisdiction-specific detail.",
        ],
      },
    ],
    contactChannels: [
      { label: "General enquiries", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Use for brand-level introductions, routing, and initial mandate framing." },
      { label: "Kazakhstan", value: "interlex.kz", href: "https://interlex.kz", note: "Use when the matter clearly belongs to the Kazakhstan market site." },
      { label: "Georgia", value: "interlex.ge", href: "https://interlex.ge", note: "Use when the matter clearly belongs to the Georgia market site." },
    ],
  },
  ru: {
    lang: "ru",
    dir: "ltr",
    localeLabel: "RU",
    localeNative: "Русский",
    flag: "🇷🇺",
    servicesLabel: "Услуги",
    site: {
      title: "InterLex Global Hub",
      description: "Глобальный хаб InterLex с мультиязычным маршрутом в Казахстан и Грузию.",
      brand: "InterLex",
      tagline: "Два рынка. Один партнёр.",
      hubLabel: "Глобальный хаб",
      compareMarkets: "Сравнить рынки",
      menuLabel: "Меню",
      markets: "Рынки",
      contact: "Контакты",
      footerTitle: "Глобальная точка входа с локальным исполнением там, где ему место.",
      footerBody: "interlex.work намеренно остаётся лёгким: он помогает сориентироваться, объясняет региональную логику и переводит запрос в нужный рынок без перегрузки деталями.",
    },
    nav: [
      { slug: "", label: "Хаб" },
      { slug: "about", label: "О нас" },
      { slug: "cross-border", label: "Международные проекты" },
      { slug: "contact", label: "Контакты" },
      { slug: "briefs", label: "Брифы" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "InterLex помогает безопасно выходить в Казахстан и Грузию через одну сильную точку входа.",
      lead: "Здесь начинается работа с международными проектами: выбор юрисдикции, структура бизнеса, выход на рынок, запуск компании и передача проекта в правильную локальную команду.",
      primaryCta: "Получить бесплатную консультацию",
      secondaryCta: "Посмотреть направления работы",
      logicLabel: "Как мы работаем",
      notes: [
        "Сначала помогаем понять, где лучше запускать проект: в Казахстане, в Грузии или через международную структуру.",
        "Затем собираем юридическую, налоговую и операционную логику до начала локального исполнения.",
        "После этого передаем проект в нужную страновую команду без потери контекста.",
      ],
      logicBody: "Если рынок уже понятен, можно сразу переходить к локальной работе. Если сначала нужно принять сильное решение по структуре, стране входа или формату запуска, начните с хаба и соберите проект правильно с самого начала.",
      positioningLabel: "Почему InterLex",
      positioningTitle: "Мы не продаем регистрации. Мы строим бизнес-инфраструктуру под новую юрисдикцию.",
      positioningBody:
        "InterLex подключается там, где важно не просто открыть компанию, а правильно зайти в страну, собрать структуру и передать проект в сильную локальную команду. Для клиента это одна команда, один маршрут и законные рабочие решения для Казахстана и Грузии без лишних кругов и переделок.",
      sections: [
        {
          label: "О нас",
          slug: "about",
          title: "Мы не просто регистрируем компании — мы помогаем строить бизнес в новой юрисдикции.",
          body: "InterLex ведет проект от первой стратегии до передачи в локальную практику, поэтому клиенту не нужно заново собирать отдельных консультантов по Казахстану и Грузии.",
        },
        {
          label: "Международные проекты",
          slug: "cross-border",
          title: "Выход на рынок, международное структурирование и дальнейшее сопровождение.",
          body: "Раздел помогает быстро понять, с чего лучше начинать: со сравнения стран, со сборки структуры или с подготовки запуска.",
        },
        {
          label: "Контакты",
          slug: "contact",
          title: "Быстрый первый разговор, если задача уже готова к обсуждению.",
          body: "Напишите команде InterLex и получите понятный следующий шаг: консультацию, сборку структуры, запуск сделки или передачу в локальную практику.",
        },
      ],
    },
    about: {
      title: "О нас",
      description: "Узнайте, как InterLex выстраивает глобальный хаб и переводит запросы в Казахстан и Грузию.",
      eyebrow: "Об InterLex",
      introTitle: "Глобальный бренд с локальным юридическим и бизнес-исполнением.",
      introBody: "InterLex использует interlex.work как чистый мультиязычный хаб. Здесь клиент знакомится с брендом, понимает региональную карту и видит, как Казахстан и Грузия работают внутри единой модели сопровождения.",
      principlesLabel: "Почему эта структура работает",
      principles: [
        { title: "Сначала бренд, потом исполнение", body: "InterLex показывает единую архитектуру бренда, сохраняя исполнение на сайте той юрисдикции, где должна вестись работа." },
        { title: "Международная ориентация", body: "На хабе клиент понимает связь между рынками до того, как переходит в конкретный маршрут работы." },
        { title: "Локальная глубина остаётся локальной", body: "Подробные каталоги услуг, локальное SEO и практическая реализация остаются внутри interlex.kz и interlex.ge." },
      ],
      practiceLabel: "Как InterLex работает",
      practice: [
        "Хаб нужен для ориентации, позиционирования и первого решения по маршруту.",
        "Казахстан и Грузия затем принимают на себя более глубокий локальный контент, детали услуг и реальную работу по запросу.",
        "Такое разделение делает архитектуру бренда чище и уменьшает дублирование между языками и рынками.",
      ],
      nextLabel: "Следующий шаг",
      nextTitle: "Посмотрите, как соотносятся два рыночных направления.",
      nextBody: "Страница международных проектов помогает выбрать между Казахстаном и Грузией ещё до перехода на региональный сайт.",
      nextCta: "Открыть международные проекты",
    },
    crossBorder: {
      title: "Международные проекты",
      description: "Сравните направления InterLex для Казахстана и Грузии и поймите, куда должен перейти запрос.",
      eyebrow: "Международные проекты",
      introTitle: "Два рынка, один бренд, одно решение по маршруту.",
      introBody: "Используйте эту страницу, когда задача ещё формируется. Она помогает понять, какую роль Казахстан и Грузия играют внутри системы InterLex.",
      introSide: "Если вы еще выбираете между Казахстаном и Грузией, эта страница помогает быстро увидеть разницу и понять следующий шаг. После этого проект переходит в ту команду, которая будет вести его уже по существу.",
      tableLabel: "Направление",
      marketEntry: {
        title: "Выход на рынок",
        kz: "Регистрация компании, локальное соблюдение требований, запуск операций, бухгалтерия и налоговое сопровождение для команд, входящих в Казахстан.",
        ge: "Холдинговые и операционные структуры, логика FIZ, специальные режимы и модели входа для тех, кто рассматривает Грузию.",
      },
      investor: {
        title: "Профиль инвестора",
        kz: "Подходит, когда задача зависит от локального исполнения, местных контрагентов или операционной работы внутри Казахстана.",
        ge: "Подходит, когда задача связана с международным структурированием, гибкостью и инвесторской логикой работы.",
      },
      language: {
        title: "Рабочие языки",
        kz: "Общение возможно на английском, русском, грузинском и казахском языках. При необходимости подключаются переводчики для любых других языков.",
        ge: "Общение возможно на английском, русском, грузинском и казахском языках. При необходимости подключаются переводчики для любых других языков.",
      },
      needHelpLabel: "Нужна помощь с маршрутом?",
      needHelpTitle: "Начните с брендового разговора, а затем перейдите в нужное направление.",
      needHelpCta: "Открыть Контакты",
    },
    contactPage: {
      title: "Контакты",
      description: "Начните разговор с InterLex и поймите, должен ли запрос идти в Казахстан или в Грузию.",
      eyebrow: "Контакты",
      introTitle: "Начните с задачи. Дальше маршрут должен быть точным.",
      introBody: "Глобальный хаб — правильная точка первого контакта, когда вопрос ещё нужно собрать в понятную структуру. После этого разговор переходит в Казахстан или Грузию, в зависимости от логики запроса.",
      flowLabel: "Как проходит первый контакт",
      steps: [
        "Опишите, какие рынки и какая задача задействованы.",
        "Уточните, это первичная оценка, конкретная сделка или уже рабочий этап исполнения.",
        "После этого запрос либо переводится на нужный сайт страны, либо сначала остаётся на уровне международного обсуждения.",
      ],
      closingLabel: "Первый контакт",
      closingTitle: "Начните с правильного уровня, а дальше перейдите в нужный рынок.",
      closingBody: "Хаб нужен для первого разговора, быстрой ориентации и понятного следующего шага. Когда задача уже сформулирована, работа переходит в interlex.kz или interlex.ge, где и должны находиться детали по рынку и исполнение.",
    },
    regionLinks: [
      {
        name: "Казахстан",
        ...sharedDomains[0],
        language: "Казахстан / СЭЗ",
        strapline:
          "Для проектов, которым нужен реальный запуск в Казахстане: СЭЗ, AIFC, локальное сопровождение, налоги, бухгалтерия и операционная работа на месте.",
        points: [
          "СЭЗ в Казахстане — это не оффшорная оболочка, а государственный инструмент для запуска и масштабирования бизнеса под конкретную отрасль.",
          "16 специальных зон и отдельные режимы вроде AIFC нужно подбирать под реальную операционную модель, а не под красивую презентацию льгот.",
          "Казахстан остается сильным входом, если проекту нужен рынок ЕАЭС, локальная инфраструктура и исполнение внутри страны.",
        ],
      },
      {
        name: "Грузия",
        ...sharedDomains[1],
        language: "Грузия / Virtual Zone",
        strapline:
          "Для проектов, где важны быстрая регистрация, Virtual Zone, экспортная IT-модель, гибкая структура и дальнейшее сопровождение в Грузии.",
        points: [
          "Virtual Zone Person может давать 0% корпоративного налога для IT-экспорта, если режим действительно подходит под модель бизнеса и реальную деятельность.",
          "LLC, Virtual Zone и специальные режимы позволяют быстро собрать вход под сервисный, технологический и международный бизнес.",
          "Грузия подходит, когда проекту нужна гибкая международная структура, понятный вход и рабочее сопровождение уже внутри юрисдикции.",
        ],
      },
    ],
    contactChannels: [
      { label: "Общие запросы", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Для первого входа в бренд, маршрутизации и первичного описания задачи." },
      { label: "Казахстан", value: "interlex.kz", href: "https://interlex.kz", note: "Используйте, если вопрос явно относится к Казахстану." },
      { label: "Грузия", value: "interlex.ge", href: "https://interlex.ge", note: "Используйте, если вопрос явно относится к Грузии." },
    ],
  },
  zh: {
    lang: "zh-Hans",
    dir: "ltr",
    localeLabel: "ZH",
    localeNative: "中文",
    flag: "🇨🇳",
    servicesLabel: "服务",
    site: {
      title: "InterLex 全球枢纽",
      description: "InterLex 的多语言全球枢纽，可将需求路由到哈萨克斯坦和格鲁吉亚。",
      brand: "InterLex",
      tagline: "两个市场，一个伙伴。",
      hubLabel: "全球枢纽",
      compareMarkets: "比较市场",
      menuLabel: "菜单",
      markets: "市场",
      contact: "联系",
      footerTitle: "全球入口，执行仍然留在应当执行的本地市场。",
      footerBody: "interlex.work 保持轻量化：帮助客户理解区域逻辑，明确下一步，并将需求引导到正确的市场网站。",
    },
    nav: [
      { slug: "", label: "枢纽" },
      { slug: "about", label: "关于" },
      { slug: "cross-border", label: "跨境" },
      { slug: "contact", label: "联系" },
      { slug: "briefs", label: "简报" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "一个品牌，多种语言入口，两个市场方向。",
      lead: "interlex.work 是 InterLex 的多语言入口。它介绍品牌、帮助界定需求，并把客户引导到正确的市场网站。",
      primaryCta: "查看跨境",
      secondaryCta: "了解 InterLex",
      logicLabel: "枢纽逻辑",
      notes: [
        "一个 InterLex 品牌，对应两个独立市场方向。",
        "跨境定位在枢纽完成，本地执行留在国家站点。",
        "多语言入口，但不把枢纽做成重复的服务目录。",
      ],
      logicBody: "如果工作已经明确属于某一司法辖区，请直接进入国家站点。如果结构、市场或路径仍需界定，请先从枢纽开始。",
      positioningLabel: "定位",
      positioningTitle: "更清晰的全球入口，用于跨境法律与商业顾问服务。",
      positioningBody: "这个枢纽应当呈现国际化、稳健和高端的品牌感，同时比各市场站点更轻、更清晰。",
      sections: [
        { label: "关于", slug: "about", title: "InterLex 是谁，以及为什么枢纽需要独立存在。", body: "全球站点负责解释品牌、客户画像和路由逻辑，而不是替代本地执行。" },
        { label: "跨境", slug: "cross-border", title: "哈萨克斯坦与格鲁吉亚如何组成一套跨境顾问图景。", body: "比较页面帮助客户理解市场进入、结构设计、税务逻辑与运营安排。" },
        { label: "联系", slug: "contact", title: "在进入正确轨道前的多语言初始联系点。", body: "联系页面让第一次沟通更简单，并将客户引导到正确的网站和团队。" },
      ],
    },
    about: {
      title: "关于",
      description: "了解 InterLex 如何构建全球枢纽，并把需求路由到哈萨克斯坦和格鲁吉亚。",
      eyebrow: "关于 InterLex",
      introTitle: "一个面向全球的品牌，配合按市场落地的法律与商业执行。",
      introBody: "InterLex 将 interlex.work 用作一个干净的多语言枢纽。客户在这里认识品牌、理解区域结构，并看到哈萨克斯坦和格鲁吉亚如何放进同一套顾问体系。",
      principlesLabel: "为什么这样有效",
      principles: [
        { title: "先品牌，后执行", body: "InterLex 先建立统一的品牌架构，再把执行留在真正承接该项目的司法辖区网站。" },
        { title: "跨境导向", body: "枢纽帮助客户在选择具体执行路径之前先理解市场之间的关系。" },
        { title: "本地深度仍留在本地", body: "详细服务目录、本地 SEO 和实际执行继续留在 interlex.kz 与 interlex.ge。" },
      ],
      practiceLabel: "InterLex 的实际运作",
      practice: [
        "枢纽负责方向判断、品牌定位和第一步路由。",
        "更深入的本地内容、服务细节和实际执行由哈萨克斯坦与格鲁吉亚站点承担。",
        "这种拆分让品牌结构更清晰，也减少多语言与多市场之间的重复。",
      ],
      nextLabel: "下一步",
      nextTitle: "看看两个市场方向如何比较。",
      nextBody: "跨境页面会在客户进入区域站点之前，先把路线差异讲清楚。",
      nextCta: "打开跨境页面",
    },
    crossBorder: {
      title: "跨境",
      description: "比较 InterLex 在哈萨克斯坦与格鲁吉亚的路径，判断需求应进入哪个市场网站。",
      eyebrow: "跨境",
      introTitle: "两个市场网站，一个品牌层面的路由决定。",
      introBody: "当需求仍在定义阶段时，请使用此页面。它帮助客户理解哈萨克斯坦与格鲁吉亚在 InterLex 体系中的不同角色。",
      introSide: "枢纽并不试图在一页内完成全部销售。它的工作是减少模糊性，把客户送到最适合执行该需求的环境。",
      tableLabel: "工作方向",
      marketEntry: {
        title: "市场进入",
        kz: "面向进入哈萨克斯坦的团队，提供公司设立、合规、运营启动、会计和税务支持。",
        ge: "面向比较格鲁吉亚路径的团队，提供控股结构、运营结构、FIZ 逻辑和特别制度方案。",
      },
      investor: {
        title: "投资者画像",
        kz: "当项目依赖本地执行、本地合作方或在哈萨克斯坦的运营落地时更合适。",
        ge: "当项目更关注国际结构、灵活性和面向投资者的架构时更合适。",
      },
      language: {
        title: "工作语言",
        kz: "沟通可使用英语、俄语、格鲁吉亚语和哈萨克语；如有需要，也可为其他任何语言安排口译或笔译支持。",
        ge: "沟通可使用英语、俄语、格鲁吉亚语和哈萨克语；如有需要，也可为其他任何语言安排口译或笔译支持。",
      },
      needHelpLabel: "需要帮助确定路线？",
      needHelpTitle: "先进行品牌层面的沟通，然后进入正确的市场轨道。",
      needHelpCta: "打开联系页面",
    },
    contactPage: {
      title: "联系",
      description: "先与 InterLex 进行品牌层面的沟通，再判断需求应进入哈萨克斯坦还是格鲁吉亚。",
      eyebrow: "联系",
      introTitle: "先从需求开始，之后再精确分流。",
      introBody: "当问题仍需要梳理时，全球枢纽是正确的第一接触点。结构清晰之后，沟通会转入哈萨克斯坦或格鲁吉亚市场站点。",
      flowLabel: "初始沟通流程",
      steps: [
        "说明涉及的市场或司法辖区。",
        "说明这是探索阶段、交易阶段，还是已经进入执行阶段。",
        "之后需求会被转入正确的国家站点，或先作为品牌层面的跨境议题继续讨论。",
      ],
      closingLabel: "第一次沟通",
      closingTitle: "从正确的层级开始，然后进入正确的市场。",
      closingBody: "枢纽适合第一次沟通、快速判断方向和明确下一步。一旦需求清晰，工作就会转入 interlex.kz 或 interlex.ge，由市场站点承接细节与执行。",
    },
    regionLinks: [
      {
        name: "哈萨克斯坦",
        ...sharedDomains[0],
        language: "RU-first 市场网站",
        strapline: "在哈萨克斯坦提供市场进入、法律支持、会计、税务和持续运营执行。",
        points: [
          "适合进入或扩展哈萨克斯坦市场的创始人、投资者和运营团队。",
          "当需求依赖本地注册、本地执行或俄语市场沟通时更合适。",
          "如果工作明确属于哈萨克斯坦执行环境，请选择此路线。",
        ],
      },
      {
        name: "格鲁吉亚",
        ...sharedDomains[1],
        language: "EN-first 市场网站",
        strapline: "在格鲁吉亚提供结构设计、FIZ 路径、税务定位和跨境运营支持。",
        points: [
          "适合比较进入模型、控股逻辑和区域结构的国际客户。",
          "当需求依赖格鲁吉亚制度、英语工作流或投资者导向结构时更合适。",
          "如果格鲁吉亚网站应承载司法细节，请选择此路线。",
        ],
      },
    ],
    contactChannels: [
      { label: "综合咨询", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "用于品牌层面的介绍、路由和初步需求界定。" },
      { label: "哈萨克斯坦", value: "interlex.kz", href: "https://interlex.kz", note: "当问题明确属于哈萨克斯坦市场时使用。" },
      { label: "格鲁吉亚", value: "interlex.ge", href: "https://interlex.ge", note: "当问题明确属于格鲁吉亚市场时使用。" },
    ],
  },
  it: {
    lang: "it",
    dir: "ltr",
    localeLabel: "IT",
    localeNative: "Italiano",
    flag: "🇮🇹",
    servicesLabel: "Servizi",
    site: {
      title: "InterLex Global Hub",
      description: "Hub globale multilingue di InterLex con instradamento verso Kazakistan e Georgia.",
      brand: "InterLex",
      tagline: "Due mercati. Un partner.",
      hubLabel: "Hub Globale",
      compareMarkets: "Confronta i Mercati",
      menuLabel: "Menu",
      markets: "Mercati",
      contact: "Contatti",
      footerTitle: "Un ingresso globale con esecuzione locale dove deve stare.",
      footerBody: "interlex.work resta volutamente leggero: orienta il cliente, spiega la logica regionale e lo indirizza verso il mercato giusto senza duplicare il dettaglio operativo.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Chi Siamo" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contatti" },
      { slug: "briefs", label: "Brief" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Un brand, più lingue, due direzioni di mercato.",
      lead: "interlex.work è l’ingresso multilingue di InterLex. Presenta il brand, chiarisce il mandato e indirizza il cliente verso il sito di mercato corretto.",
      primaryCta: "Apri Cross-border",
      secondaryCta: "Scopri InterLex",
      logicLabel: "Logica dell’Hub",
      notes: [
        "Un solo brand InterLex con due destinazioni di mercato distinte.",
        "Il quadro cross-border resta nell’hub; l’esecuzione locale resta nel dominio del paese.",
        "Ingresso multilingue senza trasformare l’hub in un catalogo duplicato.",
      ],
      logicBody: "Se il lavoro appartiene già a una giurisdizione specifica, vai direttamente al sito del paese. Se la struttura deve ancora essere definita, inizia dall’hub.",
      positioningLabel: "Posizionamento",
      positioningTitle: "Advisory legale e business cross-border con un ingresso globale più chiaro.",
      positioningBody: "L’hub deve sembrare internazionale, preciso e premium, restando più leggero dei siti di mercato.",
      sections: [
        { label: "Chi Siamo", slug: "about", title: "Chi è InterLex e perché l’hub esiste separatamente.", body: "Il sito globale spiega il brand, il profilo del cliente e la logica di instradamento senza sostituire l’esecuzione locale." },
        { label: "Cross-border", slug: "cross-border", title: "Come Kazakistan e Georgia entrano in un’unica immagine advisory.", body: "La pagina comparativa orienta su ingresso nel mercato, strutturazione, fiscalità e operatività." },
        { label: "Contatti", slug: "contact", title: "Un punto di intake multilingue prima del passaggio al percorso corretto.", body: "La pagina contatti semplifica il primo confronto e porta il cliente al dominio e al team giusti." },
      ],
    },
    about: {
      title: "Chi Siamo",
      description: "Scopri come InterLex struttura il suo hub globale e instrada i mandati verso Kazakistan e Georgia.",
      eyebrow: "Su InterLex",
      introTitle: "Un brand globale con esecuzione legale e business specifica per mercato.",
      introBody: "InterLex usa interlex.work come hub multilingue pulito. Qui il cliente incontra il brand, comprende la mappa regionale e vede come Kazakistan e Georgia si inseriscono nello stesso sistema advisory.",
      principlesLabel: "Perché Questa Struttura Funziona",
      principles: [
        { title: "Prima il brand, poi l’esecuzione", body: "InterLex presenta un’unica architettura di brand, lasciando l’esecuzione al sito della giurisdizione che deve gestire il mandato." },
        { title: "Orientamento cross-border", body: "L’hub è il luogo in cui il cliente comprende il rapporto tra i mercati prima di scegliere il percorso operativo." },
        { title: "La profondità regionale resta regionale", body: "Cataloghi dettagliati, SEO locale ed esecuzione restano dentro interlex.kz e interlex.ge." },
      ],
      practiceLabel: "InterLex nella Pratica",
      practice: [
        "L’hub serve per orientare, posizionare e decidere il primo routing.",
        "Kazakistan e Georgia gestiscono poi il dettaglio locale e l’esecuzione concreta.",
        "Questa separazione rende l’architettura del brand più pulita e riduce le duplicazioni tra lingue e mercati.",
      ],
      nextLabel: "Passo Successivo",
      nextTitle: "Guarda come si confrontano i due percorsi di mercato.",
      nextBody: "La pagina cross-border rende esplicita la differenza prima del passaggio a un sito regionale.",
      nextCta: "Apri Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Confronta i percorsi InterLex per Kazakistan e Georgia e capisci dove deve andare il mandato.",
      eyebrow: "Cross-border",
      introTitle: "Due siti di mercato, una decisione di routing a livello di brand.",
      introBody: "Usa questa pagina quando il mandato è ancora in definizione. Chiarisce i ruoli diversi di Kazakistan e Georgia nel sistema InterLex.",
      introSide: "L’hub non prova a chiudere tutto in una pagina. Il suo compito è ridurre l’ambiguità e portare il cliente nell’ambiente corretto di esecuzione.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Ingresso nel mercato",
        kz: "Costituzione, compliance locale, avvio operativo, contabilità e supporto fiscale per team che entrano in Kazakistan.",
        ge: "Strutture holding e operative, logica FIZ, regimi speciali e modelli di setup per chi valuta la Georgia.",
      },
      investor: {
        title: "Profilo investitore",
        kz: "Più adatto quando il mandato dipende da esecuzione locale, controparti locali o operatività sul mercato kazako.",
        ge: "Più adatto quando il mandato dipende da strutturazione internazionale, flessibilità e architettura orientata agli investitori.",
      },
      language: {
        title: "Lingue di lavoro",
        kz: "La comunicazione può avvenire in inglese, russo, georgiano o kazako, con possibilità di coinvolgere traduttori per qualsiasi altra lingua.",
        ge: "La comunicazione può avvenire in inglese, russo, georgiano o kazako, con possibilità di coinvolgere traduttori per qualsiasi altra lingua.",
      },
      needHelpLabel: "Serve aiuto con il routing?",
      needHelpTitle: "Inizia con una conversazione di brand, poi passa al percorso corretto.",
      needHelpCta: "Apri Contatti",
    },
    contactPage: {
      title: "Contatti",
      description: "Avvia una conversazione con InterLex e capisci se il mandato deve andare in Kazakistan o in Georgia.",
      eyebrow: "Contatti",
      introTitle: "Parti dal mandato. Poi il routing deve essere preciso.",
      introBody: "L’hub globale è il posto giusto per il primo contatto quando la questione deve ancora essere strutturata. Dopo, la conversazione passa al sito del mercato corretto.",
      flowLabel: "Flusso di Intake",
      steps: [
        "Descrivi i mercati coinvolti.",
        "Indica se la questione è esplorativa, transazionale o già in esecuzione.",
        "Il mandato viene poi instradato al sito paese corretto o trattato prima come tema cross-border a livello di brand.",
      ],
      closingLabel: "Primo Contatto",
      closingTitle: "Inizia dal livello corretto, poi entra nel mercato corretto.",
      closingBody: "L’hub serve per la prima conversazione, per orientarsi rapidamente e per chiarire il passo successivo. Quando il mandato è definito, il lavoro passa a interlex.kz o interlex.ge, dove restano i dettagli di mercato e l’esecuzione.",
    },
    regionLinks: [
      {
        name: "Kazakistan",
        ...sharedDomains[0],
        language: "Sito RU-first",
        strapline: "Ingresso nel mercato, supporto legale, contabilità, fiscalità ed esecuzione continua in Kazakistan.",
        points: [
          "Per founder, investitori e team operativi che entrano o crescono in Kazakistan.",
          "Ideale quando il mandato dipende da adempimenti locali, esecuzione locale o contesto di mercato in russo.",
          "Usa questo percorso quando il lavoro appartiene chiaramente alla pratica kazaka.",
        ],
      },
      {
        name: "Georgia",
        ...sharedDomains[1],
        language: "Sito EN-first",
        strapline: "Strutturazione, percorsi FIZ, posizionamento fiscale e supporto operativo cross-border in Georgia.",
        points: [
          "Per clienti internazionali che confrontano modelli di ingresso, logica holding e strutture regionali.",
          "Ideale quando contano i regimi georgiani, il workflow in inglese o un setup investor-facing.",
          "Usa questo percorso quando il dettaglio giurisdizionale deve vivere sul sito georgiano.",
        ],
      },
    ],
    contactChannels: [
      { label: "Richieste generali", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Per introduzioni al brand, routing e prima definizione del mandato." },
      { label: "Kazakistan", value: "interlex.kz", href: "https://interlex.kz", note: "Usalo quando la questione appartiene chiaramente al mercato kazako." },
      { label: "Georgia", value: "interlex.ge", href: "https://interlex.ge", note: "Usalo quando la questione appartiene chiaramente al mercato georgiano." },
    ],
  },
  fr: {
    lang: "fr",
    dir: "ltr",
    localeLabel: "FR",
    localeNative: "Français",
    flag: "🇫🇷",
    servicesLabel: "Services",
    site: {
      title: "InterLex Global Hub",
      description: "Hub mondial multilingue d’InterLex avec routage vers le Kazakhstan et la Géorgie.",
      brand: "InterLex",
      tagline: "Deux marchés. Un partenaire.",
      hubLabel: "Hub Global",
      compareMarkets: "Comparer les Marchés",
      menuLabel: "Menu",
      markets: "Marchés",
      contact: "Contact",
      footerTitle: "Une porte d’entrée mondiale avec l’exécution locale à sa juste place.",
      footerBody: "interlex.work reste volontairement léger : il oriente le client, explique la logique régionale et le dirige vers le bon site de marché sans dupliquer le détail opérationnel.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "À Propos" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contact" },
      { slug: "briefs", label: "Briefs" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Une marque, plusieurs langues, deux directions de marché.",
      lead: "interlex.work est la porte d’entrée multilingue d’InterLex. Il présente la marque, aide à cadrer le mandat et oriente le client vers le bon site de marché.",
      primaryCta: "Ouvrir Cross-border",
      secondaryCta: "Découvrir InterLex",
      logicLabel: "Logique du Hub",
      notes: [
        "Une seule marque InterLex avec deux destinations de marché distinctes.",
        "Le cadrage cross-border reste sur le hub ; l’exécution locale reste sur le domaine du pays.",
        "Une entrée multilingue sans transformer le hub en catalogue dupliqué.",
      ],
      logicBody: "Si le travail relève déjà d’une juridiction précise, allez directement sur le site du pays. Si la structure doit encore être définie, commencez par le hub.",
      positioningLabel: "Positionnement",
      positioningTitle: "Conseil juridique et business cross-border avec une entrée globale plus claire.",
      positioningBody: "Le hub doit paraître international, précis et premium, tout en restant plus léger que les sites de marché.",
      sections: [
        { label: "À Propos", slug: "about", title: "Qui est InterLex et pourquoi le hub existe séparément.", body: "Le site global explique la marque, le profil client et la logique de routage sans remplacer l’exécution locale." },
        { label: "Cross-border", slug: "cross-border", title: "Comment le Kazakhstan et la Géorgie entrent dans une même logique advisory.", body: "La page comparative oriente sur l’entrée de marché, la structuration, la fiscalité et l’opérationnel." },
        { label: "Contact", slug: "contact", title: "Un point d’intake multilingue avant le passage vers la bonne trajectoire.", body: "La page contact simplifie la première conversation et dirige le client vers le bon domaine et la bonne équipe." },
      ],
    },
    about: {
      title: "À Propos",
      description: "Découvrez comment InterLex structure son hub global et route les mandats vers le Kazakhstan et la Géorgie.",
      eyebrow: "À Propos d’InterLex",
      introTitle: "Une marque globale avec une exécution juridique et business propre à chaque marché.",
      introBody: "InterLex utilise interlex.work comme hub multilingue clair. Le client y rencontre la marque, comprend la carte régionale et voit comment le Kazakhstan et la Géorgie s’inscrivent dans le même système advisory.",
      principlesLabel: "Pourquoi Cette Structure Fonctionne",
      principles: [
        { title: "La marque d’abord, l’exécution ensuite", body: "InterLex présente une architecture de marque unique tout en laissant l’exécution au site de la juridiction qui porte le travail." },
        { title: "Orientation cross-border", body: "Le hub est l’endroit où le client comprend la relation entre les marchés avant de choisir le bon parcours opérationnel." },
        { title: "La profondeur régionale reste régionale", body: "Catalogues détaillés, SEO local et exécution restent dans interlex.kz et interlex.ge." },
      ],
      practiceLabel: "InterLex en Pratique",
      practice: [
        "Le hub sert à orienter, positionner et prendre la première décision de routing.",
        "Le Kazakhstan et la Géorgie portent ensuite le détail local et l’exécution concrète.",
        "Cette séparation rend l’architecture de marque plus propre et réduit les duplications entre langues et marchés.",
      ],
      nextLabel: "Étape Suivante",
      nextTitle: "Voyez comment les deux trajectoires de marché se comparent.",
      nextBody: "La page cross-border rend la distinction claire avant le passage à un site régional.",
      nextCta: "Ouvrir Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Comparez les parcours InterLex pour le Kazakhstan et la Géorgie et voyez où le mandat doit être dirigé.",
      eyebrow: "Cross-border",
      introTitle: "Deux sites de marché, une décision de routing au niveau de la marque.",
      introBody: "Utilisez cette page quand le mandat est encore en définition. Elle clarifie les rôles différents du Kazakhstan et de la Géorgie dans le système InterLex.",
      introSide: "Le hub n’essaie pas de tout vendre sur une seule page. Son rôle est de réduire l’ambiguïté et d’envoyer le client dans le bon environnement d’exécution.",
      tableLabel: "Axe de Travail",
      marketEntry: {
        title: "Entrée sur le marché",
        kz: "Constitution, compliance locale, lancement opérationnel, comptabilité et fiscalité pour les équipes entrant au Kazakhstan.",
        ge: "Structures holding et opérationnelles, logique FIZ, régimes spéciaux et modèles d’implantation pour ceux qui évaluent la Géorgie.",
      },
      investor: {
        title: "Profil investisseur",
        kz: "Plus pertinent lorsque le mandat dépend d’une exécution locale, de contreparties locales ou d’un travail opérationnel au Kazakhstan.",
        ge: "Plus pertinent lorsque le mandat dépend d’une structuration internationale, de flexibilité et d’une architecture orientée investisseurs.",
      },
      language: {
        title: "Langues de travail",
        kz: "Les échanges peuvent se faire en anglais, en russe, en géorgien ou en kazakh, avec recours à des traducteurs pour toute autre langue si nécessaire.",
        ge: "Les échanges peuvent se faire en anglais, en russe, en géorgien ou en kazakh, avec recours à des traducteurs pour toute autre langue si nécessaire.",
      },
      needHelpLabel: "Besoin d’aide pour le routing ?",
      needHelpTitle: "Commencez par une conversation de marque, puis passez vers la bonne trajectoire.",
      needHelpCta: "Ouvrir Contact",
    },
    contactPage: {
      title: "Contact",
      description: "Commencez une conversation avec InterLex et voyez si le mandat doit aller vers le Kazakhstan ou la Géorgie.",
      eyebrow: "Contact",
      introTitle: "Commencez par le mandat. Ensuite, le routing doit être précis.",
      introBody: "Le hub global est le bon point de premier contact lorsque la question doit encore être structurée. Ensuite, la conversation passe vers le site du marché adéquat.",
      flowLabel: "Flux d’Intake",
      steps: [
        "Décrivez les marchés concernés.",
        "Indiquez si la question est exploratoire, transactionnelle ou déjà en exécution.",
        "Le mandat est ensuite routé vers le bon site pays ou traité d’abord comme sujet cross-border au niveau de la marque.",
      ],
      closingLabel: "Première Conversation",
      closingTitle: "Commencez au bon niveau, puis entrez dans le bon marché.",
      closingBody: "Le hub sert à la première conversation, à une orientation rapide et à la clarification de la prochaine étape. Quand le mandat est défini, le travail passe vers interlex.kz ou interlex.ge, là où doivent rester le détail de marché et l’exécution.",
    },
    regionLinks: [
      {
        name: "Kazakhstan",
        ...sharedDomains[0],
        language: "Site RU-first",
        strapline: "Entrée de marché, support juridique, comptabilité, fiscalité et exécution continue au Kazakhstan.",
        points: [
          "Pour fondateurs, investisseurs et équipes opérationnelles entrant ou se développant au Kazakhstan.",
          "Idéal lorsque le mandat dépend d’enregistrements locaux, d’exécution locale ou de travail de marché en russe.",
          "Utilisez ce parcours quand le travail relève clairement de la pratique kazakhe.",
        ],
      },
      {
        name: "Géorgie",
        ...sharedDomains[1],
        language: "Site EN-first",
        strapline: "Structuration, parcours FIZ, positionnement fiscal et support opérationnel cross-border en Géorgie.",
        points: [
          "Pour les clients internationaux qui comparent modèles d’entrée, logique holding et structures régionales.",
          "Idéal lorsque comptent les régimes géorgiens, le workflow en anglais ou un setup orienté investisseurs.",
          "Utilisez ce parcours quand le détail juridictionnel doit vivre sur le site géorgien.",
        ],
      },
    ],
    contactChannels: [
      { label: "Demandes générales", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Pour introduction à la marque, routing et premier cadrage du mandat." },
      { label: "Kazakhstan", value: "interlex.kz", href: "https://interlex.kz", note: "À utiliser lorsque la question relève clairement du marché kazakh." },
      { label: "Géorgie", value: "interlex.ge", href: "https://interlex.ge", note: "À utiliser lorsque la question relève clairement du marché géorgien." },
    ],
  },
  ka: {
    lang: "ka",
    dir: "ltr",
    localeLabel: "KA",
    localeNative: "ქართული",
    flag: "🇬🇪",
    servicesLabel: "სერვისები",
    site: {
      title: "InterLex Global Hub",
      description: "InterLex-ის მრავალენოვანი გლობალური ჰაბი, რომელიც მომხმარებელს ყაზახეთისა და საქართველოს მიმართულებით გადაამისამართებს.",
      brand: "InterLex",
      tagline: "ორი ბაზარი. ერთი პარტნიორი.",
      hubLabel: "გლობალური ჰაბი",
      compareMarkets: "ბაზრების შედარება",
      menuLabel: "მენიუ",
      markets: "ბაზრები",
      contact: "კონტაქტი",
      footerTitle: "გლობალური შესასვლელი, სადაც ლოკალური შესრულება თავის სწორ ადგილზე რჩება.",
      footerBody: "interlex.work განზრახ რჩება მსუბუქი: ეხმარება კლიენტს ორიენტაციაში, ხსნის რეგიონულ ლოგიკას და სწორ ბაზარზე გადააქვს მოთხოვნა ზედმეტი დეტალების გარეშე.",
    },
    nav: [
      { slug: "", label: "ჰაბი" },
      { slug: "about", label: "ჩვენ შესახებ" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "კონტაქტი" },
      { slug: "briefs", label: "ბრიფები" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "ერთი ბრენდი, რამდენიმე ენა, ორი საბაზრო მიმართულება.",
      lead: "interlex.work არის InterLex-ის მრავალენოვანი შესასვლელი. აქ კლიენტი ხვდება ბრენდს, აყალიბებს ამოცანას და სწორ ბაზარზე გადადის ზედმეტი ნაბიჯების გარეშე.",
      primaryCta: "Cross-border-ის გახსნა",
      secondaryCta: "InterLex-ის შესახებ",
      logicLabel: "ჰაბის ლოგიკა",
      notes: [
        "ერთი InterLex ბრენდი ორი ცალკე საბაზრო მიმართულებით.",
        "Cross-border ჩარჩო რჩება ჰაბზე, ხოლო ადგილობრივი შესრულება — ქვეყნის საიტზე.",
        "მრავალენოვანი შესვლა ისე, რომ ჰაბი დუბლირებულ კატალოგად არ გადაიქცეს.",
      ],
      logicBody: "თუ საქმე უკვე კონკრეტულ იურისდიქციას ეკუთვნის, პირდაპირ ქვეყნის საიტზე გადადით. თუ სტრუქტურა ჯერ კიდევ დასაზუსტებელია, დაიწყეთ ჰაბიდან.",
      positioningLabel: "პოზიციონირება",
      positioningTitle: "Cross-border legal და business advisory უფრო სუფთა გლობალური შესასვლელით.",
      positioningBody: "ჰაბი უნდა აღიქმებოდეს საერთაშორისო, ზუსტ და პრემიუმ სივრცედ, თუმცა მაინც უფრო მარტივად, ვიდრე ადგილობრივი ბაზრის საიტები.",
      sections: [
        { label: "ჩვენ შესახებ", slug: "about", title: "ვინ არის InterLex და რატომ არსებობს ჰაბი ცალკე.", body: "გლობალური საიტი ხსნის ბრენდს, კლიენტის პროფილს და routing-ის ლოგიკას ისე, რომ არ ანაცვლებს ადგილობრივ შესრულებას." },
        { label: "Cross-border", slug: "cross-border", title: "როგორ ერთიანდება ყაზახეთი და საქართველო ერთ advisory სურათში.", body: "შედარების გვერდი ეხმარება კლიენტს ბაზარზე შესვლის, სტრუქტურირების, საგადასახადო ლოგიკისა და ოპერაციული მოდელის გაგებაში." },
        { label: "კონტაქტი", slug: "contact", title: "მრავალენოვანი პირველი საკონტაქტო წერტილი სწორ ტრეკზე გადასვლამდე.", body: "კონტაქტის გვერდი ამარტივებს პირველ საუბარს და სწორ ბაზარსა და გუნდზე გადაჰყავს კლიენტი." },
      ],
    },
    about: {
      title: "ჩვენ შესახებ",
      description: "გაიგეთ, როგორ აწყობს InterLex გლობალურ ჰაბს და როგორ გადააქვს მოთხოვნები ყაზახეთსა და საქართველოში.",
      eyebrow: "InterLex-ის შესახებ",
      introTitle: "გლობალური ბრენდი ადგილობრივი იურიდიული და ბიზნეს შესრულებით.",
      introBody: "InterLex იყენებს interlex.work-ს როგორც სუფთა მრავალენოვან ჰაბს. აქ კლიენტი ეცნობა ბრენდს, ხედავს რეგიონულ რუკას და იგებს, როგორ მუშაობს ყაზახეთი და საქართველო ერთიანი advisory სისტემის ფარგლებში.",
      principlesLabel: "რატომ მუშაობს ეს სტრუქტურა",
      principles: [
        { title: "ჯერ ბრენდი, შემდეგ შესრულება", body: "InterLex ქმნის ერთიან ბრენდ არქიტექტურას და შესრულებას ტოვებს იმ იურისდიქციის საიტზე, სადაც სამუშაო რეალურად უნდა წარიმართოს." },
        { title: "Cross-border ორიენტაცია", body: "ჰაბზე კლიენტი ჯერ ხედავს ბაზრებს შორის კავშირს და მხოლოდ შემდეგ გადადის კონკრეტულ ოპერაციულ გზაზე." },
        { title: "ადგილობრივი სიღრმე ადგილზევე რჩება", body: "დეტალური სერვისები, ლოკალური SEO და შესრულება ისევ interlex.kz-სა და interlex.ge-ზე რჩება." },
      ],
      practiceLabel: "InterLex პრაქტიკაში",
      practice: [
        "ჰაბი საჭიროა ორიენტაციისთვის, პოზიციონირებისთვის და პირველი routing-ის გადაწყვეტილებისთვის.",
        "შემდეგ ყაზახეთი და საქართველო იღებენ უფრო ღრმა ადგილობრივ კონტენტს, მომსახურების დეტალსა და შესრულებას.",
        "ასეთი გაყოფა ბრენდის არქიტექტურას უფრო სუფთას ხდის და ამცირებს დუბლირებას ენებსა და ბაზრებს შორის.",
      ],
      nextLabel: "შემდეგი ნაბიჯი",
      nextTitle: "ნახეთ, როგორ ედარება ერთმანეთს ორი საბაზრო მიმართულება.",
      nextBody: "Cross-border გვერდი აშკარად აჩვენებს განსხვავებას რეგიონულ საიტზე გადასვლამდე.",
      nextCta: "Cross-border-ის გახსნა",
    },
    crossBorder: {
      title: "Cross-border",
      description: "შეადარეთ InterLex-ის მიმართულებები ყაზახეთისა და საქართველოსთვის და გაიგეთ, სად უნდა გადავიდეს მოთხოვნა.",
      eyebrow: "Cross-border",
      introTitle: "ორი საბაზრო საიტი, ერთი ბრენდის დონის routing გადაწყვეტილება.",
      introBody: "გამოიყენეთ ეს გვერდი მაშინ, როცა მოთხოვნა ჯერ კიდევ ფორმირების პროცესშია. ის განმარტავს ყაზახეთისა და საქართველოს განსხვავებულ როლებს InterLex-ის სისტემაში.",
      introSide: "ჰაბი არ ცდილობს მთლიანი მოთხოვნის დახურვას ერთ გვერდზე. მისი ამოცანაა გაურკვევლობის შემცირება და კლიენტის სწორ შესრულების გარემოში გადაყვანა.",
      tableLabel: "მიმართულება",
      marketEntry: {
        title: "ბაზარზე შესვლა",
        kz: "კომპანიის რეგისტრაცია, ადგილობრივი compliance, ოპერაციების გაშვება, ბუღალტერია და საგადასახადო მხარდაჭერა ყაზახეთში შემსვლელი გუნდებისთვის.",
        ge: "ჰოლდინგური და ოპერაციული სტრუქტურები, FIZ ლოგიკა, სპეციალური რეჟიმები და setup მოდელები მათთვის, ვინც საქართველოს არჩევს.",
      },
      investor: {
        title: "ინვესტორის პროფილი",
        kz: "უმჯობესია მაშინ, როცა მოთხოვნა დამოკიდებულია ადგილობრივ შესრულებაზე, ადგილობრივ კონტრაგენტებზე ან ყაზახურ ოპერაციულ სამუშაოზე.",
        ge: "უმჯობესია მაშინ, როცა მოთხოვნა საერთაშორისო სტრუქტურირებას, მოქნილობასა და ინვესტორზე ორიენტირებულ არქიტექტურას ეყრდნობა.",
      },
      language: {
        title: "სამუშაო ენები",
        kz: "კომუნიკაცია შესაძლებელია ინგლისურ, რუსულ, ქართულ და ყაზახურ ენებზე. საჭიროების შემთხვევაში, შესაძლებელია თარჯიმნების ან მთარგმნელების ჩართვაც სხვა ენებისთვის.",
        ge: "კომუნიკაცია შესაძლებელია ინგლისურ, რუსულ, ქართულ და ყაზახურ ენებზე. საჭიროების შემთხვევაში, შესაძლებელია თარჯიმნების ან მთარგმნელების ჩართვაც სხვა ენებისთვის.",
      },
      needHelpLabel: "გჭირდებათ დახმარება routing-ში?",
      needHelpTitle: "დაიწყეთ ბრენდის დონის საუბრით და შემდეგ გადადით სწორ ტრეკზე.",
      needHelpCta: "კონტაქტის გახსნა",
    },
    contactPage: {
      title: "კონტაქტი",
      description: "დაიწყეთ საუბარი InterLex-თან და გაიგეთ, უნდა წავიდეს თუ არა მოთხოვნა ყაზახეთსა თუ საქართველოში.",
      eyebrow: "კონტაქტი",
      introTitle: "დაიწყეთ ამოცანით. შემდეგ კი routing ზუსტი უნდა იყოს.",
      introBody: "გლობალური ჰაბი სწორი პირველი საკონტაქტო წერტილია მაშინ, როცა საკითხი ჯერ კიდევ სტრუქტურირებას საჭიროებს. ამის შემდეგ საუბარი გადადის ყაზახეთის ან საქართველოს ბაზრის საიტზე.",
      flowLabel: "პირველი კონტაქტის პროცესი",
      steps: [
        "აღწერეთ ჩართული ბაზრები და ამოცანა.",
        "მიუთითეთ, საკითხი საწყისი შეფასების, კონკრეტული ტრანზაქციის თუ უკვე შესრულების ეტაპზეა.",
        "ამის შემდეგ მოთხოვნა გადადის შესაბამის ქვეყნის საიტზე ან ჯერ რჩება brand-level cross-border განხილვად.",
      ],
      closingLabel: "პირველი კონტაქტი",
      closingTitle: "დაიწყეთ სწორი დონიდან და შემდეგ გადადით სწორ ბაზარზე.",
      closingBody: "ჰაბი განკუთვნილია პირველი საუბრისთვის, სწრაფი ორიენტაციისთვის და შემდეგი ნაბიჯის გასაგებად. როცა ამოცანა უკვე ჩამოყალიბებულია, სამუშაო გადადის interlex.kz-ზე ან interlex.ge-ზე, სადაც უნდა დარჩეს ბაზრის დეტალი და შესრულება.",
    },
    regionLinks: [
      {
        name: "ყაზახეთი",
        ...sharedDomains[0],
        language: "RU-first market site",
        strapline: "ბაზარზე შესვლა, იურიდიული მხარდაჭერა, ბუღალტერია, გადასახადები და ოპერაციული შესრულება ყაზახეთში.",
        points: [
          "ფაუნდერებისთვის, ინვესტორებისთვის და ოპერაციული გუნდებისთვის, რომლებიც ყაზახეთში შედიან ან იქ ზრდიან საქმიანობას.",
          "შესაფერისია მაშინ, როცა საჭიროა ადგილობრივი რეგისტრაცია, ადგილობრივი შესრულება ან რუსულენოვანი ბაზრის კონტექსტი.",
          "გამოიყენეთ ეს გზა მაშინ, როცა სამუშაო ყაზახურ პრაქტიკას ეკუთვნის.",
        ],
      },
      {
        name: "საქართველო",
        ...sharedDomains[1],
        language: "EN-first market site",
        strapline: "სტრუქტურირება, FIZ გზები, საგადასახადო ლოგიკა და cross-border ოპერაციული მხარდაჭერა საქართველოში.",
        points: [
          "საერთაშორისო კლიენტებისთვის, რომლებიც ადარებენ ბაზარზე შესვლის მოდელებს, ჰოლდინგურ ლოგიკასა და რეგიონულ სტრუქტურებს.",
          "შესაფერისია მაშინ, როცა მნიშვნელოვანია საქართველოს რეჟიმები, English-first workflow და investor-facing setup.",
          "გამოიყენეთ ეს გზა მაშინ, როცა იურისდიქციული დეტალი ქართულ საიტზე უნდა ცხოვრობდეს.",
        ],
      },
    ],
    contactChannels: [
      { label: "ზოგადი მოთხოვნები", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "ბრენდთან პირველი კონტაქტისთვის, routing-ისთვის და ამოცანის პირველადი ჩამოყალიბებისთვის." },
      { label: "ყაზახეთი", value: "interlex.kz", href: "https://interlex.kz", note: "გამოიყენეთ, თუ საკითხი აშკარად ყაზახეთს ეკუთვნის." },
      { label: "საქართველო", value: "interlex.ge", href: "https://interlex.ge", note: "გამოიყენეთ, თუ საკითხი აშკარად საქართველოს ეკუთვნის." },
    ],
  },
  de: {
    lang: "de",
    dir: "ltr",
    localeLabel: "DE",
    localeNative: "Deutsch",
    flag: "🇩🇪",
    servicesLabel: "Leistungen",
    site: {
      title: "InterLex Global Hub",
      description: "Mehrsprachiger globaler Hub von InterLex mit Routing nach Kasachstan und Georgien.",
      brand: "InterLex",
      tagline: "Zwei Märkte. Ein Partner.",
      hubLabel: "Global Hub",
      compareMarkets: "Märkte Vergleichen",
      menuLabel: "Menü",
      markets: "Märkte",
      contact: "Kontakt",
      footerTitle: "Ein globaler Einstieg mit lokaler Umsetzung dort, wo sie hingehört.",
      footerBody: "interlex.work bleibt bewusst schlank: Er orientiert den Mandanten, erklärt die regionale Logik und führt ihn in den richtigen Markt, ohne operative Details zu duplizieren.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Über Uns" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Kontakt" },
      { slug: "briefs", label: "Briefs" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Eine Marke, mehrere Sprachen, zwei Marktrichtungen.",
      lead: "interlex.work ist der mehrsprachige Einstieg von InterLex. Er erklärt die Marke, rahmt das Mandat und leitet den Mandanten zur richtigen Marktseite.",
      primaryCta: "Cross-border Öffnen",
      secondaryCta: "InterLex Kennenlernen",
      logicLabel: "Hub-Logik",
      notes: [
        "Eine InterLex-Marke mit zwei klar getrennten Marktwegen.",
        "Cross-border Orientierung bleibt im Hub, lokale Umsetzung bleibt auf der Länderseite.",
        "Mehrsprachiger Einstieg, ohne den Hub zu einem doppelten Leistungskatalog zu machen.",
      ],
      logicBody: "Wenn die Arbeit bereits eindeutig zu einer Jurisdiktion gehört, gehen Sie direkt zur Länderseite. Wenn Struktur und Markt noch geklärt werden müssen, beginnen Sie im Hub.",
      positioningLabel: "Positionierung",
      positioningTitle: "Cross-border Legal- und Business-Advisory mit einem klareren globalen Einstiegspunkt.",
      positioningBody: "Der Hub soll international, präzise und hochwertig wirken und zugleich leichter bleiben als die marktspezifischen Seiten.",
      sections: [
        { label: "Über Uns", slug: "about", title: "Wer InterLex ist und warum der Hub separat existiert.", body: "Die globale Seite erklärt Marke, Mandantenprofil und Routing-Logik, ohne die lokale Umsetzung zu ersetzen." },
        { label: "Cross-border", slug: "cross-border", title: "Wie Kasachstan und Georgien in ein gemeinsames Advisory-Bild passen.", body: "Die Vergleichsseite orientiert bei Markteintritt, Strukturierung, Steuern und operativer Logik." },
        { label: "Kontakt", slug: "contact", title: "Ein mehrsprachiger Intake-Punkt vor dem Übergang in den richtigen Track.", body: "Die Kontaktseite vereinfacht das erste Gespräch und führt in die richtige Domain und das richtige Team." },
      ],
    },
    about: {
      title: "Über Uns",
      description: "Erfahren Sie, wie InterLex seinen globalen Hub strukturiert und Mandate nach Kasachstan und Georgien routet.",
      eyebrow: "Über InterLex",
      introTitle: "Eine globale Marke mit marktspezifischer rechtlicher und geschäftlicher Umsetzung.",
      introBody: "InterLex nutzt interlex.work als klaren mehrsprachigen Hub. Hier lernt der Mandant die Marke kennen, versteht die regionale Struktur und sieht, wie Kasachstan und Georgien in ein gemeinsames Advisory-System passen.",
      principlesLabel: "Warum Diese Struktur Funktioniert",
      principles: [
        { title: "Zuerst die Marke, dann die Umsetzung", body: "InterLex zeigt eine einheitliche Markenarchitektur und belässt die Umsetzung auf der Seite der Jurisdiktion, die die Arbeit tragen soll." },
        { title: "Cross-border Orientierung", body: "Im Hub versteht der Mandant die Beziehung zwischen den Märkten, bevor er den operativen Weg wählt." },
        { title: "Regionale Tiefe bleibt regional", body: "Detaillierte Leistungskataloge, lokales SEO und Umsetzung bleiben in interlex.kz und interlex.ge." },
      ],
      practiceLabel: "InterLex in der Praxis",
      practice: [
        "Der Hub dient der Orientierung, Positionierung und der ersten Routing-Entscheidung.",
        "Kasachstan und Georgien übernehmen danach die tieferen lokalen Inhalte und die Umsetzung.",
        "Diese Trennung macht die Markenarchitektur sauberer und reduziert Duplizierung zwischen Sprachen und Märkten.",
      ],
      nextLabel: "Nächster Schritt",
      nextTitle: "Sehen Sie, wie sich die beiden Marktwege vergleichen.",
      nextBody: "Die Cross-border-Seite macht den Unterschied klar, bevor der Mandant auf eine regionale Seite wechselt.",
      nextCta: "Cross-border Öffnen",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Vergleichen Sie die InterLex-Wege für Kasachstan und Georgien und sehen Sie, wohin das Mandat gehen sollte.",
      eyebrow: "Cross-border",
      introTitle: "Zwei Marktseiten, eine Routing-Entscheidung auf Markenebene.",
      introBody: "Nutzen Sie diese Seite, wenn das Mandat noch definiert wird. Sie macht die unterschiedlichen Rollen von Kasachstan und Georgien im InterLex-System klar.",
      introSide: "Der Hub versucht nicht, das gesamte Mandat auf einer Seite zu schließen. Seine Aufgabe ist es, Unklarheit zu reduzieren und den Mandanten in das richtige Umfeld der Umsetzung zu führen.",
      tableLabel: "Arbeitsbereich",
      marketEntry: {
        title: "Markteintritt",
        kz: "Gründung, lokale Compliance, operativer Start, Accounting und Steuerunterstützung für Teams, die nach Kasachstan gehen.",
        ge: "Holding- und Betriebsstrukturen, FIZ-Logik, Sonderregime und Setup-Modelle für Teams, die Georgien prüfen.",
      },
      investor: {
        title: "Investorenprofil",
        kz: "Passend, wenn das Mandat auf lokaler Umsetzung, lokalen Gegenparteien oder operativer Arbeit in Kasachstan beruht.",
        ge: "Passend, wenn das Mandat auf internationaler Strukturierung, Flexibilität und investorenorientierter Architektur beruht.",
      },
      language: {
        title: "Arbeitssprachen",
        kz: "Die Kommunikation kann auf Englisch, Russisch, Georgisch oder Kasachisch erfolgen; bei Bedarf können Übersetzer für jede weitere Sprache eingebunden werden.",
        ge: "Die Kommunikation kann auf Englisch, Russisch, Georgisch oder Kasachisch erfolgen; bei Bedarf können Übersetzer für jede weitere Sprache eingebunden werden.",
      },
      needHelpLabel: "Brauchen Sie Hilfe beim Routing?",
      needHelpTitle: "Beginnen Sie mit einem Gespräch auf Markenebene und wechseln Sie dann in den richtigen Track.",
      needHelpCta: "Kontakt Öffnen",
    },
    contactPage: {
      title: "Kontakt",
      description: "Starten Sie ein Gespräch mit InterLex und klären Sie, ob das Mandat nach Kasachstan oder Georgien gehen soll.",
      eyebrow: "Kontakt",
      introTitle: "Beginnen Sie mit dem Mandat. Danach muss das Routing präzise sein.",
      introBody: "Der globale Hub ist der richtige erste Kontaktpunkt, wenn die Frage noch strukturiert werden muss. Danach geht das Gespräch auf die passende Marktseite über.",
      flowLabel: "Intake-Ablauf",
      steps: [
        "Beschreiben Sie die beteiligten Märkte.",
        "Erläutern Sie, ob es sich um eine explorative, transaktionale oder bereits operative Frage handelt.",
        "Danach wird das Mandat auf die richtige Länderseite geroutet oder zunächst als Cross-border-Thema auf Markenebene behandelt.",
      ],
      closingLabel: "Erstes Gespräch",
      closingTitle: "Starten Sie auf der richtigen Ebene und wechseln Sie dann in den richtigen Markt.",
      closingBody: "Der Hub dient dem ersten Gespräch, schneller Orientierung und einem klaren nächsten Schritt. Sobald das Mandat definiert ist, geht die Arbeit zu interlex.kz oder interlex.ge über, wo Marktdetail und Umsetzung hingehören.",
    },
    regionLinks: [
      {
        name: "Kasachstan",
        ...sharedDomains[0],
        language: "RU-first Marktseite",
        strapline: "Markteintritt, Rechtsberatung, Accounting, Steuern und laufende operative Umsetzung in Kasachstan.",
        points: [
          "Für Gründer, Investoren und operative Teams, die in Kasachstan eintreten oder dort wachsen.",
          "Ideal, wenn lokale Einreichungen, lokale Umsetzung oder russischsprachiger Marktkontext entscheidend sind.",
          "Nutzen Sie diesen Weg, wenn die Arbeit klar zur kasachischen Praxis gehört.",
        ],
      },
      {
        name: "Georgien",
        ...sharedDomains[1],
        language: "EN-first Marktseite",
        strapline: "Strukturierung, FIZ-Wege, steuerliche Positionierung und cross-border operative Unterstützung in Georgien.",
        points: [
          "Für internationale Mandanten, die Eintrittsmodelle, Holding-Logik und regionale Strukturen vergleichen.",
          "Ideal, wenn georgische Regime, englischsprachiger Workflow oder investor-facing Setup wichtig sind.",
          "Nutzen Sie diesen Weg, wenn die juristische Detailtiefe auf der georgischen Seite liegen soll.",
        ],
      },
    ],
    contactChannels: [
      { label: "Allgemeine Anfragen", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Für Markeneinstieg, Routing und erste Mandatsklärung." },
      { label: "Kasachstan", value: "interlex.kz", href: "https://interlex.kz", note: "Nutzen Sie dies, wenn die Frage klar nach Kasachstan gehört." },
      { label: "Georgien", value: "interlex.ge", href: "https://interlex.ge", note: "Nutzen Sie dies, wenn die Frage klar nach Georgien gehört." },
    ],
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    localeLabel: "AR",
    localeNative: "العربية",
    flag: "🇸🇦",
    servicesLabel: "الخدمات",
    site: {
      title: "InterLex Global Hub",
      description: "المركز العالمي متعدد اللغات لـ InterLex مع توجيه نحو كازاخستان وجورجيا.",
      brand: "InterLex",
      tagline: "سوقان. شريك واحد.",
      hubLabel: "المركز العالمي",
      compareMarkets: "مقارنة الأسواق",
      menuLabel: "القائمة",
      markets: "الأسواق",
      contact: "التواصل",
      footerTitle: "بوابة عالمية مع تنفيذ محلي في المكان الصحيح.",
      footerBody: "يبقى interlex.work خفيفاً عن قصد: يوجّه العميل، يشرح المنطق الإقليمي، وينقل الطلب إلى السوق الصحيح من دون تكرار التفاصيل التنفيذية.",
    },
    nav: [
      { slug: "", label: "المركز" },
      { slug: "about", label: "عنّا" },
      { slug: "cross-border", label: "عبر الحدود" },
      { slug: "contact", label: "التواصل" },
      { slug: "briefs", label: "الاستمارات" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "علامة واحدة، لغات متعددة، ومساران للسوق.",
      lead: "interlex.work هو نقطة الدخول متعددة اللغات لـ InterLex. يقدّم العلامة، يساعد في صياغة التكليف، ويوجّه العميل إلى موقع السوق الصحيح.",
      primaryCta: "استكشاف عبر الحدود",
      secondaryCta: "التعرّف على InterLex",
      logicLabel: "منطق المركز",
      notes: [
        "علامة InterLex واحدة مع مسارين منفصلين لكل سوق.",
        "إطار cross-border يبقى في المركز، والتنفيذ المحلي يبقى على موقع البلد.",
        "دخول متعدد اللغات من دون تحويل المركز إلى كتالوج خدمات مكرر.",
      ],
      logicBody: "إذا كان العمل ينتمي بالفعل إلى ولاية قضائية محددة، فاذهب مباشرة إلى موقع البلد. وإذا كانت البنية لا تزال بحاجة إلى تحديد، فابدأ من المركز.",
      positioningLabel: "التموضع",
      positioningTitle: "استشارات قانونية وتجارية عبر الحدود مع نقطة دخول عالمية أوضح.",
      positioningBody: "يجب أن يبدو المركز دولياً ودقيقاً ورفيع المستوى، مع بقائه أخف من المواقع الخاصة بكل سوق.",
      sections: [
        { label: "عنّا", slug: "about", title: "من هي InterLex ولماذا يوجد المركز بشكل منفصل.", body: "الموقع العالمي يشرح العلامة، وملف العميل، ومنطق التوجيه من دون أن يحل محل التنفيذ المحلي." },
        { label: "عبر الحدود", slug: "cross-border", title: "كيف يندمج كازاخستان وجورجيا ضمن صورة advisory واحدة.", body: "تساعد صفحة المقارنة في توضيح دخول السوق والهيكلة والمنطق الضريبي والتشغيل." },
        { label: "التواصل", slug: "contact", title: "نقطة intake متعددة اللغات قبل الانتقال إلى المسار الصحيح.", body: "صفحة التواصل تبسّط أول محادثة وتوجّه العميل إلى النطاق والفريق المناسبين." },
      ],
    },
    about: {
      title: "عنّا",
      description: "تعرّف كيف ينظّم InterLex مركزه العالمي ويوجه التكليفات إلى كازاخستان وجورجيا.",
      eyebrow: "عن InterLex",
      introTitle: "علامة عالمية مع تنفيذ قانوني وتجاري خاص بكل سوق.",
      introBody: "يستخدم InterLex موقع interlex.work كمركز متعدد اللغات وواضح. هنا يلتقي العميل بالعلامة، ويفهم الخريطة الإقليمية، ويرى كيف يعمل كازاخستان وجورجيا ضمن نظام advisory واحد.",
      principlesLabel: "لماذا تنجح هذه البنية",
      principles: [
        { title: "العلامة أولاً، التنفيذ ثانياً", body: "يقدّم InterLex بنية علامة موحّدة، مع إبقاء التنفيذ على موقع الولاية القضائية التي يجب أن تحمل العمل." },
        { title: "توجيه عبر الحدود", body: "في المركز يفهم العميل العلاقة بين الأسواق قبل اختيار المسار العملي المناسب." },
        { title: "العمق المحلي يبقى محلياً", body: "كتالوجات الخدمات المفصلة، وSEO المحلي، والتنفيذ تبقى داخل interlex.kz و interlex.ge." },
      ],
      practiceLabel: "InterLex عملياً",
      practice: [
        "المركز مخصص للتوجيه والتموضع وأول قرار في routing.",
        "ثم يتولى كازاخستان وجورجيا المحتوى المحلي الأعمق والتفاصيل والتنفيذ الفعلي.",
        "هذا الفصل يجعل بنية العلامة أنظف ويقلل التكرار بين اللغات والأسواق.",
      ],
      nextLabel: "الخطوة التالية",
      nextTitle: "انظر كيف تتم المقارنة بين المسارين السوقيين.",
      nextBody: "توضح صفحة cross-border الفرق قبل انتقال العميل إلى موقع إقليمي.",
      nextCta: "فتح عبر الحدود",
    },
    crossBorder: {
      title: "عبر الحدود",
      description: "قارن بين مسارات InterLex في كازاخستان وجورجيا وافهم أين يجب أن يذهب التكليف.",
      eyebrow: "عبر الحدود",
      introTitle: "موقعان للسوق، وقرار routing واحد على مستوى العلامة.",
      introBody: "استخدم هذه الصفحة عندما يكون التكليف لا يزال قيد التشكيل. فهي توضح الأدوار المختلفة لكازاخستان وجورجيا داخل نظام InterLex.",
      introSide: "لا يحاول المركز إغلاق كامل التكليف على صفحة واحدة. مهمته هي إزالة الغموض وتوجيه العميل إلى البيئة الصحيحة للتنفيذ.",
      tableLabel: "مجال العمل",
      marketEntry: {
        title: "دخول السوق",
        kz: "تأسيس الكيان، والامتثال المحلي، والانطلاق التشغيلي، والمحاسبة، والدعم الضريبي للفرق الداخلة إلى كازاخستان.",
        ge: "هياكل holding وتشغيل، ومنطق FIZ، والأنظمة الخاصة، ونماذج setup للفرق التي تقارن مسارات جورجيا.",
      },
      investor: {
        title: "ملف المستثمر",
        kz: "الأفضل عندما يعتمد التكليف على التنفيذ المحلي أو الأطراف المحلية أو العمل التشغيلي داخل كازاخستان.",
        ge: "الأفضل عندما يعتمد التكليف على الهيكلة الدولية والمرونة وبنية موجهة للمستثمر.",
      },
      language: {
        title: "لغات العمل",
        kz: "يمكن أن يكون التواصل بالإنجليزية أو الروسية أو الجورجية أو الكازاخية، مع إمكانية إشراك مترجمين لأي لغة أخرى عند الحاجة.",
        ge: "يمكن أن يكون التواصل بالإنجليزية أو الروسية أو الجورجية أو الكازاخية، مع إمكانية إشراك مترجمين لأي لغة أخرى عند الحاجة.",
      },
      needHelpLabel: "هل تحتاج مساعدة في routing؟",
      needHelpTitle: "ابدأ بمحادثة على مستوى العلامة، ثم انتقل إلى المسار الصحيح.",
      needHelpCta: "فتح التواصل",
    },
    contactPage: {
      title: "التواصل",
      description: "ابدأ محادثة مع InterLex وحدد ما إذا كان التكليف يجب أن يذهب إلى كازاخستان أو جورجيا.",
      eyebrow: "التواصل",
      introTitle: "ابدأ بالتكليف. بعد ذلك يجب أن يكون routing دقيقاً.",
      introBody: "المركز العالمي هو نقطة الاتصال الأولى الصحيحة عندما تكون المسألة ما تزال بحاجة إلى هيكلة. بعد ذلك تنتقل المحادثة إلى موقع السوق المناسب.",
      flowLabel: "مسار intake",
      steps: [
        "اشرح الأسواق المعنية.",
        "وضح هل المسألة استكشافية أم صفقة أم في مرحلة التنفيذ بالفعل.",
        "بعد ذلك يُوجَّه التكليف إلى موقع البلد الصحيح أو يبقى أولاً موضوعاً cross-border على مستوى العلامة.",
      ],
      closingLabel: "المحادثة الأولى",
      closingTitle: "ابدأ من المستوى الصحيح، ثم ادخل إلى السوق الصحيح.",
      closingBody: "يُستخدم المركز للمحادثة الأولى، وللتوجيه السريع، ولتحديد الخطوة التالية بوضوح. وعندما يتضح التكليف ينتقل العمل إلى interlex.kz أو interlex.ge حيث يجب أن تبقى تفاصيل السوق والتنفيذ.",
    },
    regionLinks: [
      {
        name: "كازاخستان",
        ...sharedDomains[0],
        language: "موقع RU-first",
        strapline: "دخول السوق، دعم قانوني، محاسبة، ضرائب، وتنفيذ تشغيلي مستمر في كازاخستان.",
        points: [
          "للمؤسسين والمستثمرين والفرق التشغيلية التي تدخل كازاخستان أو تتوسع داخلها.",
          "مناسب عندما يكون التسجيل المحلي أو التنفيذ المحلي أو العمل السوقي باللغة الروسية عاملاً حاسماً.",
          "استخدم هذا المسار عندما ينتمي العمل بوضوح إلى الممارسة الكازاخستانية.",
        ],
      },
      {
        name: "جورجيا",
        ...sharedDomains[1],
        language: "موقع EN-first",
        strapline: "هيكلة، ومسارات FIZ، وتموضع ضريبي، ودعم تشغيلي cross-border في جورجيا.",
        points: [
          "للعملاء الدوليين الذين يقارنون نماذج الدخول ومنطق holding والبنى الإقليمية.",
          "مناسب عندما تكون أنظمة جورجيا أو workflow باللغة الإنجليزية أو setup موجه للمستثمرين مهمة.",
          "استخدم هذا المسار عندما يجب أن يعيش التفصيل القضائي على الموقع الجورجي.",
        ],
      },
    ],
    contactChannels: [
      { label: "استفسارات عامة", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "للتعريف بالعلامة، routing، والصياغة الأولى للتكليف." },
      { label: "كازاخستان", value: "interlex.kz", href: "https://interlex.kz", note: "استخدمه عندما تكون المسألة تابعة بوضوح لكازاخستان." },
      { label: "جورجيا", value: "interlex.ge", href: "https://interlex.ge", note: "استخدمه عندما تكون المسألة تابعة بوضوح لجورجيا." },
    ],
  },
  tr: {
    lang: "tr",
    dir: "ltr",
    localeLabel: "TR",
    localeNative: "Türkçe",
    flag: "🇹🇷",
    servicesLabel: "Hizmetler",
    site: {
      title: "InterLex Global Hub",
      description: "InterLex’in Kazakistan ve Gürcistan’a yönlendiren çok dilli global hub’ı.",
      brand: "InterLex",
      tagline: "İki pazar. Tek ortak.",
      hubLabel: "Global Hub",
      compareMarkets: "Pazarları Karşılaştır",
      menuLabel: "Menü",
      markets: "Pazarlar",
      contact: "İletişim",
      footerTitle: "Yerel icranın doğru yerde kaldığı küresel bir giriş noktası.",
      footerBody: "interlex.work bilinçli olarak hafif tutulur: müşteriyi yönlendirir, bölgesel mantığı açıklar ve talebi doğru pazara taşır.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Hakkında" },
      { slug: "cross-border", label: "Sınır Ötesi" },
      { slug: "contact", label: "İletişim" },
      { slug: "briefs", label: "Briefs" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Tek marka, çok dil, iki pazar yönü.",
      lead: "interlex.work, InterLex’in çok dilli giriş noktasıdır. Markayı açıklar, talebi çerçeveler ve müşteriyi doğru pazar sitesine yönlendirir.",
      primaryCta: "Sınır Ötesini Aç",
      secondaryCta: "InterLex’i Tanıyın",
      logicLabel: "Hub Mantığı",
      notes: [
        "Tek bir InterLex markası, ayrı pazar yolları.",
        "Cross-border çerçeve hub’da kalır; yerel icra ülke sitesinde kalır.",
        "Hub’ı kopya katalog haline getirmeden çok dilli giriş.",
      ],
      logicBody: "İş zaten belirli bir yargı alanına aitse doğrudan ülke sitesine gidin. Yapı hâlâ netleşecekse hub’dan başlayın.",
      positioningLabel: "Konumlandırma",
      positioningTitle: "Daha net bir küresel giriş noktasıyla sınır ötesi hukuk ve iş danışmanlığı.",
      positioningBody: "Hub uluslararası, net ve premium görünmeli; ancak pazar sitelerinden daha hafif kalmalıdır.",
      sections: [
        { label: "Hakkında", slug: "about", title: "InterLex kimdir ve hub neden ayrı durur.", body: "Küresel site markayı, müşteri profilini ve yönlendirme mantığını yerel icrayı yutmadan açıklar." },
        { label: "Sınır Ötesi", slug: "cross-border", title: "Kazakistan ve Gürcistan tek bir advisory tablosunda nasıl yer alır.", body: "Karşılaştırma sayfası pazar girişi, yapılandırma, vergi mantığı ve operasyonlara yön verir." },
        { label: "İletişim", slug: "contact", title: "Doğru track’e geçmeden önce çok dilli ilk temas noktası.", body: "İletişim sayfası ilk görüşmeyi sade tutar ve müşteriyi doğru alan adına ve ekibe taşır." },
      ],
    },
    about: {
      title: "Hakkında",
      description: "InterLex’in global hub yapısını ve mandatları Kazakistan ile Gürcistan’a nasıl yönlendirdiğini öğrenin.",
      eyebrow: "InterLex Hakkında",
      introTitle: "Pazar bazlı hukuk ve iş icrasına sahip küresel bir marka.",
      introBody: "InterLex, interlex.work’ü temiz ve çok dilli bir hub olarak kullanır. Müşteri burada markayla tanışır, bölgesel haritayı anlar ve Kazakistan ile Gürcistan’ın aynı advisory sisteminde nasıl yer aldığını görür.",
      principlesLabel: "Bu Yapı Neden İşliyor",
      principles: [
        { title: "Önce marka, sonra icra", body: "InterLex tek bir marka mimarisi sunar; icrayı ise işi taşıması gereken yargı alanının sitesinde bırakır." },
        { title: "Sınır ötesi yönlendirme", body: "Hub, müşterinin pazarlar arasındaki ilişkiyi anlayıp doğru operasyon yolunu seçtiği yerdir." },
        { title: "Bölgesel derinlik yerinde kalır", body: "Detaylı hizmet katalogları, yerel SEO ve icra interlex.kz ve interlex.ge üzerinde kalır." },
      ],
      practiceLabel: "InterLex Pratikte",
      practice: [
        "Hub; yönlendirme, konumlandırma ve ilk routing kararı içindir.",
        "Kazakistan ve Gürcistan daha derin yerel içerik ve icrayı üstlenir.",
        "Bu ayrım marka mimarisini temizler ve diller ile pazarlar arasındaki tekrarları azaltır.",
      ],
      nextLabel: "Sonraki Adım",
      nextTitle: "İki pazar yolunun nasıl karşılaştırıldığını görün.",
      nextBody: "Sınır ötesi sayfası, bölgesel siteye geçmeden önce farkı netleştirir.",
      nextCta: "Sınır Ötesini Aç",
    },
    crossBorder: {
      title: "Sınır Ötesi",
      description: "InterLex’in Kazakistan ve Gürcistan yollarını karşılaştırın ve mandatın nereye gitmesi gerektiğini görün.",
      eyebrow: "Sınır Ötesi",
      introTitle: "İki pazar sitesi, marka seviyesinde tek bir routing kararı.",
      introBody: "Mandat hâlâ şekilleniyorsa bu sayfayı kullanın. Kazakistan ve Gürcistan’ın InterLex içindeki rollerini netleştirir.",
      introSide: "Hub tüm işi tek sayfada kapatmaya çalışmaz. Görevi belirsizliği azaltmak ve müşteriyi doğru icra ortamına taşımaktır.",
      tableLabel: "İş Hattı",
      marketEntry: {
        title: "Pazara giriş",
        kz: "Kazakistan’a giren ekipler için kuruluş, yerel compliance, operasyonel başlangıç, muhasebe ve vergi desteği.",
        ge: "Gürcistan’ı değerlendiren ekipler için holding ve operasyon yapıları, FIZ mantığı, özel rejimler ve setup modelleri.",
      },
      investor: {
        title: "Yatırımcı profili",
        kz: "Mandat yerel icraya, yerel taraflara veya Kazakistan içindeki operasyona bağlıysa daha uygundur.",
        ge: "Mandat uluslararası yapılandırma, esneklik ve yatırımcı odaklı mimariye bağlıysa daha uygundur.",
      },
      language: {
        title: "Çalışma dilleri",
        kz: "İletişim İngilizce, Rusça, Gürcüce veya Kazakça yürütülebilir; gerektiğinde diğer tüm diller için çevirmen desteği sağlanabilir.",
        ge: "İletişim İngilizce, Rusça, Gürcüce veya Kazakça yürütülebilir; gerektiğinde diğer tüm diller için çevirmen desteği sağlanabilir.",
      },
      needHelpLabel: "Routing yardımı mı gerekiyor?",
      needHelpTitle: "Önce marka seviyesinde konuşun, sonra doğru track’e geçin.",
      needHelpCta: "İletişimi Aç",
    },
    contactPage: {
      title: "İletişim",
      description: "InterLex ile konuşmaya başlayın ve mandatın Kazakistan’a mı yoksa Gürcistan’a mı gitmesi gerektiğini belirleyin.",
      eyebrow: "İletişim",
      introTitle: "Mandatla başlayın. Sonrasında routing net olmalıdır.",
      introBody: "Konu hâlâ yapılandırılacaksa global hub doğru ilk temas noktasıdır. Sonrasında görüşme doğru pazar sitesine taşınır.",
      flowLabel: "Intake Akışı",
      steps: [
        "İlgili pazarları açıklayın.",
        "Konunun keşif, işlem veya zaten icra aşamasında olup olmadığını belirtin.",
        "Ardından mandat doğru ülke sitesine yönlendirilir veya önce marka seviyesinde cross-border konu olarak ele alınır.",
      ],
      closingLabel: "İlk Görüşme",
      closingTitle: "Doğru seviyeden başlayın, sonra doğru pazara geçin.",
      closingBody: "Hub ilk görüşme, hızlı yön bulma ve sonraki adımı netleştirme içindir. Mandat tanımlandığında iş interlex.kz veya interlex.ge’ye geçer; pazar detayı ve icra da orada kalır.",
    },
    regionLinks: [
      {
        name: "Kazakistan",
        ...sharedDomains[0],
        language: "RU-first market site",
        strapline: "Pazara giriş, hukuki destek, muhasebe, vergi ve operasyonel icra Kazakistan’da.",
        points: [
          "Kazakistan’a giren veya orada büyüyen kurucular, yatırımcılar ve ekipler için.",
          "Yerel dosyalama, yerel icra veya Rusça pazar bağlamı gerekiyorsa daha uygundur.",
          "İş açıkça Kazakistan pratiğine aitse bu yolu kullanın.",
        ],
      },
      {
        name: "Gürcistan",
        ...sharedDomains[1],
        language: "EN-first market site",
        strapline: "Yapılandırma, FIZ yolları, vergi konumlandırması ve sınır ötesi operasyon desteği Gürcistan’da.",
        points: [
          "Giriş modellerini, holding mantığını ve bölgesel yapıları karşılaştıran uluslararası müşteriler için.",
          "Gürcistan rejimleri, English-first workflow veya investor-facing setup önemliyse daha uygundur.",
          "Yargısal detay Gürcistan sitesinde yaşamalıysa bu yolu kullanın.",
        ],
      },
    ],
    contactChannels: [
      { label: "Genel talepler", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Marka seviyesi giriş, routing ve ilk mandat çerçevesi için." },
      { label: "Kazakistan", value: "interlex.kz", href: "https://interlex.kz", note: "Konu açıkça Kazakistan’a aitse bunu kullanın." },
      { label: "Gürcistan", value: "interlex.ge", href: "https://interlex.ge", note: "Konu açıkça Gürcistan’a aitse bunu kullanın." },
    ],
  },
  es: {
    lang: "es",
    dir: "ltr",
    localeLabel: "ES",
    localeNative: "Español",
    flag: "🇪🇸",
    servicesLabel: "Servicios",
    site: {
      title: "InterLex Global Hub",
      description: "Hub global multilingüe de InterLex con enrutamiento hacia Kazajistán y Georgia.",
      brand: "InterLex",
      tagline: "Dos mercados. Un socio.",
      hubLabel: "Hub Global",
      compareMarkets: "Comparar Mercados",
      menuLabel: "Menú",
      markets: "Mercados",
      contact: "Contacto",
      footerTitle: "Una puerta de entrada global con ejecución local donde corresponde.",
      footerBody: "interlex.work se mantiene deliberadamente ligero: orienta al cliente, explica la lógica regional y dirige el mandato al mercado correcto sin duplicar el detalle operativo.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Nosotros" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contacto" },
      { slug: "briefs", label: "Briefs" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Una marca, varios idiomas, dos direcciones de mercado.",
      lead: "interlex.work es la puerta de entrada multilingüe de InterLex. Presenta la marca, ayuda a enmarcar el mandato y dirige al cliente hacia el sitio de mercado correcto.",
      primaryCta: "Abrir Cross-border",
      secondaryCta: "Conocer InterLex",
      logicLabel: "Lógica del Hub",
      notes: [
        "Una sola marca InterLex con destinos de mercado separados.",
        "El marco cross-border vive en el hub; la ejecución local, en el sitio del país.",
        "Entrada multilingüe sin convertir el hub en un catálogo duplicado.",
      ],
      logicBody: "Si el trabajo ya pertenece claramente a una jurisdicción, vaya directamente al sitio del país. Si la estructura aún debe definirse, empiece aquí.",
      positioningLabel: "Posicionamiento",
      positioningTitle: "Advisory legal y business cross-border con una entrada global más clara.",
      positioningBody: "El hub debe sentirse internacional, preciso y premium, pero más ligero que los sitios específicos de mercado.",
      sections: [
        { label: "Nosotros", slug: "about", title: "Quién es InterLex y por qué el hub existe por separado.", body: "El sitio global explica la marca, el perfil del cliente y la lógica de routing sin sustituir la ejecución local." },
        { label: "Cross-border", slug: "cross-border", title: "Cómo encajan Kazajistán y Georgia en una misma imagen advisory.", body: "La página comparativa orienta sobre entrada de mercado, estructuración, fiscalidad y operación." },
        { label: "Contacto", slug: "contact", title: "Un punto de intake multilingüe antes de pasar al track correcto.", body: "La página de contacto simplifica la primera conversación y lleva al cliente al dominio y al equipo adecuados." },
      ],
    },
    about: {
      title: "Nosotros",
      description: "Descubra cómo InterLex estructura su hub global y dirige mandatos hacia Kazajistán y Georgia.",
      eyebrow: "Sobre InterLex",
      introTitle: "Una marca global con ejecución legal y empresarial específica por mercado.",
      introBody: "InterLex utiliza interlex.work como un hub multilingüe claro. Aquí el cliente conoce la marca, entiende el mapa regional y ve cómo Kazajistán y Georgia funcionan dentro de un mismo sistema advisory.",
      principlesLabel: "Por Qué Esta Estructura Funciona",
      principles: [
        { title: "Primero la marca, después la ejecución", body: "InterLex presenta una arquitectura de marca única y deja la ejecución al sitio de la jurisdicción que debe llevar el trabajo." },
        { title: "Orientación cross-border", body: "El hub es el lugar donde el cliente entiende la relación entre mercados antes de elegir el camino operativo." },
        { title: "La profundidad regional sigue siendo regional", body: "Los catálogos detallados, el SEO local y la ejecución permanecen en interlex.kz y interlex.ge." },
      ],
      practiceLabel: "InterLex en la Práctica",
      practice: [
        "El hub sirve para orientar, posicionar y tomar la primera decisión de routing.",
        "Kazajistán y Georgia asumen después el detalle local y la ejecución real.",
        "Esta separación hace más limpia la arquitectura de marca y reduce duplicaciones entre idiomas y mercados.",
      ],
      nextLabel: "Siguiente Paso",
      nextTitle: "Vea cómo se comparan los dos caminos de mercado.",
      nextBody: "La página cross-border hace explícita la diferencia antes del paso a un sitio regional.",
      nextCta: "Abrir Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Compare los caminos de InterLex para Kazajistán y Georgia y entienda a qué mercado debe ir el mandato.",
      eyebrow: "Cross-border",
      introTitle: "Dos sitios de mercado, una decisión de routing a nivel de marca.",
      introBody: "Use esta página cuando el mandato aún se está definiendo. Aclara los distintos papeles de Kazajistán y Georgia dentro del sistema InterLex.",
      introSide: "El hub no intenta cerrar todo el mandato en una sola página. Su trabajo es reducir la ambigüedad y llevar al cliente al entorno correcto de ejecución.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Entrada al mercado",
        kz: "Constitución, compliance local, arranque operativo, contabilidad y soporte fiscal para equipos que entran en Kazajistán.",
        ge: "Estructuras holding y operativas, lógica FIZ, regímenes especiales y modelos de setup para quienes comparan Georgia.",
      },
      investor: {
        title: "Perfil inversor",
        kz: "Más adecuado cuando el mandato depende de ejecución local, contrapartes locales o trabajo operativo dentro de Kazajistán.",
        ge: "Más adecuado cuando el mandato depende de estructuración internacional, flexibilidad y arquitectura orientada a inversores.",
      },
      language: {
        title: "Idiomas de trabajo",
        kz: "La comunicación puede realizarse en inglés, ruso, georgiano o kazajo, y pueden incorporarse traductores para cualquier otro idioma cuando sea necesario.",
        ge: "La comunicación puede realizarse en inglés, ruso, georgiano o kazajo, y pueden incorporarse traductores para cualquier otro idioma cuando sea necesario.",
      },
      needHelpLabel: "¿Necesita ayuda con el routing?",
      needHelpTitle: "Empiece con una conversación de marca y luego pase al track correcto.",
      needHelpCta: "Abrir Contacto",
    },
    contactPage: {
      title: "Contacto",
      description: "Comience una conversación con InterLex y vea si el mandato debe ir a Kazajistán o a Georgia.",
      eyebrow: "Contacto",
      introTitle: "Empiece por el mandato. Después, el routing debe ser preciso.",
      introBody: "El hub global es el punto correcto de primer contacto cuando el asunto aún debe estructurarse. Después, la conversación pasa al sitio de mercado adecuado.",
      flowLabel: "Flujo de Intake",
      steps: [
        "Describa los mercados implicados.",
        "Indique si la cuestión es exploratoria, transaccional o ya está en ejecución.",
        "Después, el mandato se dirige al sitio país correcto o se trata primero como tema cross-border a nivel de marca.",
      ],
      closingLabel: "Primera Conversación",
      closingTitle: "Empiece en el nivel correcto y luego entre en el mercado correcto.",
      closingBody: "El hub sirve para la primera conversación, la orientación rápida y la definición del siguiente paso. Cuando el mandato está claro, el trabajo pasa a interlex.kz o interlex.ge, donde deben quedar el detalle de mercado y la ejecución.",
    },
    regionLinks: [
      {
        name: "Kazajistán",
        ...sharedDomains[0],
        language: "Sitio RU-first",
        strapline: "Entrada de mercado, soporte legal, contabilidad, fiscalidad y ejecución operativa continua en Kazajistán.",
        points: [
          "Para founders, inversores y equipos operativos que entran o escalan en Kazajistán.",
          "Ideal cuando el mandato depende de registros locales, ejecución local o trabajo de mercado en ruso.",
          "Use esta ruta cuando el trabajo pertenece claramente a la práctica kazaja.",
        ],
      },
      {
        name: "Georgia",
        ...sharedDomains[1],
        language: "Sitio EN-first",
        strapline: "Estructuración, rutas FIZ, posicionamiento fiscal y soporte operativo cross-border en Georgia.",
        points: [
          "Para clientes internacionales que comparan modelos de entrada, lógica holding y estructuras regionales.",
          "Ideal cuando importan los regímenes georgianos, el workflow en inglés o un setup orientado a inversores.",
          "Use esta ruta cuando el detalle jurisdiccional debe vivir en el sitio georgiano.",
        ],
      },
    ],
    contactChannels: [
      { label: "Consultas generales", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Para introducción a la marca, routing y primer encuadre del mandato." },
      { label: "Kazajistán", value: "interlex.kz", href: "https://interlex.kz", note: "Úselo cuando la cuestión pertenezca claramente a Kazajistán." },
      { label: "Georgia", value: "interlex.ge", href: "https://interlex.ge", note: "Úselo cuando la cuestión pertenezca claramente a Georgia." },
    ],
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getServicesLabel(locale: Locale) {
  return dictionaries[locale].servicesLabel;
}
