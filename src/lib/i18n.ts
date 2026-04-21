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
    flag: "рџ‡¬рџ‡§",
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
      closingLabel: "First Conversation",
      closingTitle: "Start at the right level, then move into the right market.",
      closingBody: "Use the hub for an initial conversation, fast orientation, and a clear next step. Once the mandate is framed, the work moves into interlex.kz or interlex.ge, where the market-specific detail and execution belong.",
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
      description: "Глобальный хаб InterLex с мультиязычным маршрутом в Казахстан и Грузию.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Сравнить рынки",
      markets: "Рынки",
      contact: "Контакты",
      footerTitle: "Глобальная точка входа с локальным исполнением там, где ему место.",
      footerBody: "interlex.work намеренно остаётся лёгким: он помогает сориентироваться, объясняет региональную логику и переводит запрос в нужный рынок без перегрузки деталями.",
    },
    nav: [
      { slug: "", label: "Хаб" },
      { slug: "about", label: "О нас" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Контакты" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Один бренд, несколько языков, два рыночных направления.",
      lead: "interlex.work — это мультиязычная точка входа InterLex. Здесь клиент понимает логику бренда, формулирует задачу и переходит в нужный рынок без лишних шагов.",
      primaryCta: "Открыть Cross-border",
      secondaryCta: "Узнать об InterLex",
      logicLabel: "Логика хаба",
      notes: [
        "Один бренд InterLex с отдельными направлениями по рынкам.",
        "Cross-border рамка остаётся на хабе, локальная работа — на сайте страны.",
        "Мультиязычный вход без превращения хаба в дубликат каталога услуг.",
      ],
      logicBody: "Если задача уже относится к конкретной юрисдикции, переходите сразу на сайт страны. Если сначала нужно определить структуру, рынок или маршрут, начните с хаба.",
      positioningLabel: "Позиционирование",
      positioningTitle: "Cross-border legal и business advisory с более чистой глобальной точкой входа.",
      positioningBody: "Хаб должен ощущаться международным, уверенным и премиальным, оставаясь при этом легче и понятнее, чем локальные рыночные сайты.",
      sections: [
        { label: "О нас", slug: "about", title: "Кто такой InterLex и почему хаб существует отдельно.", body: "Глобальный сайт объясняет бренд, профиль клиента и логику маршрута, не подменяя собой локальное исполнение." },
        { label: "Cross-border", slug: "cross-border", title: "Как Казахстан и Грузия складываются в единую advisory-модель.", body: "Эта страница помогает сориентироваться по входу на рынок, структуре бизнеса, налоговой логике и операционной модели." },
        { label: "Контакты", slug: "contact", title: "Мультиязычная точка первого входа перед переходом в нужное направление.", body: "Контактная страница делает первый разговор простым и помогает быстро выйти на правильный рынок и правильную команду." },
      ],
    },
    about: {
      title: "О нас",
      description: "Узнайте, как InterLex выстраивает глобальный хаб и переводит запросы в Казахстан и Грузию.",
      eyebrow: "Об InterLex",
      introTitle: "Глобальный бренд с локальным юридическим и бизнес-исполнением.",
      introBody: "InterLex использует interlex.work как чистый мультиязычный хаб. Здесь клиент знакомится с брендом, понимает региональную карту и видит, как Казахстан и Грузия работают внутри единой advisory-модели.",
      principlesLabel: "Почему эта структура работает",
      principles: [
        { title: "Сначала бренд, потом исполнение", body: "InterLex показывает единую архитектуру бренда, сохраняя исполнение на сайте той юрисдикции, где должна вестись работа." },
        { title: "Cross-border ориентация", body: "На хабе клиент понимает связь между рынками до того, как переходит в конкретный маршрут работы." },
        { title: "Локальная глубина остаётся локальной", body: "Подробные каталоги услуг, локальное SEO и практическая реализация остаются внутри interlex.kz и interlex.ge." },
      ],
      practiceLabel: "InterLex на практике",
      practice: [
        "Хаб нужен для ориентации, позиционирования и первого решения по маршруту.",
        "Казахстан и Грузия затем принимают на себя более глубокий локальный контент, детали услуг и реальную работу по запросу.",
        "Такое разделение делает архитектуру бренда чище и уменьшает дублирование между языками и рынками.",
      ],
      nextLabel: "Следующий шаг",
      nextTitle: "Посмотрите, как соотносятся два рыночных направления.",
      nextBody: "Страница Cross-border делает выбор между Казахстаном и Грузией очевидным ещё до перехода на региональный сайт.",
      nextCta: "Открыть Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Сравните направления InterLex для Казахстана и Грузии и поймите, куда должен перейти запрос.",
      eyebrow: "Cross-border",
      introTitle: "Два рынка, один бренд, одно решение по маршруту.",
      introBody: "Используйте эту страницу, когда задача ещё формируется. Она помогает понять, какую роль Казахстан и Грузия играют внутри системы InterLex.",
      introSide: "Хаб не пытается закрыть весь запрос на одной странице. Его задача — убрать неопределённость и направить клиента в ту среду, где работа будет выполнена правильно.",
      tableLabel: "Направление",
      marketEntry: {
        title: "Выход на рынок",
        kz: "Регистрация компании, локальный compliance, запуск операций, бухгалтерия и налоговое сопровождение для команд, входящих в Казахстан.",
        ge: "Холдинговые и операционные структуры, логика FIZ, специальные режимы и модели входа для тех, кто рассматривает Грузию.",
      },
      investor: {
        title: "Инвесторский фокус",
        kz: "Подходит, когда задача зависит от локального исполнения, местных контрагентов или операционной работы внутри Казахстана.",
        ge: "Подходит, когда задача связана с международным структурированием, гибкостью и инвесторской логикой работы.",
      },
      language: {
        title: "Рабочий язык",
        kz: "RU-first сайт для фаундеров и команд, которым нужен русскоязычный рынок, локальный контекст и практические детали.",
        ge: "EN-first сайт для международных клиентов, которым нужна англоязычная ориентация и планирование по грузинской юрисдикции.",
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
        "После этого запрос либо переводится на нужный сайт страны, либо сначала остаётся в brand-level обсуждении как cross-border задача.",
      ],
      closingLabel: "Первый контакт",
      closingTitle: "Начните с правильного уровня, а дальше перейдите в нужный рынок.",
      closingBody: "Хаб нужен для первого разговора, быстрой ориентации и понятного следующего шага. Когда задача уже сформулирована, работа переходит в interlex.kz или interlex.ge, где и должны находиться детали по рынку и исполнение.",
    },
    regionLinks: [
      {
        name: "Казахстан",
        ...sharedDomains[0],
        language: "RU-first market site",
        strapline: "Выход на рынок, юридическое сопровождение, бухгалтерия, налоги и операционная поддержка в Казахстане.",
        points: [
          "Для фаундеров, инвесторов и команд, которые входят в Казахстан или масштабируются внутри него.",
          "Подходит, когда важны локальные регистрации, местное исполнение и русскоязычный контекст рынка.",
          "Используйте этот маршрут, когда работа должна вестись внутри казахстанской практики.",
        ],
      },
      {
        name: "Грузия",
        ...sharedDomains[1],
        language: "EN-first market site",
        strapline: "Структурирование, FIZ-пути, налоговая логика и cross-border поддержка в Грузии.",
        points: [
          "Для международных клиентов, которые сравнивают модели входа, холдинговую логику и региональные структуры.",
          "Подходит, когда важны режимы Грузии, English-first workflow и investor-facing setup.",
          "Используйте этот маршрут, когда именно грузинский сайт должен нести юрисдикционную детализацию.",
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
    localeNative: "дё­ж–‡",
    flag: "рџ‡Ёрџ‡і",
    site: {
      title: "InterLex е…ЁзђѓжћўзєЅ",
      description: "InterLex зљ„е¤љиЇ­иЁЂе…ЁзђѓжћўзєЅпјЊеЏЇи·Їз”±е€°е“€иђЁе…‹ж–Їеќ¦е’Њж јйІЃеђ‰дєљгЂ‚",
      brand: "InterLex",
      hubLabel: "е…ЁзђѓжћўзєЅ",
      compareMarkets: "жЇ”иѕѓеё‚ењє",
      markets: "её‚ењє",
      contact: "иЃ”зі»",
      footerTitle: "е…Ёзђѓе…ҐеЏЈпјЊж‰§иЎЊд»Ќз„¶з•™ењЁжњ¬ењ°её‚ењєз«™з‚№гЂ‚",
      footerBody: "interlex.work дїќжЊЃиЅ»й‡ЏеЊ–пјље…€её®еЉ©е®ўж€·зђ†и§ЈеЊєеџџйЂ»иѕ‘пјЊе†ЌжЉЉйЎ№з›®еЇјеђ‘ж­ЈзЎ®зљ„её‚ењєз«™з‚№гЂ‚",
    },
    nav: [
      { slug: "", label: "жћўзєЅ" },
      { slug: "about", label: "е…ідєЋ" },
      { slug: "cross-border", label: "и·Ёеўѓ" },
      { slug: "contact", label: "иЃ”зі»" },
    ],
    home: {
      eyebrow: "InterLex е…ЁзђѓжћўзєЅ",
      title: "дёЂдёЄе“Ѓз‰ЊпјЊе¤љз§ЌиЇ­иЁЂпјЊдё¤дёЄеё‚ењєз›®зљ„ењ°гЂ‚",
      lead: "interlex.work жЇ InterLex зљ„е¤љиЇ­иЁЂе…ҐеЏЈгЂ‚е®ѓи§Јй‡Ље“Ѓз‰ЊгЂЃеё®еЉ©з•Ње®љйЎ№з›®иЊѓе›ґпјЊе№¶жЉЉе®ўж€·еЇјеђ‘ж­ЈзЎ®зљ„её‚ењєз«™з‚№гЂ‚",
      primaryCta: "жџҐзњ‹и·ЁеўѓйЎµйќў",
      secondaryCta: "дє†и§Ј InterLex",
      logicLabel: "жћўзєЅйЂ»иѕ‘",
      notes: [
        "дёЂдёЄ InterLex е“Ѓз‰ЊпјЊеЇ№еє”з‹¬з«‹зљ„её‚ењєз«™з‚№гЂ‚",
        "и·ЁеўѓжЎ†жћ¶ењЁжћўзєЅпјЊе…·дЅ“ж‰§иЎЊењЁе›Ѕе®¶еџџеђЌгЂ‚",
        "ж”ЇжЊЃе¤љиЇ­иЁЂпјЊдЅ†дёЌжЉЉжћўзєЅеЃљж€ђй‡Ќе¤Ќзљ„жњЌеЉЎз›®еЅ•гЂ‚",
      ],
      logicBody: "е¦‚жћњйЎ№з›®е·Із»ЏжЋзЎ®е±ћдєЋжџђдёЂеЏёжі•иѕ–еЊєпјЊиЇ·з›ґжЋҐиї›е…ҐеЇ№еє”е›Ѕе®¶з«™з‚№гЂ‚е¦‚жћњиЊѓе›ґд»ЌйњЂжўізђ†пјЊиЇ·д»Ћиї™й‡ЊејЂе§‹гЂ‚",
      positioningLabel: "е®љдЅЌ",
      positioningTitle: "ж›ґжё…ж™°зљ„е…Ёзђѓе…ҐеЏЈпјЊз”ЁдєЋи·Ёеўѓжі•еѕ‹дёЋе•†дёљйЎѕй—®гЂ‚",
      positioningBody: "жћўзєЅеє”еЅ“жЇе›Ѕй™…еЊ–гЂЃдё“дёљдё”е¤љиЇ­иЁЂзљ„пјЊеђЊж—¶жЇ”её‚ењєз«™з‚№ж›ґиЅ»гЂЃж›ґиЃљз„¦гЂ‚",
      sections: [
        { label: "е…ідєЋ", slug: "about", title: "InterLex жЇи°ЃпјЊд»ҐеЏЉдёєд»Ђд№€жћўзєЅз‹¬з«‹е­ењЁгЂ‚", body: "е…Ёзђѓз«™з‚№и§Јй‡Ље“Ѓз‰ЊгЂЃе®ўж€·з±»ећ‹е’Њи·Їз”±йЂ»иѕ‘пјЊиЂЊдёЌеЏ–д»Јжњ¬ењ°ж‰§иЎЊе±‚гЂ‚" },
        { label: "и·Ёеўѓ", slug: "cross-border", title: "е“€иђЁе…‹ж–Їеќ¦дёЋж јйІЃеђ‰дєље¦‚дЅ•з»„ж€ђдёЂеј йЎѕй—®ењ°е›ѕгЂ‚", body: "з”ЁдєЋеё®еЉ©е®ўж€·е€¤ж–­её‚ењєиї›е…ҐгЂЃз»“жћ„и®ѕи®Ўе’ЊиїђиђҐе®‰жЋ’еє”еЅ“иµ°е“ЄдёЄиЅЁйЃ“гЂ‚" },
        { label: "иЃ”зі»", slug: "contact", title: "е¤љиЇ­иЁЂе€ќе§‹жІџйЂље…ҐеЏЈпјЊе†ЌиЅ¬дє¤е€°ж­ЈзЎ®иЅЁйЃ“гЂ‚", body: "иЃ”зі»йЎµйќўи®©з¬¬дёЂж­Ґж›ґз®ЂеЌ•пјЊз„¶еђЋжЉЉйЎ№з›®еЇјеђ‘ж­ЈзЎ®зљ„еџџеђЌе’Њж‰§иЎЊе›ўйџгЂ‚" },
      ],
    },
    about: {
      title: "е…ідєЋ",
      description: "дє†и§Ј InterLex е¦‚дЅ•жћ„е»єе…ЁзђѓжћўзєЅпјЊе№¶жЉЉйЎ№з›®и·Їз”±е€°е“€иђЁе…‹ж–Їеќ¦е’Њж јйІЃеђ‰дєљгЂ‚",
      eyebrow: "е…ідєЋ InterLex",
      introTitle: "йќўеђ‘е…Ёзђѓзљ„е“Ѓз‰ЊпјЊз»“еђ€её‚ењєеЊ–зљ„жі•еѕ‹дёЋе•†дёљж‰§иЎЊгЂ‚",
      introBody: "InterLex жЉЉ interlex.work дЅњдёєе№Іе‡Ђзљ„е¤љиЇ­иЁЂжћўзєЅпјЊи®©е®ўж€·е…€зђ†и§Је“Ѓз‰Ње’ЊеЊєеџџз»“жћ„пјЊе†Ќиї›е…Ґе“€иђЁе…‹ж–Їеќ¦ж€–ж јйІЃеђ‰дєљзљ„ж‰§иЎЊзЋЇеўѓгЂ‚",
      principlesLabel: "дёєд»Ђд№€иї™з§Ќз»“жћ„жњ‰ж•€",
      principles: [
        { title: "е…€е“Ѓз‰ЊпјЊеђЋж‰§иЎЊ", body: "InterLex д»Ґз»џдёЂе“Ѓз‰Ње‘€зЋ°пјЊдЅ†жЉЉзњџж­Јзљ„ж‰§иЎЊдїќз•™ењЁж‹Ґжњ‰иЇҐйЎ№з›®зљ„еЏёжі•иѕ–еЊєеџџеђЌдёЉгЂ‚" },
        { title: "и·ЁеўѓеЇјеђ‘", body: "е®ўж€·е…€ењЁжћўзєЅзђ†и§Јдё¤дёЄеё‚ењєд№‹й—ґзљ„е…ізі»пјЊе†ЌйЂ‰ж‹©дє¤д»и·Їеѕ„гЂ‚" },
        { title: "жњ¬ењ°ж·±еє¦з•™ењЁжњ¬ењ°", body: "иЇ¦з»†жњЌеЉЎз›®еЅ•гЂЃSEO йЂ»иѕ‘е’Њеё‚ењєж‰§иЎЊд»Ќз„¶дїќз•™ењЁ interlex.kz е’Њ interlex.geгЂ‚" },
      ],
      practiceLabel: "е®ћй™…иїђдЅњ",
      practice: [
        "жћўзєЅз”ЁдєЋе®љдЅЌгЂЃе€¤ж–­е’Ње€ќж­Ґе†із­–ж”ЇжЊЃгЂ‚",
        "ж›ґж·±зљ„её‚ењєиЇ­иЁЂгЂЃжњЌеЉЎз»†иЉ‚е’Њж‰§иЎЊи·Їеѕ„з”±е“€иђЁе…‹ж–Їеќ¦дёЋж јйІЃеђ‰дєљз«™з‚№ж‰їиЅЅгЂ‚",
        "иї™з§Ќе€’е€†е‡Џе°‘е¤љиЇ­иЁЂе’Ње¤љеё‚ењєд№‹й—ґзљ„й‡Ќе¤Ќе†…е®№гЂ‚",
      ],
      nextLabel: "дё‹дёЂж­Ґ",
      nextTitle: "жџҐзњ‹дё¤дёЄеё‚ењєиЅЁйЃ“е¦‚дЅ•жЇ”иѕѓгЂ‚",
      nextBody: "и·ЁеўѓйЎµйќўдјљжЋзЎ®е±•з¤єдєЊиЂ…е·®еј‚пјЊеё®еЉ©е®ўж€·ењЁиї›е…ҐеЊєеџџз«™з‚№е‰Ќе®Њж€ђи‡Єж€‘е€¤ж–­гЂ‚",
      nextCta: "ж‰“ејЂи·ЁеўѓйЎµйќў",
    },
    crossBorder: {
      title: "и·Ёеўѓ",
      description: "жЇ”иѕѓ InterLex ењЁе“€иђЁе…‹ж–Їеќ¦е’Њж јйІЃеђ‰дєљзљ„иЅЁйЃ“пјЊе№¶жЉЉйЎ№з›®еЇјеђ‘ж­ЈзЎ®её‚ењєз«™з‚№гЂ‚",
      eyebrow: "и·Ёеўѓ",
      introTitle: "дё¤дёЄеё‚ењєз«™з‚№пјЊдёЂдёЄе“Ѓз‰Ње±‚йќўзљ„и·Їз”±е†із­–гЂ‚",
      introBody: "еЅ“йЎ№з›®иЊѓе›ґд»ЌењЁе®љд№‰ж—¶пјЊиЇ·дЅїз”Ёж­¤йЎµйќўгЂ‚е®ѓиЇґжЋе“€иђЁе…‹ж–Їеќ¦е’Њж јйІЃеђ‰дєљењЁ InterLex зі»з»џдё­зљ„дёЌеђЊи§’и‰ІгЂ‚",
      introSide: "жћўзєЅзљ„з›®ж ‡дёЌжЇењЁдёЂйЎµдё­е®Њж€ђе…ЁйѓЁй”Ђе”®пјЊиЂЊжЇе‡Џе°‘дёЌзЎ®е®љжЂ§пјЊе№¶жЉЉе®ўж€·еЇјеђ‘жњЂеђ€йЂ‚зљ„ж‰§иЎЊзЋЇеўѓгЂ‚",
      tableLabel: "е·ҐдЅњж–№еђ‘",
      marketEntry: {
        title: "её‚ењєиї›е…Ґ",
        kz: "йЂ‚з”ЁдєЋиї›е…Ґе“€иђЁе…‹ж–Їеќ¦зљ„е®ћдЅ“и®ѕз«‹гЂЃеђ€и§„гЂЃиїђиђҐеђЇеЉЁгЂЃдјљи®ЎдёЋзЁЋеЉЎж”ЇжЊЃгЂ‚",
        ge: "йЂ‚з”ЁдєЋжЇ”иѕѓж јйІЃеђ‰дєљжЋ§и‚Ў/иїђиђҐз»“жћ„гЂЃFIZ и·Їеѕ„е’Њз‰№ж®Ље€¶еє¦гЂ‚",
      },
      investor: {
        title: "жЉ•иµ„иЂ…и§†и§’",
        kz: "еЅ“йЎ№з›®дѕќиµ–жњ¬ењ°ж‰§иЎЊгЂЃжњ¬ењ°дє¤ж“еЇ№ж‰‹ж€–е“€иђЁе…‹ж–Їеќ¦зљ„жњєжћ„еЊ–е·ҐдЅњж—¶ж›ґйЂ‚еђ€гЂ‚",
        ge: "еЅ“йЎ№з›®дѕќиµ–е›Ѕй™…з»“жћ„и®ѕи®ЎгЂЃзЃµжґ»жЂ§е’ЊжЉ•иµ„иЂ…еЇјеђ‘зљ„и·Ёеўѓжћ¶жћ„ж—¶ж›ґйЂ‚еђ€гЂ‚",
      },
      language: {
        title: "е·ҐдЅњиЇ­иЁЂ",
        kz: "д»Ґдї„иЇ­дёєдё»зљ„её‚ењєз«™з‚№пјЊйЂ‚еђ€йњЂи¦Ѓдї„иЇ­её‚ењєиЇ­еўѓдёЋе®ћж–Ѕз»†иЉ‚зљ„е›ўйџгЂ‚",
        ge: "д»Ґи‹±иЇ­дёєдё»зљ„её‚ењєз«™з‚№пјЊйЂ‚еђ€йњЂи¦Ѓи‹±иЇ­еЇјеђ‘дёЋеЏёжі•иѕ–еЊєи§„е€’зљ„е›Ѕй™…е®ўж€·гЂ‚",
      },
      needHelpLabel: "йњЂи¦Ѓеё®еЉ©е€¤ж–­пјџ",
      needHelpTitle: "е…€д»Ће“Ѓз‰Ње±‚йќўеЇ№иЇќејЂе§‹пјЊе†Ќиї›е…Ґж­ЈзЎ®иЅЁйЃ“гЂ‚",
      needHelpCta: "ж‰“ејЂиЃ”зі»йЎµйќў",
    },
    contactPage: {
      title: "иЃ”зі»",
      description: "д»Ће“Ѓз‰Ње±‚йќўејЂе§‹дёЋ InterLex жІџйЂљпјЊе†ЌжЉЉйЎ№з›®еЇјеђ‘е“€иђЁе…‹ж–Їеќ¦ж€–ж јйІЃеђ‰дєљгЂ‚",
      eyebrow: "иЃ”зі»",
      introTitle: "е…€е®љд№‰йЎ№з›®пјЊе†Ќиї›иЎЊзІѕе‡†и·Їз”±гЂ‚",
      introBody: "е¦‚жћњйЎ№з›®д»ЌйњЂжўізђ†пјЊе…ЁзђѓжћўзєЅжЇж­ЈзЎ®зљ„з¬¬дёЂжЋҐи§¦з‚№гЂ‚з»“жћ„жЋзЎ®еђЋпјЊе†Ќиї›е…Ґе“€иђЁе…‹ж–Їеќ¦ж€–ж јйІЃеђ‰дєљз«™з‚№гЂ‚",
      flowLabel: "жІџйЂљжµЃзЁ‹",
      steps: [
        "иЇґжЋж¶‰еЏЉзљ„её‚ењєгЂ‚",
        "иЇґжЋиЇҐй—®йўжЇжЋўзґўй¶ж®µгЂЃдє¤ж“й¶ж®µпјЊиїжЇе·Із»Џиї›е…Ґж‰§иЎЊй¶ж®µгЂ‚",
        "йљЏеђЋйЎ№з›®е°†иў«еЇјеђ‘ж­ЈзЎ®е›Ѕе®¶з«™з‚№пјЊж€–е…€дїќз•™ењЁи·Ёеўѓе“Ѓз‰Ње±‚йќўзљ„и®Ёи®єдё­гЂ‚",
      ],
      closingLabel: "жћўзєЅеє”иЇҐеЃљд»Ђд№€",
      closingTitle: "и®© intake з®ЂеЌ•пјЊи®©ж‰§иЎЊз•™ењЁж­ЈзЎ®зљ„дЅЌзЅ®гЂ‚",
      closingBody: "жњ¬йЎµж•…ж„ЏдїќжЊЃиЅ»й‡ЏеЊ–гЂ‚е®ѓеЏЄжЏђдѕ›жё…ж™°зљ„з¬¬дёЂж­ҐпјЊдёЌжЉЉж›ґж·±зљ„её‚ењєе†…е®№д»Ћ interlex.kz е’Њ interlex.ge ж‹їе‡єжќҐгЂ‚",
    },
    regionLinks: [
      {
        name: "е“€иђЁе…‹ж–Їеќ¦",
        ...sharedDomains[0],
        language: "дї„иЇ­дје…€её‚ењєз«™з‚№",
        strapline: "йќўеђ‘е“€иђЁе…‹ж–Їеќ¦зљ„её‚ењєиї›е…ҐгЂЃжі•еѕ‹ж”ЇжЊЃгЂЃдјљи®ЎгЂЃзЁЋеЉЎе’ЊжЊЃз»­иїђиђҐж‰§иЎЊгЂ‚",
        points: [
          "йЂ‚еђ€иї›е…Ґж€–ж‰©е±•е“€иђЁе…‹ж–Їеќ¦её‚ењєзљ„е€›е§‹дєєгЂЃжЉ•иµ„иЂ…е’ЊиїђиђҐе›ўйџгЂ‚",
          "еЅ“йЎ№з›®дѕќиµ–жњ¬ењ°з”іжЉҐгЂЃжњ¬ењ°ж‰§иЎЊж€–дї„иЇ­её‚ењєе·ҐдЅњж—¶е°¤е…¶йЂ‚еђ€гЂ‚",
          "еЅ“е·ҐдЅњжЋзЎ®е±ћдєЋе“€иђЁе…‹ж–Їеќ¦дє¤д»дЅ“зі»ж—¶дЅїз”ЁиЇҐи·ЇзєїгЂ‚",
        ],
      },
      {
        name: "ж јйІЃеђ‰дєљ",
        ...sharedDomains[1],
        language: "и‹±иЇ­дје…€её‚ењєз«™з‚№",
        strapline: "йќўеђ‘ж јйІЃеђ‰дєљзљ„з»“жћ„и®ѕи®ЎгЂЃFIZ и·Їеѕ„гЂЃзЁЋеЉЎе®љдЅЌдёЋи·ЁеўѓиїђиђҐж”ЇжЊЃгЂ‚",
        points: [
          "йЂ‚еђ€жЇ”иѕѓиї›е…ҐжЁЎејЏгЂЃжЋ§и‚ЎйЂ»иѕ‘е’ЊеЊєеџџз»“жћ„зљ„е›Ѕй™…е®ўж€·гЂ‚",
          "еЅ“йЎ№з›®дѕќиµ–ж јйІЃеђ‰дєље€¶еє¦гЂЃи‹±иЇ­е·ҐдЅњжµЃж€–жЉ•иµ„иЂ…еЇјеђ‘и®ѕзЅ®ж—¶е°¤е…¶йЂ‚еђ€гЂ‚",
          "еЅ“йњЂи¦Ѓз”±ж јйІЃеђ‰дєљз«™з‚№ж‰їиЅЅеЏёжі•иѕ–еЊєз»†иЉ‚ж—¶дЅїз”ЁиЇҐи·ЇзєїгЂ‚",
        ],
      },
    ],
    contactChannels: [
      { label: "дёЂи€¬е’ЁиЇў", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "з”ЁдєЋе“Ѓз‰Ње±‚йќўзљ„д»‹з»ЌгЂЃи·Їз”±е’ЊйЎ№з›®е€ќж­Ґз•Ње®љгЂ‚" },
      { label: "е“€иђЁе…‹ж–Їеќ¦иЅЁйЃ“", value: "interlex.kz", href: "https://interlex.kz", note: "еЅ“дє‹йЎ№жЋжѕе±ћдєЋе“€иђЁе…‹ж–Їеќ¦з«™з‚№ж—¶дЅїз”ЁгЂ‚" },
      { label: "ж јйІЃеђ‰дєљиЅЁйЃ“", value: "interlex.ge", href: "https://interlex.ge", note: "еЅ“дє‹йЎ№жЋжѕе±ћдєЋж јйІЃеђ‰дєљз«™з‚№ж—¶дЅїз”ЁгЂ‚" },
    ],
  },
  it: {
    lang: "it",
    dir: "ltr",
    localeLabel: "IT",
    localeNative: "Italiano",
    flag: "рџ‡®рџ‡№",
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
      title: "Un marchio, piГ№ lingue, due destinazioni di mercato.",
      lead: "interlex.work ГЁ la porta dвЂ™ingresso multilingue di InterLex. Presenta il brand, aiuta a definire il mandato e indirizza il cliente verso il sito di mercato piГ№ adatto.",
      primaryCta: "Esplora Cross-border",
      secondaryCta: "Scopri InterLex",
      logicLabel: "Logica dellвЂ™hub",
      notes: [
        "Un solo brand InterLex con siti di mercato separati.",
        "Il quadro cross-border vive sullвЂ™hub; lвЂ™esecuzione locale sul dominio del paese.",
        "Accesso multilingue senza trasformare lвЂ™hub in un catalogo duplicato.",
      ],
      logicBody: "Se il lavoro appartiene giГ  chiaramente a una giurisdizione, vai direttamente al dominio del paese. Se il perimetro va ancora definito, inizia dallвЂ™hub.",
      positioningLabel: "Posizionamento",
      positioningTitle: "Advisory legale e business cross-border con un ingresso globale piГ№ pulito.",
      positioningBody: "LвЂ™hub deve risultare internazionale, premium e multilingue, ma piГ№ leggero dei siti di mercato.",
      sections: [
        { label: "Chi siamo", slug: "about", title: "Chi ГЁ InterLex e perchГ© lвЂ™hub esiste separatamente.", body: "Il sito globale spiega il brand, il profilo cliente e la logica di routing senza assorbire il dettaglio operativo locale." },
        { label: "Cross-border", slug: "cross-border", title: "Come Kazakistan e Georgia si inseriscono in un unico quadro advisory.", body: "La pagina di confronto orienta i mandati relativi a ingresso, strutturazione e operativitГ ." },
        { label: "Contatto", slug: "contact", title: "Un punto di intake multilingue prima del passaggio al track corretto.", body: "La pagina contatti rende semplice il primo passaggio e instrada verso dominio e team giusti." },
      ],
    },
    about: {
      title: "Chi siamo",
      description: "Scopri come InterLex struttura il proprio hub globale e instrada i mandati verso Kazakistan e Georgia.",
      eyebrow: "Su InterLex",
      introTitle: "Un brand globale con esecuzione legale e business specifica per mercato.",
      introBody: "InterLex usa interlex.work come hub multilingue pulito. Qui il cliente incontra il brand, comprende la mappa regionale e vede come Kazakistan e Georgia si inseriscono nello stesso quadro advisory.",
      principlesLabel: "PerchГ© questa struttura funziona",
      principles: [
        { title: "Prima il brand, poi lвЂ™esecuzione", body: "InterLex presenta unвЂ™unica architettura di brand, lasciando lвЂ™esecuzione al dominio della giurisdizione che possiede il mandato." },
        { title: "Orientamento cross-border", body: "LвЂ™hub ГЁ il luogo in cui il cliente comprende la relazione tra i mercati prima di scegliere il percorso di delivery." },
        { title: "La profonditГ  regionale resta regionale", body: "Cataloghi dettagliati, logica SEO locale ed esecuzione restano su interlex.kz e interlex.ge." },
      ],
      practiceLabel: "InterLex in pratica",
      practice: [
        "LвЂ™hub serve per orientamento, posizionamento e supporto decisionale.",
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
      introBody: "Usa questa pagina quando il mandato ГЁ ancora in fase di definizione. Chiarisce i ruoli di Kazakistan e Georgia nel sistema InterLex.",
      introSide: "LвЂ™hub non cerca di vincere lвЂ™intero mandato in una sola pagina. Il suo compito ГЁ ridurre lвЂ™ambiguitГ  e indirizzare verso lвЂ™ambiente di esecuzione corretto.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Ingresso sul mercato",
        kz: "Setup societario, compliance locale, avvio operativo, accounting e tax support per team che entrano in Kazakistan.",
        ge: "Strutture holding e operative, logica FIZ, regimi speciali e modelli di setup per la Georgia.",
      },
      investor: {
        title: "Prospettiva investitore",
        kz: "Ideale quando il mandato dipende da esecuzione locale, controparti locali o lavoro istituzionale in Kazakistan.",
        ge: "Ideale quando il mandato dipende da strutturazione internazionale, flessibilitГ  e architettura cross-border investor-facing.",
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
      introBody: "LвЂ™hub globale ГЁ il posto giusto per il primo contatto quando la questione va ancora inquadrata. Una volta chiarita la struttura, la conversazione puГІ passare al sito di Kazakistan o Georgia.",
      flowLabel: "Flusso di intake",
      steps: [
        "Descrivi il mercato o i mercati coinvolti.",
        "Indica se la questione ГЁ esplorativa, transazionale o giГ  in esecuzione.",
        "Il mandato viene poi instradato verso il sito paese corretto oppure gestito inizialmente come discussione cross-border a livello brand.",
      ],
      closingLabel: "Cosa deve fare lвЂ™hub",
      closingTitle: "Semplificare lвЂ™intake. Lasciare lвЂ™esecuzione dove deve stare.",
      closingBody: "Questa pagina resta volutamente essenziale. Offre un primo passo chiaro e lascia il materiale piГ№ profondo ai siti di mercato.",
    },
    regionLinks: [
      {
        name: "Kazakistan",
        ...sharedDomains[0],
        language: "Market site RU-first",
        strapline: "Ingresso sul mercato, supporto legale, accounting, tax e operativitГ  continua in Kazakistan.",
        points: [
          "Per founder, investitori e team operativi che entrano o crescono in Kazakistan.",
          "PiГ№ adatto quando il mandato dipende da filing locali, implementazione locale o lavoro di mercato in russo.",
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
          "PiГ№ adatto quando il mandato dipende da regimi georgiani, workflow in inglese o setup investor-facing.",
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
    localeNative: "FranГ§ais",
    flag: "рџ‡«рџ‡·",
    site: {
      title: "InterLex Global Hub",
      description: "Hub mondial multilingue dвЂ™InterLex avec routage vers le Kazakhstan et la GГ©orgie.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Comparer les marchГ©s",
      markets: "MarchГ©s",
      contact: "Contact",
      footerTitle: "Une porte dвЂ™entrГ©e mondiale avec une exГ©cution locale lГ  oГ№ elle doit se trouver.",
      footerBody: "interlex.work reste volontairement lГ©ger : il oriente le client, explique la logique rГ©gionale et redirige le mandat vers le bon site de marchГ©.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "ГЂ propos" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Contact" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Une marque, plusieurs langues, deux destinations de marchГ©.",
      lead: "interlex.work est la porte dвЂ™entrГ©e multilingue dвЂ™InterLex. Le site prГ©sente la marque, aide Г  cadrer le mandat et dirige le client vers le bon site de marchГ©.",
      primaryCta: "Explorer Cross-border",
      secondaryCta: "DГ©couvrir InterLex",
      logicLabel: "Logique du hub",
      notes: [
        "Une seule marque InterLex avec des sites de marchГ© distincts.",
        "Le cadrage cross-border vit sur le hub, lвЂ™exГ©cution locale sur le domaine du pays.",
        "Une entrГ©e multilingue sans transformer le hub en catalogue dupliquГ©.",
      ],
      logicBody: "Si le travail appartient dГ©jГ  clairement Г  une juridiction, allez directement au domaine du pays. Si le pГ©rimГЁtre doit encore ГЄtre clarifiГ©, commencez par le hub.",
      positioningLabel: "Positionnement",
      positioningTitle: "Conseil juridique et business cross-border avec un point dвЂ™entrГ©e global plus lisible.",
      positioningBody: "Le hub doit paraГ®tre international, premium et multilingue tout en restant plus lГ©ger que les sites de marchГ©.",
      sections: [
        { label: "ГЂ propos", slug: "about", title: "Qui est InterLex et pourquoi le hub existe sГ©parГ©ment.", body: "Le site global explique la marque, le profil client et la logique de routage sans absorber lвЂ™exГ©cution locale." },
        { label: "Cross-border", slug: "cross-border", title: "Comment le Kazakhstan et la GГ©orgie sвЂ™inscrivent dans une seule image advisory.", body: "La page de comparaison oriente les mandats liГ©s Г  lвЂ™entrГ©e de marchГ©, Г  la structuration et Г  lвЂ™opГ©rationnel." },
        { label: "Contact", slug: "contact", title: "Un point dвЂ™entrГ©e multilingue avant le transfert vers le bon track.", body: "La page contact simplifie le premier Г©change et lвЂ™envoie vers le bon domaine et la bonne Г©quipe." },
      ],
    },
    about: {
      title: "ГЂ propos",
      description: "DГ©couvrez comment InterLex structure son hub global et route les mandats vers le Kazakhstan et la GГ©orgie.",
      eyebrow: "ГЂ propos dвЂ™InterLex",
      introTitle: "Une marque Г  vocation globale avec une exГ©cution juridique et business propre Г  chaque marchГ©.",
      introBody: "InterLex utilise interlex.work comme hub multilingue propre. CвЂ™est ici que le client rencontre la marque, comprend la carte rГ©gionale et voit comment le Kazakhstan et la GГ©orgie sвЂ™inscrivent dans un mГЄme cadre advisory.",
      principlesLabel: "Pourquoi cette structure fonctionne",
      principles: [
        { title: "La marque dвЂ™abord, lвЂ™exГ©cution ensuite", body: "InterLex prГ©sente une seule architecture de marque tout en gardant lвЂ™exГ©cution sur le domaine de la juridiction qui porte le mandat." },
        { title: "Orientation cross-border", body: "Le hub permet au client de comprendre la relation entre les marchГ©s avant de choisir la voie de delivery." },
        { title: "La profondeur rГ©gionale reste rГ©gionale", body: "Les catalogues dГ©taillГ©s, la logique SEO locale et lвЂ™exГ©cution de marchГ© restent sur interlex.kz et interlex.ge." },
      ],
      practiceLabel: "InterLex en pratique",
      practice: [
        "Le hub sert Г  lвЂ™orientation, au positionnement et au support de dГ©cision.",
        "Le Kazakhstan et la GГ©orgie portent ensuite le dГ©tail linguistique, de service et dвЂ™exГ©cution nГ©cessaire.",
        "Cette sГ©paration rГ©duit les duplications entre langues et marchГ©s.",
      ],
      nextLabel: "Г‰tape suivante",
      nextTitle: "Voyez comment les deux tracks de marchГ© se comparent.",
      nextBody: "La page cross-border explicite cette sГ©paration avant le passage vers un site rГ©gional.",
      nextCta: "Ouvrir Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Comparez les tracks InterLex pour le Kazakhstan et la GГ©orgie et routez le mandat vers le bon market site.",
      eyebrow: "Cross-border",
      introTitle: "Deux sites de marchГ©, une seule dГ©cision de routage au niveau de la marque.",
      introBody: "Utilisez cette page lorsque le mandat est encore en cours de dГ©finition. Elle clarifie les rГґles du Kazakhstan et de la GГ©orgie dans le systГЁme InterLex.",
      introSide: "Le hub nвЂ™essaie pas de gagner tout le mandat sur une seule page. Son rГґle est de rГ©duire lвЂ™ambiguГЇtГ© et dвЂ™orienter vers le bon environnement dвЂ™exГ©cution.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "EntrГ©e sur le marchГ©",
        kz: "Constitution, conformitГ© locale, lancement opГ©rationnel, comptabilitГ© et fiscalitГ© pour les Г©quipes entrant au Kazakhstan.",
        ge: "Structures holding et opГ©rationnelles, logique FIZ, rГ©gimes spГ©ciaux et modГЁles dвЂ™implantation en GГ©orgie.",
      },
      investor: {
        title: "Posture investisseur",
        kz: "Le meilleur choix lorsque le mandat dГ©pend dвЂ™une exГ©cution locale, de contreparties locales ou dвЂ™un travail institutionnel au Kazakhstan.",
        ge: "Le meilleur choix lorsque le mandat dГ©pend dвЂ™une structuration internationale, de flexibilitГ© et dвЂ™une architecture cross-border orientГ©e investisseurs.",
      },
      language: {
        title: "Langue de travail",
        kz: "Site de marchГ© RU-first pour les fondateurs et Г©quipes qui ont besoin dвЂ™un contexte marchГ© en russe et de dГ©tails dвЂ™implГ©mentation.",
        ge: "Site de marchГ© EN-first pour les clients internationaux qui souhaitent une orientation en anglais et une planification par juridiction.",
      },
      needHelpLabel: "Besoin dвЂ™aide pour le routage ?",
      needHelpTitle: "Commencez par une conversation au niveau de la marque, puis passez au bon track.",
      needHelpCta: "Ouvrir Contact",
    },
    contactPage: {
      title: "Contact",
      description: "DГ©marrez une conversation brand-level avec InterLex et routez le mandat vers le Kazakhstan ou la GГ©orgie.",
      eyebrow: "Contact",
      introTitle: "Commencez par le mandat. Le routage doit ensuite ГЄtre prГ©cis.",
      introBody: "Le hub global est le bon point de premier contact lorsque le sujet doit encore ГЄtre cadrГ©. Une fois la structure clarifiГ©e, la conversation peut passer au site Kazakhstan ou GГ©orgie.",
      flowLabel: "Flux dвЂ™intake",
      steps: [
        "DГ©crivez le ou les marchГ©s concernГ©s.",
        "Indiquez si la question est exploratoire, transactionnelle ou dГ©jГ  en exГ©cution.",
        "Le mandat est ensuite routГ© vers le bon site pays ou traitГ© dвЂ™abord comme discussion cross-border au niveau de la marque.",
      ],
      closingLabel: "Ce que le hub doit faire",
      closingTitle: "Rendre lвЂ™intake simple. Garder lвЂ™exГ©cution Г  sa place.",
      closingBody: "Cette page reste volontairement lГ©gГЁre. Elle donne une premiГЁre Г©tape claire et laisse le contenu plus profond aux sites de marchГ©.",
    },
    regionLinks: [
      {
        name: "Kazakhstan",
        ...sharedDomains[0],
        language: "Site de marchГ© RU-first",
        strapline: "EntrГ©e de marchГ©, support juridique, comptabilitГ©, fiscalitГ© et exГ©cution continue au Kazakhstan.",
        points: [
          "Pour les fondateurs, investisseurs et Г©quipes opГ©rationnelles entrant ou se dГ©veloppant au Kazakhstan.",
          "Pertinent lorsque le mandat dГ©pend de filings locaux, dвЂ™implГ©mentation locale ou dвЂ™un travail de marchГ© en russe.",
          "Utilisez cette voie lorsque le travail relГЁve clairement du delivery stack Kazakhstan.",
        ],
      },
      {
        name: "GГ©orgie",
        ...sharedDomains[1],
        language: "Site de marchГ© EN-first",
        strapline: "Structuration, parcours FIZ, positionnement fiscal et support opГ©rationnel cross-border en GГ©orgie.",
        points: [
          "Pour les clients internationaux qui comparent les modГЁles dвЂ™entrГ©e, holding logic et structures rГ©gionales.",
          "Pertinent lorsque le mandat dГ©pend de rГ©gimes gГ©orgiens, dвЂ™un workflow en anglais ou dвЂ™un setup investor-facing.",
          "Utilisez cette voie lorsque le dГ©tail juridictionnel doit vivre sur le site gГ©orgien.",
        ],
      },
    ],
    contactChannels: [
      { label: "Demandes gГ©nГ©rales", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Pour les introductions brand-level, le routage et le cadrage initial du mandat." },
      { label: "Track Kazakhstan", value: "interlex.kz", href: "https://interlex.kz", note: "ГЂ utiliser si le sujet relГЁve clairement du site Kazakhstan." },
      { label: "Track GГ©orgie", value: "interlex.ge", href: "https://interlex.ge", note: "ГЂ utiliser si le sujet relГЁve clairement du site GГ©orgie." },
    ],
  },
  ka: {
    lang: "ka",
    dir: "ltr",
    localeLabel: "KA",
    localeNative: "бѓҐбѓђбѓ бѓ—бѓЈбѓљбѓ",
    flag: "рџ‡¬рџ‡Є",
    site: {
      title: "InterLex Global Hub",
      description: "InterLex-бѓбѓЎ бѓ›бѓ бѓђбѓ•бѓђбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњбѓ бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓ°бѓђбѓ‘бѓ, бѓ бѓќбѓ›бѓ”бѓљбѓбѓЄ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓЎ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЎбѓђ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎбѓ™бѓ”бѓњ бѓ›бѓбѓ›бѓђбѓ бѓ—бѓђбѓ•бѓЎ.",
      brand: "InterLex",
      hubLabel: "бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓ°бѓђбѓ‘бѓ",
      compareMarkets: "бѓ‘бѓђбѓ–бѓ бѓ”бѓ‘бѓбѓЎ бѓЁбѓ”бѓ“бѓђбѓ бѓ”бѓ‘бѓђ",
      markets: "бѓ‘бѓђбѓ–бѓ бѓ”бѓ‘бѓ",
      contact: "бѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓ",
      footerTitle: "бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓЁбѓ”бѓЎбѓђбѓЎбѓ•бѓљбѓ”бѓљбѓ, бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ•бѓ бѓЁбѓ”бѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓбѓ— бѓбѓҐ, бѓЎбѓђбѓ“бѓђбѓЄ бѓђбѓ›бѓђбѓЎ бѓ бѓ”бѓђбѓљбѓЈбѓ бѓђбѓ“ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ бѓђбѓ“бѓ’бѓбѓљбѓ.",
      footerBody: "interlex.work бѓ’бѓђбѓњбѓ–бѓ бѓђбѓ® бѓ›бѓЎбѓЈбѓ‘бѓЈбѓҐбѓбѓђ: бѓ™бѓљбѓбѓ”бѓњбѓўбѓЎ бѓќбѓ бѓбѓ”бѓњбѓўбѓбѓ бѓ”бѓ‘бѓђбѓЎ бѓђбѓ«бѓљбѓ”бѓ•бѓЎ, бѓ®бѓЎбѓњбѓбѓЎ бѓ бѓ”бѓ’бѓбѓќбѓњбѓЈбѓљ бѓљбѓќбѓ’бѓбѓ™бѓђбѓЎ бѓ“бѓђ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓЎ бѓЎбѓ¬бѓќбѓ  market-specific бѓЎбѓђбѓбѓўбѓ–бѓ” бѓђбѓ’бѓ–бѓђбѓ•бѓњбѓбѓЎ.",
    },
    nav: [
      { slug: "", label: "бѓ°бѓђбѓ‘бѓ" },
      { slug: "about", label: "бѓ©бѓ•бѓ”бѓњ бѓЁбѓ”бѓЎбѓђбѓ®бѓ”бѓ‘" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "бѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓ" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "бѓ”бѓ бѓ—бѓ бѓ‘бѓ бѓ”бѓњбѓ“бѓ, бѓ‘бѓ”бѓ•бѓ бѓ бѓ”бѓњбѓђ, бѓќбѓ бѓ бѓЎбѓђбѓ‘бѓђбѓ–бѓ бѓќ бѓ›бѓбѓ›бѓђбѓ бѓ—бѓЈбѓљбѓ”бѓ‘бѓђ.",
      lead: "interlex.work бѓђбѓ бѓбѓЎ InterLex-бѓбѓЎ бѓ›бѓ бѓђбѓ•бѓђбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњбѓ бѓЁбѓ”бѓЎбѓђбѓЎбѓ•бѓљбѓ”бѓљбѓ. бѓђбѓҐ бѓ™бѓљбѓбѓ”бѓњбѓўбѓ бѓ”бѓЄбѓњбѓќбѓ‘бѓђ бѓ‘бѓ бѓ”бѓњбѓ“бѓЎ, бѓђбѓ§бѓђбѓљбѓбѓ‘бѓ”бѓ‘бѓЎ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓЎ бѓ“бѓђ бѓ’бѓђбѓ“бѓђбѓ“бѓбѓЎ бѓЁбѓ”бѓЎбѓђбѓ‘бѓђбѓ›бѓбѓЎ market-specific бѓЎбѓђбѓбѓўбѓ–бѓ”.",
      primaryCta: "Cross-border бѓ’бѓ•бѓ”бѓ бѓ“бѓ",
      secondaryCta: "InterLex-бѓбѓЎ бѓЁбѓ”бѓЎбѓђбѓ®бѓ”бѓ‘",
      logicLabel: "бѓ°бѓђбѓ‘бѓбѓЎ бѓљбѓќбѓ’бѓбѓ™бѓђ",
      notes: [
        "бѓ”бѓ бѓ—бѓ InterLex бѓ‘бѓ бѓ”бѓњбѓ“бѓ бѓ“бѓђ бѓЄбѓђбѓљбѓ™бѓ”бѓЈбѓљбѓ market-specific бѓЎбѓђбѓбѓўбѓ”бѓ‘бѓ.",
        "Cross-border бѓ©бѓђбѓ бѓ©бѓќ бѓ°бѓђбѓ‘бѓ–бѓ”бѓђ, бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ•бѓ бѓЁбѓ”бѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓђ бѓ™бѓ бѓҐбѓ•бѓ”бѓ§бѓњбѓбѓЎ бѓ“бѓќбѓ›бѓ”бѓњбѓ–бѓ”.",
        "бѓ›бѓ бѓђбѓ•бѓђбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњбѓ бѓЁбѓ”бѓЎбѓђбѓЎбѓ•бѓљбѓ”бѓљбѓ, бѓ™бѓђбѓўбѓђбѓљбѓќбѓ’бѓбѓЎ бѓ“бѓЈбѓ‘бѓљбѓбѓ бѓ”бѓ‘бѓбѓЎ бѓ’бѓђбѓ бѓ”бѓЁбѓ”.",
      ],
      logicBody: "бѓ—бѓЈ бѓЎбѓђбѓҐбѓ›бѓ” бѓЈбѓ™бѓ•бѓ” бѓђбѓЁбѓ™бѓђбѓ бѓђбѓ“ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ бѓ™бѓќбѓњбѓ™бѓ бѓ”бѓўбѓЈбѓљ бѓбѓЈбѓ бѓбѓЎбѓ“бѓбѓҐбѓЄбѓбѓђбѓЎ, бѓ’бѓђбѓ“бѓђбѓ“бѓбѓ— бѓҐбѓ•бѓ”бѓ§бѓњбѓбѓЎ бѓ“бѓќбѓ›бѓ”бѓњбѓ–бѓ”. бѓ—бѓЈ бѓ›бѓќбѓЄбѓЈбѓљбѓќбѓ‘бѓђ бѓЇбѓ”бѓ  бѓ™бѓбѓ“бѓ”бѓ• бѓ“бѓђбѓЎбѓђбѓ–бѓЈбѓЎбѓўбѓ”бѓ‘бѓ”бѓљбѓбѓђ, бѓ“бѓђбѓбѓ¬бѓ§бѓ”бѓ— бѓ°бѓђбѓ‘бѓбѓ“бѓђбѓњ.",
      positioningLabel: "бѓћбѓќбѓ–бѓбѓЄбѓбѓќбѓњбѓбѓ бѓ”бѓ‘бѓђ",
      positioningTitle: "Cross-border legal бѓ“бѓђ business advisory бѓЈбѓ¤бѓ бѓќ бѓЎбѓЈбѓ¤бѓ—бѓђ бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓЁбѓ”бѓЎбѓђбѓЎбѓ•бѓљбѓ”бѓљбѓбѓ—.",
      positioningBody: "бѓ°бѓђбѓ‘бѓ бѓЈбѓњбѓ“бѓђ бѓбѓ§бѓќбѓЎ бѓЎбѓђбѓ”бѓ бѓ—бѓђбѓЁбѓќбѓ бѓбѓЎбѓќ, бѓћбѓ бѓ”бѓ›бѓбѓЈбѓ› бѓ“бѓђ бѓ›бѓ бѓђбѓ•бѓђбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњбѓ, бѓ›бѓђбѓ’бѓ бѓђбѓ› бѓЈбѓ¤бѓ бѓќ бѓ›бѓЎбѓЈбѓ‘бѓЈбѓҐбѓ, бѓ•бѓбѓ“бѓ бѓ” market-specific бѓЎбѓђбѓбѓўбѓ”бѓ‘бѓ.",
      sections: [
        { label: "бѓ©бѓ•бѓ”бѓњ бѓЁбѓ”бѓЎбѓђбѓ®бѓ”бѓ‘", slug: "about", title: "бѓ•бѓбѓњ бѓђбѓ бѓбѓЎ InterLex бѓ“бѓђ бѓ бѓђбѓўбѓќбѓ› бѓђбѓ бѓЎбѓ”бѓ‘бѓќбѓ‘бѓЎ бѓ°бѓђбѓ‘бѓ бѓ’бѓђбѓњбѓЄбѓђбѓљбѓ™бѓ”бѓ•бѓ”бѓ‘бѓбѓ—.", body: "бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓЎбѓђбѓбѓўбѓ бѓ®бѓЎбѓњбѓбѓЎ бѓ‘бѓ бѓ”бѓњбѓ“бѓЎ, бѓ™бѓљбѓбѓ”бѓњбѓўбѓбѓЎ бѓћбѓ бѓќбѓ¤бѓбѓљбѓЎ бѓ“бѓђ routing-бѓбѓЎ бѓљбѓќбѓ’бѓбѓ™бѓђбѓЎ бѓбѓЎбѓ”, бѓ бѓќбѓ› бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ• execution-бѓЎ бѓђбѓ  бѓђбѓњбѓђбѓЄбѓ•бѓљбѓ”бѓ‘бѓЎ." },
        { label: "Cross-border", slug: "cross-border", title: "бѓ бѓќбѓ’бѓќбѓ  бѓ”бѓ бѓ—бѓбѓђбѓњбѓ“бѓ”бѓ‘бѓђ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќ бѓ”бѓ бѓ— advisory бѓЎбѓЈбѓ бѓђбѓ—бѓЁбѓ.", body: "бѓ”бѓЎ бѓ’бѓ•бѓ”бѓ бѓ“бѓ бѓ”бѓ®бѓ›бѓђбѓ бѓ”бѓ‘бѓђ бѓ™бѓљбѓбѓ”бѓњбѓўбѓЎ бѓЁбѓ”бѓЎбѓ•бѓљбѓђбѓ–бѓ”, бѓЎбѓўбѓ бѓЈбѓҐбѓўбѓЈбѓ бѓбѓ бѓ”бѓ‘бѓђбѓ–бѓ” бѓ“бѓђ бѓќбѓћбѓ”бѓ бѓђбѓЄбѓбѓЈбѓљ бѓ›бѓќбѓ“бѓ”бѓљбѓ–бѓ” бѓќбѓ бѓбѓ”бѓњбѓўбѓђбѓЄбѓбѓђбѓЁбѓ." },
        { label: "бѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓ", slug: "contact", title: "бѓ›бѓ бѓђбѓ•бѓђбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњбѓ intake бѓ¬бѓ”бѓ бѓўбѓбѓљбѓ бѓЎбѓ¬бѓќбѓ  track-бѓ–бѓ” бѓ’бѓђбѓ“бѓђбѓ§бѓ•бѓђбѓњбѓђбѓ›бѓ“бѓ”.", body: "бѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓбѓЎ бѓ’бѓ•бѓ”бѓ бѓ“бѓ бѓћбѓбѓ бѓ•бѓ”бѓљ бѓ“бѓбѓђбѓљбѓќбѓ’бѓЎ бѓђбѓ›бѓђбѓ бѓўбѓбѓ•бѓ”бѓ‘бѓЎ бѓ“бѓђ бѓ›бѓђбѓЎ бѓЎбѓ¬бѓќбѓ  бѓ“бѓќбѓ›бѓ”бѓњбѓЎбѓђ бѓ“бѓђ бѓ’бѓЈбѓњбѓ“бѓЁбѓ бѓ’бѓђбѓ“бѓђбѓђбѓҐбѓ•бѓЎ." },
      ],
    },
    about: {
      title: "бѓ©бѓ•бѓ”бѓњ бѓЁбѓ”бѓЎбѓђбѓ®бѓ”бѓ‘",
      description: "бѓ’бѓђбѓбѓ’бѓ”бѓ—, бѓ бѓќбѓ’бѓќбѓ  бѓђбѓ¬бѓ§бѓќбѓ‘бѓЎ InterLex бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ  бѓ°бѓђбѓ‘бѓЎ бѓ“бѓђ бѓ бѓќбѓ’бѓќбѓ  бѓ›бѓбѓ›бѓђбѓ бѓ—бѓђбѓ•бѓЎ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ”бѓ‘бѓЎ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЎбѓђ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ.",
      eyebrow: "InterLex-бѓбѓЎ бѓЁбѓ”бѓЎбѓђбѓ®бѓ”бѓ‘",
      introTitle: "бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓђбѓ“ бѓ›бѓбѓ›бѓђбѓ бѓ—бѓЈбѓљбѓ бѓ‘бѓ бѓ”бѓњбѓ“бѓ market-specific legal бѓ“бѓђ business execution-бѓбѓ—.",
      introBody: "InterLex бѓбѓ§бѓ”бѓњбѓ”бѓ‘бѓЎ interlex.work-бѓЎ бѓ бѓќбѓ’бѓќбѓ бѓЄ бѓЎбѓЈбѓ¤бѓ—бѓђ бѓ›бѓ бѓђбѓ•бѓђбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњ бѓ°бѓђбѓ‘бѓЎ. бѓђбѓҐ бѓ™бѓљбѓбѓ”бѓњбѓўбѓ бѓ®бѓ•бѓ“бѓ”бѓ‘бѓђ бѓ‘бѓ бѓ”бѓњбѓ“бѓЎ, бѓ®бѓ”бѓ“бѓђбѓ•бѓЎ бѓ бѓ”бѓ’бѓбѓќбѓњбѓЈбѓљ бѓ бѓЈбѓ™бѓђбѓЎ бѓ“бѓђ бѓбѓ’бѓ”бѓ‘бѓЎ, бѓ бѓќбѓ’бѓќбѓ  бѓ”бѓ бѓ—бѓбѓђбѓњбѓ“бѓ”бѓ‘бѓђ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќ бѓ”бѓ бѓ— advisory бѓЎбѓЈбѓ бѓђбѓ—бѓЁбѓ.",
      principlesLabel: "бѓ бѓђбѓўбѓќбѓ› бѓ›бѓЈбѓЁбѓђбѓќбѓ‘бѓЎ бѓ”бѓЎ бѓЎбѓўбѓ бѓЈбѓҐбѓўбѓЈбѓ бѓђ",
      principles: [
        { title: "бѓЇбѓ”бѓ  бѓ‘бѓ бѓ”бѓњбѓ“бѓ, бѓЁбѓ”бѓ›бѓ“бѓ”бѓ’ бѓЁбѓ”бѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓђ", body: "InterLex бѓђбѓ©бѓ•бѓ”бѓњбѓ”бѓ‘бѓЎ бѓ”бѓ бѓ—бѓбѓђбѓњ бѓ‘бѓ бѓ”бѓњбѓ“бѓЎ, бѓ›бѓђбѓ’бѓ бѓђбѓ› execution-бѓЎ бѓўбѓќбѓ•бѓ”бѓ‘бѓЎ бѓбѓ› бѓбѓЈбѓ бѓбѓЎбѓ“бѓбѓҐбѓЄбѓбѓбѓЎ бѓ“бѓќбѓ›бѓ”бѓњбѓ–бѓ”, бѓ бѓќбѓ›бѓ”бѓљбѓЎбѓђбѓЄ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ." },
        { title: "Cross-border бѓќбѓ бѓбѓ”бѓњбѓўбѓђбѓЄбѓбѓђ", body: "бѓ°бѓђбѓ‘бѓ бѓђбѓ бѓбѓЎ бѓђбѓ“бѓ’бѓбѓљбѓ, бѓЎбѓђбѓ“бѓђбѓЄ бѓ™бѓљбѓбѓ”бѓњбѓўбѓ бѓЇбѓ”бѓ  бѓ‘бѓђбѓ–бѓ бѓ”бѓ‘бѓЎ бѓЁбѓќбѓ бѓбѓЎ бѓ™бѓђбѓ•бѓЁбѓбѓ бѓЎ бѓбѓ’бѓ”бѓ‘бѓЎ бѓ“бѓђ бѓ›бѓ®бѓќбѓљбѓќбѓ“ бѓЁбѓ”бѓ›бѓ“бѓ”бѓ’ бѓбѓ бѓ©бѓ”бѓ•бѓЎ delivery бѓ›бѓђбѓ бѓЁбѓ бѓЈбѓўбѓЎ." },
        { title: "бѓ бѓ”бѓ’бѓбѓќбѓњбѓЈбѓљбѓ бѓЎбѓбѓ¦бѓ бѓ›бѓ” бѓ бѓ”бѓ’бѓбѓќбѓњбѓЁбѓ бѓ бѓ©бѓ”бѓ‘бѓђ", body: "бѓ“бѓ”бѓўбѓђбѓљбѓЈбѓ бѓ бѓ™бѓђбѓўбѓђбѓљбѓќбѓ’бѓ”бѓ‘бѓ, бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ•бѓ SEO бѓ“бѓђ market execution бѓ бѓ©бѓ”бѓ‘бѓђ interlex.kz-бѓЎбѓђ бѓ“бѓђ interlex.ge-бѓ–бѓ”." },
      ],
      practiceLabel: "InterLex бѓћбѓ бѓђбѓҐбѓўбѓбѓ™бѓђбѓЁбѓ",
      practice: [
        "бѓ°бѓђбѓ‘бѓ бѓЎбѓђбѓ­бѓбѓ бѓќбѓђ бѓќбѓ бѓбѓ”бѓњбѓўбѓђбѓЄбѓбѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓћбѓќбѓ–бѓбѓЄбѓбѓќбѓњбѓбѓ бѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ бѓ“бѓђ decision support-бѓбѓЎбѓ—бѓ•бѓбѓЎ.",
        "бѓЈбѓ¤бѓ бѓќ бѓ¦бѓ бѓ›бѓђ market-specific бѓ”бѓњбѓђ, бѓЎбѓ”бѓ бѓ•бѓбѓЎбѓ”бѓ‘бѓ бѓ“бѓђ execution pathways бѓЁбѓ”бѓ›бѓ“бѓ”бѓ’ бѓ’бѓђбѓ“бѓђбѓ“бѓбѓЎ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЎбѓђ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ.",
        "бѓ”бѓЎ бѓ’бѓђбѓ§бѓќбѓ¤бѓђ бѓђбѓ›бѓЄбѓбѓ бѓ”бѓ‘бѓЎ бѓ“бѓЈбѓ‘бѓљбѓбѓ бѓ”бѓ‘бѓђбѓЎ бѓ”бѓњбѓ”бѓ‘бѓЎбѓђ бѓ“бѓђ бѓ‘бѓђбѓ–бѓ бѓ”бѓ‘бѓЎ бѓЁбѓќбѓ бѓбѓЎ.",
      ],
      nextLabel: "бѓЁбѓ”бѓ›бѓ“бѓ”бѓ’бѓ бѓњбѓђбѓ‘бѓбѓЇбѓ",
      nextTitle: "бѓњбѓђбѓ®бѓ”бѓ—, бѓ бѓќбѓ’бѓќбѓ  бѓЁбѓ”бѓ“бѓђбѓ бѓ”бѓ‘бѓЈбѓљбѓбѓђ бѓќбѓ бѓ market track.",
      nextBody: "cross-border бѓ’бѓ•бѓ”бѓ бѓ“бѓ бѓђбѓ› бѓ’бѓђбѓњбѓЎбѓ®бѓ•бѓђбѓ•бѓ”бѓ‘бѓђбѓЎ бѓ бѓ”бѓ’бѓбѓќбѓњбѓЈбѓљ бѓЎбѓђбѓбѓўбѓ–бѓ” бѓ’бѓђбѓ“бѓђбѓЎбѓ•бѓљбѓђбѓ›бѓ“бѓ” бѓ®бѓ“бѓбѓЎ бѓЄбѓ®бѓђбѓ“бѓЎ.",
      nextCta: "Cross-border бѓ’бѓђбѓ®бѓЎбѓњбѓђ",
    },
    crossBorder: {
      title: "Cross-border",
      description: "бѓЁбѓ”бѓђбѓ“бѓђбѓ бѓ”бѓ— InterLex-бѓбѓЎ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓбѓЎбѓђ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎ track-бѓ”бѓ‘бѓ бѓ“бѓђ бѓ›бѓбѓ›бѓђбѓ бѓ—бѓ”бѓ— бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓЎбѓ¬бѓќбѓ  market site-бѓ–бѓ”.",
      eyebrow: "Cross-border",
      introTitle: "бѓќбѓ бѓ market site, бѓ”бѓ бѓ—бѓ бѓ‘бѓ бѓ”бѓњбѓ“бѓЈбѓљбѓ routing-бѓ’бѓђбѓ“бѓђбѓ¬бѓ§бѓ•бѓ”бѓўбѓбѓљбѓ”бѓ‘бѓђ.",
      introBody: "бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓ”бѓ— бѓ”бѓЎ бѓ’бѓ•бѓ”бѓ бѓ“бѓ, бѓ бѓќбѓЄбѓђ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓЇбѓ”бѓ  бѓ™бѓбѓ“бѓ”бѓ• бѓ¤бѓќбѓ бѓ›бѓбѓ бѓ”бѓ‘бѓбѓЎ бѓћбѓ бѓќбѓЄбѓ”бѓЎбѓЁбѓбѓђ. бѓбѓЎ бѓ®бѓЎбѓњбѓбѓЎ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓбѓЎбѓђ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎ бѓ бѓќбѓљбѓ”бѓ‘бѓЎ InterLex-бѓбѓЎ бѓЎбѓбѓЎбѓўбѓ”бѓ›бѓђбѓЁбѓ.",
      introSide: "бѓ°бѓђбѓ‘бѓбѓЎ бѓ›бѓбѓ–бѓђбѓњбѓ бѓђбѓ  бѓђбѓ бѓбѓЎ бѓ›бѓ—бѓ”бѓљбѓ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓбѓЎ бѓ”бѓ бѓ— бѓ’бѓ•бѓ”бѓ бѓ“бѓ–бѓ” бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ. бѓ›бѓбѓЎбѓ бѓђбѓ›бѓќбѓЄбѓђбѓњбѓђбѓђ бѓ’бѓђбѓЈбѓ бѓ™бѓ•бѓ”бѓ•бѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓЄбѓбѓ бѓ”бѓ‘бѓђ бѓ“бѓђ бѓ™бѓљбѓбѓ”бѓњбѓўбѓбѓЎ бѓЎбѓ¬бѓќбѓ  execution бѓ’бѓђбѓ бѓ”бѓ›бѓќбѓЁбѓ бѓ’бѓђбѓ“бѓђбѓ›бѓбѓЎбѓђбѓ›бѓђбѓ бѓ—бѓ”бѓ‘бѓђ.",
      tableLabel: "бѓ›бѓбѓ›бѓђбѓ бѓ—бѓЈбѓљбѓ”бѓ‘бѓђ",
      marketEntry: {
        title: "бѓ‘бѓђбѓ–бѓђбѓ бѓ–бѓ” бѓЁбѓ”бѓЎбѓ•бѓљбѓђ",
        kz: "бѓ бѓ”бѓ’бѓбѓЎбѓўбѓ бѓђбѓЄбѓбѓђ, бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ•бѓ compliance, бѓќбѓћбѓ”бѓ бѓђбѓЄбѓбѓЈбѓљбѓ бѓ’бѓђбѓЁбѓ•бѓ”бѓ‘бѓђ, accounting бѓ“бѓђ tax support бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЁбѓ бѓЁбѓ”бѓ›бѓЎбѓ•бѓљбѓ”бѓљбѓ бѓ’бѓЈбѓњбѓ“бѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ.",
        ge: "бѓ°бѓќбѓљбѓ“бѓбѓњбѓ’бѓбѓЎбѓђ бѓ“бѓђ бѓќбѓћбѓ”бѓ бѓђбѓЄбѓбѓЈбѓљбѓ бѓЎбѓўбѓ бѓЈбѓҐбѓўбѓЈбѓ бѓ”бѓ‘бѓ, FIZ бѓљбѓќбѓ’бѓбѓ™бѓђ, special regimes бѓ“бѓђ setup бѓ›бѓќбѓ“бѓ”бѓљбѓ”бѓ‘бѓ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎбѓ—бѓ•бѓбѓЎ.",
      },
      investor: {
        title: "бѓбѓњбѓ•бѓ”бѓЎбѓўбѓќбѓ бѓЈбѓљбѓ бѓ¤бѓќбѓ™бѓЈбѓЎбѓ",
        kz: "бѓЈбѓ™бѓ”бѓ—бѓ”бѓЎбѓбѓђ, бѓ бѓќбѓЄбѓђ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ• execution-бѓ–бѓ”, бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ• counterparties-бѓ–бѓ” бѓђбѓњ бѓбѓњбѓЎбѓўбѓбѓўбѓЈбѓЄбѓбѓЈбѓ  бѓ›бѓЈбѓЁбѓђбѓќбѓ‘бѓђбѓ–бѓ”бѓђ бѓ“бѓђбѓ›бѓќбѓ™бѓбѓ“бѓ”бѓ‘бѓЈбѓљбѓ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЁбѓ.",
        ge: "бѓЈбѓ™бѓ”бѓ—бѓ”бѓЎбѓбѓђ, бѓ бѓќбѓЄбѓђ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓ“бѓђбѓ›бѓќбѓ™бѓбѓ“бѓ”бѓ‘бѓЈбѓљбѓбѓђ бѓЎбѓђбѓ”бѓ бѓ—бѓђбѓЁбѓќбѓ бѓбѓЎбѓќ бѓЎбѓўбѓ бѓЈбѓҐбѓўбѓЈбѓ бѓбѓ бѓ”бѓ‘бѓђбѓ–бѓ”, бѓ›бѓќбѓҐбѓњбѓбѓљбѓќбѓ‘бѓђбѓ–бѓ” бѓ“бѓђ investor-facing cross-border бѓђбѓ бѓҐбѓбѓўбѓ”бѓҐбѓўбѓЈбѓ бѓђбѓ–бѓ”.",
      },
      language: {
        title: "бѓЎбѓђбѓ›бѓЈбѓЁбѓђбѓќ бѓ”бѓњбѓђ",
        kz: "RU-first market site бѓ¤бѓђбѓЈбѓњбѓ“бѓ”бѓ бѓ”бѓ‘бѓбѓЎбѓђ бѓ“бѓђ бѓ’бѓЈбѓњбѓ“бѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓ бѓќбѓ›бѓљбѓ”бѓ‘бѓЎбѓђбѓЄ бѓЎбѓ­бѓбѓ бѓ“бѓ”бѓ‘бѓђбѓ— бѓ бѓЈбѓЎбѓЈбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњбѓ market context бѓ“бѓђ implementation detail.",
        ge: "EN-first market site бѓЎбѓђбѓ”бѓ бѓ—бѓђбѓЁбѓќбѓ бѓбѓЎбѓќ бѓ™бѓљбѓбѓ”бѓњбѓўбѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓ бѓќбѓ›бѓљбѓ”бѓ‘бѓЎбѓђбѓЄ бѓЎбѓ­бѓбѓ бѓ“бѓ”бѓ‘бѓђбѓ— бѓбѓњбѓ’бѓљбѓбѓЎбѓЈбѓ бѓ”бѓњбѓќбѓ•бѓђбѓњбѓ orientation бѓ“бѓђ jurisdiction-specific planning.",
      },
      needHelpLabel: "бѓ’бѓ­бѓбѓ бѓ“бѓ”бѓ‘бѓђбѓ— routing бѓ“бѓђбѓ®бѓ›бѓђбѓ бѓ”бѓ‘бѓђ?",
      needHelpTitle: "бѓ“бѓђбѓбѓ¬бѓ§бѓ”бѓ— brand-level бѓ“бѓбѓђбѓљбѓќбѓ’бѓбѓ— бѓ“бѓђ бѓЁбѓ”бѓ›бѓ“бѓ”бѓ’ бѓ’бѓђбѓ“бѓђбѓ“бѓбѓ— бѓЎбѓ¬бѓќбѓ  track-бѓ–бѓ”.",
      needHelpCta: "бѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓбѓЎ бѓ’бѓђбѓ®бѓЎбѓњбѓђ",
    },
    contactPage: {
      title: "бѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓ",
      description: "бѓ“бѓђбѓбѓ¬бѓ§бѓ”бѓ— InterLex-бѓ—бѓђбѓњ brand-level бѓЎбѓђбѓЈбѓ‘бѓђбѓ бѓ бѓ“бѓђ бѓ›бѓбѓ›бѓђбѓ бѓ—бѓ”бѓ— бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЎбѓђ бѓ—бѓЈ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ.",
      eyebrow: "бѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓ",
      introTitle: "бѓ“бѓђбѓбѓ¬бѓ§бѓ”бѓ— бѓ›бѓђбѓњбѓ“бѓђбѓўбѓбѓ—. бѓЁбѓ”бѓ›бѓ“бѓ”бѓ’ routing бѓ–бѓЈбѓЎбѓўбѓ бѓЈбѓњбѓ“бѓђ бѓбѓ§бѓќбѓЎ.",
      introBody: "бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓ°бѓђбѓ‘бѓ бѓЎбѓ¬бѓќбѓ бѓ бѓћбѓбѓ бѓ•бѓ”бѓљбѓ бѓЎбѓђбѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓќ бѓ¬бѓ”бѓ бѓўбѓбѓљбѓбѓђ, бѓ бѓќбѓЄбѓђ бѓЎбѓђбѓ™бѓбѓ—бѓ®бѓ бѓЇбѓ”бѓ  бѓ™бѓбѓ“бѓ”бѓ• бѓ“бѓђбѓЎбѓђбѓ¤бѓќбѓ бѓ›бѓ”бѓ‘бѓ”бѓљбѓбѓђ. бѓђбѓ›бѓбѓЎ бѓЁбѓ”бѓ›бѓ“бѓ”бѓ’ бѓЎбѓђбѓЈбѓ‘бѓђбѓ бѓ бѓЁбѓ”бѓбѓ«бѓљбѓ”бѓ‘бѓђ бѓ’бѓђбѓ“бѓђбѓ•бѓбѓ“бѓ”бѓЎ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓбѓЎ бѓђбѓњ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎ бѓЎбѓђбѓбѓўбѓ–бѓ”.",
      flowLabel: "Intake бѓћбѓ бѓќбѓЄбѓ”бѓЎбѓ",
      steps: [
        "бѓђбѓ¦бѓ¬бѓ”бѓ бѓ”бѓ—, бѓ бѓќбѓ›бѓ”бѓљбѓ бѓ‘бѓђбѓ–бѓђбѓ бѓ бѓђбѓњ бѓ‘бѓђбѓ–бѓ бѓ”бѓ‘бѓбѓђ бѓ©бѓђбѓ бѓ—бѓЈбѓљбѓ.",
        "бѓ›бѓбѓЈбѓ—бѓбѓ—бѓ”бѓ—, бѓЎбѓђбѓ™бѓбѓ—бѓ®бѓ exploratory, transactional бѓ—бѓЈ бѓЈбѓ™бѓ•бѓ” execution бѓ¤бѓђбѓ–бѓђбѓЁбѓбѓђ.",
        "бѓђбѓ›бѓбѓЎ бѓЁбѓ”бѓ›бѓ“бѓ”бѓ’ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓ’бѓђбѓ“бѓђбѓбѓ’бѓ–бѓђбѓ•бѓњбѓ”бѓ‘бѓђ бѓЎбѓ¬бѓќбѓ  country site-бѓ–бѓ” бѓђбѓњ бѓћбѓбѓ бѓ•бѓ”бѓљ бѓ бѓбѓ’бѓЁбѓ бѓ“бѓђбѓ бѓ©бѓ”бѓ‘бѓђ cross-border brand-level бѓ’бѓђбѓњбѓ®бѓбѓљбѓ•бѓђбѓЁбѓ.",
      ],
      closingLabel: "бѓ бѓђбѓЎ бѓЈбѓњбѓ“бѓђ бѓђбѓ™бѓ”бѓ—бѓ”бѓ‘бѓ“бѓ”бѓЎ бѓ°бѓђбѓ‘бѓ",
      closingTitle: "Intake бѓ›бѓђбѓ бѓўбѓбѓ•бѓ бѓЈбѓњбѓ“бѓђ бѓбѓ§бѓќбѓЎ. Execution бѓбѓҐ бѓЈбѓњбѓ“бѓђ бѓ“бѓђбѓ бѓ©бѓ”бѓЎ, бѓЎбѓђбѓ“бѓђбѓЄ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ.",
      closingBody: "бѓ”бѓЎ бѓ’бѓ•бѓ”бѓ бѓ“бѓ бѓЁбѓ”бѓ’бѓњбѓ”бѓ‘бѓЈбѓљбѓђбѓ“ бѓ›бѓЎбѓЈбѓ‘бѓЈбѓҐбѓбѓђ. бѓбѓЎ бѓ›бѓ®бѓќбѓљбѓќбѓ“ бѓњбѓђбѓ—бѓ”бѓљ бѓћбѓбѓ бѓ•бѓ”бѓљ бѓњбѓђбѓ‘бѓбѓЇбѓЎ бѓбѓ«бѓљбѓ”бѓ•бѓђ бѓ“бѓђ бѓ¦бѓ бѓ›бѓђ market-specific бѓ›бѓђбѓЎбѓђбѓљбѓђбѓЎ бѓ‘бѓђбѓ–бѓ бѓбѓЎ бѓЎбѓђбѓбѓўбѓ”бѓ‘бѓ–бѓ” бѓўбѓќбѓ•бѓ”бѓ‘бѓЎ.",
    },
    regionLinks: [
      {
        name: "бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓ",
        ...sharedDomains[0],
        language: "RU-first market site",
        strapline: "бѓ‘бѓђбѓ–бѓђбѓ бѓ–бѓ” бѓЁбѓ”бѓЎбѓ•бѓљбѓђ, legal support, accounting, tax бѓ“бѓђ бѓ›бѓЈбѓ“бѓ›бѓбѓ•бѓ бѓќбѓћбѓ”бѓ бѓђбѓЄбѓбѓЈбѓљбѓ бѓЁбѓ”бѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓђ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЁбѓ.",
        points: [
          "бѓ¤бѓђбѓЈбѓњбѓ“бѓ”бѓ бѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓбѓњбѓ•бѓ”бѓЎбѓўбѓќбѓ бѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ бѓ“бѓђ бѓќбѓћбѓ”бѓ бѓђбѓЄбѓбѓЈбѓљбѓ бѓ’бѓЈбѓњбѓ“бѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓ бѓќбѓ›бѓљбѓ”бѓ‘бѓбѓЄ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЁбѓ бѓЁбѓ”бѓ“бѓбѓђбѓњ бѓђбѓњ бѓбѓ–бѓ бѓ“бѓ”бѓ‘бѓбѓђбѓњ.",
          "бѓЎбѓђбѓЈбѓ™бѓ”бѓ—бѓ”бѓЎбѓќбѓђ, бѓ бѓќбѓЄбѓђ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓ“бѓђбѓ›бѓќбѓ™бѓбѓ“бѓ”бѓ‘бѓЈбѓљбѓбѓђ бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ• filings-бѓ–бѓ”, local implementation-бѓ–бѓ” бѓђбѓњ бѓ бѓЈбѓЎбѓЈбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњ бѓЎбѓђбѓ‘бѓђбѓ–бѓ бѓќ бѓ›бѓЈбѓЁбѓђбѓќбѓ‘бѓђбѓ–бѓ”.",
          "бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓ”бѓ— бѓ”бѓЎ бѓ›бѓђбѓ бѓЁбѓ бѓЈбѓўбѓ, бѓ бѓќбѓЄбѓђ бѓЎбѓђбѓҐбѓ›бѓ” бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓбѓЎ delivery stack-бѓЎ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ.",
        ],
      },
      {
        name: "бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќ",
        ...sharedDomains[1],
        language: "EN-first market site",
        strapline: "бѓЎбѓўбѓ бѓЈбѓҐбѓўбѓЈбѓ бѓбѓ бѓ”бѓ‘бѓђ, FIZ pathways, бѓЎбѓђбѓ’бѓђбѓ“бѓђбѓЎбѓђбѓ®бѓђбѓ“бѓќ бѓћбѓќбѓ–бѓбѓЄбѓбѓќбѓњбѓбѓ бѓ”бѓ‘бѓђ бѓ“бѓђ cross-border operating support бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ.",
        points: [
          "бѓЎбѓђбѓ”бѓ бѓ—бѓђбѓЁбѓќбѓ бѓбѓЎбѓќ бѓ™бѓљбѓбѓ”бѓњбѓўбѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓ бѓќбѓ›бѓљбѓ”бѓ‘бѓбѓЄ бѓђбѓ“бѓђбѓ бѓ”бѓ‘бѓ”бѓњ entry models-бѓЎ, holding logic-бѓЎбѓђ бѓ“бѓђ regional structures-бѓЎ.",
          "бѓЎбѓђбѓЈбѓ™бѓ”бѓ—бѓ”бѓЎбѓќбѓђ, бѓ бѓќбѓЄбѓђ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓ бѓ“бѓђбѓ›бѓќбѓ™бѓбѓ“бѓ”бѓ‘бѓЈбѓљбѓбѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎ бѓ бѓ”бѓџбѓбѓ›бѓ”бѓ‘бѓ–бѓ”, English-first workflow-бѓ–бѓ” бѓђбѓњ investor-facing setup-бѓ–бѓ”.",
          "бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓ”бѓ— бѓ”бѓЎ бѓ›бѓђбѓ бѓЁбѓ бѓЈбѓўбѓ, бѓ бѓќбѓЄбѓђ бѓбѓЈбѓ бѓбѓЎбѓ“бѓбѓҐбѓЄбѓбѓЈбѓљбѓ бѓ“бѓ”бѓўбѓђбѓљбѓ бѓҐбѓђбѓ бѓ—бѓЈбѓљ бѓЎбѓђбѓбѓўбѓ–бѓ” бѓЈбѓњбѓ“бѓђ бѓбѓ§бѓќбѓЎ бѓ’бѓђбѓњбѓ—бѓђбѓ•бѓЎбѓ”бѓ‘бѓЈбѓљбѓ.",
        ],
      },
    ],
    contactChannels: [
      { label: "бѓ–бѓќбѓ’бѓђбѓ“бѓ бѓ›бѓќбѓ—бѓ®бѓќбѓ•бѓњбѓ”бѓ‘бѓ", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "brand-level бѓЁбѓ”бѓЎбѓђбѓ•бѓљбѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ, routing-бѓбѓЎбѓ—бѓ•бѓбѓЎ бѓ“бѓђ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓбѓЎ бѓћбѓбѓ бѓ•бѓ”бѓљбѓђбѓ“бѓ бѓ©бѓђбѓ›бѓќбѓ§бѓђбѓљбѓбѓ‘бѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ." },
      { label: "бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓбѓЎ track", value: "interlex.kz", href: "https://interlex.kz", note: "бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓ”бѓ—, бѓ бѓќбѓЄбѓђ бѓЎбѓђбѓ™бѓбѓ—бѓ®бѓ бѓђбѓЁбѓ™бѓђбѓ бѓђбѓ“ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓбѓЎ бѓЎбѓђбѓбѓўбѓЎ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ." },
      { label: "бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎ track", value: "interlex.ge", href: "https://interlex.ge", note: "бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓ”бѓ—, бѓ бѓќбѓЄбѓђ бѓЎбѓђбѓ™бѓбѓ—бѓ®бѓ бѓђбѓЁбѓ™бѓђбѓ бѓђбѓ“ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎ бѓЎбѓђбѓбѓўбѓЎ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ." },
    ],
  },
  de: {
    lang: "de",
    dir: "ltr",
    localeLabel: "DE",
    localeNative: "Deutsch",
    flag: "рџ‡©рџ‡Є",
    site: {
      title: "InterLex Global Hub",
      description: "Mehrsprachiger globaler Hub von InterLex mit Routing nach Kasachstan und Georgien.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "MГ¤rkte vergleichen",
      markets: "MГ¤rkte",
      contact: "Kontakt",
      footerTitle: "Ein globaler Einstieg mit lokaler Umsetzung dort, wo sie hingehГ¶rt.",
      footerBody: "interlex.work bleibt bewusst schlank: Der Hub orientiert den Mandanten, erklГ¤rt die regionale Logik und leitet das Mandat auf die richtige Marktseite weiter.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "Гњber uns" },
      { slug: "cross-border", label: "Cross-border" },
      { slug: "contact", label: "Kontakt" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Eine Marke, mehrere Sprachen, zwei Marktrouten.",
      lead: "interlex.work ist der mehrsprachige Einstiegspunkt von InterLex. Die Seite erklГ¤rt die Marke, hilft beim Framing des Mandats und leitet den Mandanten auf die passende Marktseite.",
      primaryCta: "Cross-border Г¶ffnen",
      secondaryCta: "Mehr Гјber InterLex",
      logicLabel: "Hub-Logik",
      notes: [
        "Eine InterLex-Marke mit getrennten marktbezogenen Zielseiten.",
        "Cross-border Framing auf dem Hub, lokale Umsetzung auf der Landesdomain.",
        "Mehrsprachiger Einstieg ohne den Hub in einen duplizierten Katalog zu verwandeln.",
      ],
      logicBody: "Wenn die Arbeit bereits klar zu einer Jurisdiktion gehГ¶rt, gehen Sie direkt zur Landesdomain. Wenn der Umfang noch geklГ¤rt werden muss, beginnen Sie hier.",
      positioningLabel: "Positionierung",
      positioningTitle: "Cross-border Legal- und Business-Advisory mit einem klareren globalen Einstieg.",
      positioningBody: "Der Hub soll international, hochwertig und mehrsprachig wirken und zugleich leichter bleiben als die Marktseiten.",
      sections: [
        { label: "Гњber uns", slug: "about", title: "Wer InterLex ist und warum der Hub separat existiert.", body: "Die globale Seite erklГ¤rt Marke, Mandantenprofil und Routing-Logik, ohne die lokale Umsetzungsschicht zu absorbieren." },
        { label: "Cross-border", slug: "cross-border", title: "Wie Kasachstan und Georgien in ein gemeinsames Advisory-Bild passen.", body: "Die Vergleichsseite orientiert Mandate zu MarktВ­eintritt, Strukturierung und operativem Setup." },
        { label: "Kontakt", slug: "contact", title: "Ein mehrsprachiger Intake-Punkt vor der Гњbergabe an den richtigen Track.", body: "Die Kontaktseite hГ¤lt den ersten Schritt einfach und leitet in die richtige Domain und das richtige Team." },
      ],
    },
    about: {
      title: "Гњber uns",
      description: "Erfahren Sie, wie InterLex seinen globalen Hub strukturiert und Mandate nach Kasachstan und Georgien routet.",
      eyebrow: "Гњber InterLex",
      introTitle: "Eine global ausgerichtete Marke mit marktВ­spezifischer legaler und geschГ¤ftlicher Umsetzung.",
      introBody: "InterLex nutzt interlex.work als klaren mehrsprachigen Hub. Hier begegnet der Mandant der Marke, versteht die regionale Landkarte und sieht, wie Kasachstan und Georgien in ein gemeinsames Advisory-Modell passen.",
      principlesLabel: "Warum diese Struktur funktioniert",
      principles: [
        { title: "Zuerst die Marke, dann die Umsetzung", body: "InterLex zeigt eine einheitliche Markenarchitektur und belГ¤sst die Umsetzung auf der Domain der Jurisdiktion, die das Mandat trГ¤gt." },
        { title: "Cross-border Orientierung", body: "Der Hub ist der Ort, an dem der Mandant die Beziehung zwischen den MГ¤rkten versteht, bevor er den Delivery-Pfad wГ¤hlt." },
        { title: "Regionale Tiefe bleibt regional", body: "Detaillierte Kataloge, lokale SEO-Logik und MarktausfГјhrung bleiben auf interlex.kz und interlex.ge." },
      ],
      practiceLabel: "InterLex in der Praxis",
      practice: [
        "Der Hub dient der Orientierung, Positionierung und EntscheidungsunterstГјtzung.",
        "Kasachstan und Georgien tragen danach die tieferen marktbezogenen Inhalte, Services und Execution-Pfade.",
        "Diese Trennung reduziert Duplizierung zwischen Sprachen und MГ¤rkten.",
      ],
      nextLabel: "NГ¤chster Schritt",
      nextTitle: "Sehen Sie, wie sich die beiden Markt-Tracks vergleichen.",
      nextBody: "Die Cross-border Seite macht diese Trennung explizit, bevor auf eine regionale Seite gewechselt wird.",
      nextCta: "Cross-border Г¶ffnen",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Vergleichen Sie die InterLex-Tracks fГјr Kasachstan und Georgien und routen Sie das Mandat auf die richtige Marktseite.",
      eyebrow: "Cross-border",
      introTitle: "Zwei Marktseiten, eine Routing-Entscheidung auf Markenebene.",
      introBody: "Nutzen Sie diese Seite, wenn das Mandat noch definiert wird. Sie klГ¤rt die unterschiedlichen Rollen von Kasachstan und Georgien im InterLex-System.",
      introSide: "Der Hub versucht nicht, das ganze Mandat auf einer Seite zu gewinnen. Seine Aufgabe ist es, Unklarheit zu reduzieren und in die passende Umsetzungsumgebung zu fГјhren.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Markteintritt",
        kz: "GesellschaftsgrГјndung, lokale Compliance, operativer Start, Accounting und Tax Support fГјr Teams beim Eintritt nach Kasachstan.",
        ge: "Holding- und Operating-Strukturen, FIZ-Logik, Sonderregime und Setup-Modelle fГјr Georgien.",
      },
      investor: {
        title: "Investor-Fokus",
        kz: "Am besten geeignet, wenn das Mandat von lokaler Umsetzung, lokalen Gegenparteien oder institutioneller Arbeit in Kasachstan abhГ¤ngt.",
        ge: "Am besten geeignet, wenn das Mandat von internationaler Strukturierung, FlexibilitГ¤t und investor-facing Cross-border Architektur abhГ¤ngt.",
      },
      language: {
        title: "Arbeitssprache",
        kz: "RU-first Marktseite fГјr GrГјnder und Teams, die russischsprachigen Marktkontext und Umsetzungsdetail benГ¶tigen.",
        ge: "EN-first Marktseite fГјr internationale Mandanten, die englischsprachige Orientierung und jurisdiktionsspezifische Planung wГјnschen.",
      },
      needHelpLabel: "Brauchen Sie Hilfe beim Routing?",
      needHelpTitle: "Beginnen Sie mit einem GesprГ¤ch auf Markenebene und wechseln Sie dann in den richtigen Track.",
      needHelpCta: "Kontakt Г¶ffnen",
    },
    contactPage: {
      title: "Kontakt",
      description: "Starten Sie ein GesprГ¤ch mit InterLex auf Markenebene und routen Sie das Mandat nach Kasachstan oder Georgien.",
      eyebrow: "Kontakt",
      introTitle: "Beginnen Sie mit dem Mandat. Danach muss das Routing prГ¤zise sein.",
      introBody: "Der globale Hub ist der richtige erste Kontaktpunkt, wenn das Thema noch strukturiert werden muss. Sobald die Struktur klar ist, kann das GesprГ¤ch auf die Seite Kasachstan oder Georgien wechseln.",
      flowLabel: "Intake-Ablauf",
      steps: [
        "Beschreiben Sie, welcher Markt oder welche MГ¤rkte betroffen sind.",
        "Skizzieren Sie, ob es sich um eine explorative, transaktionale oder bereits operative Frage handelt.",
        "Danach wird das Mandat auf die richtige LГ¤nderseite geroutet oder zunГ¤chst als brand-level Cross-border GesprГ¤ch behandelt.",
      ],
      closingLabel: "Was der Hub leisten soll",
      closingTitle: "Den Intake einfach halten. Die Umsetzung dort lassen, wo sie hingehГ¶rt.",
      closingBody: "Diese Seite bleibt bewusst schlank. Sie gibt einen klaren ersten Schritt und belГ¤sst tiefere marktspezifische Inhalte auf den Marktseiten.",
    },
    regionLinks: [
      {
        name: "Kasachstan",
        ...sharedDomains[0],
        language: "RU-first Marktseite",
        strapline: "Markteintritt, legaler Support, Accounting, Tax und laufende operative Umsetzung in Kasachstan.",
        points: [
          "FГјr GrГјnder, Investoren und operative Teams, die nach Kasachstan eintreten oder dort skalieren.",
          "Besonders passend, wenn das Mandat von lokalen Filings, lokaler Implementierung oder russischsprachiger Marktkommunikation abhГ¤ngt.",
          "Nutzen Sie diese Route, wenn die Arbeit klar in den kasachischen Delivery-Stack gehГ¶rt.",
        ],
      },
      {
        name: "Georgien",
        ...sharedDomains[1],
        language: "EN-first Marktseite",
        strapline: "Strukturierung, FIZ-Wege, steuerliche Positionierung und cross-border Operating Support in Georgien.",
        points: [
          "FГјr internationale Mandanten, die Entry-Modelle, Holding-Logik und regionale Strukturen vergleichen.",
          "Besonders passend, wenn das Mandat von georgischen Regimen, englischem Workflow oder investor-facing Setup abhГ¤ngt.",
          "Nutzen Sie diese Route, wenn die jurisdiktionsspezifische Tiefe auf der georgischen Seite liegen soll.",
        ],
      },
    ],
    contactChannels: [
      { label: "Allgemeine Anfragen", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "FГјr EinfГјhrungen auf Markenebene, Routing und erste MandatsklГ¤rung." },
      { label: "Kasachstan-Track", value: "interlex.kz", href: "https://interlex.kz", note: "Nutzen Sie dies, wenn das Thema klar zur Kasachstan-Seite gehГ¶rt." },
      { label: "Georgien-Track", value: "interlex.ge", href: "https://interlex.ge", note: "Nutzen Sie dies, wenn das Thema klar zur Georgien-Seite gehГ¶rt." },
    ],
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    localeLabel: "AR",
    localeNative: "Ш§Щ„Ш№Ш±ШЁЩЉШ©",
    flag: "рџ‡ёрџ‡¦",
    site: {
      title: "InterLex Global Hub",
      description: "Ш§Щ„Щ…Ш±ЩѓШІ Ш§Щ„Ш№Ш§Щ„Щ…ЩЉ Щ…ШЄШ№ШЇШЇ Ш§Щ„Щ„ШєШ§ШЄ Щ„ЩЂ InterLex Щ…Ш№ ШЄЩ€Ш¬ЩЉЩ‡ ШҐЩ„Щ‰ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§.",
      brand: "InterLex",
      hubLabel: "Ш§Щ„Щ…Ш±ЩѓШІ Ш§Щ„Ш№Ш§Щ„Щ…ЩЉ",
      compareMarkets: "Щ…Щ‚Ш§Ш±Щ†Ш© Ш§Щ„ШЈШіЩ€Ш§Щ‚",
      markets: "Ш§Щ„ШЈШіЩ€Ш§Щ‚",
      contact: "Ш§ШЄШµШ§Щ„",
      footerTitle: "Щ…ШЇШ®Щ„ Ш№Ш§Щ„Щ…ЩЉ Щ…Ш№ ШЄЩ†ЩЃЩЉШ° Щ…Ш­Щ„ЩЉ ЩЃЩЉ Ш§Щ„Щ…ЩѓШ§Щ† Ш§Щ„ШµШ­ЩЉШ­.",
      footerBody: "ЩЉШЁЩ‚Щ‰ interlex.work Ш®ЩЃЩЉЩЃШ§Щ‹ Ш№Щ† Щ‚ШµШЇ: ЩЉЩ€Ш¬Щ‘Щ‡ Ш§Щ„Ш№Щ…ЩЉЩ„ Щ€ЩЉШґШ±Ш­ Ш§Щ„Щ…Щ†Ш·Щ‚ Ш§Щ„ШҐЩ‚Щ„ЩЉЩ…ЩЉ Ш«Щ… ЩЉШ­Щ€Щ‘Щ„ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ ШҐЩ„Щ‰ Щ…Щ€Щ‚Ш№ Ш§Щ„ШіЩ€Щ‚ Ш§Щ„Щ…Щ†Ш§ШіШЁ.",
    },
    nav: [
      { slug: "", label: "Ш§Щ„Щ…Ш±ЩѓШІ" },
      { slug: "about", label: "Щ…Щ† Щ†Ш­Щ†" },
      { slug: "cross-border", label: "Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ" },
      { slug: "contact", label: "Ш§ШЄШµШ§Щ„" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Ш№Щ„Ш§Щ…Ш© Щ€Ш§Ш­ШЇШ©ШЊ Щ„ШєШ§ШЄ Щ…ШЄШ№ШЇШЇШ©ШЊ Щ€Щ…ШіШ§Ш±Ш§Щ† ШіЩ€Щ‚ЩЉШ§Щ†.",
      lead: "interlex.work Щ‡Щ€ Ш§Щ„Щ…ШЇШ®Щ„ Щ…ШЄШ№ШЇШЇ Ш§Щ„Щ„ШєШ§ШЄ Щ„ЩЂ InterLex. ЩЉШґШ±Ш­ Ш§Щ„Ш№Щ„Ш§Щ…Ш©ШЊ Щ€ЩЉШіШ§Ш№ШЇ ЩЃЩЉ ШµЩЉШ§ШєШ© Ш§Щ„ШЄЩѓЩ„ЩЉЩЃШЊ Ш«Щ… ЩЉЩ€Ш¬Щ‘Щ‡ Ш§Щ„Ш№Щ…ЩЉЩ„ ШҐЩ„Щ‰ Щ…Щ€Щ‚Ш№ Ш§Щ„ШіЩ€Щ‚ Ш§Щ„ШµШ­ЩЉШ­.",
      primaryCta: "Ш§ШіШЄЩѓШґШ§ЩЃ Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ",
      secondaryCta: "Ш§Щ„ШЄШ№Ш±Щ‘ЩЃ Ш№Щ„Щ‰ InterLex",
      logicLabel: "Щ…Щ†Ш·Щ‚ Ш§Щ„Щ…Ш±ЩѓШІ",
      notes: [
        "Ш№Щ„Ш§Щ…Ш© InterLex Щ€Ш§Ш­ШЇШ© Щ…Ш№ Щ…Щ€Ш§Щ‚Ш№ ШіЩ€Щ‚ Щ…Щ†ЩЃШµЩ„Ш©.",
        "Ш§Щ„ШҐШ·Ш§Ш± Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ Ш№Щ„Щ‰ Ш§Щ„Щ…Ш±ЩѓШІШЊ Щ€Ш§Щ„ШЄЩ†ЩЃЩЉШ° Ш§Щ„Щ…Ш­Щ„ЩЉ Ш№Щ„Щ‰ Щ†Ш·Ш§Щ‚ Ш§Щ„ШЇЩ€Щ„Ш©.",
        "ШЇШ®Щ€Щ„ Щ…ШЄШ№ШЇШЇ Ш§Щ„Щ„ШєШ§ШЄ Щ…Щ† ШЇЩ€Щ† ШЄШ­Щ€ЩЉЩ„ Ш§Щ„Щ…Ш±ЩѓШІ ШҐЩ„Щ‰ ЩѓШЄШ§Щ„Щ€Ш¬ Щ…ЩѓШ±Ш±.",
      ],
      logicBody: "ШҐШ°Ш§ ЩѓШ§Щ† Ш§Щ„Ш№Щ…Щ„ ЩЉШ®Шµ Щ€Щ„Ш§ЩЉШ© Щ‚Ш¶Ш§Ш¦ЩЉШ© Щ…Ш­ШЇШЇШ© ШЁШ§Щ„ЩЃШ№Щ„ШЊ Ш§Щ†ШЄЩ‚Щ„ Щ…ШЁШ§ШґШ±Ш© ШҐЩ„Щ‰ Щ†Ш·Ш§Щ‚ Ш§Щ„ШЇЩ€Щ„Ш©. Щ€ШҐШ°Ш§ ЩѓШ§Щ† Ш§Щ„Щ†Ш·Ш§Щ‚ ЩЉШ­ШЄШ§Ш¬ ШҐЩ„Щ‰ ШЄЩ€Ш¶ЩЉШ­ШЊ Ш§ШЁШЇШЈ Щ…Щ† Щ‡Щ†Ш§.",
      positioningLabel: "Ш§Щ„ШЄЩ…Щ€Ш¶Ш№",
      positioningTitle: "Ш§ШіШЄШґШ§Ш±Ш§ШЄ Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Щ€ШЄШ¬Ш§Ш±ЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ Щ…Ш№ Щ†Щ‚Ш·Ш© ШЇШ®Щ€Щ„ Ш№Ш§Щ„Щ…ЩЉШ© ШЈЩ€Ш¶Ш­.",
      positioningBody: "ЩЉШ¬ШЁ ШЈЩ† ЩЉШЁШЇЩ€ Ш§Щ„Щ…Ш±ЩѓШІ ШЇЩ€Щ„ЩЉШ§Щ‹ Щ€Ш±Ш§Щ‚ЩЉШ§Щ‹ Щ€Щ…ШЄШ№ШЇШЇ Ш§Щ„Щ„ШєШ§ШЄШЊ Щ…Ш№ ШЁЩ‚Ш§Ш¦Щ‡ ШЈШ®ЩЃ Щ…Щ† Щ…Щ€Ш§Щ‚Ш№ Ш§Щ„ШЈШіЩ€Ш§Щ‚.",
      sections: [
        { label: "Щ…Щ† Щ†Ш­Щ†", slug: "about", title: "Щ…Щ† Щ‡ЩЉ InterLex Щ€Щ„Щ…Ш§Ш°Ш§ ЩЉЩ€Ш¬ШЇ Ш§Щ„Щ…Ш±ЩѓШІ ШЁШґЩѓЩ„ Щ…ШіШЄЩ‚Щ„.", body: "Ш§Щ„Щ…Щ€Щ‚Ш№ Ш§Щ„Ш№Ш§Щ„Щ…ЩЉ ЩЉШґШ±Ш­ Ш§Щ„Ш№Щ„Ш§Щ…Ш©ШЊ Щ€Щ†Щ€Ш№ Ш§Щ„Ш№Щ…Щ„Ш§ШЎШЊ Щ€Щ…Щ†Ш·Щ‚ Ш§Щ„ШЄЩ€Ш¬ЩЉЩ‡ Щ…Щ† ШЇЩ€Щ† ШЈЩ† ЩЉШ­Щ„ Щ…Ш­Щ„ Ш§Щ„ШЄЩ†ЩЃЩЉШ° Ш§Щ„Щ…Ш­Щ„ЩЉ." },
        { label: "Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ", slug: "cross-border", title: "ЩѓЩЉЩЃ ЩЉЩ†ШЇЩ…Ш¬ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§ Ш¶Щ…Щ† ШµЩ€Ш±Ш© Ш§ШіШЄШґШ§Ш±ЩЉШ© Щ€Ш§Ш­ШЇШ©.", body: "ШЄЩЏШіШЄШ®ШЇЩ… ШµЩЃШ­Ш© Ш§Щ„Щ…Щ‚Ш§Ш±Щ†Ш© Щ„ШЄЩ€Ш¬ЩЉЩ‡ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃШ§ШЄ Ш§Щ„Щ…Ш±ШЄШЁШ·Ш© ШЁШ§Щ„ШЇШ®Щ€Щ„ ШҐЩ„Щ‰ Ш§Щ„ШіЩ€Щ‚ Щ€Ш§Щ„Щ‡ЩЉЩѓЩ„Ш© Щ€Ш§Щ„ШЄШґШєЩЉЩ„." },
        { label: "Ш§ШЄШµШ§Щ„", slug: "contact", title: "Щ†Щ‚Ш·Ш© intake Щ…ШЄШ№ШЇШЇШ© Ш§Щ„Щ„ШєШ§ШЄ Щ‚ШЁЩ„ ШЄШ­Щ€ЩЉЩ„ Ш§Щ„Щ…Щ„ЩЃ ШҐЩ„Щ‰ Ш§Щ„Щ…ШіШ§Ш± Ш§Щ„ШµШ­ЩЉШ­.", body: "ШЄШ¬Ш№Щ„ ШµЩЃШ­Ш© Ш§Щ„Ш§ШЄШµШ§Щ„ Ш§Щ„Ш®Ш·Щ€Ш© Ш§Щ„ШЈЩ€Щ„Щ‰ ШЈШЁШіШ· Ш«Щ… ШЄЩ€Ш¬Щ‡ Ш§Щ„Щ…Щ„ЩЃ ШҐЩ„Щ‰ Ш§Щ„Щ†Ш·Ш§Щ‚ Щ€Ш§Щ„ЩЃШ±ЩЉЩ‚ Ш§Щ„Щ…Щ†Ш§ШіШЁЩЉЩ†." },
      ],
    },
    about: {
      title: "Щ…Щ† Щ†Ш­Щ†",
      description: "ШЄШ№Ш±Щ‘ЩЃ Ш№Щ„Щ‰ ЩѓЩЉЩЃЩЉШ© ШЁЩ†Ш§ШЎ InterLex Щ„Щ…Ш±ЩѓШІЩ‡Ш§ Ш§Щ„Ш№Ш§Щ„Щ…ЩЉ Щ€ШЄЩ€Ш¬ЩЉЩ‡ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃШ§ШЄ ШҐЩ„Щ‰ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§.",
      eyebrow: "Ш­Щ€Щ„ InterLex",
      introTitle: "Ш№Щ„Ш§Щ…Ш© Щ…Щ€Ш¬Щ‡Ш© Ш№Ш§Щ„Щ…ЩЉШ§Щ‹ Щ…Ш№ ШЄЩ†ЩЃЩЉШ° Щ‚Ш§Щ†Щ€Щ†ЩЉ Щ€ШЄШ¬Ш§Ш±ЩЉ Ш®Ш§Шµ ШЁЩѓЩ„ ШіЩ€Щ‚.",
      introBody: "ШЄШіШЄШ®ШЇЩ… InterLex Щ…Щ€Щ‚Ш№ interlex.work ЩѓЩ…Ш±ЩѓШІ Щ…ШЄШ№ШЇШЇ Ш§Щ„Щ„ШєШ§ШЄ Щ€Щ†ШёЩЉЩЃ. Щ‡Щ†Ш§ ЩЉЩ„ШЄЩ‚ЩЉ Ш§Щ„Ш№Щ…ЩЉЩ„ ШЁШ§Щ„Ш№Щ„Ш§Щ…Ш© Щ€ЩЉЩЃЩ‡Щ… Ш§Щ„Ш®Ш±ЩЉШ·Ш© Ш§Щ„ШҐЩ‚Щ„ЩЉЩ…ЩЉШ© Щ€ЩЉШ±Щ‰ ЩѓЩЉЩЃ ЩЉЩ†ШЇЩ…Ш¬ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§ Ш¶Щ…Щ† ШµЩ€Ш±Ш© Ш§ШіШЄШґШ§Ш±ЩЉШ© Щ€Ш§Ш­ШЇШ©.",
      principlesLabel: "Щ„Щ…Ш§Ш°Ш§ ШЄШ№Щ…Щ„ Щ‡Ш°Щ‡ Ш§Щ„ШЁЩ†ЩЉШ©",
      principles: [
        { title: "Ш§Щ„Ш№Щ„Ш§Щ…Ш© ШЈЩ€Щ„Ш§Щ‹ Ш«Щ… Ш§Щ„ШЄЩ†ЩЃЩЉШ°", body: "ШЄЩ‚ШЇЩ‘Щ… InterLex ШЁЩ†ЩЉШ© Ш№Щ„Ш§Щ…Ш© Щ€Ш§Ш­ШЇШ© Щ…Ш№ ШҐШЁЩ‚Ш§ШЎ Ш§Щ„ШЄЩ†ЩЃЩЉШ° Ш№Щ„Щ‰ Щ†Ш·Ш§Щ‚ Ш§Щ„Щ€Щ„Ш§ЩЉШ© Ш§Щ„Щ‚Ш¶Ш§Ш¦ЩЉШ© Ш§Щ„ШЄЩЉ ШЄЩ…Щ„Щѓ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ." },
        { title: "ШЄЩ€Ш¬ЩЉЩ‡ Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ", body: "Ш§Щ„Щ…Ш±ЩѓШІ Щ‡Щ€ Ш§Щ„Щ…ЩѓШ§Щ† Ш§Щ„Ш°ЩЉ ЩЉЩЃЩ‡Щ… ЩЃЩЉЩ‡ Ш§Щ„Ш№Щ…ЩЉЩ„ Ш§Щ„Ш№Щ„Ш§Щ‚Ш© ШЁЩЉЩ† Ш§Щ„ШЈШіЩ€Ш§Щ‚ Щ‚ШЁЩ„ Ш§Ш®ШЄЩЉШ§Ш± Щ…ШіШ§Ш± Ш§Щ„ШЄЩ†ЩЃЩЉШ°." },
        { title: "Ш§Щ„Ш№Щ…Щ‚ Ш§Щ„ШҐЩ‚Щ„ЩЉЩ…ЩЉ ЩЉШЁЩ‚Щ‰ ШҐЩ‚Щ„ЩЉЩ…ЩЉШ§Щ‹", body: "ШЄШЁЩ‚Щ‰ Ш§Щ„ЩѓШЄШ§Щ„Щ€Ш¬Ш§ШЄ Ш§Щ„ШЄЩЃШµЩЉЩ„ЩЉШ© Щ€Щ…Щ†Ш·Щ‚ SEO Ш§Щ„Щ…Ш­Щ„ЩЉ Щ€Ш§Щ„ШЄЩ†ЩЃЩЉШ° ШЇШ§Ш®Щ„ interlex.kz Щ€ interlex.ge." },
      ],
      practiceLabel: "InterLex Ш№Щ…Щ„ЩЉШ§Щ‹",
      practice: [
        "Ш§Щ„Щ…Ш±ЩѓШІ Щ…Ш®ШµШµ Щ„Щ„ШЄЩ€Ш¬ЩЉЩ‡ Щ€Ш§Щ„ШЄЩ…Щ€Ш¶Ш№ Щ€ШЇШ№Щ… Ш§Щ„Щ‚Ш±Ш§Ш±.",
        "Ш«Щ… ЩЉШ­Щ…Щ„ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§ Ш§Щ„ШЄЩЃШ§ШµЩЉЩ„ Ш§Щ„ШіЩ€Щ‚ЩЉШ© Щ€Ш§Щ„Щ„ШєЩ€ЩЉШ© Щ€Щ…ШіШ§Ш±Ш§ШЄ Ш§Щ„ШЄЩ†ЩЃЩЉШ° Ш§Щ„ШЈШ№Щ…Щ‚.",
        "Щ‡Ш°Ш§ Ш§Щ„ЩЃШµЩ„ ЩЉШ®ЩЃЩЃ Ш§Щ„ШЄЩѓШ±Ш§Ш± ШЁЩЉЩ† Ш§Щ„Щ„ШєШ§ШЄ Щ€Ш§Щ„ШЈШіЩ€Ш§Щ‚.",
      ],
      nextLabel: "Ш§Щ„Ш®Ш·Щ€Ш© Ш§Щ„ШЄШ§Щ„ЩЉШ©",
      nextTitle: "Ш§Ш·Щ„Ш№ Ш№Щ„Щ‰ Щ…Щ‚Ш§Ш±Щ†Ш© Ш§Щ„Щ…ШіШ§Ш±ЩЉЩ† Ш§Щ„ШіЩ€Щ‚ЩЉЩЉЩ†.",
      nextBody: "ШЄЩ€Ш¶Ш­ ШµЩЃШ­Ш© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ Щ‡Ш°Ш§ Ш§Щ„ЩЃШµЩ„ Щ‚ШЁЩ„ Ш§Щ„Ш§Щ†ШЄЩ‚Ш§Щ„ ШҐЩ„Щ‰ Щ…Щ€Щ‚Ш№ ШҐЩ‚Щ„ЩЉЩ…ЩЉ.",
      nextCta: "ЩЃШЄШ­ Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ",
    },
    crossBorder: {
      title: "Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ",
      description: "Щ‚Ш§Ш±Щ† ШЁЩЉЩ† Щ…ШіШ§Ш±ЩЉ InterLex Щ„ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§ Щ€Щ€Ш¬Щ‘Щ‡ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ ШҐЩ„Щ‰ Щ…Щ€Щ‚Ш№ Ш§Щ„ШіЩ€Щ‚ Ш§Щ„ШµШ­ЩЉШ­.",
      eyebrow: "Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ",
      introTitle: "Щ…Щ€Щ‚Ш№Ш§Щ† Щ„Щ„ШіЩ€Щ‚ШЊ Щ€Щ‚Ш±Ш§Ш± ШЄЩ€Ш¬ЩЉЩ‡ Щ€Ш§Ш­ШЇ Ш№Щ„Щ‰ Щ…ШіШЄЩ€Щ‰ Ш§Щ„Ш№Щ„Ш§Щ…Ш©.",
      introBody: "Ш§ШіШЄШ®ШЇЩ… Щ‡Ш°Щ‡ Ш§Щ„ШµЩЃШ­Ш© Ш№Щ†ШЇЩ…Ш§ ЩЉЩѓЩ€Щ† Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ Щ…Ш§ ШІШ§Щ„ ЩЃЩЉ Щ…Ш±Ш­Щ„Ш© Ш§Щ„ШЄШ­ШЇЩЉШЇ. ЩЃЩ‡ЩЉ ШЄЩ€Ш¶Ш­ ШЈШЇЩ€Ш§Ш± ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§ ШЇШ§Ш®Щ„ Щ†ШёШ§Щ… InterLex.",
      introSide: "Щ„Ш§ ЩЉШ­Ш§Щ€Щ„ Ш§Щ„Щ…Ш±ЩѓШІ ШҐШєЩ„Ш§Щ‚ ЩѓШ§Щ…Щ„ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ ЩЃЩЉ ШµЩЃШ­Ш© Щ€Ш§Ш­ШЇШ©. Щ€ШёЩЉЩЃШЄЩ‡ ШЄЩ‚Щ„ЩЉЩ„ Ш§Щ„ШєЩ…Щ€Ш¶ Щ€ШЄЩ€Ш¬ЩЉЩ‡ Ш§Щ„Ш№Щ…ЩЉЩ„ ШҐЩ„Щ‰ ШЁЩЉШ¦Ш© Ш§Щ„ШЄЩ†ЩЃЩЉШ° Ш§Щ„Щ…Щ†Ш§ШіШЁШ©.",
      tableLabel: "Ш§Щ„Щ…Ш¬Ш§Щ„",
      marketEntry: {
        title: "Ш§Щ„ШЇШ®Щ€Щ„ ШҐЩ„Щ‰ Ш§Щ„ШіЩ€Щ‚",
        kz: "ШЄШЈШіЩЉШі Ш§Щ„ЩѓЩЉШ§Щ†ШЊ Щ€Ш§Щ„Ш§Щ…ШЄШ«Ш§Щ„ Ш§Щ„Щ…Ш­Щ„ЩЉШЊ Щ€Ш§Щ„Ш§Щ†Ш·Щ„Ш§Щ‚ Ш§Щ„ШЄШґШєЩЉЩ„ЩЉШЊ Щ€Ш§Щ„Щ…Ш­Ш§ШіШЁШ©ШЊ Щ€Ш§Щ„ШЇШ№Щ… Ш§Щ„Ш¶Ш±ЩЉШЁЩЉ Щ„Щ„ЩЃШ±Щ‚ Ш§Щ„ШЇШ§Ш®Щ„Ш© ШҐЩ„Щ‰ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†.",
        ge: "Ш§Щ„Щ‡ЩЉШ§ЩѓЩ„ Ш§Щ„Щ‚Ш§ШЁШ¶Ш© Щ€Ш§Щ„ШЄШґШєЩЉЩ„ЩЉШ©ШЊ Щ€Щ…Щ†Ш·Щ‚ FIZШЊ Щ€Ш§Щ„ШЈЩ†ШёЩ…Ш© Ш§Щ„Ш®Ш§ШµШ©ШЊ Щ€Щ†Щ…Ш§Ш°Ш¬ Ш§Щ„ШЄШЈШіЩЉШі ЩЃЩЉ Ш¬Щ€Ш±Ш¬ЩЉШ§.",
      },
      investor: {
        title: "Щ…Щ†ШёЩ€Ш± Ш§Щ„Щ…ШіШЄШ«Щ…Ш±",
        kz: "Ш§Щ„ШЈЩЃШ¶Щ„ Ш№Щ†ШЇЩ…Ш§ ЩЉШ№ШЄЩ…ШЇ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ Ш№Щ„Щ‰ ШЄЩ†ЩЃЩЉШ° Щ…Ш­Щ„ЩЉ ШЈЩ€ ШЈШ·Ш±Ш§ЩЃ Щ…Щ‚Ш§ШЁЩ„Ш© Щ…Ш­Щ„ЩЉШ© ШЈЩ€ Ш№Щ…Щ„ Щ…Ш¤ШіШіЩЉ ШЇШ§Ш®Щ„ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†.",
        ge: "Ш§Щ„ШЈЩЃШ¶Щ„ Ш№Щ†ШЇЩ…Ш§ ЩЉШ№ШЄЩ…ШЇ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ Ш№Щ„Щ‰ Ш§Щ„Щ‡ЩЉЩѓЩ„Ш© Ш§Щ„ШЇЩ€Щ„ЩЉШ© Щ€Ш§Щ„Щ…Ш±Щ€Щ†Ш© Щ€ШЁЩ†ЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ Щ…Щ€Ш¬Щ‡Ш© Щ„Щ„Щ…ШіШЄШ«Щ…Ш±.",
      },
      language: {
        title: "Щ„ШєШ© Ш§Щ„Ш№Щ…Щ„",
        kz: "Щ…Щ€Щ‚Ш№ ШіЩ€Щ‚ ШЈЩ€Щ„Щ€ЩЉШ© Щ„Щ„Ш±Щ€ШіЩЉШ© Щ„Щ„Щ…Ш¤ШіШіЩЉЩ† Щ€Ш§Щ„ЩЃШ±Щ‚ Ш§Щ„ШЄЩЉ ШЄШ­ШЄШ§Ш¬ ШҐЩ„Щ‰ ШіЩЉШ§Щ‚ ШіЩ€Щ‚ЩЉ Ш±Щ€ШіЩЉ Щ€ШЄЩЃШ§ШµЩЉЩ„ ШЄЩ†ЩЃЩЉШ°.",
        ge: "Щ…Щ€Щ‚Ш№ ШіЩ€Щ‚ ШЈЩ€Щ„Щ€ЩЉШ© Щ„Щ„ШҐЩ†Ш¬Щ„ЩЉШІЩЉШ© Щ„Щ„Ш№Щ…Щ„Ш§ШЎ Ш§Щ„ШЇЩ€Щ„ЩЉЩЉЩ† Ш§Щ„Ш°ЩЉЩ† ЩЉШ±ЩЉШЇЩ€Щ† ШЄЩ€Ш¬ЩЉЩ‡Ш§Щ‹ ШЁШ§Щ„Щ„ШєШ© Ш§Щ„ШҐЩ†Ш¬Щ„ЩЉШІЩЉШ© Щ€ШЄШ®Ш·ЩЉШ·Ш§Щ‹ Щ…Ш±ШЄШЁШ·Ш§Щ‹ ШЁШ§Щ„Щ€Щ„Ш§ЩЉШ© Ш§Щ„Щ‚Ш¶Ш§Ш¦ЩЉШ©.",
      },
      needHelpLabel: "Щ‡Щ„ ШЄШ­ШЄШ§Ш¬ ШҐЩ„Щ‰ Щ…ШіШ§Ш№ШЇШ© ЩЃЩЉ Ш§Щ„ШЄЩ€Ш¬ЩЉЩ‡Шџ",
      needHelpTitle: "Ш§ШЁШЇШЈ ШЁШ­Щ€Ш§Ш± Ш№Щ„Щ‰ Щ…ШіШЄЩ€Щ‰ Ш§Щ„Ш№Щ„Ш§Щ…Ш©ШЊ Ш«Щ… Ш§Щ†ШЄЩ‚Щ„ ШҐЩ„Щ‰ Ш§Щ„Щ…ШіШ§Ш± Ш§Щ„ШµШ­ЩЉШ­.",
      needHelpCta: "ЩЃШЄШ­ Ш§Щ„Ш§ШЄШµШ§Щ„",
    },
    contactPage: {
      title: "Ш§ШЄШµШ§Щ„",
      description: "Ш§ШЁШЇШЈ Ш­Щ€Ш§Ш±Ш§Щ‹ Ш№Щ„Щ‰ Щ…ШіШЄЩ€Щ‰ Ш§Щ„Ш№Щ„Ш§Щ…Ш© Щ…Ш№ InterLex Ш«Щ… Щ€Ш¬Щ‘Щ‡ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ ШҐЩ„Щ‰ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† ШЈЩ€ Ш¬Щ€Ш±Ш¬ЩЉШ§.",
      eyebrow: "Ш§ШЄШµШ§Щ„",
      introTitle: "Ш§ШЁШЇШЈ ШЁШ§Щ„ШЄЩѓЩ„ЩЉЩЃШЊ Ш«Щ… Щ‚Щ… ШЁШ§Щ„ШЄЩ€Ш¬ЩЉЩ‡ ШЁШЇЩ‚Ш©.",
      introBody: "Ш§Щ„Щ…Ш±ЩѓШІ Ш§Щ„Ш№Ш§Щ„Щ…ЩЉ Щ‡Щ€ Ш§Щ„Щ†Щ‚Ш·Ш© Ш§Щ„ШµШ­ЩЉШ­Ш© Щ„ШЈЩ€Щ„ ШЄЩ€Ш§ШµЩ„ Ш№Щ†ШЇЩ…Ш§ Щ„Ш§ ЩЉШІШ§Щ„ Ш§Щ„Щ…Щ€Ш¶Щ€Ш№ ШЁШ­Ш§Ш¬Ш© ШҐЩ„Щ‰ ШµЩЉШ§ШєШ©. Щ€ШЁШ№ШЇ Щ€Ш¶Щ€Ш­ Ш§Щ„Щ‡ЩЉЩѓЩ„ШЊ ЩЉЩ…ЩѓЩ† Щ†Щ‚Щ„ Ш§Щ„Ш­Щ€Ш§Ш± ШҐЩ„Щ‰ Щ…Щ€Щ‚Ш№ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† ШЈЩ€ Ш¬Щ€Ш±Ш¬ЩЉШ§.",
      flowLabel: "Щ…ШіШ§Ш± intake",
      steps: [
        "Ш§ШґШ±Ш­ Ш§Щ„ШіЩ€Щ‚ ШЈЩ€ Ш§Щ„ШЈШіЩ€Ш§Щ‚ Ш§Щ„Щ…Ш№Щ†ЩЉШ©.",
        "Щ€Ш¶Щ‘Ш­ Щ…Ш§ ШҐШ°Ш§ ЩѓШ§Щ†ШЄ Ш§Щ„Щ…ШіШЈЩ„Ш© Ш§ШіШЄЩѓШґШ§ЩЃЩЉШ© ШЈЩ€ ШµЩЃЩ‚Ш© ШЈЩ€ ЩЃЩЉ Щ…Ш±Ш­Щ„Ш© Ш§Щ„ШЄЩ†ЩЃЩЉШ° ШЁШ§Щ„ЩЃШ№Щ„.",
        "ШЁШ№ШЇ Ш°Щ„Щѓ ЩЉЩЏЩ€Ш¬Щ‘ЩЋЩ‡ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ ШҐЩ„Щ‰ Щ…Щ€Щ‚Ш№ Ш§Щ„ШЇЩ€Щ„Ш© Ш§Щ„ШµШ­ЩЉШ­ ШЈЩ€ ЩЉЩЏШ№Ш§Щ„Ш¬ ШЈЩ€Щ„Ш§Щ‹ ЩѓЩ†Щ‚Ш§Шґ Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ Ш№Щ„Щ‰ Щ…ШіШЄЩ€Щ‰ Ш§Щ„Ш№Щ„Ш§Щ…Ш©.",
      ],
      closingLabel: "Щ…Ш§ Ш§Щ„Ш°ЩЉ ЩЉШ¬ШЁ ШЈЩ† ЩЉЩЃШ№Щ„Щ‡ Ш§Щ„Щ…Ш±ЩѓШІ",
      closingTitle: "ЩЉШЁШіШ· intake Щ€ЩЉЩЏШЁЩ‚ЩЉ Ш§Щ„ШЄЩ†ЩЃЩЉШ° ЩЃЩЉ Щ…ЩѓШ§Щ†Щ‡ Ш§Щ„ШµШ­ЩЉШ­.",
      closingBody: "Щ‡Ш°Щ‡ Ш§Щ„ШµЩЃШ­Ш© Щ…ШЄШ№Щ…ШЇШ© ШЈЩ† ШЄЩѓЩ€Щ† Ш®ЩЃЩЉЩЃШ©. ЩЃЩ‡ЩЉ ШЄЩ‚ШЇЩ… Ш®Ш·Щ€Ш© ШЈЩ€Щ„Щ‰ Щ€Ш§Ш¶Ш­Ш© Щ€ШЄШЄШ±Щѓ Ш§Щ„Щ…Ш­ШЄЩ€Щ‰ Ш§Щ„ШЈШ№Щ…Щ‚ Щ„Щ…Щ€Ш§Щ‚Ш№ Ш§Щ„ШЈШіЩ€Ш§Щ‚.",
    },
    regionLinks: [
      {
        name: "ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†",
        ...sharedDomains[0],
        language: "Щ…Щ€Щ‚Ш№ ШіЩ€Щ‚ ШЁШЈЩ€Щ„Щ€ЩЉШ© Ш±Щ€ШіЩЉШ©",
        strapline: "ШЇШ®Щ€Щ„ Ш§Щ„ШіЩ€Щ‚ШЊ Щ€Ш§Щ„ШЇШ№Щ… Ш§Щ„Щ‚Ш§Щ†Щ€Щ†ЩЉШЊ Щ€Ш§Щ„Щ…Ш­Ш§ШіШЁШ©ШЊ Щ€Ш§Щ„Ш¶Ш±Ш§Ш¦ШЁШЊ Щ€Ш§Щ„ШЄЩ†ЩЃЩЉШ° Ш§Щ„ШЄШґШєЩЉЩ„ЩЉ Ш§Щ„Щ…ШіШЄЩ…Ш± ЩЃЩЉ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†.",
        points: [
          "Щ„Щ„Щ…Ш¤ШіШіЩЉЩ† Щ€Ш§Щ„Щ…ШіШЄШ«Щ…Ш±ЩЉЩ† Щ€Ш§Щ„ЩЃШ±Щ‚ Ш§Щ„ШЄШґШєЩЉЩ„ЩЉШ© Ш§Щ„ШЄЩЉ ШЄШЇШ®Щ„ ШЈЩ€ ШЄШЄЩ€ШіШ№ ЩЃЩЉ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†.",
          "Ш§Щ„ШЈЩЃШ¶Щ„ Ш№Щ†ШЇЩ…Ш§ ЩЉШ№ШЄЩ…ШЇ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ Ш№Щ„Щ‰ filings Щ…Ш­Щ„ЩЉШ© ШЈЩ€ ШЄЩ†ЩЃЩЉШ° Щ…Ш­Щ„ЩЉ ШЈЩ€ Ш№Щ…Щ„ ШіЩ€Щ‚ЩЉ ШЁШ§Щ„Щ„ШєШ© Ш§Щ„Ш±Щ€ШіЩЉШ©.",
          "Ш§ШіШЄШ®ШЇЩ… Щ‡Ш°Ш§ Ш§Щ„Щ…ШіШ§Ш± Ш№Щ†ШЇЩ…Ш§ ЩЉЩ†ШЄЩ…ЩЉ Ш§Щ„Ш№Щ…Щ„ ШЁЩ€Ш¶Щ€Ш­ ШҐЩ„Щ‰ Щ…ШіШ§Ш± Ш§Щ„ШЄЩ†ЩЃЩЉШ° ЩЃЩЉ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†.",
        ],
      },
      {
        name: "Ш¬Щ€Ш±Ш¬ЩЉШ§",
        ...sharedDomains[1],
        language: "Щ…Щ€Щ‚Ш№ ШіЩ€Щ‚ ШЁШЈЩ€Щ„Щ€ЩЉШ© ШҐЩ†Ш¬Щ„ЩЉШІЩЉШ©",
        strapline: "Ш§Щ„Щ‡ЩЉЩѓЩ„Ш©ШЊ Щ€Щ…ШіШ§Ш±Ш§ШЄ FIZШЊ Щ€Ш§Щ„ШЄЩ…Щ€Ш¶Ш№ Ш§Щ„Ш¶Ш±ЩЉШЁЩЉШЊ Щ€Ш§Щ„ШЇШ№Щ… Ш§Щ„ШЄШґШєЩЉЩ„ЩЉ Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ ЩЃЩЉ Ш¬Щ€Ш±Ш¬ЩЉШ§.",
        points: [
          "Щ„Щ„Ш№Щ…Щ„Ш§ШЎ Ш§Щ„ШЇЩ€Щ„ЩЉЩЉЩ† Ш§Щ„Ш°ЩЉЩ† ЩЉЩ‚Ш§Ш±Щ†Щ€Щ† Щ†Щ…Ш§Ш°Ш¬ Ш§Щ„ШЇШ®Щ€Щ„ Щ€Щ…Щ†Ш·Щ‚ Ш§Щ„Щ‡ЩЉШ§ЩѓЩ„ Ш§Щ„Щ‚Ш§ШЁШ¶Ш© Щ€Ш§Щ„ШЁЩ†Щ‰ Ш§Щ„ШҐЩ‚Щ„ЩЉЩ…ЩЉШ©.",
          "Ш§Щ„ШЈЩЃШ¶Щ„ Ш№Щ†ШЇЩ…Ш§ ЩЉШ№ШЄЩ…ШЇ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ Ш№Щ„Щ‰ ШЈЩ†ШёЩ…Ш© Ш¬Щ€Ш±Ш¬ЩЉШ© ШЈЩ€ ШіЩЉШ± Ш№Щ…Щ„ ШҐЩ†Ш¬Щ„ЩЉШІЩЉ ШЈЩ€ ШҐШ№ШЇШ§ШЇ Щ…Щ€Ш¬Щ‘Щ‡ Щ„Щ„Щ…ШіШЄШ«Щ…Ш±.",
          "Ш§ШіШЄШ®ШЇЩ… Щ‡Ш°Ш§ Ш§Щ„Щ…ШіШ§Ш± Ш№Щ†ШЇЩ…Ш§ ЩЉШ¬ШЁ ШЈЩ† ЩЉШ­Щ…Щ„ Ш§Щ„Щ…Щ€Щ‚Ш№ Ш§Щ„Ш¬Щ€Ш±Ш¬ЩЉ Ш§Щ„ШЄЩЃШ§ШµЩЉЩ„ Ш§Щ„Щ‚Ш¶Ш§Ш¦ЩЉШ©.",
        ],
      },
    ],
    contactChannels: [
      { label: "Ш§ШіШЄЩЃШіШ§Ш±Ш§ШЄ Ш№Ш§Щ…Ш©", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Щ„Щ„ШЄШ№Ш±ЩЉЩЃ ШЁШ§Щ„Ш№Щ„Ш§Щ…Ш© Щ€Ш§Щ„ШЄЩ€Ш¬ЩЉЩ‡ Щ€Ш§Щ„ШµЩЉШ§ШєШ© Ш§Щ„ШЈЩ€Щ„ЩЉШ© Щ„Щ„ШЄЩѓЩ„ЩЉЩЃ." },
      { label: "Щ…ШіШ§Ш± ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†", value: "interlex.kz", href: "https://interlex.kz", note: "Ш§ШіШЄШ®ШЇЩ…Щ‡ Ш№Щ†ШЇЩ…Ш§ ЩЉЩѓЩ€Щ† Ш§Щ„Щ…Щ€Ш¶Щ€Ш№ ШЄШ§ШЁШ№Ш§Щ‹ ШЁЩ€Ш¶Щ€Ш­ Щ„Щ…Щ€Щ‚Ш№ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†." },
      { label: "Щ…ШіШ§Ш± Ш¬Щ€Ш±Ш¬ЩЉШ§", value: "interlex.ge", href: "https://interlex.ge", note: "Ш§ШіШЄШ®ШЇЩ…Щ‡ Ш№Щ†ШЇЩ…Ш§ ЩЉЩѓЩ€Щ† Ш§Щ„Щ…Щ€Ш¶Щ€Ш№ ШЄШ§ШЁШ№Ш§Щ‹ ШЁЩ€Ш¶Щ€Ш­ Щ„Щ…Щ€Щ‚Ш№ Ш¬Щ€Ш±Ш¬ЩЉШ§." },
    ],
  },
  tr: {
    lang: "tr",
    dir: "ltr",
    localeLabel: "TR",
    localeNative: "TГјrkГ§e",
    flag: "рџ‡№рџ‡·",
    site: {
      title: "InterLex Global Hub",
      description: "InterLexвЂ™in Kazakistan ve GГјrcistanвЂ™a yГ¶nlendiren Г§ok dilli kГјresel merkezi.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "PazarlarД± karЕџД±laЕџtД±r",
      markets: "Pazarlar",
      contact: "Д°letiЕџim",
      footerTitle: "Yerel icranД±n doДџru yerde kaldД±ДџД± kГјresel bir giriЕџ noktasД±.",
      footerBody: "interlex.work bilinГ§li olarak hafif tutulur: mГјЕџteriyi yГ¶nlendirir, bГ¶lgesel mantД±ДџД± aГ§Д±klar ve gГ¶revi doДџru pazar sitesine taЕџД±r.",
    },
    nav: [
      { slug: "", label: "Hub" },
      { slug: "about", label: "HakkД±nda" },
      { slug: "cross-border", label: "SД±nД±r Г¶tesi" },
      { slug: "contact", label: "Д°letiЕџim" },
    ],
    home: {
      eyebrow: "InterLex Global Hub",
      title: "Tek marka, Г§ok dil, iki pazar rotasД±.",
      lead: "interlex.work, InterLexвЂ™in Г§ok dilli giriЕџ kapД±sД±dД±r. Marka konumunu aГ§Д±klar, mandatД± Г§erГ§eveler ve mГјЕџteriyi doДџru market-specific siteвЂ™a yГ¶nlendirir.",
      primaryCta: "SД±nД±r Г¶tesini aГ§",
      secondaryCta: "InterLex hakkД±nda",
      logicLabel: "Hub mantД±ДџД±",
      notes: [
        "Tek InterLex markasД±, ayrД± market-specific hedefler.",
        "SД±nД±r Г¶tesi Г§erГ§eve hubвЂ™da, yerel icra Гјlke alan adД±nda.",
        "HubвЂ™Д± kopya bir katalog yapmadan Г§ok dilli giriЕџ.",
      ],
      logicBody: "Д°Еџ zaten belirli bir yargД± alanД±na aitse doДџrudan Гјlke alan adД±na gidin. Kapsam hГўlГў netleЕџecekse hubвЂ™dan baЕџlayД±n.",
      positioningLabel: "KonumlandД±rma",
      positioningTitle: "Daha temiz bir kГјresel giriЕџ noktasД±yla sД±nД±r Г¶tesi hukuk ve iЕџ danД±ЕџmanlД±ДџД±.",
      positioningBody: "Hub uluslararasД±, premium ve Г§ok dilli gГ¶rГјnmeli; ancak market-specific sitelerden daha hafif kalmalД±dД±r.",
      sections: [
        { label: "HakkД±nda", slug: "about", title: "InterLex kimdir ve hub neden ayrД± durur.", body: "KГјresel site, markayД±, mГјЕџteri profilini ve yГ¶nlendirme mantД±ДџД±nД± yerel icra katmanД±nД± yutmadan aГ§Д±klar." },
        { label: "SД±nД±r Г¶tesi", slug: "cross-border", title: "Kazakistan ve GГјrcistan tek bir danД±ЕџmanlД±k resmine nasД±l oturur.", body: "KarЕџД±laЕџtД±rma sayfasД± pazar giriЕџi, yapД±landД±rma ve operasyonel kurgu iГ§in yГ¶n verir." },
        { label: "Д°letiЕџim", slug: "contact", title: "DoДџru trackвЂ™e geГ§meden Г¶nce Г§ok dilli bir intake noktasД±.", body: "Д°letiЕџim sayfasД± ilk adД±mД± sade tutar ve doДџru alan adД±na ve ekibe yГ¶nlendirir." },
      ],
    },
    about: {
      title: "HakkД±nda",
      description: "InterLexвЂ™in kГјresel hub yapД±sД±nД± ve mandatlarД± Kazakistan ile GГјrcistanвЂ™a nasД±l yГ¶nlendirdiДџini Г¶Дџrenin.",
      eyebrow: "InterLex hakkД±nda",
      introTitle: "KГјresel odaklД± bir marka, pazar bazlД± hukuk ve iЕџ icrasД±yla.",
      introBody: "InterLex, interlex.workвЂ™Гј temiz ve Г§ok dilli bir hub olarak kullanД±r. MГјЕџteri burada markayla tanД±ЕџД±r, bГ¶lgesel haritayД± anlar ve Kazakistan ile GГјrcistanвЂ™Д±n aynД± advisory Г§erГ§evede nasД±l yer aldД±ДџД±nД± gГ¶rГјr.",
      principlesLabel: "Bu yapД± neden Г§alД±ЕџД±yor",
      principles: [
        { title: "Г–nce marka, sonra icra", body: "InterLex tek bir marka mimarisi sunar; icrayД± ise mandatД±n ait olduДџu yargД± alanД±nД±n alan adД±nda bД±rakД±r." },
        { title: "SД±nД±r Г¶tesi yГ¶nlendirme", body: "Hub, mГјЕџterinin delivery yolunu seГ§meden Г¶nce pazarlar arasД±ndaki iliЕџkiyi anladД±ДџД± yerdir." },
        { title: "BГ¶lgesel derinlik yerinde kalД±r", body: "DetaylД± hizmet kataloglarД±, yerel SEO mantД±ДџД± ve market execution interlex.kz ve interlex.ge Гјzerinde kalД±r." },
      ],
      practiceLabel: "InterLex pratikte",
      practice: [
        "Hub; yГ¶nlendirme, konumlandД±rma ve karar desteДџi iГ§indir.",
        "Daha derin market-specific dil, servis detayД± ve execution pathways daha sonra Kazakistan ve GГјrcistan sitelerinde yaЕџar.",
        "Bu ayrД±m diller ve pazarlar arasД±ndaki tekrarlarД± azaltД±r.",
      ],
      nextLabel: "Sonraki adД±m",
      nextTitle: "Д°ki pazar trackвЂ™inin nasД±l karЕџД±laЕџtД±rД±ldД±ДџД±nД± gГ¶rГјn.",
      nextBody: "SД±nД±r Г¶tesi sayfasД±, bГ¶lgesel siteye geГ§meden Г¶nce bu ayrД±mД± aГ§Д±k hale getirir.",
      nextCta: "SД±nД±r Г¶tesini aГ§",
    },
    crossBorder: {
      title: "SД±nД±r Г¶tesi",
      description: "InterLexвЂ™in Kazakistan ve GГјrcistan trackвЂ™lerini karЕџД±laЕџtД±rД±n ve mandatД± doДџru market siteвЂ™a yГ¶nlendirin.",
      eyebrow: "SД±nД±r Г¶tesi",
      introTitle: "Д°ki pazar sitesi, marka seviyesinde tek bir routing kararД±.",
      introBody: "Mandat hГўlГў Еџekilleniyorsa bu sayfayД± kullanД±n. Kazakistan ve GГјrcistanвЂ™Д±n InterLex sistemindeki rollerini netleЕџtirir.",
      introSide: "Hub tГјm mandatД± tek sayfada kapatmaya Г§alД±Еџmaz. GГ¶revi belirsizliДџi azaltmak ve mГјЕџteriyi doДџru icra ortamД±na taЕџД±maktД±r.",
      tableLabel: "Д°Еџ hattД±",
      marketEntry: {
        title: "Pazara giriЕџ",
        kz: "KazakistanвЂ™a giren ekipler iГ§in kuruluЕџ, yerel compliance, operasyonel baЕџlangД±Г§, muhasebe ve vergi desteДџi.",
        ge: "GГјrcistan iГ§in holding ve operasyon yapД±larД±, FIZ mantД±ДџД±, Г¶zel rejimler ve setup modelleri.",
      },
      investor: {
        title: "YatД±rД±mcД± perspektifi",
        kz: "Mandat yerel icraya, yerel counterpartiesвЂ™e veya KazakistanвЂ™daki kurumsal Г§alД±Еџmaya dayanД±yorsa daha uygundur.",
        ge: "Mandat uluslararasД± yapД±landД±rma, esneklik ve yatД±rД±mcД± odaklД± sД±nД±r Г¶tesi mimariye dayanД±yorsa daha uygundur.",
      },
      language: {
        title: "Г‡alД±Еџma dili",
        kz: "RusГ§a Г¶ncelikli market site; RusГ§a pazar baДџlamД± ve uygulama detayД± isteyen ekipler iГ§in.",
        ge: "Д°ngilizce Г¶ncelikli market site; Д°ngilizce yГ¶nlendirme ve yargД± alanД± planlamasД± isteyen uluslararasД± mГјЕџteriler iГ§in.",
      },
      needHelpLabel: "Routing yardД±mД± mД± gerekiyor?",
      needHelpTitle: "Г–nce marka seviyesinde bir gГ¶rГјЕџmeyle baЕџlayД±n, sonra doДџru trackвЂ™e geГ§in.",
      needHelpCta: "Д°letiЕџimi aГ§",
    },
    contactPage: {
      title: "Д°letiЕџim",
      description: "InterLex ile marka seviyesinde bir gГ¶rГјЕџme baЕџlatД±n ve mandatД± Kazakistan veya GГјrcistanвЂ™a yГ¶nlendirin.",
      eyebrow: "Д°letiЕџim",
      introTitle: "Mandatla baЕџlayД±n. SonrasД±nda yГ¶nlendirme net olmalД±dД±r.",
      introBody: "Konu hГўlГў Г§erГ§evelenecekse kГјresel hub doДџru ilk temas noktasД±dД±r. YapД± netleЕџtiДџinde gГ¶rГјЕџme Kazakistan veya GГјrcistan sitesine taЕџД±nabilir.",
      flowLabel: "Intake akД±ЕџД±",
      steps: [
        "Hangi pazarД±n veya pazarlarД±n dahil olduДџunu aГ§Д±klayД±n.",
        "Konunun keЕџif aЕџamasД±nda mД±, iЕџlem odaklД± mД± yoksa zaten icra aЕџamasД±nda mД± olduДџunu belirtin.",
        "ArdД±ndan mandat doДџru Гјlke sitesine yГ¶nlendirilir veya Г¶nce marka seviyesinde sД±nД±r Г¶tesi gГ¶rГјЕџme olarak ele alД±nД±r.",
      ],
      closingLabel: "Hub ne yapmalД±",
      closingTitle: "IntakeвЂ™i basit tutmalД±. Д°crayД± doДџru yerde bД±rakmalД±.",
      closingBody: "Bu sayfa bilerek hafiftir. YalnД±zca net bir ilk adД±m saДџlar ve derin market-specific iГ§eriДџi pazar sitelerinde bД±rakД±r.",
    },
    regionLinks: [
      {
        name: "Kazakistan",
        ...sharedDomains[0],
        language: "RusГ§a Г¶ncelikli market site",
        strapline: "KazakistanвЂ™da pazara giriЕџ, hukuki destek, muhasebe, vergi ve sГјrekli operasyonel icra.",
        points: [
          "KazakistanвЂ™a giren veya orada Г¶lГ§eklenen kurucular, yatД±rД±mcД±lar ve operasyon ekipleri iГ§in.",
          "Mandat yerel filings, local implementation veya RusГ§a pazar Г§alД±ЕџmasД±na dayanД±yorsa daha uygundur.",
          "Д°Еџ aГ§Д±kГ§a Kazakistan delivery stackвЂ™ine aitse bu rotayД± kullanД±n.",
        ],
      },
      {
        name: "GГјrcistan",
        ...sharedDomains[1],
        language: "Д°ngilizce Г¶ncelikli market site",
        strapline: "GГјrcistanвЂ™da yapД±landД±rma, FIZ yollarД±, vergi konumlandД±rmasД± ve sД±nД±r Г¶tesi operasyon desteДџi.",
        points: [
          "GiriЕџ modellerini, holding logicвЂ™i ve bГ¶lgesel yapД±larД± karЕџД±laЕџtД±ran uluslararasД± mГјЕџteriler iГ§in.",
          "Mandat GГјrcistan rejimlerine, English-first workflowвЂ™a veya investor-facing setupвЂ™a dayanД±yorsa daha uygundur.",
          "YargД±sal detayД±n GГјrcistan sitesinde yaЕџamasД± gerekiyorsa bu rotayД± kullanД±n.",
        ],
      },
    ],
    contactChannels: [
      { label: "Genel talepler", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Marka seviyesinde tanД±Еџma, routing ve ilk mandat Г§erГ§evesi iГ§in." },
      { label: "Kazakistan track", value: "interlex.kz", href: "https://interlex.kz", note: "Konu aГ§Д±kГ§a Kazakistan sitesine aitse bunu kullanД±n." },
      { label: "GГјrcistan track", value: "interlex.ge", href: "https://interlex.ge", note: "Konu aГ§Д±kГ§a GГјrcistan sitesine aitse bunu kullanД±n." },
    ],
  },
  es: {
    lang: "es",
    dir: "ltr",
    localeLabel: "ES",
    localeNative: "EspaГ±ol",
    flag: "рџ‡Єрџ‡ё",
    site: {
      title: "InterLex Global Hub",
      description: "Hub global multilingГјe de InterLex con enrutamiento hacia KazajistГЎn y Georgia.",
      brand: "InterLex",
      hubLabel: "Global Hub",
      compareMarkets: "Comparar mercados",
      markets: "Mercados",
      contact: "Contacto",
      footerTitle: "Una puerta de entrada global con ejecuciГіn local donde corresponde.",
      footerBody: "interlex.work se mantiene deliberadamente ligero: orienta al cliente, explica la lГіgica regional y dirige el mandato al sitio de mercado adecuado.",
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
      lead: "interlex.work es la puerta de entrada multilingГјe de InterLex. Explica la marca, ayuda a definir el mandato y dirige al cliente hacia el sitio de mercado correcto.",
      primaryCta: "Explorar Cross-border",
      secondaryCta: "Conocer InterLex",
      logicLabel: "LГіgica del hub",
      notes: [
        "Una sola marca InterLex con destinos de mercado separados.",
        "El marco cross-border vive en el hub; la ejecuciГіn local, en el dominio del paГ­s.",
        "Entrada multilingГјe sin convertir el hub en un catГЎlogo duplicado.",
      ],
      logicBody: "Si el trabajo ya pertenece claramente a una jurisdicciГіn, vaya directamente al dominio del paГ­s. Si el alcance aГєn debe definirse, empiece aquГ­.",
      positioningLabel: "Posicionamiento",
      positioningTitle: "Advisory legal y business cross-border con una entrada global mГЎs clara.",
      positioningBody: "El hub debe sentirse internacional, premium y multilingГјe, pero mГЎs ligero que los sitios especГ­ficos de mercado.",
      sections: [
        { label: "Nosotros", slug: "about", title: "QuiГ©n es InterLex y por quГ© el hub existe por separado.", body: "El sitio global explica la marca, el perfil del cliente y la lГіgica de routing sin absorber el detalle de ejecuciГіn local." },
        { label: "Cross-border", slug: "cross-border", title: "CГіmo encajan KazajistГЎn y Georgia en una misma imagen advisory.", body: "La pГЎgina comparativa orienta mandatos relacionados con entrada de mercado, estructuraciГіn y operativa." },
        { label: "Contacto", slug: "contact", title: "Un punto de intake multilingГјe antes del traspaso al track correcto.", body: "La pГЎgina de contacto simplifica el primer paso y lo dirige al dominio y al equipo adecuados." },
      ],
    },
    about: {
      title: "Nosotros",
      description: "Descubra cГіmo InterLex estructura su hub global y dirige mandatos hacia KazajistГЎn y Georgia.",
      eyebrow: "Sobre InterLex",
      introTitle: "Una marca global con ejecuciГіn legal y empresarial especГ­fica por mercado.",
      introBody: "InterLex utiliza interlex.work como un hub multilingГјe limpio. AquГ­ el cliente conoce la marca, entiende el mapa regional y ve cГіmo KazajistГЎn y Georgia encajan en una sola lГіgica advisory.",
      principlesLabel: "Por quГ© esta estructura funciona",
      principles: [
        { title: "Primero la marca, despuГ©s la ejecuciГіn", body: "InterLex presenta una sola arquitectura de marca y mantiene la ejecuciГіn en el dominio de la jurisdicciГіn que posee el mandato." },
        { title: "OrientaciГіn cross-border", body: "El hub es el lugar donde el cliente entiende la relaciГіn entre mercados antes de elegir la ruta de delivery." },
        { title: "La profundidad regional sigue siendo regional", body: "Los catГЎlogos detallados, la lГіgica SEO local y la ejecuciГіn de mercado permanecen en interlex.kz y interlex.ge." },
      ],
      practiceLabel: "InterLex en la prГЎctica",
      practice: [
        "El hub sirve para orientar, posicionar y apoyar decisiones.",
        "KazajistГЎn y Georgia aportan despuГ©s el detalle market-specific, lingГјГ­stico y operativo necesario.",
        "Esta separaciГіn reduce duplicaciones entre idiomas y mercados.",
      ],
      nextLabel: "Siguiente paso",
      nextTitle: "Vea cГіmo se comparan los dos tracks de mercado.",
      nextBody: "La pГЎgina cross-border hace explГ­cita esta divisiГіn antes de pasar a un sitio regional.",
      nextCta: "Abrir Cross-border",
    },
    crossBorder: {
      title: "Cross-border",
      description: "Compare los tracks de InterLex para KazajistГЎn y Georgia y dirija el mandato al market site correcto.",
      eyebrow: "Cross-border",
      introTitle: "Dos market sites, una decisiГіn de routing a nivel de marca.",
      introBody: "Use esta pГЎgina cuando el mandato aГєn se estГЎ definiendo. Aclara los diferentes roles de KazajistГЎn y Georgia dentro del sistema InterLex.",
      introSide: "El hub no intenta ganar todo el mandato en una sola pГЎgina. Su trabajo es reducir la ambigГјedad y orientar al cliente hacia el entorno de ejecuciГіn correcto.",
      tableLabel: "Workstream",
      marketEntry: {
        title: "Entrada al mercado",
        kz: "ConstituciГіn, compliance local, lanzamiento operativo, contabilidad y soporte fiscal para equipos que entran en KazajistГЎn.",
        ge: "Estructuras holding y operativas, lГіgica FIZ, regГ­menes especiales y modelos de implantaciГіn en Georgia.",
      },
      investor: {
        title: "Enfoque inversor",
        kz: "Mejor elecciГіn cuando el mandato depende de ejecuciГіn local, contrapartes locales o trabajo institucional en KazajistГЎn.",
        ge: "Mejor elecciГіn cuando el mandato depende de estructuraciГіn internacional, flexibilidad y arquitectura cross-border orientada a inversores.",
      },
      language: {
        title: "Idioma de trabajo",
        kz: "Market site RU-first para founders y equipos que necesitan contexto de mercado en ruso y detalle de implementaciГіn.",
        ge: "Market site EN-first para clientes internacionales que buscan orientaciГіn en inglГ©s y planificaciГіn jurisdiccional.",
      },
      needHelpLabel: "ВїNecesita ayuda con el routing?",
      needHelpTitle: "Empiece con una conversaciГіn a nivel de marca y luego pase al track correcto.",
      needHelpCta: "Abrir Contacto",
    },
    contactPage: {
      title: "Contacto",
      description: "Inicie una conversaciГіn brand-level con InterLex y dirija el mandato hacia KazajistГЎn o Georgia.",
      eyebrow: "Contacto",
      introTitle: "Empiece por el mandato. DespuГ©s, el routing debe ser preciso.",
      introBody: "El hub global es el punto correcto de primer contacto cuando el asunto aГєn necesita encuadre. Una vez clara la estructura, la conversaciГіn puede pasar al sitio de KazajistГЎn o Georgia.",
      flowLabel: "Flujo de intake",
      steps: [
        "Describa quГ© mercado o mercados estГЎn implicados.",
        "Indique si la cuestiГіn es exploratoria, transaccional o ya estГЎ en ejecuciГіn.",
        "DespuГ©s, el mandato se dirige al sitio paГ­s adecuado o se trata primero como discusiГіn cross-border a nivel de marca.",
      ],
      closingLabel: "QuГ© debe hacer el hub",
      closingTitle: "Mantener el intake simple. Dejar la ejecuciГіn donde corresponde.",
      closingBody: "Esta pГЎgina es deliberadamente ligera. Ofrece un primer paso claro y deja el material mГЎs profundo en los sitios de mercado.",
    },
    regionLinks: [
      {
        name: "KazajistГЎn",
        ...sharedDomains[0],
        language: "Market site RU-first",
        strapline: "Entrada de mercado, soporte legal, contabilidad, fiscalidad y ejecuciГіn operativa continua en KazajistГЎn.",
        points: [
          "Para founders, inversores y equipos operativos que entran o escalan en KazajistГЎn.",
          "Encaja mejor cuando el mandato depende de filings locales, implementaciГіn local o trabajo de mercado en ruso.",
          "Use esta ruta cuando el trabajo pertenezca claramente al delivery stack de KazajistГЎn.",
        ],
      },
      {
        name: "Georgia",
        ...sharedDomains[1],
        language: "Market site EN-first",
        strapline: "EstructuraciГіn, rutas FIZ, posicionamiento fiscal y soporte operativo cross-border en Georgia.",
        points: [
          "Para clientes internacionales que comparan modelos de entrada, holding logic y estructuras regionales.",
          "Encaja mejor cuando el mandato depende de regГ­menes georgianos, workflow en inglГ©s o setup investor-facing.",
          "Use esta ruta cuando el detalle jurisdiccional deba vivir en el sitio georgiano.",
        ],
      },
    ],
    contactChannels: [
      { label: "Consultas generales", value: "hello@interlex.work", href: "mailto:hello@interlex.work", note: "Para introducciones brand-level, routing y encuadre inicial del mandato." },
      { label: "Track KazajistГЎn", value: "interlex.kz", href: "https://interlex.kz", note: "Гљselo cuando el asunto pertenezca claramente al sitio de KazajistГЎn." },
      { label: "Track Georgia", value: "interlex.ge", href: "https://interlex.ge", note: "Гљselo cuando el asunto pertenezca claramente al sitio de Georgia." },
    ],
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
