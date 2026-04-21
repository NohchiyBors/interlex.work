import type { Metadata } from "next";

export const locales = ["en", "ru", "zh", "it", "fr", "ka", "de", "ar", "tr", "es"] as const;
export const defaultLocale = "en";
export const baseUrl = "https://interlex.work";

export type Locale = (typeof locales)[number];

type NavItem = {
  slug: "" | "about" | "cross-border" | "contact";
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
  site: {
    title: string;
    description: string;
    brand: string;
    hubLabel: string;
    compareMarkets: string;
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
    site: {
      title: "InterLex Global Hub",
      description: "Global hub for InterLex with multilingual routing into Kazakhstan and Georgia.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Compare Markets",
      markets: "Markets",
      contact: "Contact",
      footerTitle: "A global front door with local execution where it belongs.",
      footerBody: "interlex.work stays intentionally light: orient the client, explain the regional logic, and route the mandate into the right market-specific site.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "About" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contact" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "One brand, multiple language routes, two market destinations.",
      lead: "interlex.work is the multilingual front door for InterLex. It explains the brand, helps frame the mandate, and routes the client into the correct market-specific site.",
      primaryCta: "Explore Cross-border",
      secondaryCta: "Read About InterLex",
      logicLabel: "Hub Logic",
      notes: [
        "One InterLex brand with separate market-specific destinations.",
        "Cross-border framing on the hub, local execution on the country domain.",
        "Multilingual entry without turning the hub into a duplicate catalogue.",
      ],
      logicBody: "If the work already belongs to a specific jurisdiction, go directly to the country domain. If the scope still needs framing, start here and route from the hub.",
      positioningLabel: "Positioning",
      positioningTitle: "Cross-border legal and business advisory with a cleaner global entry point.",
      positioningBody: "The hub should feel international, premium, and multilingual while staying lighter than the market-specific sites.",
      sections: [
        { label: "About", slug: "about", title: "Who InterLex is and why the hub exists separately.", body: "The global site explains the brand, the client profile, and the routing logic without absorbing country-level execution detail." },
        { label: "Cross-border", slug: "cross-border", title: "How Kazakhstan and Georgia fit into one advisory picture.", body: "Use the comparison page to orient mandates touching entry, structuring, tax posture, and operational continuity." },
        { label: "Contact", slug: "contact", title: "A multilingual intake point before the handoff into the correct track.", body: "The contact page keeps the first conversation simple and routes it into the right domain and execution team." },
      ],
    },
    about: {
      title: "About",
      description: "Learn how InterLex structures its global hub and routes mandates into Kazakhstan and Georgia.",
      eyebrow: "About InterLex",
      introTitle: "A global-facing brand with market-specific legal and business execution.",
      introBody: "InterLex uses interlex.work as a clean multilingual hub. It is where the client meets the brand, understands the regional map, and sees how Kazakhstan and Georgia sit inside one advisory picture.",
      principlesLabel: "Why This Structure Works",
      principles: [
        { title: "Brand first, execution second", body: "InterLex presents one brand architecture while keeping execution on the jurisdiction-specific domain that owns the mandate." },
        { title: "Cross-border orientation", body: "The hub is where a client understands the relationship between markets before choosing the delivery route." },
        { title: "Regional depth stays regional", body: "Detailed service catalogues, local SEO logic, and market execution remain inside interlex.kz and interlex.ge." },
      ],
      practiceLabel: "InterLex In Practice",
      practice: [
        "The hub is for orientation, positioning, and decision support.",
        "Kazakhstan and Georgia then carry the deeper market-specific language, service detail, and operating pathways needed to execute the work.",
        "This split keeps the brand architecture cleaner and reduces duplication across languages and markets.",
      ],
      nextLabel: "Next Step",
      nextTitle: "See how the two market tracks compare.",
      nextBody: "The cross-border page makes the split explicit so a client can self-orient before moving into a regional site.",
      nextCta: "Open Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Compare the InterLex Kazakhstan and Georgia tracks and route the mandate into the right market site.",
      eyebrow: "Cross-border",
      introTitle: "Two market sites, one brand-level routing decision.",
      introBody: "Use this page when the mandate is still being framed. It clarifies the different roles of Kazakhstan and Georgia inside the InterLex system.",
      introSide: "The hub does not try to win the whole mandate on one page. Its job is to reduce ambiguity and point the client into the delivery environment that matches the jurisdictional logic of the work.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Market entry",
        kz: "Entity setup, local compliance, operational launch, accounting, and tax support for teams entering Kazakhstan.",
        ge: "Holding and operating structures, FIZ logic, special regimes, and setup models for teams comparing Georgia pathways.",
      },
      investor: {
        title: "Investor posture",
        kz: "Best when the mandate turns on local execution, local counterparties, or market-facing institutional work in Kazakhstan.",
        ge: "Best when the mandate turns on international structuring, flexibility, and investor-facing cross-border architecture.",
      },
      language: {
        title: "Operating language",
        kz: "RU-first market site for founders and teams needing Russian-language market context and implementation detail.",
        ge: "EN-first market site for international clients who want English-first orientation and jurisdiction-specific planning.",
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
      introBody: "The global hub is the right place for first contact when the matter still needs framing. Once the structure is clear, the conversation can move into the Kazakhstan or Georgia market site.",
      flowLabel: "Intake Flow",
      steps: [
        "Describe the market or markets involved.",
        "Outline whether the question is exploratory, transactional, or already in execution.",
        "The mandate is then routed into the correct country site or handled as a cross-border brand-level discussion first.",
      ],
      closingLabel: "What The Hub Should Do",
      closingTitle: "Keep intake simple. Keep execution where it belongs.",
      closingBody: "This page is intentionally lean. It gives the user a clear first step and keeps deeper market-specific material inside interlex.kz and interlex.ge.",
    },
    regionLinks: [
      {
        name: "Kazakhstan",
        ...sharedDomains[0],
        language: "RU-first market site",
        strapline: "Operational entry, legal support, accounting, tax, and ongoing execution in Kazakhstan.",
        points: [
          "Built for founders, investors, and operating teams entering or scaling in Kazakhstan.",
          "Best fit when the mandate depends on local filings, local implementation, or Russian-language market work.",
          "Use this route when the work belongs inside the Kazakhstan delivery stack.",
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
      { label: "Kazakhstan track", value: "interlex.kz", href: "https://interlex.kz", note: "Use when the matter clearly belongs to the Kazakhstan market site." },
      { label: "Georgia track", value: "interlex.ge", href: "https://interlex.ge", note: "Use when the matter clearly belongs to the Georgia market site." },
    ],
  },
  ru: {
    lang: "ru",
    dir: "ltr",
    localeLabel: "RU",
    localeNative: "Русский",
    flag: "🇷🇺",
    site: {
      title: "InterLex Global Hub",
      description: "Глобальный хаб InterLex с мультиязычной маршрутизацией в Казахстан и Грузию.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Сравнить рынки",
      markets: "Рынки",
      contact: "Контакт",
      footerTitle: "Глобальная входная точка с локальным исполнением там, где ему место.",
      footerBody: "interlex.work намеренно остаётся лёгким: сориентировать клиента, объяснить региональную логику и направить мандат на нужный market-specific сайт.",
    },
    nav: [
      { slug: "", label: "Хаб" },
      { slug: "about", label: "О нас" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Контакт" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Один бренд, много языков, два рыночных направления.",
      lead: "interlex.work — мультиязычная входная точка InterLex. Сайт объясняет бренд, помогает правильно сформулировать мандат и переводит клиента на нужный market-specific сайт.",
      primaryCta: "Открыть Cross-border",
      secondaryCta: "Узнать об InterLex",
      logicLabel: "Логика хаба",
      notes: [
        "Один бренд InterLex с отдельными market-specific направлениями.",
        "Cross-border рамка на хабе, локальное исполнение на домене страны.",
        "Мультиязычный вход без превращения хаба в дубликат каталога.",
      ],
      logicBody: "Если работа уже явно относится к конкретной юрисдикции, идите сразу на домен страны. Если объём ещё нужно уточнить, начните с хаба.",
      positioningLabel: "Позиционирование",
      positioningTitle: "Cross-border legal и business advisory с более чистой глобальной входной точкой.",
      positioningBody: "Хаб должен ощущаться международным, премиальным и мультиязычным, оставаясь легче, чем market-specific сайты.",
      sections: [
        { label: "О нас", slug: "about", title: "Кто такой InterLex и почему хаб существует отдельно.", body: "Глобальный сайт объясняет бренд, профиль клиента и логику маршрутизации без поглощения локального execution-слоя." },
        { label: "Cross-border", slug: "cross-border", title: "Как Казахстан и Грузия собираются в одну advisory-картину.", body: "Эта страница помогает сориентировать мандаты по входу на рынок, структурированию и операционной модели." },
        { label: "Контакт", slug: "contact", title: "Мультиязычная точка входа перед передачей в нужный трек.", body: "Контактная страница делает первый разговор простым и направляет его в правильный домен и команду." },
      ],
    },
    about: {
      title: "О нас",
      description: "Узнайте, как InterLex строит глобальный хаб и маршрутизирует мандаты в Казахстан и Грузию.",
      eyebrow: "О InterLex",
      introTitle: "Глобально ориентированный бренд с рыночным legal и business execution.",
      introBody: "InterLex использует interlex.work как чистый мультиязычный хаб. Здесь клиент знакомится с брендом, понимает региональную карту и видит, как Казахстан и Грузия входят в общую advisory-модель.",
      principlesLabel: "Почему это работает",
      principles: [
        { title: "Сначала бренд, потом исполнение", body: "InterLex показывает единую архитектуру бренда, сохраняя исполнение на домене той юрисдикции, где живёт мандат." },
        { title: "Cross-border ориентация", body: "На хабе клиент понимает связь между рынками до выбора delivery-маршрута." },
        { title: "Локальная глубина остаётся локальной", body: "Детальные каталоги услуг, SEO и рыночное исполнение остаются внутри interlex.kz и interlex.ge." },
      ],
      practiceLabel: "InterLex на практике",
      practice: [
        "Хаб нужен для ориентации, позиционирования и decision support.",
        "Казахстан и Грузия затем несут более глубокий market-specific язык, service detail и execution pathways.",
        "Такое разделение делает бренд чище и уменьшает дублирование между языками и рынками.",
      ],
      nextLabel: "Следующий шаг",
      nextTitle: "Посмотрите, как сравниваются два рыночных трека.",
      nextBody: "Страница cross-border делает разделение явным до перехода на региональный сайт.",
      nextCta: "Открыть Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Сравните треки InterLex для Казахстана и Грузии и направьте мандат на правильный market site.",
      eyebrow: "Cross-border",
      introTitle: "Два market site, одно брендовое routing-решение.",
      introBody: "Используйте эту страницу, когда мандат ещё формируется. Она показывает разные роли Казахстана и Грузии внутри системы InterLex.",
      introSide: "Хаб не пытается закрыть весь мандат на одной странице. Его задача — убрать неопределённость и направить клиента в правильную среду исполнения.",
      tableLabel: "Направление",
      marketEntry: {
        title: "Вход на рынок",
        kz: "Регистрация, local compliance, запуск операций, бухгалтерия и налоги для команд, входящих в Казахстан.",
        ge: "Холдинговые и операционные структуры, FIZ-логика, special regimes и setup-модели для Грузии.",
      },
      investor: {
        title: "Инвесторский фокус",
        kz: "Лучший выбор, когда мандат зависит от локального исполнения, локальных контрагентов и институциональной работы в Казахстане.",
        ge: "Лучший выбор, когда мандат зависит от международного структурирования, гибкости и investor-facing архитектуры.",
      },
      language: {
        title: "Рабочий язык",
        kz: "RU-first market site для фаундеров и команд, которым нужен русскоязычный рыночный контекст и implementation detail.",
        ge: "EN-first market site для международных клиентов, которым нужна англоязычная ориентация и planning по юрисдикции.",
      },
      needHelpLabel: "Нужна помощь с маршрутизацией?",
      needHelpTitle: "Начните с брендового диалога, затем переходите в правильный трек.",
      needHelpCta: "Открыть Контакт",
    },
    contactPage: {
      title: "Контакт",
      description: "Начните брендовый диалог с InterLex и направьте мандат в Казахстан или Грузию.",
      eyebrow: "Контакт",
      introTitle: "Начните с мандата. Дальше маршрутизация должна быть точной.",
      introBody: "Глобальный хаб — правильная точка первого контакта, когда вопрос ещё нужно оформить. После этого разговор можно перевести на сайт Казахстана или Грузии.",
      flowLabel: "Схема intake",
      steps: [
        "Опишите, какой рынок или рынки затронуты.",
        "Уточните, это exploratory, transactional или уже execution-фаза.",
        "После этого мандат переводится на нужный country site или сначала остаётся в cross-border brand-level обсуждении.",
      ],
      closingLabel: "Что должен делать хаб",
      closingTitle: "Делать intake простым. Оставлять execution там, где ему место.",
      closingBody: "Эта страница намеренно остаётся лёгкой. Она даёт понятный первый шаг и не вытаскивает market-specific материал из interlex.kz и interlex.ge.",
    },
    regionLinks: [
      {
        name: "Казахстан",
        ...sharedDomains[0],
        language: "RU-first market site",
        strapline: "Выход на рынок, legal support, бухгалтерия, налоги и операционное сопровождение в Казахстане.",
        points: [
          "Для фаундеров, инвесторов и команд, входящих или растущих в Казахстане.",
          "Подходит, когда важны локальные filings, local implementation или русскоязычная рыночная работа.",
          "Используйте этот маршрут, когда работа относится к Казахстанскому delivery stack.",
        ],
      },
      {
        name: "Грузия",
        ...sharedDomains[1],
        language: "EN-first market site",
        strapline: "Структурирование, FIZ pathways, налоговая позиция и cross-border operating support в Грузии.",
        points: [
          "Для международных клиентов, сравнивающих entry models, holding logic и regional structures.",
          "Подходит, когда важны режимы Грузии, English-first workflow или investor-facing setup.",
          "Используйте этот маршрут, когда именно грузинский сайт должен нести юрисдикционную детализацию.",
        ],
      },
    ],
    contactChannels: [
      { label: "Общие запросы", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Для брендового входа, маршрутизации и первичного формулирования мандата." },
      { label: "Трек Казахстан", value: "interlex.kz", href: "https://interlex.kz", note: "Используйте, если вопрос явно относится к сайту Казахстана." },
      { label: "Трек Грузия", value: "interlex.ge", href: "https://interlex.ge", note: "Используйте, если вопрос явно относится к сайту Грузии." },
    ],
  },
  zh: {
    lang: "zh-Hans",
    dir: "ltr",
    localeLabel: "ZH",
    localeNative: "中文",
    flag: "🇨🇳",
    site: {
      title: "InterLex 全球枢纽",
      description: "InterLex 的多语言全球枢纽，可路由到哈萨克斯坦和格鲁吉亚。",
      brand: "InterLex",
      hubLabel: "全球枢纽",
      compareMarkets: "比较市场",
      markets: "市场",
      contact: "联系",
      footerTitle: "全球入口，执行仍然留在本地市场站点。",
      footerBody: "interlex.work 保持轻量化：先帮助客户理解区域逻辑，再把项目导向正确的市场站点。",
    },
    nav: [
      { slug: "", label: "枢纽" },
      { slug: "about", label: "关于" },
      { slug: "cross-border", label: "跨境" },
      { slug: "contact", label: "联系" },
    ],
    home: {
      eyebrow: "InterLex 全球枢纽",
      title: "一个品牌，多种语言，两个市场目的地。",
      lead: "interlex.work 是 InterLex 的多语言入口。它解释品牌、帮助界定项目范围，并把客户导向正确的市场站点。",
      primaryCta: "查看跨境页面",
      secondaryCta: "了解 InterLex",
      logicLabel: "枢纽逻辑",
      notes: [
        "一个 InterLex 品牌，对应独立的市场站点。",
        "跨境框架在枢纽，具体执行在国家域名。",
        "支持多语言，但不把枢纽做成重复的服务目录。",
      ],
      logicBody: "如果项目已经明确属于某一司法辖区，请直接进入对应国家站点。如果范围仍需梳理，请从这里开始。",
      positioningLabel: "定位",
      positioningTitle: "更清晰的全球入口，用于跨境法律与商业顾问。",
      positioningBody: "枢纽应当是国际化、专业且多语言的，同时比市场站点更轻、更聚焦。",
      sections: [
        { label: "关于", slug: "about", title: "InterLex 是谁，以及为什么枢纽独立存在。", body: "全球站点解释品牌、客户类型和路由逻辑，而不取代本地执行层。" },
        { label: "跨境", slug: "cross-border", title: "哈萨克斯坦与格鲁吉亚如何组成一张顾问地图。", body: "用于帮助客户判断市场进入、结构设计和运营安排应当走哪个轨道。" },
        { label: "联系", slug: "contact", title: "多语言初始沟通入口，再转交到正确轨道。", body: "联系页面让第一步更简单，然后把项目导向正确的域名和执行团队。" },
      ],
    },
    about: {
      title: "关于",
      description: "了解 InterLex 如何构建全球枢纽，并把项目路由到哈萨克斯坦和格鲁吉亚。",
      eyebrow: "关于 InterLex",
      introTitle: "面向全球的品牌，结合市场化的法律与商业执行。",
      introBody: "InterLex 把 interlex.work 作为干净的多语言枢纽，让客户先理解品牌和区域结构，再进入哈萨克斯坦或格鲁吉亚的执行环境。",
      principlesLabel: "为什么这种结构有效",
      principles: [
        { title: "先品牌，后执行", body: "InterLex 以统一品牌呈现，但把真正的执行保留在拥有该项目的司法辖区域名上。" },
        { title: "跨境导向", body: "客户先在枢纽理解两个市场之间的关系，再选择交付路径。" },
        { title: "本地深度留在本地", body: "详细服务目录、SEO 逻辑和市场执行仍然保留在 interlex.kz 和 interlex.ge。" },
      ],
      practiceLabel: "实际运作",
      practice: [
        "枢纽用于定位、判断和初步决策支持。",
        "更深的市场语言、服务细节和执行路径由哈萨克斯坦与格鲁吉亚站点承载。",
        "这种划分减少多语言和多市场之间的重复内容。",
      ],
      nextLabel: "下一步",
      nextTitle: "查看两个市场轨道如何比较。",
      nextBody: "跨境页面会明确展示二者差异，帮助客户在进入区域站点前完成自我判断。",
      nextCta: "打开跨境页面",
    },
    crossBorder: {
      title: "跨境",
      description: "比较 InterLex 在哈萨克斯坦和格鲁吉亚的轨道，并把项目导向正确市场站点。",
      eyebrow: "跨境",
      introTitle: "两个市场站点，一个品牌层面的路由决策。",
      introBody: "当项目范围仍在定义时，请使用此页面。它说明哈萨克斯坦和格鲁吉亚在 InterLex 系统中的不同角色。",
      introSide: "枢纽的目标不是在一页中完成全部销售，而是减少不确定性，并把客户导向最合适的执行环境。",
      tableLabel: "工作方向",
      marketEntry: {
        title: "市场进入",
        kz: "适用于进入哈萨克斯坦的实体设立、合规、运营启动、会计与税务支持。",
        ge: "适用于比较格鲁吉亚控股/运营结构、FIZ 路径和特殊制度。",
      },
      investor: {
        title: "投资者视角",
        kz: "当项目依赖本地执行、本地交易对手或哈萨克斯坦的机构化工作时更适合。",
        ge: "当项目依赖国际结构设计、灵活性和投资者导向的跨境架构时更适合。",
      },
      language: {
        title: "工作语言",
        kz: "以俄语为主的市场站点，适合需要俄语市场语境与实施细节的团队。",
        ge: "以英语为主的市场站点，适合需要英语导向与司法辖区规划的国际客户。",
      },
      needHelpLabel: "需要帮助判断？",
      needHelpTitle: "先从品牌层面对话开始，再进入正确轨道。",
      needHelpCta: "打开联系页面",
    },
    contactPage: {
      title: "联系",
      description: "从品牌层面开始与 InterLex 沟通，再把项目导向哈萨克斯坦或格鲁吉亚。",
      eyebrow: "联系",
      introTitle: "先定义项目，再进行精准路由。",
      introBody: "如果项目仍需梳理，全球枢纽是正确的第一接触点。结构明确后，再进入哈萨克斯坦或格鲁吉亚站点。",
      flowLabel: "沟通流程",
      steps: [
        "说明涉及的市场。",
        "说明该问题是探索阶段、交易阶段，还是已经进入执行阶段。",
        "随后项目将被导向正确国家站点，或先保留在跨境品牌层面的讨论中。",
      ],
      closingLabel: "枢纽应该做什么",
      closingTitle: "让 intake 简单，让执行留在正确的位置。",
      closingBody: "本页故意保持轻量化。它只提供清晰的第一步，不把更深的市场内容从 interlex.kz 和 interlex.ge 拿出来。",
    },
    regionLinks: [
      {
        name: "哈萨克斯坦",
        ...sharedDomains[0],
        language: "俄语优先市场站点",
        strapline: "面向哈萨克斯坦的市场进入、法律支持、会计、税务和持续运营执行。",
        points: [
          "适合进入或扩展哈萨克斯坦市场的创始人、投资者和运营团队。",
          "当项目依赖本地申报、本地执行或俄语市场工作时尤其适合。",
          "当工作明确属于哈萨克斯坦交付体系时使用该路线。",
        ],
      },
      {
        name: "格鲁吉亚",
        ...sharedDomains[1],
        language: "英语优先市场站点",
        strapline: "面向格鲁吉亚的结构设计、FIZ 路径、税务定位与跨境运营支持。",
        points: [
          "适合比较进入模式、控股逻辑和区域结构的国际客户。",
          "当项目依赖格鲁吉亚制度、英语工作流或投资者导向设置时尤其适合。",
          "当需要由格鲁吉亚站点承载司法辖区细节时使用该路线。",
        ],
      },
    ],
    contactChannels: [
      { label: "一般咨询", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "用于品牌层面的介绍、路由和项目初步界定。" },
      { label: "哈萨克斯坦轨道", value: "interlex.kz", href: "https://interlex.kz", note: "当事项明显属于哈萨克斯坦站点时使用。" },
      { label: "格鲁吉亚轨道", value: "interlex.ge", href: "https://interlex.ge", note: "当事项明显属于格鲁吉亚站点时使用。" },
    ],
  },
  it: {
    lang: "it",
    dir: "ltr",
    localeLabel: "IT",
    localeNative: "Italiano",
    flag: "🇮🇹",
    site: {
      title: "InterLex Global Hub",
      description: "Hub globale multilingue di InterLex con instradamento verso Kazakistan e Georgia.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Confronta mercati",
      markets: "Mercati",
      contact: "Contatto",
      footerTitle: "Un ingresso globale con esecuzione locale dove serve davvero.",
      footerBody: "interlex.work resta volutamente leggero: orienta il cliente, spiega la logica regionale e indirizza il mandato verso il sito di mercato corretto.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Chi siamo" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contatto" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Un marchio, più lingue, due destinazioni di mercato.",
      lead: "interlex.work è la porta d’ingresso multilingue di InterLex. Presenta il brand, aiuta a definire il mandato e indirizza il cliente verso il sito di mercato più adatto.",
      primaryCta: "Esplora Cross-border",
      secondaryCta: "Scopri InterLex",
      logicLabel: "Logica dell’hub",
      notes: [
        "Un solo brand InterLex con siti di mercato separati.",
        "Il quadro cross-border vive sull’hub; l’esecuzione locale sul dominio del paese.",
        "Accesso multilingue senza trasformare l’hub in un catalogo duplicato.",
      ],
      logicBody: "Se il lavoro appartiene già chiaramente a una giurisdizione, vai direttamente al dominio del paese. Se il perimetro va ancora definito, inizia dall’hub.",
      positioningLabel: "Posizionamento",
      positioningTitle: "Advisory legale e business cross-border con un ingresso globale più pulito.",
      positioningBody: "L’hub deve risultare internazionale, premium e multilingue, ma più leggero dei siti di mercato.",
      sections: [
        { label: "Chi siamo", slug: "about", title: "Chi è InterLex e perché l’hub esiste separatamente.", body: "Il sito globale spiega il brand, il profilo cliente e la logica di routing senza assorbire il dettaglio operativo locale." },
        { label: "Cross-border", slug: "cross-border", title: "Come Kazakistan e Georgia si inseriscono in un unico quadro advisory.", body: "La pagina di confronto orienta i mandati relativi a ingresso, strutturazione e operatività." },
        { label: "Contatto", slug: "contact", title: "Un punto di intake multilingue prima del passaggio al track corretto.", body: "La pagina contatti rende semplice il primo passaggio e instrada verso dominio e team giusti." },
      ],
    },
    about: {
      title: "Chi siamo",
      description: "Scopri come InterLex struttura il proprio hub globale e instrada i mandati verso Kazakistan e Georgia.",
      eyebrow: "Su InterLex",
      introTitle: "Un brand globale con esecuzione legale e business specifica per mercato.",
      introBody: "InterLex usa interlex.work come hub multilingue pulito. Qui il cliente incontra il brand, comprende la mappa regionale e vede come Kazakistan e Georgia si inseriscono nello stesso quadro advisory.",
      principlesLabel: "Perché questa struttura funziona",
      principles: [
        { title: "Prima il brand, poi l’esecuzione", body: "InterLex presenta un’unica architettura di brand, lasciando l’esecuzione al dominio della giurisdizione che possiede il mandato." },
        { title: "Orientamento cross-border", body: "L’hub è il luogo in cui il cliente comprende la relazione tra i mercati prima di scegliere il percorso di delivery." },
        { title: "La profondità regionale resta regionale", body: "Cataloghi dettagliati, logica SEO locale ed esecuzione restano su interlex.kz e interlex.ge." },
      ],
      practiceLabel: "InterLex in pratica",
      practice: [
        "L’hub serve per orientamento, posizionamento e supporto decisionale.",
        "Kazakistan e Georgia portano poi il dettaglio linguistico, di servizio e di execution necessario.",
        "Questa separazione riduce duplicazioni tra lingue e mercati.",
      ],
      nextLabel: "Passo successivo",
      nextTitle: "Vedi come si confrontano i due track di mercato.",
      nextBody: "La pagina cross-border rende esplicita la differenza prima del passaggio al sito regionale.",
      nextCta: "Apri Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Confronta i track InterLex per Kazakistan e Georgia e instrada il mandato verso il market site corretto.",
      eyebrow: "Cross-border",
      introTitle: "Due siti di mercato, una decisione di routing a livello brand.",
      introBody: "Usa questa pagina quando il mandato è ancora in fase di definizione. Chiarisce i ruoli di Kazakistan e Georgia nel sistema InterLex.",
      introSide: "L’hub non cerca di vincere l’intero mandato in una sola pagina. Il suo compito è ridurre l’ambiguità e indirizzare verso l’ambiente di esecuzione corretto.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Ingresso sul mercato",
        kz: "Setup societario, compliance locale, avvio operativo, accounting e tax support per team che entrano in Kazakistan.",
        ge: "Strutture holding e operative, logica FIZ, regimi speciali e modelli di setup per la Georgia.",
      },
      investor: {
        title: "Prospettiva investitore",
        kz: "Ideale quando il mandato dipende da esecuzione locale, controparti locali o lavoro istituzionale in Kazakistan.",
        ge: "Ideale quando il mandato dipende da strutturazione internazionale, flessibilità e architettura cross-border investor-facing.",
      },
      language: {
        title: "Lingua operativa",
        kz: "Market site RU-first per founder e team che richiedono contesto di mercato in russo e dettaglio operativo.",
        ge: "Market site EN-first per clienti internazionali che vogliono orientamento in inglese e pianificazione giurisdizionale.",
      },
      needHelpLabel: "Serve aiuto per il routing?",
      needHelpTitle: "Inizia da una conversazione a livello brand, poi passa al track corretto.",
      needHelpCta: "Apri Contatto",
    },
    contactPage: {
      title: "Contatto",
      description: "Avvia una conversazione brand-level con InterLex e instrada il mandato verso Kazakistan o Georgia.",
      eyebrow: "Contatto",
      introTitle: "Parti dal mandato. Poi instrada con precisione.",
      introBody: "L’hub globale è il posto giusto per il primo contatto quando la questione va ancora inquadrata. Una volta chiarita la struttura, la conversazione può passare al sito di Kazakistan o Georgia.",
      flowLabel: "Flusso di intake",
      steps: [
        "Descrivi il mercato o i mercati coinvolti.",
        "Indica se la questione è esplorativa, transazionale o già in esecuzione.",
        "Il mandato viene poi instradato verso il sito paese corretto oppure gestito inizialmente come discussione cross-border a livello brand.",
      ],
      closingLabel: "Cosa deve fare l’hub",
      closingTitle: "Semplificare l’intake. Lasciare l’esecuzione dove deve stare.",
      closingBody: "Questa pagina resta volutamente essenziale. Offre un primo passo chiaro e lascia il materiale più profondo ai siti di mercato.",
    },
    regionLinks: [
      {
        name: "Kazakistan",
        ...sharedDomains[0],
        language: "Market site RU-first",
        strapline: "Ingresso sul mercato, supporto legale, accounting, tax e operatività continua in Kazakistan.",
        points: [
          "Per founder, investitori e team operativi che entrano o crescono in Kazakistan.",
          "Più adatto quando il mandato dipende da filing locali, implementazione locale o lavoro di mercato in russo.",
          "Usa questo percorso quando il lavoro appartiene chiaramente al delivery stack del Kazakistan.",
        ],
      },
      {
        name: "Georgia",
        ...sharedDomains[1],
        language: "Market site EN-first",
        strapline: "Strutturazione, percorsi FIZ, posizionamento fiscale e supporto operativo cross-border in Georgia.",
        points: [
          "Per clienti internazionali che confrontano modelli di ingresso, holding logic e strutture regionali.",
          "Più adatto quando il mandato dipende da regimi georgiani, workflow in inglese o setup investor-facing.",
          "Usa questo percorso quando il dettaglio giurisdizionale deve vivere sul sito georgiano.",
        ],
      },
    ],
    contactChannels: [
      { label: "Richieste generali", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Per introduzioni brand-level, routing e prima definizione del mandato." },
      { label: "Track Kazakistan", value: "interlex.kz", href: "https://interlex.kz", note: "Usalo quando la questione appartiene chiaramente al sito del Kazakistan." },
      { label: "Track Georgia", value: "interlex.ge", href: "https://interlex.ge", note: "Usalo quando la questione appartiene chiaramente al sito della Georgia." },
    ],
  },
  fr: {
    lang: "fr",
    dir: "ltr",
    localeLabel: "FR",
    localeNative: "Français",
    flag: "🇫🇷",
    site: {
      title: "InterLex Global Hub",
      description: "Hub mondial multilingue d’InterLex avec routage vers le Kazakhstan et la Géorgie.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Comparer les marchés",
      markets: "Marchés",
      contact: "Contact",
      footerTitle: "Une porte d’entrée mondiale avec une exécution locale là où elle doit se trouver.",
      footerBody: "interlex.work reste volontairement léger : il oriente le client, explique la logique régionale et redirige le mandat vers le bon site de marché.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "À propos" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contact" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Une marque, plusieurs langues, deux destinations de marché.",
      lead: "interlex.work est la porte d’entrée multilingue d’InterLex. Le site présente la marque, aide à cadrer le mandat et dirige le client vers le bon site de marché.",
      primaryCta: "Explorer Cross-border",
      secondaryCta: "Découvrir InterLex",
      logicLabel: "Logique du hub",
      notes: [
        "Une seule marque InterLex avec des sites de marché distincts.",
        "Le cadrage cross-border vit sur le hub, l’exécution locale sur le domaine du pays.",
        "Une entrée multilingue sans transformer le hub en catalogue dupliqué.",
      ],
      logicBody: "Si le travail appartient déjà clairement à une juridiction, allez directement au domaine du pays. Si le périmètre doit encore être clarifié, commencez par le hub.",
      positioningLabel: "Positionnement",
      positioningTitle: "Conseil juridique et business cross-border avec un point d’entrée global plus lisible.",
      positioningBody: "Le hub doit paraître international, premium et multilingue tout en restant plus léger que les sites de marché.",
      sections: [
        { label: "À propos", slug: "about", title: "Qui est InterLex et pourquoi le hub existe séparément.", body: "Le site global explique la marque, le profil client et la logique de routage sans absorber l’exécution locale." },
        { label: "Cross-border", slug: "cross-border", title: "Comment le Kazakhstan et la Géorgie s’inscrivent dans une seule image advisory.", body: "La page de comparaison oriente les mandats liés à l’entrée de marché, à la structuration et à l’opérationnel." },
        { label: "Contact", slug: "contact", title: "Un point d’entrée multilingue avant le transfert vers le bon track.", body: "La page contact simplifie le premier échange et l’envoie vers le bon domaine et la bonne équipe." },
      ],
    },
    about: {
      title: "À propos",
      description: "Découvrez comment InterLex structure son hub global et route les mandats vers le Kazakhstan et la Géorgie.",
      eyebrow: "À propos d’InterLex",
      introTitle: "Une marque à vocation globale avec une exécution juridique et business propre à chaque marché.",
      introBody: "InterLex utilise interlex.work comme hub multilingue propre. C’est ici que le client rencontre la marque, comprend la carte régionale et voit comment le Kazakhstan et la Géorgie s’inscrivent dans un même cadre advisory.",
      principlesLabel: "Pourquoi cette structure fonctionne",
      principles: [
        { title: "La marque d’abord, l’exécution ensuite", body: "InterLex présente une seule architecture de marque tout en gardant l’exécution sur le domaine de la juridiction qui porte le mandat." },
        { title: "Orientation cross-border", body: "Le hub permet au client de comprendre la relation entre les marchés avant de choisir la voie de delivery." },
        { title: "La profondeur régionale reste régionale", body: "Les catalogues détaillés, la logique SEO locale et l’exécution de marché restent sur interlex.kz et interlex.ge." },
      ],
      practiceLabel: "InterLex en pratique",
      practice: [
        "Le hub sert à l’orientation, au positionnement et au support de décision.",
        "Le Kazakhstan et la Géorgie portent ensuite le détail linguistique, de service et d’exécution nécessaire.",
        "Cette séparation réduit les duplications entre langues et marchés.",
      ],
      nextLabel: "Étape suivante",
      nextTitle: "Voyez comment les deux tracks de marché se comparent.",
      nextBody: "La page cross-border explicite cette séparation avant le passage vers un site régional.",
      nextCta: "Ouvrir Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Comparez les tracks InterLex pour le Kazakhstan et la Géorgie et routez le mandat vers le bon market site.",
      eyebrow: "Cross-border",
      introTitle: "Deux sites de marché, une seule décision de routage au niveau de la marque.",
      introBody: "Utilisez cette page lorsque le mandat est encore en cours de définition. Elle clarifie les rôles du Kazakhstan et de la Géorgie dans le système InterLex.",
      introSide: "Le hub n’essaie pas de gagner tout le mandat sur une seule page. Son rôle est de réduire l’ambiguïté et d’orienter vers le bon environnement d’exécution.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Entrée sur le marché",
        kz: "Constitution, conformité locale, lancement opérationnel, comptabilité et fiscalité pour les équipes entrant au Kazakhstan.",
        ge: "Structures holding et opérationnelles, logique FIZ, régimes spéciaux et modèles d’implantation en Géorgie.",
      },
      investor: {
        title: "Posture investisseur",
        kz: "Le meilleur choix lorsque le mandat dépend d’une exécution locale, de contreparties locales ou d’un travail institutionnel au Kazakhstan.",
        ge: "Le meilleur choix lorsque le mandat dépend d’une structuration internationale, de flexibilité et d’une architecture cross-border orientée investisseurs.",
      },
      language: {
        title: "Langue de travail",
        kz: "Site de marché RU-first pour les fondateurs et équipes qui ont besoin d’un contexte marché en russe et de détails d’implémentation.",
        ge: "Site de marché EN-first pour les clients internationaux qui souhaitent une orientation en anglais et une planification par juridiction.",
      },
      needHelpLabel: "Besoin d’aide pour le routage ?",
      needHelpTitle: "Commencez par une conversation au niveau de la marque, puis passez au bon track.",
      needHelpCta: "Ouvrir Contact",
    },
    contactPage: {
      title: "Contact",
      description: "Démarrez une conversation brand-level avec InterLex et routez le mandat vers le Kazakhstan ou la Géorgie.",
      eyebrow: "Contact",
      introTitle: "Commencez par le mandat. Le routage doit ensuite être précis.",
      introBody: "Le hub global est le bon point de premier contact lorsque le sujet doit encore être cadré. Une fois la structure clarifiée, la conversation peut passer au site Kazakhstan ou Géorgie.",
      flowLabel: "Flux d’intake",
      steps: [
        "Décrivez le ou les marchés concernés.",
        "Indiquez si la question est exploratoire, transactionnelle ou déjà en exécution.",
        "Le mandat est ensuite routé vers le bon site pays ou traité d’abord comme discussion cross-border au niveau de la marque.",
      ],
      closingLabel: "Ce que le hub doit faire",
      closingTitle: "Rendre l’intake simple. Garder l’exécution à sa place.",
      closingBody: "Cette page reste volontairement légère. Elle donne une première étape claire et laisse le contenu plus profond aux sites de marché.",
    },
    regionLinks: [
      {
        name: "Kazakhstan",
        ...sharedDomains[0],
        language: "Site de marché RU-first",
        strapline: "Entrée de marché, support juridique, comptabilité, fiscalité et exécution continue au Kazakhstan.",
        points: [
          "Pour les fondateurs, investisseurs et équipes opérationnelles entrant ou se développant au Kazakhstan.",
          "Pertinent lorsque le mandat dépend de filings locaux, d’implémentation locale ou d’un travail de marché en russe.",
          "Utilisez cette voie lorsque le travail relève clairement du delivery stack Kazakhstan.",
        ],
      },
      {
        name: "Géorgie",
        ...sharedDomains[1],
        language: "Site de marché EN-first",
        strapline: "Structuration, parcours FIZ, positionnement fiscal et support opérationnel cross-border en Géorgie.",
        points: [
          "Pour les clients internationaux qui comparent les modèles d’entrée, holding logic et structures régionales.",
          "Pertinent lorsque le mandat dépend de régimes géorgiens, d’un workflow en anglais ou d’un setup investor-facing.",
          "Utilisez cette voie lorsque le détail juridictionnel doit vivre sur le site géorgien.",
        ],
      },
    ],
    contactChannels: [
      { label: "Demandes générales", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Pour les introductions brand-level, le routage et le cadrage initial du mandat." },
      { label: "Track Kazakhstan", value: "interlex.kz", href: "https://interlex.kz", note: "À utiliser si le sujet relève clairement du site Kazakhstan." },
      { label: "Track Géorgie", value: "interlex.ge", href: "https://interlex.ge", note: "À utiliser si le sujet relève clairement du site Géorgie." },
    ],
  },
  ka: {
    lang: "ka",
    dir: "ltr",
    localeLabel: "KA",
    localeNative: "ქართული",
    flag: "🇬🇪",
    site: {
      title: "InterLex Global Hub",
      description: "InterLex-ის მრავალენოვანი გლობალური ჰაბი, რომელიც მანდატს ყაზახეთსა და საქართველოსკენ მიმართავს.",
      brand: "InterLex",
      hubLabel: "გლობალური ჰაბი",
      compareMarkets: "ბაზრების შედარება",
      markets: "ბაზრები",
      contact: "კონტაქტი",
      footerTitle: "გლობალური შესასვლელი, ადგილობრივი შესრულებით იქ, სადაც ამას რეალურად ეკუთვნის ადგილი.",
      footerBody: "interlex.work განზრახ მსუბუქია: კლიენტს ორიენტირებას აძლევს, ხსნის რეგიონულ ლოგიკას და მანდატს სწორ market-specific საიტზე აგზავნის.",
    },
    nav: [
      { slug: "", label: "ჰაბი" },
      { slug: "about", label: "ჩვენ შესახებ" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "კონტაქტი" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "ერთი ბრენდი, ბევრი ენა, ორი საბაზრო მიმართულება.",
      lead: "interlex.work არის InterLex-ის მრავალენოვანი შესასვლელი. აქ კლიენტი ეცნობა ბრენდს, აყალიბებს მანდატს და გადადის შესაბამის market-specific საიტზე.",
      primaryCta: "Cross-border გვერდი",
      secondaryCta: "InterLex-ის შესახებ",
      logicLabel: "ჰაბის ლოგიკა",
      notes: [
        "ერთი InterLex ბრენდი და ცალკეული market-specific საიტები.",
        "Cross-border ჩარჩო ჰაბზეა, ადგილობრივი შესრულება კი ქვეყნის დომენზე.",
        "მრავალენოვანი შესასვლელი, კატალოგის დუბლირების გარეშე.",
      ],
      logicBody: "თუ საქმე უკვე აშკარად ეკუთვნის კონკრეტულ იურისდიქციას, გადადით ქვეყნის დომენზე. თუ მოცულობა ჯერ კიდევ დასაზუსტებელია, დაიწყეთ ჰაბიდან.",
      positioningLabel: "პოზიციონირება",
      positioningTitle: "Cross-border legal და business advisory უფრო სუფთა გლობალური შესასვლელით.",
      positioningBody: "ჰაბი უნდა იყოს საერთაშორისო, პრემიუმ და მრავალენოვანი, მაგრამ უფრო მსუბუქი, ვიდრე market-specific საიტები.",
      sections: [
        { label: "ჩვენ შესახებ", slug: "about", title: "ვინ არის InterLex და რატომ არსებობს ჰაბი განცალკევებით.", body: "გლობალური საიტი ხსნის ბრენდს, კლიენტის პროფილს და routing-ის ლოგიკას ისე, რომ ადგილობრივ execution-ს არ ანაცვლებს." },
        { label: "Cross-border", slug: "cross-border", title: "როგორ ერთიანდება ყაზახეთი და საქართველო ერთ advisory სურათში.", body: "ეს გვერდი ეხმარება კლიენტს შესვლაზე, სტრუქტურირებაზე და ოპერაციულ მოდელზე ორიენტაციაში." },
        { label: "კონტაქტი", slug: "contact", title: "მრავალენოვანი intake წერტილი სწორ track-ზე გადაყვანამდე.", body: "კონტაქტის გვერდი პირველ დიალოგს ამარტივებს და მას სწორ დომენსა და გუნდში გადააქვს." },
      ],
    },
    about: {
      title: "ჩვენ შესახებ",
      description: "გაიგეთ, როგორ აწყობს InterLex გლობალურ ჰაბს და როგორ მიმართავს მანდატებს ყაზახეთსა და საქართველოში.",
      eyebrow: "InterLex-ის შესახებ",
      introTitle: "გლობალურად მიმართული ბრენდი market-specific legal და business execution-ით.",
      introBody: "InterLex იყენებს interlex.work-ს როგორც სუფთა მრავალენოვან ჰაბს. აქ კლიენტი ხვდება ბრენდს, ხედავს რეგიონულ რუკას და იგებს, როგორ ერთიანდება ყაზახეთი და საქართველო ერთ advisory სურათში.",
      principlesLabel: "რატომ მუშაობს ეს სტრუქტურა",
      principles: [
        { title: "ჯერ ბრენდი, შემდეგ შესრულება", body: "InterLex აჩვენებს ერთიან ბრენდს, მაგრამ execution-ს ტოვებს იმ იურისდიქციის დომენზე, რომელსაც მანდატი ეკუთვნის." },
        { title: "Cross-border ორიენტაცია", body: "ჰაბი არის ადგილი, სადაც კლიენტი ჯერ ბაზრებს შორის კავშირს იგებს და მხოლოდ შემდეგ ირჩევს delivery მარშრუტს." },
        { title: "რეგიონული სიღრმე რეგიონში რჩება", body: "დეტალური კატალოგები, ადგილობრივი SEO და market execution რჩება interlex.kz-სა და interlex.ge-ზე." },
      ],
      practiceLabel: "InterLex პრაქტიკაში",
      practice: [
        "ჰაბი საჭიროა ორიენტაციისთვის, პოზიციონირებისთვის და decision support-ისთვის.",
        "უფრო ღრმა market-specific ენა, სერვისები და execution pathways შემდეგ გადადის ყაზახეთსა და საქართველოში.",
        "ეს გაყოფა ამცირებს დუბლირებას ენებსა და ბაზრებს შორის.",
      ],
      nextLabel: "შემდეგი ნაბიჯი",
      nextTitle: "ნახეთ, როგორ შედარებულია ორი market track.",
      nextBody: "cross-border გვერდი ამ განსხვავებას რეგიონულ საიტზე გადასვლამდე ხდის ცხადს.",
      nextCta: "Cross-border გახსნა",
    },
    crossBorder: {
      title: "Cross-border",
      description: "შეადარეთ InterLex-ის ყაზახეთისა და საქართველოს track-ები და მიმართეთ მანდატი სწორ market site-ზე.",
      eyebrow: "Cross-border",
      introTitle: "ორი market site, ერთი ბრენდული routing-გადაწყვეტილება.",
      introBody: "გამოიყენეთ ეს გვერდი, როცა მანდატი ჯერ კიდევ ფორმირების პროცესშია. ის ხსნის ყაზახეთისა და საქართველოს როლებს InterLex-ის სისტემაში.",
      introSide: "ჰაბის მიზანი არ არის მთელი მანდატის ერთ გვერდზე მოგება. მისი ამოცანაა გაურკვევლობის შემცირება და კლიენტის სწორ execution გარემოში გადამისამართება.",
      tableLabel: "მიმართულება",
      marketEntry: {
        title: "ბაზარზე შესვლა",
        kz: "რეგისტრაცია, ადგილობრივი compliance, ოპერაციული გაშვება, accounting და tax support ყაზახეთში შემსვლელი გუნდებისთვის.",
        ge: "ჰოლდინგისა და ოპერაციული სტრუქტურები, FIZ ლოგიკა, special regimes და setup მოდელები საქართველოსთვის.",
      },
      investor: {
        title: "ინვესტორული ფოკუსი",
        kz: "უკეთესია, როცა მანდატი ადგილობრივ execution-ზე, ადგილობრივ counterparties-ზე ან ინსტიტუციურ მუშაობაზეა დამოკიდებული ყაზახეთში.",
        ge: "უკეთესია, როცა მანდატი დამოკიდებულია საერთაშორისო სტრუქტურირებაზე, მოქნილობაზე და investor-facing cross-border არქიტექტურაზე.",
      },
      language: {
        title: "სამუშაო ენა",
        kz: "RU-first market site ფაუნდერებისა და გუნდებისთვის, რომლებსაც სჭირდებათ რუსულენოვანი market context და implementation detail.",
        ge: "EN-first market site საერთაშორისო კლიენტებისთვის, რომლებსაც სჭირდებათ ინგლისურენოვანი orientation და jurisdiction-specific planning.",
      },
      needHelpLabel: "გჭირდებათ routing დახმარება?",
      needHelpTitle: "დაიწყეთ brand-level დიალოგით და შემდეგ გადადით სწორ track-ზე.",
      needHelpCta: "კონტაქტის გახსნა",
    },
    contactPage: {
      title: "კონტაქტი",
      description: "დაიწყეთ InterLex-თან brand-level საუბარი და მიმართეთ მანდატი ყაზახეთსა თუ საქართველოში.",
      eyebrow: "კონტაქტი",
      introTitle: "დაიწყეთ მანდატით. შემდეგ routing ზუსტი უნდა იყოს.",
      introBody: "გლობალური ჰაბი სწორი პირველი საკონტაქტო წერტილია, როცა საკითხი ჯერ კიდევ დასაფორმებელია. ამის შემდეგ საუბარი შეიძლება გადავიდეს ყაზახეთის ან საქართველოს საიტზე.",
      flowLabel: "Intake პროცესი",
      steps: [
        "აღწერეთ, რომელი ბაზარი ან ბაზრებია ჩართული.",
        "მიუთითეთ, საკითხი exploratory, transactional თუ უკვე execution ფაზაშია.",
        "ამის შემდეგ მანდატი გადაიგზავნება სწორ country site-ზე ან პირველ რიგში დარჩება cross-border brand-level განხილვაში.",
      ],
      closingLabel: "რას უნდა აკეთებდეს ჰაბი",
      closingTitle: "Intake მარტივი უნდა იყოს. Execution იქ უნდა დარჩეს, სადაც ეკუთვნის.",
      closingBody: "ეს გვერდი შეგნებულად მსუბუქია. ის მხოლოდ ნათელ პირველ ნაბიჯს იძლევა და ღრმა market-specific მასალას ბაზრის საიტებზე ტოვებს.",
    },
    regionLinks: [
      {
        name: "ყაზახეთი",
        ...sharedDomains[0],
        language: "RU-first market site",
        strapline: "ბაზარზე შესვლა, legal support, accounting, tax და მუდმივი ოპერაციული შესრულება ყაზახეთში.",
        points: [
          "ფაუნდერებისთვის, ინვესტორებისთვის და ოპერაციული გუნდებისთვის, რომლებიც ყაზახეთში შედიან ან იზრდებიან.",
          "საუკეთესოა, როცა მანდატი დამოკიდებულია ადგილობრივ filings-ზე, local implementation-ზე ან რუსულენოვან საბაზრო მუშაობაზე.",
          "გამოიყენეთ ეს მარშრუტი, როცა საქმე ყაზახეთის delivery stack-ს ეკუთვნის.",
        ],
      },
      {
        name: "საქართველო",
        ...sharedDomains[1],
        language: "EN-first market site",
        strapline: "სტრუქტურირება, FIZ pathways, საგადასახადო პოზიციონირება და cross-border operating support საქართველოში.",
        points: [
          "საერთაშორისო კლიენტებისთვის, რომლებიც ადარებენ entry models-ს, holding logic-სა და regional structures-ს.",
          "საუკეთესოა, როცა მანდატი დამოკიდებულია საქართველოს რეჟიმებზე, English-first workflow-ზე ან investor-facing setup-ზე.",
          "გამოიყენეთ ეს მარშრუტი, როცა იურისდიქციული დეტალი ქართულ საიტზე უნდა იყოს განთავსებული.",
        ],
      },
    ],
    contactChannels: [
      { label: "ზოგადი მოთხოვნები", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "brand-level შესავლებისთვის, routing-ისთვის და მანდატის პირველადი ჩამოყალიბებისთვის." },
      { label: "ყაზახეთის track", value: "interlex.kz", href: "https://interlex.kz", note: "გამოიყენეთ, როცა საკითხი აშკარად ყაზახეთის საიტს ეკუთვნის." },
      { label: "საქართველოს track", value: "interlex.ge", href: "https://interlex.ge", note: "გამოიყენეთ, როცა საკითხი აშკარად საქართველოს საიტს ეკუთვნის." },
    ],
  },
  de: {
    lang: "de",
    dir: "ltr",
    localeLabel: "DE",
    localeNative: "Deutsch",
    flag: "🇩🇪",
    site: {
      title: "InterLex Global Hub",
      description: "Mehrsprachiger globaler Hub von InterLex mit Routing nach Kasachstan und Georgien.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Märkte vergleichen",
      markets: "Märkte",
      contact: "Kontakt",
      footerTitle: "Ein globaler Einstieg mit lokaler Umsetzung dort, wo sie hingehört.",
      footerBody: "interlex.work bleibt bewusst schlank: Der Hub orientiert den Mandanten, erklärt die regionale Logik und leitet das Mandat auf die richtige Marktseite weiter.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Über uns" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Kontakt" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Eine Marke, mehrere Sprachen, zwei Marktrouten.",
      lead: "interlex.work ist der mehrsprachige Einstiegspunkt von InterLex. Die Seite erklärt die Marke, hilft beim Framing des Mandats und leitet den Mandanten auf die passende Marktseite.",
      primaryCta: "Cross-border öffnen",
      secondaryCta: "Mehr über InterLex",
      logicLabel: "Hub-Logik",
      notes: [
        "Eine InterLex-Marke mit getrennten marktbezogenen Zielseiten.",
        "Cross-border Framing auf dem Hub, lokale Umsetzung auf der Landesdomain.",
        "Mehrsprachiger Einstieg ohne den Hub in einen duplizierten Katalog zu verwandeln.",
      ],
      logicBody: "Wenn die Arbeit bereits klar zu einer Jurisdiktion gehört, gehen Sie direkt zur Landesdomain. Wenn der Umfang noch geklärt werden muss, beginnen Sie hier.",
      positioningLabel: "Positionierung",
      positioningTitle: "Cross-border Legal- und Business-Advisory mit einem klareren globalen Einstieg.",
      positioningBody: "Der Hub soll international, hochwertig und mehrsprachig wirken und zugleich leichter bleiben als die Marktseiten.",
      sections: [
        { label: "Über uns", slug: "about", title: "Wer InterLex ist und warum der Hub separat existiert.", body: "Die globale Seite erklärt Marke, Mandantenprofil und Routing-Logik, ohne die lokale Umsetzungsschicht zu absorbieren." },
        { label: "Cross-border", slug: "cross-border", title: "Wie Kasachstan und Georgien in ein gemeinsames Advisory-Bild passen.", body: "Die Vergleichsseite orientiert Mandate zu Markt­eintritt, Strukturierung und operativem Setup." },
        { label: "Kontakt", slug: "contact", title: "Ein mehrsprachiger Intake-Punkt vor der Übergabe an den richtigen Track.", body: "Die Kontaktseite hält den ersten Schritt einfach und leitet in die richtige Domain und das richtige Team." },
      ],
    },
    about: {
      title: "Über uns",
      description: "Erfahren Sie, wie InterLex seinen globalen Hub strukturiert und Mandate nach Kasachstan und Georgien routet.",
      eyebrow: "Über InterLex",
      introTitle: "Eine global ausgerichtete Marke mit markt­spezifischer legaler und geschäftlicher Umsetzung.",
      introBody: "InterLex nutzt interlex.work als klaren mehrsprachigen Hub. Hier begegnet der Mandant der Marke, versteht die regionale Landkarte und sieht, wie Kasachstan und Georgien in ein gemeinsames Advisory-Modell passen.",
      principlesLabel: "Warum diese Struktur funktioniert",
      principles: [
        { title: "Zuerst die Marke, dann die Umsetzung", body: "InterLex zeigt eine einheitliche Markenarchitektur und belässt die Umsetzung auf der Domain der Jurisdiktion, die das Mandat trägt." },
        { title: "Cross-border Orientierung", body: "Der Hub ist der Ort, an dem der Mandant die Beziehung zwischen den Märkten versteht, bevor er den Delivery-Pfad wählt." },
        { title: "Regionale Tiefe bleibt regional", body: "Detaillierte Kataloge, lokale SEO-Logik und Marktausführung bleiben auf interlex.kz und interlex.ge." },
      ],
      practiceLabel: "InterLex in der Praxis",
      practice: [
        "Der Hub dient der Orientierung, Positionierung und Entscheidungsunterstützung.",
        "Kasachstan und Georgien tragen danach die tieferen marktbezogenen Inhalte, Services und Execution-Pfade.",
        "Diese Trennung reduziert Duplizierung zwischen Sprachen und Märkten.",
      ],
      nextLabel: "Nächster Schritt",
      nextTitle: "Sehen Sie, wie sich die beiden Markt-Tracks vergleichen.",
      nextBody: "Die Cross-border Seite macht diese Trennung explizit, bevor auf eine regionale Seite gewechselt wird.",
      nextCta: "Cross-border öffnen",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Vergleichen Sie die InterLex-Tracks für Kasachstan und Georgien und routen Sie das Mandat auf die richtige Marktseite.",
      eyebrow: "Cross-border",
      introTitle: "Zwei Marktseiten, eine Routing-Entscheidung auf Markenebene.",
      introBody: "Nutzen Sie diese Seite, wenn das Mandat noch definiert wird. Sie klärt die unterschiedlichen Rollen von Kasachstan und Georgien im InterLex-System.",
      introSide: "Der Hub versucht nicht, das ganze Mandat auf einer Seite zu gewinnen. Seine Aufgabe ist es, Unklarheit zu reduzieren und in die passende Umsetzungsumgebung zu führen.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Markteintritt",
        kz: "Gesellschaftsgründung, lokale Compliance, operativer Start, Accounting und Tax Support für Teams beim Eintritt nach Kasachstan.",
        ge: "Holding- und Operating-Strukturen, FIZ-Logik, Sonderregime und Setup-Modelle für Georgien.",
      },
      investor: {
        title: "Investor-Fokus",
        kz: "Am besten geeignet, wenn das Mandat von lokaler Umsetzung, lokalen Gegenparteien oder institutioneller Arbeit in Kasachstan abhängt.",
        ge: "Am besten geeignet, wenn das Mandat von internationaler Strukturierung, Flexibilität und investor-facing Cross-border Architektur abhängt.",
      },
      language: {
        title: "Arbeitssprache",
        kz: "RU-first Marktseite für Gründer und Teams, die russischsprachigen Marktkontext und Umsetzungsdetail benötigen.",
        ge: "EN-first Marktseite für internationale Mandanten, die englischsprachige Orientierung und jurisdiktionsspezifische Planung wünschen.",
      },
      needHelpLabel: "Brauchen Sie Hilfe beim Routing?",
      needHelpTitle: "Beginnen Sie mit einem Gespräch auf Markenebene und wechseln Sie dann in den richtigen Track.",
      needHelpCta: "Kontakt öffnen",
    },
    contactPage: {
      title: "Kontakt",
      description: "Starten Sie ein Gespräch mit InterLex auf Markenebene und routen Sie das Mandat nach Kasachstan oder Georgien.",
      eyebrow: "Kontakt",
      introTitle: "Beginnen Sie mit dem Mandat. Danach muss das Routing präzise sein.",
      introBody: "Der globale Hub ist der richtige erste Kontaktpunkt, wenn das Thema noch strukturiert werden muss. Sobald die Struktur klar ist, kann das Gespräch auf die Seite Kasachstan oder Georgien wechseln.",
      flowLabel: "Intake-Ablauf",
      steps: [
        "Beschreiben Sie, welcher Markt oder welche Märkte betroffen sind.",
        "Skizzieren Sie, ob es sich um eine explorative, transaktionale oder bereits operative Frage handelt.",
        "Danach wird das Mandat auf die richtige Länderseite geroutet oder zunächst als brand-level Cross-border Gespräch behandelt.",
      ],
      closingLabel: "Was der Hub leisten soll",
      closingTitle: "Den Intake einfach halten. Die Umsetzung dort lassen, wo sie hingehört.",
      closingBody: "Diese Seite bleibt bewusst schlank. Sie gibt einen klaren ersten Schritt und belässt tiefere marktspezifische Inhalte auf den Marktseiten.",
    },
    regionLinks: [
      {
        name: "Kasachstan",
        ...sharedDomains[0],
        language: "RU-first Marktseite",
        strapline: "Markteintritt, legaler Support, Accounting, Tax und laufende operative Umsetzung in Kasachstan.",
        points: [
          "Für Gründer, Investoren und operative Teams, die nach Kasachstan eintreten oder dort skalieren.",
          "Besonders passend, wenn das Mandat von lokalen Filings, lokaler Implementierung oder russischsprachiger Marktkommunikation abhängt.",
          "Nutzen Sie diese Route, wenn die Arbeit klar in den kasachischen Delivery-Stack gehört.",
        ],
      },
      {
        name: "Georgien",
        ...sharedDomains[1],
        language: "EN-first Marktseite",
        strapline: "Strukturierung, FIZ-Wege, steuerliche Positionierung und cross-border Operating Support in Georgien.",
        points: [
          "Für internationale Mandanten, die Entry-Modelle, Holding-Logik und regionale Strukturen vergleichen.",
          "Besonders passend, wenn das Mandat von georgischen Regimen, englischem Workflow oder investor-facing Setup abhängt.",
          "Nutzen Sie diese Route, wenn die jurisdiktionsspezifische Tiefe auf der georgischen Seite liegen soll.",
        ],
      },
    ],
    contactChannels: [
      { label: "Allgemeine Anfragen", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Für Einführungen auf Markenebene, Routing und erste Mandatsklärung." },
      { label: "Kasachstan-Track", value: "interlex.kz", href: "https://interlex.kz", note: "Nutzen Sie dies, wenn das Thema klar zur Kasachstan-Seite gehört." },
      { label: "Georgien-Track", value: "interlex.ge", href: "https://interlex.ge", note: "Nutzen Sie dies, wenn das Thema klar zur Georgien-Seite gehört." },
    ],
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    localeLabel: "AR",
    localeNative: "العربية",
    flag: "🇸🇦",
    site: {
      title: "InterLex Global Hub",
      description: "المركز العالمي متعدد اللغات لـ InterLex مع توجيه إلى كازاخستان وجورجيا.",
      brand: "InterLex",
      hubLabel: "المركز العالمي",
      compareMarkets: "مقارنة الأسواق",
      markets: "الأسواق",
      contact: "اتصال",
      footerTitle: "مدخل عالمي مع تنفيذ محلي في المكان الصحيح.",
      footerBody: "يبقى interlex.work خفيفاً عن قصد: يوجّه العميل ويشرح المنطق الإقليمي ثم يحوّل التكليف إلى موقع السوق المناسب.",
    },
    nav: [
      { slug: "", label: "المركز" },
      { slug: "about", label: "من نحن" },
      { slug: "cross-border", label: "عبر الحدود" },
      { slug: "contact", label: "اتصال" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "علامة واحدة، لغات متعددة، ومساران سوقيان.",
      lead: "interlex.work هو المدخل متعدد اللغات لـ InterLex. يشرح العلامة، ويساعد في صياغة التكليف، ثم يوجّه العميل إلى موقع السوق الصحيح.",
      primaryCta: "استكشاف عبر الحدود",
      secondaryCta: "التعرّف على InterLex",
      logicLabel: "منطق المركز",
      notes: [
        "علامة InterLex واحدة مع مواقع سوق منفصلة.",
        "الإطار عبر الحدود على المركز، والتنفيذ المحلي على نطاق الدولة.",
        "دخول متعدد اللغات من دون تحويل المركز إلى كتالوج مكرر.",
      ],
      logicBody: "إذا كان العمل يخص ولاية قضائية محددة بالفعل، انتقل مباشرة إلى نطاق الدولة. وإذا كان النطاق يحتاج إلى توضيح، ابدأ من هنا.",
      positioningLabel: "التموضع",
      positioningTitle: "استشارات قانونية وتجارية عبر الحدود مع نقطة دخول عالمية أوضح.",
      positioningBody: "يجب أن يبدو المركز دولياً وراقياً ومتعدد اللغات، مع بقائه أخف من مواقع الأسواق.",
      sections: [
        { label: "من نحن", slug: "about", title: "من هي InterLex ولماذا يوجد المركز بشكل مستقل.", body: "الموقع العالمي يشرح العلامة، ونوع العملاء، ومنطق التوجيه من دون أن يحل محل التنفيذ المحلي." },
        { label: "عبر الحدود", slug: "cross-border", title: "كيف يندمج كازاخستان وجورجيا ضمن صورة استشارية واحدة.", body: "تُستخدم صفحة المقارنة لتوجيه التكليفات المرتبطة بالدخول إلى السوق والهيكلة والتشغيل." },
        { label: "اتصال", slug: "contact", title: "نقطة intake متعددة اللغات قبل تحويل الملف إلى المسار الصحيح.", body: "تجعل صفحة الاتصال الخطوة الأولى أبسط ثم توجه الملف إلى النطاق والفريق المناسبين." },
      ],
    },
    about: {
      title: "من نحن",
      description: "تعرّف على كيفية بناء InterLex لمركزها العالمي وتوجيه التكليفات إلى كازاخستان وجورجيا.",
      eyebrow: "حول InterLex",
      introTitle: "علامة موجهة عالمياً مع تنفيذ قانوني وتجاري خاص بكل سوق.",
      introBody: "تستخدم InterLex موقع interlex.work كمركز متعدد اللغات ونظيف. هنا يلتقي العميل بالعلامة ويفهم الخريطة الإقليمية ويرى كيف يندمج كازاخستان وجورجيا ضمن صورة استشارية واحدة.",
      principlesLabel: "لماذا تعمل هذه البنية",
      principles: [
        { title: "العلامة أولاً ثم التنفيذ", body: "تقدّم InterLex بنية علامة واحدة مع إبقاء التنفيذ على نطاق الولاية القضائية التي تملك التكليف." },
        { title: "توجيه عبر الحدود", body: "المركز هو المكان الذي يفهم فيه العميل العلاقة بين الأسواق قبل اختيار مسار التنفيذ." },
        { title: "العمق الإقليمي يبقى إقليمياً", body: "تبقى الكتالوجات التفصيلية ومنطق SEO المحلي والتنفيذ داخل interlex.kz و interlex.ge." },
      ],
      practiceLabel: "InterLex عملياً",
      practice: [
        "المركز مخصص للتوجيه والتموضع ودعم القرار.",
        "ثم يحمل كازاخستان وجورجيا التفاصيل السوقية واللغوية ومسارات التنفيذ الأعمق.",
        "هذا الفصل يخفف التكرار بين اللغات والأسواق.",
      ],
      nextLabel: "الخطوة التالية",
      nextTitle: "اطلع على مقارنة المسارين السوقيين.",
      nextBody: "توضح صفحة عبر الحدود هذا الفصل قبل الانتقال إلى موقع إقليمي.",
      nextCta: "فتح عبر الحدود",
    },
    crossBorder: {
      title: "عبر الحدود",
      description: "قارن بين مساري InterLex لكازاخستان وجورجيا ووجّه التكليف إلى موقع السوق الصحيح.",
      eyebrow: "عبر الحدود",
      introTitle: "موقعان للسوق، وقرار توجيه واحد على مستوى العلامة.",
      introBody: "استخدم هذه الصفحة عندما يكون التكليف ما زال في مرحلة التحديد. فهي توضح أدوار كازاخستان وجورجيا داخل نظام InterLex.",
      introSide: "لا يحاول المركز إغلاق كامل التكليف في صفحة واحدة. وظيفته تقليل الغموض وتوجيه العميل إلى بيئة التنفيذ المناسبة.",
      tableLabel: "المجال",
      marketEntry: {
        title: "الدخول إلى السوق",
        kz: "تأسيس الكيان، والامتثال المحلي، والانطلاق التشغيلي، والمحاسبة، والدعم الضريبي للفرق الداخلة إلى كازاخستان.",
        ge: "الهياكل القابضة والتشغيلية، ومنطق FIZ، والأنظمة الخاصة، ونماذج التأسيس في جورجيا.",
      },
      investor: {
        title: "منظور المستثمر",
        kz: "الأفضل عندما يعتمد التكليف على تنفيذ محلي أو أطراف مقابلة محلية أو عمل مؤسسي داخل كازاخستان.",
        ge: "الأفضل عندما يعتمد التكليف على الهيكلة الدولية والمرونة وبنية عبر الحدود موجهة للمستثمر.",
      },
      language: {
        title: "لغة العمل",
        kz: "موقع سوق أولوية للروسية للمؤسسين والفرق التي تحتاج إلى سياق سوقي روسي وتفاصيل تنفيذ.",
        ge: "موقع سوق أولوية للإنجليزية للعملاء الدوليين الذين يريدون توجيهاً باللغة الإنجليزية وتخطيطاً مرتبطاً بالولاية القضائية.",
      },
      needHelpLabel: "هل تحتاج إلى مساعدة في التوجيه؟",
      needHelpTitle: "ابدأ بحوار على مستوى العلامة، ثم انتقل إلى المسار الصحيح.",
      needHelpCta: "فتح الاتصال",
    },
    contactPage: {
      title: "اتصال",
      description: "ابدأ حواراً على مستوى العلامة مع InterLex ثم وجّه التكليف إلى كازاخستان أو جورجيا.",
      eyebrow: "اتصال",
      introTitle: "ابدأ بالتكليف، ثم قم بالتوجيه بدقة.",
      introBody: "المركز العالمي هو النقطة الصحيحة لأول تواصل عندما لا يزال الموضوع بحاجة إلى صياغة. وبعد وضوح الهيكل، يمكن نقل الحوار إلى موقع كازاخستان أو جورجيا.",
      flowLabel: "مسار intake",
      steps: [
        "اشرح السوق أو الأسواق المعنية.",
        "وضّح ما إذا كانت المسألة استكشافية أو صفقة أو في مرحلة التنفيذ بالفعل.",
        "بعد ذلك يُوجَّه التكليف إلى موقع الدولة الصحيح أو يُعالج أولاً كنقاش عبر الحدود على مستوى العلامة.",
      ],
      closingLabel: "ما الذي يجب أن يفعله المركز",
      closingTitle: "يبسط intake ويُبقي التنفيذ في مكانه الصحيح.",
      closingBody: "هذه الصفحة متعمدة أن تكون خفيفة. فهي تقدم خطوة أولى واضحة وتترك المحتوى الأعمق لمواقع الأسواق.",
    },
    regionLinks: [
      {
        name: "كازاخستان",
        ...sharedDomains[0],
        language: "موقع سوق بأولوية روسية",
        strapline: "دخول السوق، والدعم القانوني، والمحاسبة، والضرائب، والتنفيذ التشغيلي المستمر في كازاخستان.",
        points: [
          "للمؤسسين والمستثمرين والفرق التشغيلية التي تدخل أو تتوسع في كازاخستان.",
          "الأفضل عندما يعتمد التكليف على filings محلية أو تنفيذ محلي أو عمل سوقي باللغة الروسية.",
          "استخدم هذا المسار عندما ينتمي العمل بوضوح إلى مسار التنفيذ في كازاخستان.",
        ],
      },
      {
        name: "جورجيا",
        ...sharedDomains[1],
        language: "موقع سوق بأولوية إنجليزية",
        strapline: "الهيكلة، ومسارات FIZ، والتموضع الضريبي، والدعم التشغيلي عبر الحدود في جورجيا.",
        points: [
          "للعملاء الدوليين الذين يقارنون نماذج الدخول ومنطق الهياكل القابضة والبنى الإقليمية.",
          "الأفضل عندما يعتمد التكليف على أنظمة جورجية أو سير عمل إنجليزي أو إعداد موجّه للمستثمر.",
          "استخدم هذا المسار عندما يجب أن يحمل الموقع الجورجي التفاصيل القضائية.",
        ],
      },
    ],
    contactChannels: [
      { label: "استفسارات عامة", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "للتعريف بالعلامة والتوجيه والصياغة الأولية للتكليف." },
      { label: "مسار كازاخستان", value: "interlex.kz", href: "https://interlex.kz", note: "استخدمه عندما يكون الموضوع تابعاً بوضوح لموقع كازاخستان." },
      { label: "مسار جورجيا", value: "interlex.ge", href: "https://interlex.ge", note: "استخدمه عندما يكون الموضوع تابعاً بوضوح لموقع جورجيا." },
    ],
  },
  tr: {
    lang: "tr",
    dir: "ltr",
    localeLabel: "TR",
    localeNative: "Türkçe",
    flag: "🇹🇷",
    site: {
      title: "InterLex Global Hub",
      description: "InterLex’in Kazakistan ve Gürcistan’a yönlendiren çok dilli küresel merkezi.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Pazarları karşılaştır",
      markets: "Pazarlar",
      contact: "İletişim",
      footerTitle: "Yerel icranın doğru yerde kaldığı küresel bir giriş noktası.",
      footerBody: "interlex.work bilinçli olarak hafif tutulur: müşteriyi yönlendirir, bölgesel mantığı açıklar ve görevi doğru pazar sitesine taşır.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Hakkında" },
      { slug: "cross-border", label: "Sınır ötesi" },
      { slug: "contact", label: "İletişim" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Tek marka, çok dil, iki pazar rotası.",
      lead: "interlex.work, InterLex’in çok dilli giriş kapısıdır. Marka konumunu açıklar, mandatı çerçeveler ve müşteriyi doğru market-specific site’a yönlendirir.",
      primaryCta: "Sınır ötesini aç",
      secondaryCta: "InterLex hakkında",
      logicLabel: "Hub mantığı",
      notes: [
        "Tek InterLex markası, ayrı market-specific hedefler.",
        "Sınır ötesi çerçeve hub’da, yerel icra ülke alan adında.",
        "Hub’ı kopya bir katalog yapmadan çok dilli giriş.",
      ],
      logicBody: "İş zaten belirli bir yargı alanına aitse doğrudan ülke alan adına gidin. Kapsam hâlâ netleşecekse hub’dan başlayın.",
      positioningLabel: "Konumlandırma",
      positioningTitle: "Daha temiz bir küresel giriş noktasıyla sınır ötesi hukuk ve iş danışmanlığı.",
      positioningBody: "Hub uluslararası, premium ve çok dilli görünmeli; ancak market-specific sitelerden daha hafif kalmalıdır.",
      sections: [
        { label: "Hakkında", slug: "about", title: "InterLex kimdir ve hub neden ayrı durur.", body: "Küresel site, markayı, müşteri profilini ve yönlendirme mantığını yerel icra katmanını yutmadan açıklar." },
        { label: "Sınır ötesi", slug: "cross-border", title: "Kazakistan ve Gürcistan tek bir danışmanlık resmine nasıl oturur.", body: "Karşılaştırma sayfası pazar girişi, yapılandırma ve operasyonel kurgu için yön verir." },
        { label: "İletişim", slug: "contact", title: "Doğru track’e geçmeden önce çok dilli bir intake noktası.", body: "İletişim sayfası ilk adımı sade tutar ve doğru alan adına ve ekibe yönlendirir." },
      ],
    },
    about: {
      title: "Hakkında",
      description: "InterLex’in küresel hub yapısını ve mandatları Kazakistan ile Gürcistan’a nasıl yönlendirdiğini öğrenin.",
      eyebrow: "InterLex hakkında",
      introTitle: "Küresel odaklı bir marka, pazar bazlı hukuk ve iş icrasıyla.",
      introBody: "InterLex, interlex.work’ü temiz ve çok dilli bir hub olarak kullanır. Müşteri burada markayla tanışır, bölgesel haritayı anlar ve Kazakistan ile Gürcistan’ın aynı advisory çerçevede nasıl yer aldığını görür.",
      principlesLabel: "Bu yapı neden çalışıyor",
      principles: [
        { title: "Önce marka, sonra icra", body: "InterLex tek bir marka mimarisi sunar; icrayı ise mandatın ait olduğu yargı alanının alan adında bırakır." },
        { title: "Sınır ötesi yönlendirme", body: "Hub, müşterinin delivery yolunu seçmeden önce pazarlar arasındaki ilişkiyi anladığı yerdir." },
        { title: "Bölgesel derinlik yerinde kalır", body: "Detaylı hizmet katalogları, yerel SEO mantığı ve market execution interlex.kz ve interlex.ge üzerinde kalır." },
      ],
      practiceLabel: "InterLex pratikte",
      practice: [
        "Hub; yönlendirme, konumlandırma ve karar desteği içindir.",
        "Daha derin market-specific dil, servis detayı ve execution pathways daha sonra Kazakistan ve Gürcistan sitelerinde yaşar.",
        "Bu ayrım diller ve pazarlar arasındaki tekrarları azaltır.",
      ],
      nextLabel: "Sonraki adım",
      nextTitle: "İki pazar track’inin nasıl karşılaştırıldığını görün.",
      nextBody: "Sınır ötesi sayfası, bölgesel siteye geçmeden önce bu ayrımı açık hale getirir.",
      nextCta: "Sınır ötesini aç",
    },
    crossBorder: {
      title: "Sınır ötesi",
      description: "InterLex’in Kazakistan ve Gürcistan track’lerini karşılaştırın ve mandatı doğru market site’a yönlendirin.",
      eyebrow: "Sınır ötesi",
      introTitle: "İki pazar sitesi, marka seviyesinde tek bir routing kararı.",
      introBody: "Mandat hâlâ şekilleniyorsa bu sayfayı kullanın. Kazakistan ve Gürcistan’ın InterLex sistemindeki rollerini netleştirir.",
      introSide: "Hub tüm mandatı tek sayfada kapatmaya çalışmaz. Görevi belirsizliği azaltmak ve müşteriyi doğru icra ortamına taşımaktır.",
      tableLabel: "İş hattı",
      marketEntry: {
        title: "Pazara giriş",
        kz: "Kazakistan’a giren ekipler için kuruluş, yerel compliance, operasyonel başlangıç, muhasebe ve vergi desteği.",
        ge: "Gürcistan için holding ve operasyon yapıları, FIZ mantığı, özel rejimler ve setup modelleri.",
      },
      investor: {
        title: "Yatırımcı perspektifi",
        kz: "Mandat yerel icraya, yerel counterparties’e veya Kazakistan’daki kurumsal çalışmaya dayanıyorsa daha uygundur.",
        ge: "Mandat uluslararası yapılandırma, esneklik ve yatırımcı odaklı sınır ötesi mimariye dayanıyorsa daha uygundur.",
      },
      language: {
        title: "Çalışma dili",
        kz: "Rusça öncelikli market site; Rusça pazar bağlamı ve uygulama detayı isteyen ekipler için.",
        ge: "İngilizce öncelikli market site; İngilizce yönlendirme ve yargı alanı planlaması isteyen uluslararası müşteriler için.",
      },
      needHelpLabel: "Routing yardımı mı gerekiyor?",
      needHelpTitle: "Önce marka seviyesinde bir görüşmeyle başlayın, sonra doğru track’e geçin.",
      needHelpCta: "İletişimi aç",
    },
    contactPage: {
      title: "İletişim",
      description: "InterLex ile marka seviyesinde bir görüşme başlatın ve mandatı Kazakistan veya Gürcistan’a yönlendirin.",
      eyebrow: "İletişim",
      introTitle: "Mandatla başlayın. Sonrasında yönlendirme net olmalıdır.",
      introBody: "Konu hâlâ çerçevelenecekse küresel hub doğru ilk temas noktasıdır. Yapı netleştiğinde görüşme Kazakistan veya Gürcistan sitesine taşınabilir.",
      flowLabel: "Intake akışı",
      steps: [
        "Hangi pazarın veya pazarların dahil olduğunu açıklayın.",
        "Konunun keşif aşamasında mı, işlem odaklı mı yoksa zaten icra aşamasında mı olduğunu belirtin.",
        "Ardından mandat doğru ülke sitesine yönlendirilir veya önce marka seviyesinde sınır ötesi görüşme olarak ele alınır.",
      ],
      closingLabel: "Hub ne yapmalı",
      closingTitle: "Intake’i basit tutmalı. İcrayı doğru yerde bırakmalı.",
      closingBody: "Bu sayfa bilerek hafiftir. Yalnızca net bir ilk adım sağlar ve derin market-specific içeriği pazar sitelerinde bırakır.",
    },
    regionLinks: [
      {
        name: "Kazakistan",
        ...sharedDomains[0],
        language: "Rusça öncelikli market site",
        strapline: "Kazakistan’da pazara giriş, hukuki destek, muhasebe, vergi ve sürekli operasyonel icra.",
        points: [
          "Kazakistan’a giren veya orada ölçeklenen kurucular, yatırımcılar ve operasyon ekipleri için.",
          "Mandat yerel filings, local implementation veya Rusça pazar çalışmasına dayanıyorsa daha uygundur.",
          "İş açıkça Kazakistan delivery stack’ine aitse bu rotayı kullanın.",
        ],
      },
      {
        name: "Gürcistan",
        ...sharedDomains[1],
        language: "İngilizce öncelikli market site",
        strapline: "Gürcistan’da yapılandırma, FIZ yolları, vergi konumlandırması ve sınır ötesi operasyon desteği.",
        points: [
          "Giriş modellerini, holding logic’i ve bölgesel yapıları karşılaştıran uluslararası müşteriler için.",
          "Mandat Gürcistan rejimlerine, English-first workflow’a veya investor-facing setup’a dayanıyorsa daha uygundur.",
          "Yargısal detayın Gürcistan sitesinde yaşaması gerekiyorsa bu rotayı kullanın.",
        ],
      },
    ],
    contactChannels: [
      { label: "Genel talepler", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Marka seviyesinde tanışma, routing ve ilk mandat çerçevesi için." },
      { label: "Kazakistan track", value: "interlex.kz", href: "https://interlex.kz", note: "Konu açıkça Kazakistan sitesine aitse bunu kullanın." },
      { label: "Gürcistan track", value: "interlex.ge", href: "https://interlex.ge", note: "Konu açıkça Gürcistan sitesine aitse bunu kullanın." },
    ],
  },
  es: {
    lang: "es",
    dir: "ltr",
    localeLabel: "ES",
    localeNative: "Español",
    flag: "🇪🇸",
    site: {
      title: "InterLex Global Hub",
      description: "Hub global multilingüe de InterLex con enrutamiento hacia Kazajistán y Georgia.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Comparar mercados",
      markets: "Mercados",
      contact: "Contacto",
      footerTitle: "Una puerta de entrada global con ejecución local donde corresponde.",
      footerBody: "interlex.work se mantiene deliberadamente ligero: orienta al cliente, explica la lógica regional y dirige el mandato al sitio de mercado adecuado.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Nosotros" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contacto" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Una marca, varios idiomas, dos rutas de mercado.",
      lead: "interlex.work es la puerta de entrada multilingüe de InterLex. Explica la marca, ayuda a definir el mandato y dirige al cliente hacia el sitio de mercado correcto.",
      primaryCta: "Explorar Cross-border",
      secondaryCta: "Conocer InterLex",
      logicLabel: "Lógica del hub",
      notes: [
        "Una sola marca InterLex con destinos de mercado separados.",
        "El marco cross-border vive en el hub; la ejecución local, en el dominio del país.",
        "Entrada multilingüe sin convertir el hub en un catálogo duplicado.",
      ],
      logicBody: "Si el trabajo ya pertenece claramente a una jurisdicción, vaya directamente al dominio del país. Si el alcance aún debe definirse, empiece aquí.",
      positioningLabel: "Posicionamiento",
      positioningTitle: "Advisory legal y business cross-border con una entrada global más clara.",
      positioningBody: "El hub debe sentirse internacional, premium y multilingüe, pero más ligero que los sitios específicos de mercado.",
      sections: [
        { label: "Nosotros", slug: "about", title: "Quién es InterLex y por qué el hub existe por separado.", body: "El sitio global explica la marca, el perfil del cliente y la lógica de routing sin absorber el detalle de ejecución local." },
        { label: "Cross-border", slug: "cross-border", title: "Cómo encajan Kazajistán y Georgia en una misma imagen advisory.", body: "La página comparativa orienta mandatos relacionados con entrada de mercado, estructuración y operativa." },
        { label: "Contacto", slug: "contact", title: "Un punto de intake multilingüe antes del traspaso al track correcto.", body: "La página de contacto simplifica el primer paso y lo dirige al dominio y al equipo adecuados." },
      ],
    },
    about: {
      title: "Nosotros",
      description: "Descubra cómo InterLex estructura su hub global y dirige mandatos hacia Kazajistán y Georgia.",
      eyebrow: "Sobre InterLex",
      introTitle: "Una marca global con ejecución legal y empresarial específica por mercado.",
      introBody: "InterLex utiliza interlex.work como un hub multilingüe limpio. Aquí el cliente conoce la marca, entiende el mapa regional y ve cómo Kazajistán y Georgia encajan en una sola lógica advisory.",
      principlesLabel: "Por qué esta estructura funciona",
      principles: [
        { title: "Primero la marca, después la ejecución", body: "InterLex presenta una sola arquitectura de marca y mantiene la ejecución en el dominio de la jurisdicción que posee el mandato." },
        { title: "Orientación cross-border", body: "El hub es el lugar donde el cliente entiende la relación entre mercados antes de elegir la ruta de delivery." },
        { title: "La profundidad regional sigue siendo regional", body: "Los catálogos detallados, la lógica SEO local y la ejecución de mercado permanecen en interlex.kz y interlex.ge." },
      ],
      practiceLabel: "InterLex en la práctica",
      practice: [
        "El hub sirve para orientar, posicionar y apoyar decisiones.",
        "Kazajistán y Georgia aportan después el detalle market-specific, lingüístico y operativo necesario.",
        "Esta separación reduce duplicaciones entre idiomas y mercados.",
      ],
      nextLabel: "Siguiente paso",
      nextTitle: "Vea cómo se comparan los dos tracks de mercado.",
      nextBody: "La página cross-border hace explícita esta división antes de pasar a un sitio regional.",
      nextCta: "Abrir Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Compare los tracks de InterLex para Kazajistán y Georgia y dirija el mandato al market site correcto.",
      eyebrow: "Cross-border",
      introTitle: "Dos market sites, una decisión de routing a nivel de marca.",
      introBody: "Use esta página cuando el mandato aún se está definiendo. Aclara los diferentes roles de Kazajistán y Georgia dentro del sistema InterLex.",
      introSide: "El hub no intenta ganar todo el mandato en una sola página. Su trabajo es reducir la ambigüedad y orientar al cliente hacia el entorno de ejecución correcto.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Entrada al mercado",
        kz: "Constitución, compliance local, lanzamiento operativo, contabilidad y soporte fiscal para equipos que entran en Kazajistán.",
        ge: "Estructuras holding y operativas, lógica FIZ, regímenes especiales y modelos de implantación en Georgia.",
      },
      investor: {
        title: "Enfoque inversor",
        kz: "Mejor elección cuando el mandato depende de ejecución local, contrapartes locales o trabajo institucional en Kazajistán.",
        ge: "Mejor elección cuando el mandato depende de estructuración internacional, flexibilidad y arquitectura cross-border orientada a inversores.",
      },
      language: {
        title: "Idioma de trabajo",
        kz: "Market site RU-first para founders y equipos que necesitan contexto de mercado en ruso y detalle de implementación.",
        ge: "Market site EN-first para clientes internacionales que buscan orientación en inglés y planificación jurisdiccional.",
      },
      needHelpLabel: "¿Necesita ayuda con el routing?",
      needHelpTitle: "Empiece con una conversación a nivel de marca y luego pase al track correcto.",
      needHelpCta: "Abrir Contacto",
    },
    contactPage: {
      title: "Contacto",
      description: "Inicie una conversación brand-level con InterLex y dirija el mandato hacia Kazajistán o Georgia.",
      eyebrow: "Contacto",
      introTitle: "Empiece por el mandato. Después, el routing debe ser preciso.",
      introBody: "El hub global es el punto correcto de primer contacto cuando el asunto aún necesita encuadre. Una vez clara la estructura, la conversación puede pasar al sitio de Kazajistán o Georgia.",
      flowLabel: "Flujo de intake",
      steps: [
        "Describa qué mercado o mercados están implicados.",
        "Indique si la cuestión es exploratoria, transaccional o ya está en ejecución.",
        "Después, el mandato se dirige al sitio país adecuado o se trata primero como discusión cross-border a nivel de marca.",
      ],
      closingLabel: "Qué debe hacer el hub",
      closingTitle: "Mantener el intake simple. Dejar la ejecución donde corresponde.",
      closingBody: "Esta página es deliberadamente ligera. Ofrece un primer paso claro y deja el material más profundo en los sitios de mercado.",
    },
    regionLinks: [
      {
        name: "Kazajistán",
        ...sharedDomains[0],
        language: "Market site RU-first",
        strapline: "Entrada de mercado, soporte legal, contabilidad, fiscalidad y ejecución operativa continua en Kazajistán.",
        points: [
          "Para founders, inversores y equipos operativos que entran o escalan en Kazajistán.",
          "Encaja mejor cuando el mandato depende de filings locales, implementación local o trabajo de mercado en ruso.",
          "Use esta ruta cuando el trabajo pertenezca claramente al delivery stack de Kazajistán.",
        ],
      },
      {
        name: "Georgia",
        ...sharedDomains[1],
        language: "Market site EN-first",
        strapline: "Estructuración, rutas FIZ, posicionamiento fiscal y soporte operativo cross-border en Georgia.",
        points: [
          "Para clientes internacionales que comparan modelos de entrada, holding logic y estructuras regionales.",
          "Encaja mejor cuando el mandato depende de regímenes georgianos, workflow en inglés o setup investor-facing.",
          "Use esta ruta cuando el detalle jurisdiccional deba vivir en el sitio georgiano.",
        ],
      },
    ],
    contactChannels: [
      { label: "Consultas generales", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Para introducciones brand-level, routing y encuadre inicial del mandato." },
      { label: "Track Kazajistán", value: "interlex.kz", href: "https://interlex.kz", note: "Úselo cuando el asunto pertenezca claramente al sitio de Kazajistán." },
      { label: "Track Georgia", value: "interlex.ge", href: "https://interlex.ge", note: "Úselo cuando el asunto pertenezca claramente al sitio de Georgia." },
    ],
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
