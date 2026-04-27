import type { Locale } from "@/lib/i18n";
import { getHubSeoPage, type HubSeoPageContent } from "@/lib/hub-seo-pages";

type ComparisonRow = {
  label: string;
  kz: string;
  ge: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type ComparisonLandingPage = {
  kind: "comparison";
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewBody: string;
  tableLabel: string;
  rows: ComparisonRow[];
  audienceLabel: string;
  audienceTitle: string;
  audienceBody: string;
  routingLabel: string;
  routingTitle: string;
  routingBody: string;
  kzLabel: string;
  kzItems: string[];
  geLabel: string;
  geItems: string[];
  faqLabel: string;
  faqTitle: string;
  faqItems: FaqItem[];
};

export type NarrativeLandingPage = {
  kind: "narrative";
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewBody: string;
  scenariosLabel: string;
  scenariosTitle: string;
  scenarios: string[];
  risksLabel: string;
  risksTitle: string;
  risksBody: string;
  whyLabel: string;
  whyTitle: string;
  whyBody: string;
  faqLabel: string;
  faqTitle: string;
  faqItems: FaqItem[];
};

export type MarketEntryLandingPage = {
  kind: "market-entry";
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  primaryCta: string;
  secondaryCta: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewBody: string;
  decisionLabel: string;
  decisionTitle: string;
  decisionItems: string[];
  timingLabel: string;
  timingTitle: string;
  timingBody: string;
  comparisonLabel: string;
  comparisonTitle: string;
  kzTitle: string;
  kzBody: string;
  geTitle: string;
  geBody: string;
  faqLabel: string;
  faqTitle: string;
  faqItems: FaqItem[];
};

export type SeoGuideCard = {
  slug: string;
  eyebrow: string;
  title: string;
  body: string;
};

function normalizeGuideCardTitle(title: string) {
  return title.replace(/\s+[—-]\s+InterLex$/u, "");
}

const ruHubGuideCardOverrides: Record<string, Omit<SeoGuideCard, "slug">> = {
  "kz/sez": {
    eyebrow: "Казахстан / СЭЗ",
    title: "16 СЭЗ Казахстана: подберите режим под реальный бизнес.",
    body: "Льготы, профиль зоны, требования к проекту и маршрут регистрации без иллюзий про «универсальную» льготу.",
  },
  "ge/vz": {
    eyebrow: "Грузия / Virtual Zone",
    title: "Virtual Zone Person: проверьте, подходит ли 0% именно вашей IT-модели.",
    body: "Помогаем проверить применимость режима, собрать структуру и отделить рабочий налоговый инструмент от опасных фантазий.",
  },
  ma: {
    eyebrow: "M&A",
    title: "Хотите купить актив в Казахстане или Грузии? Начните с проверки, а не с оплаты.",
    body: "Скрининг цели, структура сделки, переговоры и due diligence в одном контуре до подписания.",
  },
  investors: {
    eyebrow: "Инвесторам / GR",
    title: "Преференции, гранты и GR лучше собирать до переговоров, а не после.",
    body: "InterLex помогает упаковать проект, понять, где нужны льготы, и выстроить прямой рабочий диалог с профильными органами.",
  },
  "ma/dd": {
    eyebrow: "Сделки с активами",
    title: "Недвижимость, производство, месторождения — сначала проверка, потом покупка.",
    body: "Юридический, налоговый и финансовый аудит актива до сделки. Риски, скрытые обязательства и рекомендации по структуре.",
  },
};

const hubGuideCardOverrides: Partial<Record<Locale, Record<string, Omit<SeoGuideCard, "slug">>>> = {
  en: {
    "ma/dd": {
      eyebrow: "Asset Transactions",
      title: "Real estate, manufacturing, mineral deposits — verify before you buy.",
      body: "Legal, tax and financial audit of the asset before closing. Risks, hidden liabilities and structure recommendations.",
    },
  },
  zh: {
    "ma/dd": {
      eyebrow: "资产交易",
      title: "不动产、制造业、矿产——先核查，再购买。",
      body: "交割前对目标资产进行法律、税务和财务审计。识别风险、隐性负债，并提供结构建议。",
    },
  },
  it: {
    "ma/dd": {
      eyebrow: "Operazioni su asset",
      title: "Immobiliare, produzione, giacimenti — prima la verifica, poi l'acquisto.",
      body: "Audit legale, fiscale e finanziario dell'asset prima della chiusura. Rischi, passività nascoste e raccomandazioni sulla struttura.",
    },
  },
  fr: {
    "ma/dd": {
      eyebrow: "Transactions d'actifs",
      title: "Immobilier, industrie, gisements — vérifier avant d'acheter.",
      body: "Audit juridique, fiscal et financier de l'actif avant la clôture. Risques, passifs cachés et recommandations de structure.",
    },
  },
  ka: {
    "ma/dd": {
      eyebrow: "აქტივების გარიგებები",
      title: "უძრავი ქონება, წარმოება, საბადოები — ჯერ შემოწმება, შემდეგ ყიდვა.",
      body: "სამართლებრივი, საგადასახადო და ფინანსური აუდიტი გარიგებამდე. რისკები, ფარული ვალდებულებები და სტრუქტურული რეკომენდაციები.",
    },
  },
  de: {
    "ma/dd": {
      eyebrow: "Asset-Transaktionen",
      title: "Immobilien, Produktion, Lagerstätten — erst prüfen, dann kaufen.",
      body: "Rechtliche, steuerliche und finanzielle Prüfung des Assets vor dem Abschluss. Risiken, versteckte Verbindlichkeiten und Strukturempfehlungen.",
    },
  },
  ar: {
    "ma/dd": {
      eyebrow: "صفقات الأصول",
      title: "عقارات، تصنيع، رواسب معدنية — التحقق أولاً، ثم الشراء.",
      body: "تدقيق قانوني وضريبي ومالي للأصل قبل الإغلاق. المخاطر والالتزامات المخفية وتوصيات الهيكلة.",
    },
  },
  tr: {
    "ma/dd": {
      eyebrow: "Varlık işlemleri",
      title: "Gayrimenkul, üretim, maden yatakları — önce doğrula, sonra satın al.",
      body: "Kapanış öncesi varlığın hukuki, vergi ve finansal denetimi. Riskler, gizli yükümlülükler ve yapılandırma önerileri.",
    },
  },
  es: {
    "ma/dd": {
      eyebrow: "Operaciones sobre activos",
      title: "Inmuebles, producción, yacimientos — primero verificar, luego comprar.",
      body: "Auditoría legal, fiscal y financiera del activo antes del cierre. Riesgos, pasivos ocultos y recomendaciones de estructura.",
    },
  },
};

const kazakhstanVsGeorgiaContent: Record<Locale, ComparisonLandingPage> = {
  en: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "Kazakhstan vs Georgia",
    description:
      "Compare Kazakhstan and Georgia for market entry, company setup, tax logic, and cross-border structuring before choosing the right InterLex route.",
    keywords: ["Kazakhstan vs Georgia", "market entry comparison", "company setup", "cross-border structuring", "InterLex"],
    eyebrow: "Jurisdiction Comparison",
    heroTitle: "Kazakhstan vs Georgia: which route fits the mandate better?",
    heroBody:
      "This page is for founders, investors, and international teams who are still choosing the right market route. It helps frame the difference between Kazakhstan and Georgia before the mandate moves into a country-specific site.",
    primaryCta: "Open Contact",
    secondaryCta: "Open Cross-border",
    overviewLabel: "Decision Logic",
    overviewTitle: "Choose the market by the logic of the work, not by a generic checklist.",
    overviewBody:
      "Kazakhstan usually wins when the mandate depends on local execution, operational launch, filings, and Russian-language market work. Georgia usually wins when the mandate depends on flexible structuring, investor-facing logic, and English-first cross-border coordination.",
    tableLabel: "Comparison",
    rows: [
      {
        label: "Best entry point",
        kz: "Operational entry, local setup, accounting coordination, tax support, and ongoing local execution.",
        ge: "Holding logic, FIZ pathways, international structuring, and investor-oriented setup models.",
      },
      {
        label: "When it fits best",
        kz: "When the work already belongs inside Kazakhstan and needs local implementation discipline.",
        ge: "When the structure is still being designed and Georgia is part of the comparative routing decision.",
      },
      {
        label: "Typical client situation",
        kz: "A team entering Kazakhstan that needs launch, filings, compliance, and execution continuity.",
        ge: "A founder or investor comparing jurisdictions, tax posture, and regional operating architecture.",
      },
    ],
    audienceLabel: "Who This Page Helps",
    audienceTitle: "A comparison page for clients who are still at the routing stage.",
    audienceBody:
      "If the jurisdiction is already clear, move directly into the country site. If the structure still needs to be defined, use this page to reduce ambiguity before the first working conversation.",
    routingLabel: "InterLex Routing",
    routingTitle: "Move from comparison into the correct track.",
    routingBody:
      "Use this page for the first routing decision. Once the logic is clear, continue into the relevant country site or start with a brand-level conversation.",
    kzLabel: "Kazakhstan Usually Fits When",
    kzItems: [
      "The mandate depends on local filings, local counterparties, or operational launch inside Kazakhstan.",
      "The client needs accounting, tax, and legal execution in one Kazakhstan track.",
      "The work is already close to implementation rather than just comparison.",
    ],
    geLabel: "Georgia Usually Fits When",
    geItems: [
      "The client is still comparing structuring options and wants a more flexible international setup.",
      "The mandate depends on investor-facing logic, FIZ pathways, or English-first workflow.",
      "Georgia should carry the jurisdiction-specific detail after the comparison stage is complete.",
    ],
    faqLabel: "FAQ",
    faqTitle: "Questions this comparison page should answer before the handoff.",
    faqItems: [
      {
        question: "When should a client compare Kazakhstan and Georgia first?",
        answer:
          "Compare them first when the mandate is still being structured and the right jurisdiction has not yet been selected.",
      },
      {
        question: "When should the client go directly to interlex.kz?",
        answer:
          "Go directly to interlex.kz when the work clearly belongs to Kazakhstan and already requires local implementation.",
      },
      {
        question: "When should the client go directly to interlex.ge?",
        answer:
          "Go directly to interlex.ge when Georgia is already the chosen jurisdiction and the next step is local execution detail.",
      },
    ],
  },
  ru: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "Казахстан или Грузия",
    description:
      "Сравните Казахстан и Грузию для выхода на рынок, регистрации компании, налоговой логики и международного структурирования до выбора правильного маршрута InterLex.",
    keywords: ["Казахстан или Грузия", "сравнение юрисдикций", "выход на рынок", "структурирование бизнеса", "InterLex"],
    eyebrow: "Выбор юрисдикции",
    heroTitle: "Казахстан или Грузия: какой маршрут лучше подходит под задачу?",
    heroBody:
      "Если вы выбираете, где запускать бизнес, холдинговую структуру или первую операционную компанию, важно сравнивать не только налоги и регистрацию. InterLex помогает понять, какая страна лучше подходит под вашу модель, скорость запуска и будущую операционную логику.",
    primaryCta: "Открыть контакты",
    secondaryCta: "Открыть международные проекты",
    overviewLabel: "Логика выбора",
    overviewTitle: "Юрисдикцию нужно выбирать по логике задачи, а не по общему списку преимуществ.",
    overviewBody:
      "Казахстан чаще подходит, когда проекту нужен быстрый локальный запуск, управляемое сопровождение и практическая работа на месте. Грузия обычно сильнее там, где важны гибкая международная конфигурация, работа с инвестором и более свободная структура входа.",
    tableLabel: "Сравнение",
    rows: [
      {
        label: "Лучший входной сценарий",
        kz: "Операционный вход, локальная настройка, бухгалтерская координация, налоги и постоянное локальное исполнение.",
        ge: "Структура владения, маршруты FIZ, международное структурирование и модели setup под инвесторскую логику.",
      },
      {
        label: "Когда подходит лучше",
        kz: "Когда задача уже фактически относится к Казахстану и требует дисциплины локальной реализации.",
        ge: "Когда структура ещё проектируется и Грузия участвует в сравнении как один из рабочих маршрутов.",
      },
      {
        label: "Типичный запрос клиента",
        kz: "Команда выходит в Казахстан и ей нужен запуск, filings, compliance и непрерывное исполнение на месте.",
        ge: "Фаундер или инвестор сравнивает юрисдикции, налоговую логику и региональную архитектуру бизнеса.",
      },
    ],
    audienceLabel: "Для кого эта страница",
    audienceTitle: "Страница для тех, кто хочет принять сильное решение до старта проекта.",
    audienceBody:
      "Если страна уже определена, можно сразу переходить к локальной реализации. Если выбор еще открыт, это лучший способ быстро сократить неопределенность и выйти на консультацию уже с практическим направлением.",
    routingLabel: "Следующий шаг",
    routingTitle: "После сравнения вы сразу понимаете, куда двигаться дальше.",
    routingBody:
      "После этого сравнения вы либо переходите к работе по Казахстану или Грузии, либо обсуждаете с InterLex структуру и вход на рынок, если проект еще требует сборки на уровне стратегии.",
    kzLabel: "Казахстан чаще подходит, когда",
    kzItems: [
      "Проект зависит от локальных filings, локальных контрагентов или запуска работы внутри Казахстана.",
      "Клиенту нужен единый казахстанский трек для бухгалтерии, налогов и юридического сопровождения.",
      "Задача уже близка к исполнению, а не только к сравнению вариантов.",
    ],
    geLabel: "Грузия чаще подходит, когда",
    geItems: [
      "Клиент ещё сравнивает модели структурирования и хочет более гибкую международную конфигурацию.",
      "Запрос зависит от investor-facing логики, маршрутов FIZ или англоязычного workflow.",
      "После этапа сравнения именно Грузия должна принять на себя jurisdiction-specific детали.",
    ],
    faqLabel: "FAQ",
    faqTitle: "Вопросы, на которые эта страница должна ответить до передачи запроса дальше.",
    faqItems: [
      {
        question: "Когда сначала нужно сравнивать Казахстан и Грузию?",
        answer:
          "Сравнение нужно, когда структура проекта ещё не зафиксирована и подходящая юрисдикция пока не выбрана.",
      },
      {
        question: "Когда лучше сразу идти на interlex.kz?",
        answer:
          "Сразу переходить на interlex.kz стоит тогда, когда задача уже явно относится к Казахстану и требует локальной реализации.",
      },
      {
        question: "Когда лучше сразу идти на interlex.ge?",
        answer:
          "Сразу переходить на interlex.ge стоит тогда, когда Грузия уже выбрана как рабочая юрисдикция и следующий шаг связан с локальной детализацией.",
      },
    ],
  },
  zh: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "哈萨克斯坦还是格鲁吉亚",
    description: "在选择正确的 InterLex 路线之前，比较哈萨克斯坦与格鲁吉亚的市场进入、公司设立、税务逻辑和跨境结构。",
    keywords: ["哈萨克斯坦还是格鲁吉亚", "司法辖区比较", "市场进入", "业务结构", "InterLex"],
    eyebrow: "司法辖区比较",
    heroTitle: "哈萨克斯坦还是格鲁吉亚：哪条路线更适合当前任务？",
    heroBody: "这页适合仍在选择市场路径的创始人、投资者和国际团队。在进入具体国家站点之前，它先帮助用户看清哈萨克斯坦与格鲁吉亚的差异。",
    primaryCta: "打开联系页面",
    secondaryCta: "打开跨境页面",
    overviewLabel: "决策逻辑",
    overviewTitle: "应按任务逻辑选择市场，而不是按通用优势清单选择。",
    overviewBody: "当项目依赖本地落地、运营启动、注册、会计与俄语市场协同时，哈萨克斯坦通常更合适。若重点在灵活结构、面向投资者的逻辑和英文优先的跨境协作，格鲁吉亚通常更合适。",
    tableLabel: "比较",
    rows: [
      { label: "更适合的入口场景", kz: "本地启动、合规与持续执行。", ge: "控股结构、FIZ 路径和国际化 setup。" },
      { label: "何时更匹配", kz: "当任务已明确属于哈萨克斯坦并需要本地执行时。", ge: "当结构仍在设计中，需要把格鲁吉亚作为比较路径之一时。" },
      { label: "典型客户情况", kz: "团队进入哈萨克斯坦并需要完整落地。", ge: "创始人或投资者在比较辖区、税务逻辑与区域架构。" },
    ],
    audienceLabel: "这页适合谁",
    audienceTitle: "适合仍处于路线选择阶段的客户。",
    audienceBody: "如果司法辖区已经明确，最好直接进入国家站点。如果结构还未确定，这页可以先减少不确定性。",
    routingLabel: "InterLex 路由",
    routingTitle: "先完成比较，再进入正确的执行路径。",
    routingBody: "先用这页做第一次路线判断。逻辑清楚后，再进入对应国家站点或从品牌层面的联系开始。",
    kzLabel: "更常选择哈萨克斯坦的情况",
    kzItems: ["项目依赖哈萨克斯坦本地执行。", "需要会计、税务和法律协同。", "任务已接近实施阶段。"],
    geLabel: "更常选择格鲁吉亚的情况",
    geItems: ["客户仍在比较结构方案。", "项目依赖 FIZ、投资者逻辑或英文 workflow。", "比较结束后应由格鲁吉亚承接后续细节。"],
    faqLabel: "FAQ",
    faqTitle: "在分流前应回答的问题。",
    faqItems: [
      { question: "什么时候应先比较哈萨克斯坦和格鲁吉亚？", answer: "当结构尚未确定、司法辖区尚未选定时。"},
      { question: "什么时候应直接进入 interlex.kz？", answer: "当任务已经明确属于哈萨克斯坦并需要本地执行时。"},
      { question: "什么时候应直接进入 interlex.ge？", answer: "当格鲁吉亚已被选定，下一步是本地执行细化时。"},
    ],
  },
  it: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "Kazakistan o Georgia",
    description: "Confronta Kazakistan e Georgia per ingresso nel mercato, setup societario, logica fiscale e strutturazione cross-border prima di scegliere il giusto percorso InterLex.",
    keywords: ["Kazakistan o Georgia", "confronto giurisdizioni", "market entry", "business structuring", "InterLex"],
    eyebrow: "Confronto Tra Giurisdizioni",
    heroTitle: "Kazakistan o Georgia: quale percorso si adatta meglio al mandato?",
    heroBody: "Questa pagina aiuta founder, investitori e team internazionali che stanno ancora scegliendo il mercato corretto prima del passaggio al sito Paese.",
    primaryCta: "Apri Contatti",
    secondaryCta: "Apri Cross-border",
    overviewLabel: "Logica di Scelta",
    overviewTitle: "La giurisdizione va scelta in base alla logica del lavoro, non a una lista generica di vantaggi.",
    overviewBody: "Il Kazakistan tende a vincere quando servono execution locale, lancio operativo, filing e lavoro di mercato in russo. La Georgia tende a vincere quando contano strutturazione flessibile, logica investor-facing e coordinamento cross-border in inglese.",
    tableLabel: "Confronto",
    rows: [
      { label: "Scenario di ingresso", kz: "Avvio operativo, setup locale, contabilità, fiscalità ed execution continua.", ge: "Holding logic, percorsi FIZ e setup internazionale più flessibile." },
      { label: "Quando è più adatto", kz: "Quando il lavoro appartiene già al Kazakistan e richiede implementazione locale.", ge: "Quando la struttura è ancora in definizione e la Georgia è una delle opzioni da confrontare." },
      { label: "Situazione tipica", kz: "Un team entra in Kazakistan e ha bisogno di lancio e continuità operativa.", ge: "Un founder o investitore confronta giurisdizioni, fiscalità e architettura regionale." },
    ],
    audienceLabel: "A Chi Serve",
    audienceTitle: "Pagina pensata per chi è ancora nella fase di routing.",
    audienceBody: "Se la giurisdizione è già chiara, conviene passare direttamente al sito Paese. Se la struttura è ancora da definire, questa pagina riduce l'ambiguità.",
    routingLabel: "Routing InterLex",
    routingTitle: "Trasforma il confronto nel track corretto.",
    routingBody: "Usa questa pagina per la prima decisione di routing. Quando la logica è chiara, passa al sito Paese corretto o avvia il primo contatto a livello di brand.",
    kzLabel: "Il Kazakistan Di Solito È Più Adatto Quando",
    kzItems: ["Il mandato dipende da execution locale in Kazakistan.", "Servono contabilità, fiscalità e supporto legale nello stesso track.", "Il lavoro è vicino all'implementazione."],
    geLabel: "La Georgia Di Solito È Più Adatta Quando",
    geItems: ["Il cliente sta ancora confrontando modelli di struttura.", "Contano FIZ, logica investitore o workflow in inglese.", "La Georgia deve ricevere il dettaglio giurisdizionale dopo il confronto."],
    faqLabel: "FAQ",
    faqTitle: "Domande da chiarire prima dell'handoff.",
    faqItems: [
      { question: "Quando bisogna prima confrontare Kazakistan e Georgia?", answer: "Quando la struttura non è ancora fissata e la giurisdizione corretta non è stata scelta." },
      { question: "Quando andare direttamente su interlex.kz?", answer: "Quando il lavoro appartiene chiaramente al Kazakistan e richiede implementation locale." },
      { question: "Quando andare direttamente su interlex.ge?", answer: "Quando la Georgia è già stata scelta e il prossimo passo è il dettaglio locale." },
    ],
  },
  fr: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "Kazakhstan ou Géorgie",
    description: "Comparez le Kazakhstan et la Géorgie pour l'entrée sur le marché, la création de société, la logique fiscale et la structuration cross-border avant de choisir le bon parcours InterLex.",
    keywords: ["Kazakhstan ou Géorgie", "comparaison de juridictions", "entrée sur le marché", "structuration d'entreprise", "InterLex"],
    eyebrow: "Comparaison De Juridictions",
    heroTitle: "Kazakhstan ou Géorgie : quel parcours correspond le mieux au mandat ?",
    heroBody: "Cette page aide les fondateurs, investisseurs et équipes internationales qui choisissent encore le bon marché avant le passage vers un site pays.",
    primaryCta: "Ouvrir Contact",
    secondaryCta: "Ouvrir Cross-border",
    overviewLabel: "Logique De Choix",
    overviewTitle: "La juridiction doit être choisie selon la logique du travail, pas selon une liste générique d'avantages.",
    overviewBody: "Le Kazakhstan est souvent plus adapté lorsque le mandat dépend d'une exécution locale, d'un lancement opérationnel, de formalités et d'un travail de marché en russe. La Géorgie est souvent plus adaptée lorsque la structure reste flexible, orientée investisseurs, avec une coordination cross-border en anglais.",
    tableLabel: "Comparaison",
    rows: [
      { label: "Point d'entrée optimal", kz: "Lancement local, comptabilité, fiscalité et exécution continue.", ge: "Holding logic, parcours FIZ et setup international plus flexible." },
      { label: "Quand cela convient mieux", kz: "Quand le travail appartient déjà au Kazakhstan et exige une mise en œuvre locale.", ge: "Quand la structure reste à définir et que la Géorgie fait partie du choix comparatif." },
      { label: "Situation client typique", kz: "Une équipe entre au Kazakhstan et a besoin d'un lancement structuré.", ge: "Un fondateur ou investisseur compare juridictions, fiscalité et architecture régionale." },
    ],
    audienceLabel: "Pour Qui",
    audienceTitle: "Une page de comparaison pour les clients encore au stade du routing.",
    audienceBody: "Si la juridiction est déjà claire, mieux vaut aller directement sur le site pays. Si la structure doit encore être définie, cette page réduit l'ambiguïté.",
    routingLabel: "Routing InterLex",
    routingTitle: "Transformez la comparaison en bon parcours de travail.",
    routingBody: "Utilisez cette page pour la première décision de routing. Une fois la logique claire, poursuivez vers le site pays pertinent ou vers un premier échange au niveau de la marque.",
    kzLabel: "Le Kazakhstan Convient Souvent Quand",
    kzItems: ["Le mandat dépend d'une exécution locale au Kazakhstan.", "Le client a besoin d'un seul track pour comptabilité, fiscalité et support juridique.", "Le travail est proche de la mise en œuvre."],
    geLabel: "La Géorgie Convient Souvent Quand",
    geItems: ["Le client compare encore plusieurs structures.", "Le mandat dépend de FIZ, d'une logique investisseur ou d'un workflow en anglais.", "La Géorgie doit recevoir le détail juridictionnel après la comparaison."],
    faqLabel: "FAQ",
    faqTitle: "Questions à clarifier avant l'handoff.",
    faqItems: [
      { question: "Quand faut-il d'abord comparer le Kazakhstan et la Géorgie ?", answer: "Quand la structure n'est pas encore fixée et que la bonne juridiction n'a pas encore été choisie." },
      { question: "Quand aller directement sur interlex.kz ?", answer: "Quand le travail appartient clairement au Kazakhstan et nécessite une exécution locale." },
      { question: "Quand aller directement sur interlex.ge ?", answer: "Quand la Géorgie est déjà choisie et que l'étape suivante concerne le détail local." },
    ],
  },
  ka: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "ყაზახეთი თუ საქართველო",
    description: "შეადარეთ ყაზახეთი და საქართველო ბაზარზე შესვლის, კომპანიის რეგისტრაციის, საგადასახადო ლოგიკის და cross-border სტრუქტურირების მიხედვით სწორ InterLex მარშრუტამდე.",
    keywords: ["ყაზახეთი თუ საქართველო", "იურისდიქციების შედარება", "ბაზარზე შესვლა", "ბიზნესის სტრუქტურირება", "InterLex"],
    eyebrow: "იურისდიქციის შედარება",
    heroTitle: "ყაზახეთი თუ საქართველო: რომელი მარშრუტი ჯობს ამ ამოცანას?",
    heroBody: "ეს გვერდი განკუთვნილია ფაუნდერებისთვის, ინვესტორებისთვის და საერთაშორისო გუნდებისთვის, რომლებიც ჯერ კიდევ სწორ ბაზარს არჩევენ.",
    primaryCta: "კონტაქტის გახსნა",
    secondaryCta: "Cross-border-ის გახსნა",
    overviewLabel: "არჩევის ლოგიკა",
    overviewTitle: "იურსიდიქცია უნდა შეირჩეს ამოცანის ლოგიკით და არა ზოგადი სიის მიხედვით.",
    overviewBody: "ყაზახეთი უფრო ხშირად ჯდება მაშინ, როცა საჭიროა ადგილობრივი შესრულება, ოპერაციული გაშვება და რეალური ადგილობრივი იმპლემენტაცია. საქართველო უფრო ხშირად ჯდება მაშინ, როცა მთავარია მოქნილი სტრუქტურა, investor-facing ლოგიკა და ინგლისურენოვანი cross-border კოორდინაცია.",
    tableLabel: "შედარება",
    rows: [
      { label: "შესვლის საუკეთესო სცენარი", kz: "ლოკალური გაშვება, ბუღალტერია, გადასახადები და მუდმივი შესრულება.", ge: "holding logic, FIZ მოდელები და უფრო მოქნილი საერთაშორისო setup." },
      { label: "როდის ჯდება უკეთ", kz: "როცა საქმე უკვე ყაზახეთს ეკუთვნის და ადგილობრივ შესრულებას მოითხოვს.", ge: "როცა სტრუქტურა ჯერ კიდევ მუშავდება და საქართველო შედარების ნაწილია." },
      { label: "ტიპური კლიენტის სიტუაცია", kz: "გუნდი შედის ყაზახეთში და სჭირდება launch და execution.", ge: "ფაუნდერი ან ინვესტორი ადარებს იურისდიქციებს და საგადასახადო ლოგიკას." },
    ],
    audienceLabel: "ვისთვის არის გვერდი",
    audienceTitle: "შედარებითი გვერდი იმ კლიენტებისთვის, რომლებიც ჯერ routing ეტაპზე არიან.",
    audienceBody: "თუ იურისდიქცია უკვე გასაგებია, ჯობს პირდაპირ ქვეყნის საიტზე გადასვლა. თუ სტრუქტურა ჯერ არ არის განსაზღვრული, ეს გვერდი ამცირებს გაურკვევლობას.",
    routingLabel: "InterLex Routing",
    routingTitle: "შედარებიდან სწორ სამუშაო ტრეკზე გადადით.",
    routingBody: "ეს გვერდი გამოიყენეთ პირველი routing გადაწყვეტილებისთვის. როცა ლოგიკა ნათელია, გადადით შესაბამის country site-ზე ან დაიწყეთ საერთო ბრენდული კონტაქტით.",
    kzLabel: "ყაზახეთი უფრო ხშირად ჯდება, როცა",
    kzItems: ["საქმე დამოკიდებულია ყაზახეთში ადგილობრივ შესრულებაზე.", "საჭიროა ბუღალტერია, გადასახადები და იურიდიული მხარდაჭერა ერთ ტრეკში.", "ამოცანა უკვე შესრულების ფაზასთან ახლოსაა."],
    geLabel: "საქართველო უფრო ხშირად ჯდება, როცა",
    geItems: ["კლიენტი ჯერ კიდევ ადარებს სტრუქტურის ვარიანტებს.", "ამოცანა დამოკიდებულია FIZ-ზე, investor-facing ლოგიკაზე ან English-first workflow-ზე.", "შედარების შემდეგ დეტალი საქართველოზე უნდა გადავიდეს."],
    faqLabel: "FAQ",
    faqTitle: "კითხვები, რომლებსაც გვერდი უნდა პასუხობდეს routing-მდე.",
    faqItems: [
      { question: "როდის უნდა შევადაროთ ჯერ ყაზახეთი და საქართველო?", answer: "როცა სტრუქტურა ჯერ არ არის საბოლოოდ განსაზღვრული და სწორი იურისდიქცია ჯერ არ არის არჩეული." },
      { question: "როდის უნდა წავიდეთ პირდაპირ interlex.kz-ზე?", answer: "როცა საქმე უკვე აშკარად ყაზახეთს ეკუთვნის და ადგილობრივ შესრულებას მოითხოვს." },
      { question: "როდის უნდა წავიდეთ პირდაპირ interlex.ge-ზე?", answer: "როცა საქართველო უკვე არჩეულია და შემდეგი ნაბიჯი ადგილობრივ დეტალიზაციასთან არის დაკავშირებული." },
    ],
  },
  de: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "Kasachstan oder Georgien",
    description: "Vergleichen Sie Kasachstan und Georgien für Markteintritt, Gesellschaftsgründung, Steuerlogik und grenzüberschreitende Strukturierung, bevor Sie den richtigen InterLex-Weg wählen.",
    keywords: ["Kasachstan oder Georgien", "Jurisdiktionsvergleich", "Markteintritt", "Unternehmensstrukturierung", "InterLex"],
    eyebrow: "Jurisdiktionsvergleich",
    heroTitle: "Kasachstan oder Georgien: welcher Weg passt besser zum Mandat?",
    heroBody: "Diese Seite hilft Gründern, Investoren und internationalen Teams, die den richtigen Markt noch auswählen, bevor sie in eine Länderseite wechseln.",
    primaryCta: "Kontakt Öffnen",
    secondaryCta: "Cross-border Öffnen",
    overviewLabel: "Entscheidungslogik",
    overviewTitle: "Die Jurisdiktion sollte nach der Logik der Arbeit gewählt werden, nicht nach einer allgemeinen Vorteilliste.",
    overviewBody: "Kasachstan passt meist besser, wenn lokale Umsetzung, operativer Start, Registrierungen und russischsprachige Marktarbeit entscheidend sind. Georgien passt meist besser, wenn flexible Strukturierung, investor-facing Logik und englischsprachige cross-border Koordination im Vordergrund stehen.",
    tableLabel: "Vergleich",
    rows: [
      { label: "Bester Einstieg", kz: "Lokaler Start, Buchhaltung, Steuern und laufende Umsetzung.", ge: "Holding-Logik, FIZ-Wege und flexibleres internationales Setup." },
      { label: "Wann es besser passt", kz: "Wenn das Mandat bereits zu Kasachstan gehört und lokale Umsetzung braucht.", ge: "Wenn die Struktur noch entworfen wird und Georgien Teil des Vergleichs ist." },
      { label: "Typische Situation", kz: "Ein Team tritt in Kasachstan ein und braucht einen strukturierten Launch.", ge: "Ein Gründer oder Investor vergleicht Jurisdiktionen, Steuerlogik und regionale Architektur." },
    ],
    audienceLabel: "Für Wen",
    audienceTitle: "Eine Vergleichsseite für Mandate im Routing-Stadium.",
    audienceBody: "Wenn die Jurisdiktion bereits klar ist, sollte man direkt zur Länderseite gehen. Wenn die Struktur noch offen ist, reduziert diese Seite die Ambiguität.",
    routingLabel: "InterLex Routing",
    routingTitle: "Führen Sie den Vergleich in den richtigen Arbeitsweg über.",
    routingBody: "Nutzen Sie diese Seite für die erste Routing-Entscheidung. Sobald die Logik klar ist, wechseln Sie zur passenden Länderseite oder beginnen mit einem Markenkontakt.",
    kzLabel: "Kasachstan Passt Häufiger Wenn",
    kzItems: ["Das Mandat von lokaler Umsetzung in Kasachstan abhängt.", "Buchhaltung, Steuern und Rechtsarbeit in einem Track gebraucht werden.", "Die Aufgabe nahe an der Implementierung ist."],
    geLabel: "Georgien Passt Häufiger Wenn",
    geItems: ["Der Kunde noch Strukturmodelle vergleicht.", "FIZ, investor-facing Logik oder English-first Workflow wichtig sind.", "Georgien nach der Vergleichsphase die Details übernehmen soll."],
    faqLabel: "FAQ",
    faqTitle: "Fragen, die vor dem Handoff geklärt werden sollten.",
    faqItems: [
      { question: "Wann sollte man zuerst Kasachstan und Georgien vergleichen?", answer: "Wenn die Struktur noch nicht feststeht und die richtige Jurisdiktion noch nicht gewählt wurde." },
      { question: "Wann sollte man direkt zu interlex.kz gehen?", answer: "Wenn das Mandat klar zu Kasachstan gehört und lokale Umsetzung erfordert." },
      { question: "Wann sollte man direkt zu interlex.ge gehen?", answer: "Wenn Georgien bereits gewählt ist und der nächste Schritt in lokale Details führt." },
    ],
  },
  ar: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "كازاخستان أم جورجيا",
    description: "قارن بين كازاخستان وجورجيا من حيث دخول السوق، تأسيس الشركة، المنطق الضريبي والهيكلة العابرة للحدود قبل اختيار المسار الصحيح داخل InterLex.",
    keywords: ["كازاخستان أم جورجيا", "مقارنة الولايات القضائية", "دخول السوق", "هيكلة الأعمال", "InterLex"],
    eyebrow: "مقارنة بين الولايات القضائية",
    heroTitle: "كازاخستان أم جورجيا: أي مسار أنسب للتكليف؟",
    heroBody: "هذه الصفحة مخصصة للمؤسسين والمستثمرين والفرق الدولية التي ما زالت تختار السوق المناسب قبل الانتقال إلى موقع الدولة.",
    primaryCta: "افتح صفحة الاتصال",
    secondaryCta: "افتح صفحة cross-border",
    overviewLabel: "منطق الاختيار",
    overviewTitle: "يجب اختيار الولاية القضائية وفق منطق العمل لا وفق قائمة عامة من المزايا.",
    overviewBody: "تميل كازاخستان إلى أن تكون الأنسب عندما يعتمد التكليف على التنفيذ المحلي، والانطلاق التشغيلي، والتسجيلات، والعمل السوقي باللغة الروسية. وتميل جورجيا إلى أن تكون الأنسب عندما تكون الأهمية للمرونة الهيكلية، ومنطق المستثمرين، والتنسيق cross-border باللغة الإنجليزية.",
    tableLabel: "المقارنة",
    rows: [
      { label: "أفضل سيناريو دخول", kz: "إطلاق محلي ومحاسبة وضرائب وتنفيذ مستمر.", ge: "منطق الهولدينغ ومسارات FIZ وsetup دولي أكثر مرونة." },
      { label: "متى يكون الأنسب", kz: "عندما يكون العمل تابعاً لكازاخستان بالفعل ويتطلب تنفيذاً محلياً.", ge: "عندما تكون البنية ما زالت قيد التصميم وتكون جورجيا جزءاً من المقارنة." },
      { label: "الوضع المعتاد للعميل", kz: "فريق يدخل كازاخستان ويحتاج إلى إطلاق منظم.", ge: "مؤسس أو مستثمر يقارن بين الولايات القضائية والمنطق الضريبي والهيكل الإقليمي." },
    ],
    audienceLabel: "لمن تفيد هذه الصفحة",
    audienceTitle: "صفحة مقارنة للعملاء الذين ما زالوا في مرحلة routing.",
    audienceBody: "إذا كانت الولاية القضائية واضحة بالفعل فمن الأفضل الانتقال مباشرة إلى موقع الدولة. وإذا كانت البنية ما زالت غير محسومة فهذه الصفحة تقلل الغموض.",
    routingLabel: "مسار InterLex",
    routingTitle: "حوّل المقارنة إلى المسار العملي الصحيح.",
    routingBody: "استخدم هذه الصفحة لاتخاذ أول قرار routing. وعندما تتضح المنطقية، انتقل إلى موقع الدولة المناسب أو ابدأ بمحادثة على مستوى العلامة.",
    kzLabel: "غالباً ما تناسب كازاخستان عندما",
    kzItems: ["يعتمد التكليف على التنفيذ المحلي في كازاخستان.", "يحتاج العميل إلى المحاسبة والضرائب والدعم القانوني ضمن مسار واحد.", "يكون العمل قريباً من مرحلة التنفيذ."],
    geLabel: "غالباً ما تناسب جورجيا عندما",
    geItems: ["لا يزال العميل يقارن بين نماذج الهيكلة.", "يعتمد التكليف على FIZ أو منطق المستثمرين أو workflow باللغة الإنجليزية.", "يجب أن تتولى جورجيا التفاصيل القضائية بعد المقارنة."],
    faqLabel: "FAQ",
    faqTitle: "أسئلة يجب أن تُجاب قبل تحويل الطلب.",
    faqItems: [
      { question: "متى يجب مقارنة كازاخستان وجورجيا أولاً؟", answer: "عندما لا تكون البنية النهائية محددة بعد ولم يتم اختيار الولاية القضائية المناسبة." },
      { question: "متى يجب الذهاب مباشرة إلى interlex.kz؟", answer: "عندما يكون التكليف تابعاً لكازاخستان بوضوح ويتطلب تنفيذاً محلياً." },
      { question: "متى يجب الذهاب مباشرة إلى interlex.ge؟", answer: "عندما تكون جورجيا قد اختيرت بالفعل ويكون الخطوة التالية هي التفاصيل المحلية." },
    ],
  },
  tr: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "Kazakistan mı Gürcistan mı",
    description: "Doğru InterLex rotasını seçmeden önce Kazakistan ve Gürcistan'ı pazara giriş, şirket kuruluşu, vergi mantığı ve sınır ötesi yapılandırma açısından karşılaştırın.",
    keywords: ["Kazakistan mı Gürcistan mı", "yargı alanı karşılaştırması", "pazara giriş", "iş yapılandırması", "InterLex"],
    eyebrow: "Yargı Alanı Karşılaştırması",
    heroTitle: "Kazakistan mı Gürcistan mı: hangi rota mandate için daha uygun?",
    heroBody: "Bu sayfa, doğru pazarı hâlâ seçmekte olan kuruculara, yatırımcılara ve uluslararası ekiplere yardımcı olur.",
    primaryCta: "İletişimi Aç",
    secondaryCta: "Cross-border'ı Aç",
    overviewLabel: "Seçim Mantığı",
    overviewTitle: "Yargı alanı genel avantaj listesine göre değil, işin mantığına göre seçilmelidir.",
    overviewBody: "Kazakistan; local execution, operasyonel başlangıç, kayıtlar ve Rusça pazar çalışması önemliyse daha uygundur. Gürcistan ise esnek yapılandırma, investor-facing mantık ve English-first cross-border koordinasyon önemliyse daha uygundur.",
    tableLabel: "Karşılaştırma",
    rows: [
      { label: "En uygun giriş senaryosu", kz: "Yerel başlangıç, muhasebe, vergi ve sürekli execution.", ge: "Holding logic, FIZ yolları ve daha esnek uluslararası setup." },
      { label: "Ne zaman daha uygundur", kz: "İş zaten Kazakistan'a aitse ve yerel uygulama gerektiriyorsa.", ge: "Yapı hâlâ tasarlanıyorsa ve Gürcistan karşılaştırmanın parçasıysa." },
      { label: "Tipik müşteri durumu", kz: "Bir ekip Kazakistan'a giriyor ve düzenli launch istiyor.", ge: "Bir kurucu veya yatırımcı yargı alanlarını ve vergi mantığını karşılaştırıyor." },
    ],
    audienceLabel: "Bu Sayfa Kime Yardımcı Olur",
    audienceTitle: "Routing aşamasındaki müşteriler için bir karşılaştırma sayfası.",
    audienceBody: "Yargı alanı zaten netse doğrudan ülke sitesine geçmek daha doğrudur. Yapı hâlâ net değilse bu sayfa belirsizliği azaltır.",
    routingLabel: "InterLex Routing",
    routingTitle: "Karşılaştırmadan doğru çalışma track'ine geçin.",
    routingBody: "Bu sayfayı ilk routing kararı için kullanın. Mantık netleşince doğru country site'a geçin veya marka seviyesinde ilk teması başlatın.",
    kzLabel: "Kazakistan Genelde Şu Durumlarda Uygundur",
    kzItems: ["Mandat Kazakistan'da yerel execution'a bağlıysa.", "Muhasebe, vergi ve hukuk desteği tek track'te gerekiyorsa.", "İş uygulama aşamasına yakınsa."],
    geLabel: "Gürcistan Genelde Şu Durumlarda Uygundur",
    geItems: ["Müşteri hâlâ yapı modellerini karşılaştırıyorsa.", "FIZ, investor-facing mantık veya English-first workflow önemliyse.", "Karşılaştırmadan sonra detayın Gürcistan'a taşınması gerekiyorsa."],
    faqLabel: "FAQ",
    faqTitle: "Handoff öncesi cevaplanması gereken sorular.",
    faqItems: [
      { question: "Kazakistan ve Gürcistan önce ne zaman karşılaştırılmalı?", answer: "Yapı henüz net değilse ve doğru yargı alanı seçilmemişse." },
      { question: "Ne zaman doğrudan interlex.kz'ye gidilmeli?", answer: "İş açıkça Kazakistan'a aitse ve yerel execution gerektiriyorsa." },
      { question: "Ne zaman doğrudan interlex.ge'ye gidilmeli?", answer: "Gürcistan zaten seçilmişse ve bir sonraki adım yerel detaylarsa." },
    ],
  },
  es: {
    kind: "comparison",
    slug: "kazakhstan-vs-georgia",
    title: "Kazajistán o Georgia",
    description: "Compare Kazajistán y Georgia para entrada de mercado, constitución de empresa, lógica fiscal y estructuración cross-border antes de elegir la ruta correcta de InterLex.",
    keywords: ["Kazajistán o Georgia", "comparación de jurisdicciones", "entrada de mercado", "estructuración empresarial", "InterLex"],
    eyebrow: "Comparación De Jurisdicciones",
    heroTitle: "Kazajistán o Georgia: ¿qué ruta encaja mejor con el mandato?",
    heroBody: "Esta página ayuda a founders, inversores y equipos internacionales que aún están eligiendo el mercado correcto antes de pasar al sitio país.",
    primaryCta: "Abrir Contacto",
    secondaryCta: "Abrir Cross-border",
    overviewLabel: "Lógica De Elección",
    overviewTitle: "La jurisdicción debe elegirse por la lógica del trabajo, no por una lista genérica de ventajas.",
    overviewBody: "Kazajistán suele encajar mejor cuando importan la ejecución local, el lanzamiento operativo, los registros y el trabajo de mercado en ruso. Georgia suele encajar mejor cuando importan la estructuración flexible, la lógica orientada al inversor y la coordinación cross-border en inglés.",
    tableLabel: "Comparación",
    rows: [
      { label: "Mejor escenario de entrada", kz: "Lanzamiento local, contabilidad, impuestos y ejecución continua.", ge: "Holding logic, rutas FIZ y setup internacional más flexible." },
      { label: "Cuándo encaja mejor", kz: "Cuando el trabajo ya pertenece a Kazajistán y requiere implementación local.", ge: "Cuando la estructura aún se está diseñando y Georgia forma parte de la comparación." },
      { label: "Situación típica del cliente", kz: "Un equipo entra en Kazajistán y necesita un launch estructurado.", ge: "Un founder o inversor compara jurisdicciones, fiscalidad y arquitectura regional." },
    ],
    audienceLabel: "Para Quién Es",
    audienceTitle: "Una página comparativa para clientes que aún están en la fase de routing.",
    audienceBody: "Si la jurisdicción ya está clara, conviene ir directamente al sitio país. Si la estructura aún debe definirse, esta página reduce la ambigüedad.",
    routingLabel: "Routing InterLex",
    routingTitle: "Lleve la comparación al track de trabajo correcto.",
    routingBody: "Use esta página para la primera decisión de routing. Cuando la lógica quede clara, pase al sitio país correcto o inicie una conversación a nivel de marca.",
    kzLabel: "Kazajistán Suele Encajar Cuando",
    kzItems: ["El mandato depende de ejecución local en Kazajistán.", "El cliente necesita contabilidad, impuestos y soporte legal en un solo track.", "El trabajo está cerca de la implementación."],
    geLabel: "Georgia Suele Encajar Cuando",
    geItems: ["El cliente aún compara modelos de estructura.", "El mandato depende de FIZ, lógica para inversores o workflow en inglés.", "Georgia debe asumir el detalle jurisdiccional tras la comparación."],
    faqLabel: "FAQ",
    faqTitle: "Preguntas que esta página debe responder antes del handoff.",
    faqItems: [
      { question: "¿Cuándo conviene comparar primero Kazajistán y Georgia?", answer: "Cuando la estructura aún no está fijada y la jurisdicción correcta todavía no ha sido elegida." },
      { question: "¿Cuándo conviene ir directamente a interlex.kz?", answer: "Cuando el trabajo pertenece claramente a Kazajistán y requiere ejecución local." },
      { question: "¿Cuándo conviene ir directamente a interlex.ge?", answer: "Cuando Georgia ya ha sido elegida y el siguiente paso es el detalle local." },
    ],
  },
};

const crossBorderStructuringContent: Record<Locale, NarrativeLandingPage> = {
  en: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "Cross-border Structuring",
    description:
      "InterLex helps founders and investors think through cross-border structuring, jurisdiction logic, and the correct route into Kazakhstan or Georgia.",
    keywords: ["cross-border structuring", "international structuring", "jurisdiction logic", "InterLex", "Kazakhstan Georgia advisory"],
    eyebrow: "Cross-border Structuring",
    heroTitle: "Structure the mandate before you choose the execution track.",
    heroBody:
      "Cross-border structuring starts before the first filing. The real question is how ownership, operations, tax posture, and jurisdiction logic should fit together before the mandate moves into the right country-specific site.",
    primaryCta: "Open Contact",
    secondaryCta: "Compare Kazakhstan and Georgia",
    overviewLabel: "What This Means",
    overviewTitle: "Cross-border structuring is a routing problem before it becomes an execution problem.",
    overviewBody:
      "Founders and investors often start with the wrong question. The issue is not only where to register a company, but how the structure should work across markets, counterparties, taxation, and future operating reality.",
    scenariosLabel: "Typical Scenarios",
    scenariosTitle: "The page should capture early-stage structuring demand.",
    scenarios: [
      "A founder is choosing between a direct market-entry model and a holding-plus-operating structure.",
      "An investor wants to compare Kazakhstan and Georgia before deciding where the jurisdiction-specific detail should live.",
      "A regional business needs a cleaner route between ownership logic, tax posture, and operational launch.",
    ],
    risksLabel: "Where Mistakes Happen",
    risksTitle: "A weak structure creates downstream legal, tax, and operating friction.",
    risksBody:
      "When the routing logic is wrong, the client pays later through duplicated work, mismatched execution, unclear compliance ownership, and an avoidable restart between jurisdictions.",
    whyLabel: "Why InterLex",
    whyTitle: "InterLex is useful at the stage where the mandate still needs to be framed correctly.",
    whyBody:
      "The global hub is where the structure can be clarified before local execution begins. Once the logic is clear, the work should move into the correct market site with less ambiguity and less wasted motion.",
    faqLabel: "FAQ",
    faqTitle: "Questions this page should answer clearly.",
    faqItems: [
      {
        question: "What is cross-border structuring in practical terms?",
        answer:
          "It is the process of aligning ownership, jurisdiction choice, market entry, tax logic, and operating reality before local implementation starts.",
      },
      {
        question: "When should structuring happen before local execution?",
        answer:
          "It should happen first when the mandate spans more than one market or when the right jurisdiction is still part of the decision.",
      },
      {
        question: "What happens after the structure is clear?",
        answer:
          "After that, the work should move into the market-specific route that owns the local detail and implementation.",
      },
    ],
  },
  ru: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "Международное структурирование",
    description:
      "InterLex помогает фаундерам и инвесторам выстроить cross-border structuring, логику юрисдикции и правильный маршрут в Казахстан или Грузию.",
    keywords: ["международное структурирование", "cross-border structuring", "выбор юрисдикции", "InterLex", "Казахстан и Грузия"],
    eyebrow: "Международное структурирование",
    heroTitle: "Сначала выстройте структуру проекта, потом выбирайте трек исполнения.",
    heroBody:
      "Когда бизнес работает между несколькими странами, ошибка в структуре почти всегда обходится дороже, чем сама регистрация. InterLex помогает заранее собрать логику владения, запуска, налогов, банков и управления так, чтобы проект не пришлось перестраивать уже после выхода на рынок.",
    primaryCta: "Открыть контакты",
    secondaryCta: "Сравнить Казахстан и Грузию",
    overviewLabel: "Что это значит",
    overviewTitle: "Хорошая структура экономит деньги, время и управленческий ресурс уже на старте.",
    overviewBody:
      "Клиенту важно не просто открыть компанию, а собрать рабочую модель: где держать владение, где запускать операционную часть, как пройти банковые проверки и как не создавать себе лишние налоговые и юридические риски на ровном месте.",
    scenariosLabel: "Типовые сценарии",
    scenariosTitle: "Чаще всего к нам приходят с такими задачами.",
    scenarios: [
      "Фаундер выбирает между прямым выходом на рынок и моделью holding plus operating company.",
      "Инвестор сравнивает Казахстан и Грузию до того, как решить, где должны жить jurisdiction-specific детали.",
      "Региональному бизнесу нужен более чистый маршрут между структурой владения, налоговой логикой и операционным запуском.",
    ],
    risksLabel: "Где возникают ошибки",
    risksTitle: "Слабая структура потом создаёт юридическое, налоговое и операционное трение.",
    risksBody:
      "Если логика маршрута выбрана неправильно, клиент платит за это позже через дублирование работы, несоответствие исполнения, размывание ответственности за compliance и лишний перезапуск между юрисдикциями.",
    whyLabel: "Почему InterLex",
    whyTitle: "InterLex полезен там, где проект нужно не просто оформить, а правильно собрать с самого начала.",
    whyBody:
      "Мы подключаемся на том этапе, когда еще можно принять сильное решение без дорогих переделок. Сначала собираем структуру, затем переводим проект в нужную юрисдикцию и уже там доводим его до практического запуска.",
    faqLabel: "FAQ",
    faqTitle: "Вопросы, на которые эта страница должна отвечать прямо.",
    faqItems: [
      {
        question: "Что такое международное структурирование на практике?",
        answer:
          "Это выстраивание связи между структурой владения, выбором юрисдикции, выходом на рынок, налоговой логикой и будущей операционной моделью до начала локальной реализации.",
      },
      {
        question: "Когда structuring должно идти раньше локального исполнения?",
        answer:
          "Тогда, когда проект затрагивает несколько рынков или когда правильная юрисдикция ещё сама является частью решения.",
      },
      {
        question: "Что происходит после того, как структура становится понятной?",
        answer:
          "После этого работа должна перейти в тот market-specific маршрут, который будет держать локальные детали и практическую реализацию.",
      },
    ],
  },
  zh: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "跨境结构设计",
    description: "InterLex 帮助创始人和投资者在进入哈萨克斯坦或格鲁吉亚之前理清跨境结构、司法辖区逻辑与正确路径。",
    keywords: ["跨境结构设计", "国际结构", "司法辖区逻辑", "InterLex", "哈萨克斯坦 格鲁吉亚"],
    eyebrow: "跨境结构设计",
    heroTitle: "先把结构理清，再选择执行路径。",
    heroBody: "跨境结构设计发生在第一次注册之前。关键不只是在哪里注册公司，而是所有权、运营逻辑、税务逻辑与辖区选择如何先组合正确。",
    primaryCta: "打开联系页面",
    secondaryCta: "比较哈萨克斯坦与格鲁吉亚",
    overviewLabel: "这意味着什么",
    overviewTitle: "跨境结构设计首先是路径问题，然后才是执行问题。",
    overviewBody: "很多创始人与投资者一开始问错了问题。重要的不只是注册地，而是整个结构如何适配市场、税务与未来运营。",
    scenariosLabel: "典型场景",
    scenariosTitle: "这页应承接早期结构设计需求。",
    scenarios: [
      "创始人在直接市场进入与控股加运营结构之间做选择。",
      "投资者在决定细节落在哪个国家前先比较哈萨克斯坦与格鲁吉亚。",
      "区域业务需要在所有权、税务逻辑和运营启动之间找到更清晰的路径。",
    ],
    risksLabel: "错误通常发生在哪里",
    risksTitle: "结构弱，会在后续制造法律、税务和运营摩擦。",
    risksBody: "如果路径逻辑一开始错了，客户之后会付出重复工作、执行错位和合规责任模糊的代价。",
    whyLabel: "为什么是 InterLex",
    whyTitle: "InterLex 特别适合处理仍需先理清结构的任务。",
    whyBody: "全球入口的价值就在于先把结构说清，再进入本地执行。逻辑一旦明确，任务就能更干净地进入正确国家站点。",
    faqLabel: "FAQ",
    faqTitle: "这页应直接回答的问题。",
    faqItems: [
      { question: "跨境结构设计在实践中是什么意思？", answer: "它是指在本地执行开始前，把所有权、辖区选择、市场进入、税务逻辑和运营现实先对齐。" },
      { question: "什么时候结构设计应先于本地执行？", answer: "当项目涉及多个市场，或正确辖区本身仍是决策的一部分时。" },
      { question: "结构清楚后会怎样？", answer: "之后工作应进入负责本地细节与执行的具体市场路径。" },
    ],
  },
  it: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "Strutturazione Cross-border",
    description: "InterLex aiuta founder e investitori a chiarire la strutturazione cross-border, la logica giurisdizionale e il percorso corretto verso Kazakistan o Georgia.",
    keywords: ["strutturazione cross-border", "strutturazione internazionale", "logica giurisdizionale", "InterLex"],
    eyebrow: "Strutturazione Cross-border",
    heroTitle: "Chiarisci la struttura prima di scegliere il track di execution.",
    heroBody: "La strutturazione cross-border inizia prima del primo filing. La domanda non è solo dove registrare una società, ma come devono stare insieme ownership, operatività, fiscalità e scelta della giurisdizione.",
    primaryCta: "Apri Contatti",
    secondaryCta: "Confronta Kazakistan e Georgia",
    overviewLabel: "Cosa Significa",
    overviewTitle: "La strutturazione cross-border è prima un problema di routing, poi di execution.",
    overviewBody: "Founder e investitori spesso partono dalla domanda sbagliata. Il punto non è solo dove registrare, ma come la struttura deve funzionare tra mercati, controparti, fiscalità e realtà operativa.",
    scenariosLabel: "Scenari Tipici",
    scenariosTitle: "Questa pagina deve intercettare la domanda iniziale di strutturazione.",
    scenarios: [
      "Un founder sceglie tra un ingresso diretto nel mercato e una struttura holding più operating company.",
      "Un investitore confronta Kazakistan e Georgia prima di decidere dove devono stare i dettagli giurisdizionali.",
      "Un business regionale ha bisogno di un percorso più pulito tra ownership, fiscalità e lancio operativo.",
    ],
    risksLabel: "Dove Nascono Gli Errori",
    risksTitle: "Una struttura debole crea attrito legale, fiscale e operativo a valle.",
    risksBody: "Quando la logica di routing è sbagliata, il cliente paga dopo in duplicazione di lavoro, execution incoerente e responsabilità di compliance poco chiare.",
    whyLabel: "Perché InterLex",
    whyTitle: "InterLex è utile nella fase in cui il mandato deve ancora essere inquadrato correttamente.",
    whyBody: "Il global hub serve a chiarire la struttura prima che inizi l'execution locale. Quando la logica è chiara, il lavoro passa al market site corretto con meno ambiguità.",
    faqLabel: "FAQ",
    faqTitle: "Domande a cui questa pagina dovrebbe rispondere chiaramente.",
    faqItems: [
      { question: "Che cosa significa in pratica strutturazione cross-border?", answer: "Significa allineare ownership, scelta della giurisdizione, market entry, logica fiscale e realtà operativa prima che inizi l'implementazione locale." },
      { question: "Quando la strutturazione deve venire prima dell'execution locale?", answer: "Quando il mandato tocca più mercati o quando la giurisdizione corretta è ancora parte della decisione." },
      { question: "Che cosa succede quando la struttura è chiara?", answer: "A quel punto il lavoro deve passare nel percorso market-specific che prende in carico i dettagli locali." },
    ],
  },
  fr: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "Structuration Cross-border",
    description: "InterLex aide les fondateurs et investisseurs à clarifier la structuration cross-border, la logique de juridiction et le bon parcours vers le Kazakhstan ou la Géorgie.",
    keywords: ["structuration cross-border", "structuration internationale", "logique de juridiction", "InterLex"],
    eyebrow: "Structuration Cross-border",
    heroTitle: "Clarifiez la structure avant de choisir le track d'exécution.",
    heroBody: "La structuration cross-border commence avant le premier filing. La vraie question n'est pas seulement où enregistrer une société, mais comment faire tenir ensemble ownership, opérations, fiscalité et choix de juridiction.",
    primaryCta: "Ouvrir Contact",
    secondaryCta: "Comparer Kazakhstan et Géorgie",
    overviewLabel: "Ce Que Cela Veut Dire",
    overviewTitle: "La structuration cross-border est d'abord un problème de routing, ensuite un problème d'exécution.",
    overviewBody: "Les fondateurs et investisseurs commencent souvent par la mauvaise question. Le sujet n'est pas seulement où enregistrer l'entreprise, mais comment la structure doit fonctionner entre marchés, contreparties, fiscalité et réalité opérationnelle.",
    scenariosLabel: "Scénarios Typiques",
    scenariosTitle: "Cette page doit capter la demande de structuration au stade initial.",
    scenarios: [
      "Un fondateur choisit entre une entrée directe sur le marché et une structure holding plus operating company.",
      "Un investisseur compare le Kazakhstan et la Géorgie avant de décider où doivent vivre les détails juridictionnels.",
      "Une entreprise régionale a besoin d'un lien plus propre entre ownership, fiscalité et lancement opérationnel.",
    ],
    risksLabel: "Là Où Les Erreurs Commencent",
    risksTitle: "Une structure faible crée ensuite de la friction juridique, fiscale et opérationnelle.",
    risksBody: "Lorsque la logique de routing est mauvaise, le client paie plus tard en travail dupliqué, exécution mal alignée et responsabilité de compliance floue.",
    whyLabel: "Pourquoi InterLex",
    whyTitle: "InterLex est utile à l'étape où le mandat doit encore être correctement cadré.",
    whyBody: "Le hub global sert à clarifier la structure avant l'exécution locale. Une fois la logique claire, le travail passe vers le bon market site avec moins d'ambiguïté.",
    faqLabel: "FAQ",
    faqTitle: "Questions auxquelles cette page doit répondre clairement.",
    faqItems: [
      { question: "Que signifie la structuration cross-border en pratique ?", answer: "C'est l'alignement entre ownership, choix de juridiction, entrée de marché, logique fiscale et réalité opérationnelle avant le début de l'exécution locale." },
      { question: "Quand la structuration doit-elle passer avant l'exécution locale ?", answer: "Quand le mandat touche plusieurs marchés ou quand la bonne juridiction reste encore une partie de la décision." },
      { question: "Que se passe-t-il une fois la structure clarifiée ?", answer: "Le travail doit alors passer vers le parcours market-specific qui porte le détail local et l'exécution." },
    ],
  },
  ka: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "საერთაშორისო სტრუქტურირება",
    description: "InterLex ეხმარება ფაუნდერებს და ინვესტორებს cross-border structuring-ის, იურისდიქციის ლოგიკის და სწორი მარშრუტის განსაზღვრაში ყაზახეთისა თუ საქართველოსთვის.",
    keywords: ["საერთაშორისო სტრუქტურირება", "cross-border structuring", "იურისდიქციის ლოგიკა", "InterLex"],
    eyebrow: "საერთაშორისო სტრუქტურირება",
    heroTitle: "ჯერ ააწყეთ სტრუქტურა, შემდეგ აირჩიეთ შესრულების ტრეკი.",
    heroBody: "Cross-border structuring იწყება პირველ filing-მდე. მთავარი კითხვა მარტო ის კი არ არის, სად დარეგისტრირდეს კომპანია, არამედ როგორ უნდა აეწყოს ownership, ოპერაციული მოდელი, საგადასახადო ლოგიკა და იურისდიქციის არჩევანი.",
    primaryCta: "კონტაქტის გახსნა",
    secondaryCta: "ყაზახეთისა და საქართველოს შედარება",
    overviewLabel: "რას ნიშნავს ეს",
    overviewTitle: "საერთაშორისო სტრუქტურირება ჯერ routing ამოცანაა და მხოლოდ ამის შემდეგ execution ამოცანა.",
    overviewBody: "ფაუნდერები და ინვესტორები ხშირად არასწორი კითხვით იწყებენ. საქმე მარტო რეგისტრაციის ადგილს არ ეხება, არამედ იმას, როგორ იმუშაოს სტრუქტურამ ბაზრებს, გადასახადებს და ოპერაციებს შორის.",
    scenariosLabel: "ტიპური სცენარები",
    scenariosTitle: "ეს გვერდი უნდა იჭერდეს ადრეულ მოთხოვნას სტრუქტურირებაზე.",
    scenarios: [
      "ფაუნდერი ირჩევს პირდაპირ ბაზარზე შესვლასა და holding plus operating company მოდელს შორის.",
      "ინვესტორი ადარებს ყაზახეთსა და საქართველოს, სანამ გადაწყვეტს სად უნდა გადავიდეს იურისდიქციული დეტალი.",
      "რეგიონულ ბიზნესს სჭირდება უფრო სუფთა კავშირი ownership-ს, საგადასახადო ლოგიკასა და ოპერაციულ გაშვებას შორის.",
    ],
    risksLabel: "სად იწყება შეცდომები",
    risksTitle: "სუსტი სტრუქტურა შემდეგ სამართლებრივ, საგადასახადო და ოპერაციულ ხახუნს ქმნის.",
    risksBody: "თუ routing ლოგიკა თავიდანვე არასწორია, კლიენტი შემდეგ იხდის დუბლირებულ სამუშაოში, გაუმართავ შესრულებაში და compliance პასუხისმგებლობის დაბინდვაში.",
    whyLabel: "რატომ InterLex",
    whyTitle: "InterLex განსაკუთრებით სასარგებლოა მაშინ, როცა მანდატი ჯერ სწორად უნდა ჩამოყალიბდეს.",
    whyBody: "გლობალური ჰაბი საჭიროა იმისთვის, რომ ჯერ სტრუქტურა გაირკვეს და მერე დაიწყოს ადგილობრივი შესრულება. როცა ლოგიკა ნათელია, საქმე სწორ market site-ზე გადადის ნაკლები გაურკვევლობით.",
    faqLabel: "FAQ",
    faqTitle: "კითხვები, რომლებსაც ეს გვერდი მკაფიოდ უნდა პასუხობდეს.",
    faqItems: [
      { question: "რას ნიშნავს საერთაშორისო სტრუქტურირება პრაქტიკაში?", answer: "ეს არის ownership-ის, იურისდიქციის არჩევანის, ბაზარზე შესვლის, საგადასახადო ლოგიკის და ოპერაციული რეალობის შეთავსება ადგილობრივი შესრულების დაწყებამდე." },
      { question: "როდის უნდა იყოს სტრუქტურირება execution-ზე ადრე?", answer: "როცა პროექტი ერთზე მეტ ბაზარს ეხება ან როცა სწორი იურისდიქცია ჯერ კიდევ გადაწყვეტილების ნაწილია." },
      { question: "რა ხდება მას შემდეგ, რაც სტრუქტურა ნათელი ხდება?", answer: "ამის შემდეგ საქმე უნდა გადავიდეს იმ market-specific მარშრუტში, რომელიც ადგილობრივ დეტალს და შესრულებას ფლობს." },
    ],
  },
  de: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "Grenzüberschreitende Strukturierung",
    description: "InterLex hilft Gründern und Investoren, grenzüberschreitende Strukturierung, Jurisdiktionslogik und den richtigen Weg nach Kasachstan oder Georgien zu klären.",
    keywords: ["grenzüberschreitende Strukturierung", "internationale Strukturierung", "Jurisdiktionslogik", "InterLex"],
    eyebrow: "Grenzüberschreitende Strukturierung",
    heroTitle: "Klären Sie die Struktur, bevor Sie den Execution-Track wählen.",
    heroBody: "Grenzüberschreitende Strukturierung beginnt vor dem ersten Filing. Die Frage ist nicht nur, wo eine Gesellschaft registriert werden soll, sondern wie Ownership, Operations, Steuerlogik und Jurisdiktionswahl zusammenspielen.",
    primaryCta: "Kontakt Öffnen",
    secondaryCta: "Kasachstan und Georgien vergleichen",
    overviewLabel: "Was Das Bedeutet",
    overviewTitle: "Grenzüberschreitende Strukturierung ist zuerst ein Routing-Problem und erst dann ein Umsetzungsproblem.",
    overviewBody: "Gründer und Investoren beginnen oft mit der falschen Frage. Es geht nicht nur darum, wo registriert wird, sondern wie die Struktur zwischen Märkten, Gegenparteien, Steuern und operativer Realität funktionieren soll.",
    scenariosLabel: "Typische Szenarien",
    scenariosTitle: "Diese Seite sollte frühe Strukturierungsnachfrage aufnehmen.",
    scenarios: [
      "Ein Gründer wählt zwischen direktem Markteintritt und einer Holding-plus-Operating-Company-Struktur.",
      "Ein Investor vergleicht Kasachstan und Georgien, bevor entschieden wird, wo Jurisdiktionsdetails leben sollen.",
      "Ein regionales Unternehmen braucht eine sauberere Verbindung zwischen Ownership, Steuerlogik und operativem Start.",
    ],
    risksLabel: "Wo Fehler Entstehen",
    risksTitle: "Eine schwache Struktur erzeugt später rechtliche, steuerliche und operative Reibung.",
    risksBody: "Wenn die Routing-Logik falsch ist, zahlt der Kunde später durch doppelte Arbeit, schlecht abgestimmte Umsetzung und unklare Compliance-Verantwortung.",
    whyLabel: "Warum InterLex",
    whyTitle: "InterLex ist besonders hilfreich in der Phase, in der das Mandat noch richtig gerahmt werden muss.",
    whyBody: "Der globale Hub ist der Ort, an dem die Struktur vor der lokalen Umsetzung geklärt werden kann. Sobald die Logik klar ist, geht die Arbeit mit weniger Ambiguität in den richtigen Marktpfad über.",
    faqLabel: "FAQ",
    faqTitle: "Fragen, die diese Seite klar beantworten sollte.",
    faqItems: [
      { question: "Was bedeutet grenzüberschreitende Strukturierung praktisch?", answer: "Sie bedeutet, Ownership, Jurisdiktionswahl, Markteintritt, Steuerlogik und operative Realität vor Beginn der lokalen Umsetzung aufeinander abzustimmen." },
      { question: "Wann sollte Strukturierung vor lokaler Umsetzung passieren?", answer: "Wenn das Mandat mehr als einen Markt betrifft oder wenn die richtige Jurisdiktion noch Teil der Entscheidung ist." },
      { question: "Was passiert, wenn die Struktur klar ist?", answer: "Dann sollte die Arbeit in den market-specific Pfad übergehen, der die lokalen Details und die Umsetzung trägt." },
    ],
  },
  ar: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "الهيكلة العابرة للحدود",
    description: "تساعد InterLex المؤسسين والمستثمرين على توضيح الهيكلة العابرة للحدود، ومنطق الولاية القضائية، والمسار الصحيح نحو كازاخستان أو جورجيا.",
    keywords: ["الهيكلة العابرة للحدود", "الهيكلة الدولية", "منطق الولاية القضائية", "InterLex"],
    eyebrow: "الهيكلة العابرة للحدود",
    heroTitle: "اضبط الهيكل أولاً ثم اختر مسار التنفيذ.",
    heroBody: "تبدأ الهيكلة العابرة للحدود قبل أول filing. السؤال ليس فقط أين تُسجَّل الشركة، بل كيف يجب أن يجتمع ownership والتشغيل والمنطق الضريبي واختيار الولاية القضائية.",
    primaryCta: "افتح صفحة الاتصال",
    secondaryCta: "قارن بين كازاخستان وجورجيا",
    overviewLabel: "ماذا يعني ذلك",
    overviewTitle: "الهيكلة العابرة للحدود هي أولاً مشكلة routing ثم تصبح مشكلة تنفيذ.",
    overviewBody: "غالباً ما يبدأ المؤسسون والمستثمرون بالسؤال الخطأ. الموضوع ليس فقط مكان التسجيل، بل كيف يجب أن تعمل البنية بين الأسواق والضرائب والتشغيل والجهات المقابلة.",
    scenariosLabel: "سيناريوهات نموذجية",
    scenariosTitle: "يجب أن تلتقط هذه الصفحة الطلب المبكر على الهيكلة.",
    scenarios: [
      "مؤسس يختار بين دخول مباشر للسوق وبنية holding plus operating company.",
      "مستثمر يقارن بين كازاخستان وجورجيا قبل أن يقرر أين يجب أن تعيش التفاصيل القضائية.",
      "شركة إقليمية تحتاج إلى مسار أوضح بين ownership والمنطق الضريبي والانطلاق التشغيلي.",
    ],
    risksLabel: "أين تبدأ الأخطاء",
    risksTitle: "الهيكل الضعيف يخلق لاحقاً احتكاكاً قانونياً وضريبياً وتشغيلياً.",
    risksBody: "إذا كانت منطقية routing خاطئة من البداية فسيدفع العميل لاحقاً عبر تكرار العمل، وسوء المواءمة في التنفيذ، وغموض مسؤولية compliance.",
    whyLabel: "لماذا InterLex",
    whyTitle: "تكون InterLex مفيدة خصوصاً عندما لا يزال التكليف بحاجة إلى تأطير صحيح.",
    whyBody: "فائدة المركز العالمي هي توضيح البنية قبل بدء التنفيذ المحلي. وعندما تتضح المنطقية ينتقل العمل إلى المسار السوقي الصحيح مع غموض أقل.",
    faqLabel: "FAQ",
    faqTitle: "أسئلة يجب أن تجيب عنها هذه الصفحة بوضوح.",
    faqItems: [
      { question: "ما المقصود عملياً بالهيكلة العابرة للحدود؟", answer: "هي مواءمة ownership واختيار الولاية القضائية ودخول السوق والمنطق الضريبي والواقع التشغيلي قبل بدء التنفيذ المحلي." },
      { question: "متى يجب أن تأتي الهيكلة قبل التنفيذ المحلي؟", answer: "عندما يمس التكليف أكثر من سوق أو عندما تبقى الولاية القضائية الصحيحة جزءاً من القرار." },
      { question: "ماذا يحدث بعد اتضاح الهيكل؟", answer: "عندها يجب أن ينتقل العمل إلى المسار market-specific الذي يحمل التفاصيل المحلية والتنفيذ." },
    ],
  },
  tr: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "Sınır Ötesi Yapılandırma",
    description: "InterLex; kurucuların ve yatırımcıların sınır ötesi yapılandırmayı, yargı alanı mantığını ve Kazakistan ya da Gürcistan'a giden doğru rotayı netleştirmesine yardımcı olur.",
    keywords: ["sınır ötesi yapılandırma", "uluslararası yapılandırma", "yargı alanı mantığı", "InterLex"],
    eyebrow: "Sınır Ötesi Yapılandırma",
    heroTitle: "Önce yapıyı netleştirin, sonra execution track'i seçin.",
    heroBody: "Sınır ötesi yapılandırma ilk filing'den önce başlar. Soru sadece şirketin nerede kurulacağı değil, ownership, operasyon, vergi mantığı ve yargı alanı seçiminin nasıl bir araya geleceğidir.",
    primaryCta: "İletişimi Aç",
    secondaryCta: "Kazakistan ve Gürcistan'ı Karşılaştır",
    overviewLabel: "Bu Ne Demek",
    overviewTitle: "Sınır ötesi yapılandırma önce bir routing problemidir, sonra execution problemine dönüşür.",
    overviewBody: "Kurucular ve yatırımcılar çoğu zaman yanlış soruyla başlar. Mesele sadece nerede kayıt yapılacağı değil, yapının pazarlar, vergiler ve operasyonel gerçeklik arasında nasıl işleyeceğidir.",
    scenariosLabel: "Tipik Senaryolar",
    scenariosTitle: "Bu sayfa erken yapılandırma talebini yakalamalıdır.",
    scenarios: [
      "Bir kurucu doğrudan market entry modeli ile holding plus operating company modeli arasında seçim yapıyor.",
      "Bir yatırımcı, jurisdiction-specific detayın nereye gideceğine karar vermeden önce Kazakistan ve Gürcistan'ı karşılaştırıyor.",
      "Bölgesel bir iş, ownership, vergi mantığı ve operasyonel launch arasında daha net bir rotaya ihtiyaç duyuyor.",
    ],
    risksLabel: "Hatalar Nerede Başlıyor",
    risksTitle: "Zayıf yapı daha sonra hukuki, vergisel ve operasyonel sürtünme yaratır.",
    risksBody: "Routing mantığı yanlış olduğunda müşteri daha sonra tekrarlı iş, uyumsuz execution ve belirsiz compliance sahipliği üzerinden bedel öder.",
    whyLabel: "Neden InterLex",
    whyTitle: "InterLex, mandatın önce doğru çerçevelenmesi gereken aşamada özellikle faydalıdır.",
    whyBody: "Global hub'ın değeri yapıyı yerel execution'dan önce netleştirmektir. Mantık netleşince iş doğru market site'a daha az belirsizlikle geçer.",
    faqLabel: "FAQ",
    faqTitle: "Bu sayfanın açıkça yanıtlaması gereken sorular.",
    faqItems: [
      { question: "Sınır ötesi yapılandırma pratikte ne demektir?", answer: "Yerel uygulama başlamadan önce ownership, yargı alanı seçimi, market entry, vergi mantığı ve operasyonel gerçekliğin hizalanması demektir." },
      { question: "Yapılandırma ne zaman yerel execution'dan önce gelmelidir?", answer: "Mandat birden fazla pazarı kapsıyorsa veya doğru yargı alanı hâlâ kararın parçasıysa önce gelmelidir." },
      { question: "Yapı netleştikten sonra ne olur?", answer: "Ardından iş, yerel detayları ve uygulamayı taşıyan market-specific track'e geçmelidir." },
    ],
  },
  es: {
    kind: "narrative",
    slug: "cross-border-structuring",
    title: "Estructuración Cross-border",
    description: "InterLex ayuda a founders e inversores a aclarar la estructuración cross-border, la lógica jurisdiccional y la ruta correcta hacia Kazajistán o Georgia.",
    keywords: ["estructuración cross-border", "estructuración internacional", "lógica jurisdiccional", "InterLex"],
    eyebrow: "Estructuración Cross-border",
    heroTitle: "Primero aclare la estructura y luego elija el track de ejecución.",
    heroBody: "La estructuración cross-border empieza antes del primer filing. La pregunta no es solo dónde registrar la empresa, sino cómo deben encajar ownership, operación, lógica fiscal y elección de jurisdicción.",
    primaryCta: "Abrir Contacto",
    secondaryCta: "Comparar Kazajistán y Georgia",
    overviewLabel: "Qué Significa",
    overviewTitle: "La estructuración cross-border es primero un problema de routing y después un problema de ejecución.",
    overviewBody: "Founders e inversores suelen empezar por la pregunta equivocada. El asunto no es solo dónde registrar la compañía, sino cómo debe funcionar la estructura entre mercados, contrapartes, fiscalidad y realidad operativa.",
    scenariosLabel: "Escenarios Típicos",
    scenariosTitle: "Esta página debe captar demanda temprana de estructuración.",
    scenarios: [
      "Un founder elige entre entrada directa al mercado y una estructura holding más operating company.",
      "Un inversor compara Kazajistán y Georgia antes de decidir dónde deben vivir los detalles jurisdiccionales.",
      "Un negocio regional necesita una ruta más clara entre ownership, lógica fiscal y lanzamiento operativo.",
    ],
    risksLabel: "Dónde Aparecen Los Errores",
    risksTitle: "Una estructura débil genera después fricción legal, fiscal y operativa.",
    risksBody: "Si la lógica de routing es incorrecta, el cliente paga después en duplicación de trabajo, ejecución desalineada y responsabilidad difusa de compliance.",
    whyLabel: "Por Qué InterLex",
    whyTitle: "InterLex es especialmente útil en la etapa en la que el mandato aún debe enmarcarse bien.",
    whyBody: "El valor del hub global está en aclarar la estructura antes de que comience la ejecución local. Cuando la lógica queda clara, el trabajo pasa al market site correcto con menos ambigüedad.",
    faqLabel: "FAQ",
    faqTitle: "Preguntas que esta página debe responder con claridad.",
    faqItems: [
      { question: "¿Qué significa en la práctica la estructuración cross-border?", answer: "Significa alinear ownership, elección de jurisdicción, entrada de mercado, lógica fiscal y realidad operativa antes de iniciar la implementación local." },
      { question: "¿Cuándo debe venir la estructuración antes que la ejecución local?", answer: "Cuando el mandato toca más de un mercado o cuando la jurisdicción correcta aún forma parte de la decisión." },
      { question: "¿Qué pasa cuando la estructura ya está clara?", answer: "Entonces el trabajo debe pasar al track market-specific que lleva el detalle local y la implementación." },
    ],
  },
};

const internationalMarketEntryContent: Record<Locale, MarketEntryLandingPage> = {
  en: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "International Market Entry",
    description:
      "Use InterLex to frame international market entry before local execution begins in Kazakhstan or Georgia.",
    keywords: ["international market entry", "market entry advisory", "Kazakhstan market entry", "Georgia market entry", "InterLex"],
    eyebrow: "International Market Entry",
    heroTitle: "Market entry starts before registration, not after it.",
    heroBody:
      "Clients usually arrive with a country in mind, but not always with a clear route. InterLex helps turn an early market-entry idea into a workable path across jurisdiction choice, operating structure, tax posture, and launch sequence.",
    primaryCta: "Open Contact",
    secondaryCta: "Open Cross-border Structuring",
    overviewLabel: "Entry Logic",
    overviewTitle: "The first market-entry decision is whether the route is already clear.",
    overviewBody:
      "If the jurisdiction and execution path are already fixed, the client should move into the relevant country site. If the route is still being framed, the hub should carry the first conversation and reduce ambiguity before implementation begins.",
    decisionLabel: "What Must Be Decided",
    decisionTitle: "International market entry usually depends on five early choices.",
    decisionItems: [
      "Which jurisdiction should own the first phase of execution.",
      "What legal and operating structure best fits the client profile.",
      "How tax logic, banking, and compliance should be sequenced.",
      "Whether the project belongs in Kazakhstan, Georgia, or a comparison between both.",
      "What the next step should be: routing, structuring, or direct local execution.",
    ],
    timingLabel: "Why Timing Matters",
    timingTitle: "A late routing decision usually creates avoidable restart work.",
    timingBody:
      "When market entry starts with implementation before the route is properly framed, the result is usually duplicated setup, weak documentation flow, and a slower path into the actual operating model.",
    comparisonLabel: "Market Direction",
    comparisonTitle: "Kazakhstan and Georgia solve different entry problems.",
    kzTitle: "Kazakhstan",
    kzBody:
      "Kazakhstan is usually the right route when the project depends on local operations, local counterparties, accounting, tax execution, and a market presence that must work immediately on the ground.",
    geTitle: "Georgia",
    geBody:
      "Georgia is usually the right route when the client needs a more flexible structuring environment, investor-facing logic, FIZ pathways, or an English-first setup discussion before deeper local detail.",
    faqLabel: "FAQ",
    faqTitle: "Questions this page should answer before the handoff.",
    faqItems: [
      {
        question: "What does international market entry include at the beginning?",
        answer:
          "It includes the first routing decisions around jurisdiction, structure, tax posture, banking sequence, and operating launch.",
      },
      {
        question: "When should the client start from the hub instead of a country site?",
        answer:
          "The hub is the right entry point when the market route is still being defined rather than already fixed.",
      },
      {
        question: "When should the client move directly into local execution?",
        answer:
          "Direct local execution makes sense when the route, jurisdiction, and first implementation step are already clear.",
      },
    ],
  },
  ru: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "Международный выход на рынок",
    description:
      "Используйте InterLex, чтобы правильно собрать международный market entry до начала локального исполнения в Казахстане или Грузии.",
    keywords: ["международный выход на рынок", "market entry advisory", "выход на рынок Казахстан", "выход на рынок Грузия", "InterLex"],
    eyebrow: "Международный выход на рынок",
    heroTitle: "Выход на рынок начинается не после регистрации, а до неё.",
    heroBody:
      "Если вы выходите в новый рынок, решать нужно не только вопрос регистрации. InterLex помогает заранее определить правильную страну входа, формат присутствия, банковую и налоговую логику и собрать запуск так, чтобы он не остановился на первом же этапе.",
    primaryCta: "Открыть контакты",
    secondaryCta: "Открыть международное структурирование",
    overviewLabel: "Логика входа",
    overviewTitle: "Сильный запуск начинается с ясного плана, а не с формального набора шагов.",
    overviewBody:
      "Если страна и модель запуска уже понятны, можно переходить к локальной реализации. Если пока не ясно, где лучше начинать и как связать структуру, банки, налоги и операционную модель, сначала стоит собрать проект на уровне стратегии.",
    decisionLabel: "Что нужно решить",
    decisionTitle: "До запуска важно принять несколько решений, которые обычно определяют весь результат.",
    decisionItems: [
      "Какая юрисдикция должна взять на себя первый этап исполнения.",
      "Какая правовая и операционная структура лучше подходит под профиль клиента.",
      "Как должны выстраиваться налоговая логика, banking и compliance.",
      "Относится ли проект к Казахстану, к Грузии или пока требует сравнения обоих маршрутов.",
      "Какой следующий шаг нужен сейчас: routing, structuring или прямой переход в локальное исполнение.",
    ],
    timingLabel: "Почему важен момент входа",
    timingTitle: "Если ключевые решения принять слишком поздно, проект почти всегда теряет время и деньги.",
    timingBody:
      "Когда компания начинает с регистрации, не собрав заранее структуру и последовательность действий, потом приходится исправлять банковые, налоговые и операционные вопросы уже в процессе. Это замедляет запуск и делает вход на рынок дороже.",
    comparisonLabel: "Логика рынков",
    comparisonTitle: "Казахстан и Грузия дают разный тип входа в рынок.",
    kzTitle: "Казахстан",
    kzBody:
      "Казахстан чаще является правильным маршрутом, когда проект зависит от локальных операций, контрагентов, бухгалтерии, налогового исполнения и присутствия на рынке, которое должно сразу работать на месте.",
    geTitle: "Грузия",
    geBody:
      "Грузия чаще является правильным маршрутом, когда клиенту нужна более гибкая среда для структурирования, investor-facing логика, маршруты FIZ или англоязычный setup-разговор до погружения в локальные детали.",
    faqLabel: "FAQ",
    faqTitle: "Вопросы, на которые эта страница должна отвечать до передачи запроса дальше.",
    faqItems: [
      {
        question: "Что включает международный выход на рынок на старте?",
        answer:
          "Он включает первые решения по юрисдикции, структуре, налоговой логике, банковской последовательности и модели запуска.",
      },
      {
        question: "Когда нужно начинать с хаба, а не сразу со страницы страны?",
        answer:
          "Хаб нужен тогда, когда маршрут по рынку ещё определяется, а не уже зафиксирован.",
      },
      {
        question: "Когда можно сразу переходить в локальное исполнение?",
        answer:
          "Когда маршрут, юрисдикция и первый шаг реализации уже понятны и не требуют дополнительного routing-этапа.",
      },
    ],
  },
  zh: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "国际市场进入",
    description: "在哈萨克斯坦或格鲁吉亚本地执行开始前，先通过 InterLex 正确框定国际市场进入路径。",
    keywords: ["国际市场进入", "市场进入咨询", "哈萨克斯坦市场进入", "格鲁吉亚市场进入", "InterLex"],
    eyebrow: "国际市场进入",
    heroTitle: "市场进入不是注册之后才开始，而是在此之前就开始。",
    heroBody: "客户通常已经想到某个国家，但未必已经想清路径。InterLex 帮助把早期 market-entry 需求整理成可执行路线，先明确辖区、结构、税务逻辑和启动顺序。",
    primaryCta: "打开联系页面",
    secondaryCta: "打开跨境结构设计",
    overviewLabel: "进入逻辑",
    overviewTitle: "市场进入的第一步，是先判断路径是否已经清晰。",
    overviewBody: "如果辖区和执行路径已经固定，客户应直接进入国家站点。如果路径还在形成，全球入口应先承接第一轮沟通，减少不确定性。",
    decisionLabel: "需要先决定什么",
    decisionTitle: "国际市场进入通常取决于五个早期决定。",
    decisionItems: [
      "哪一个辖区应承担第一阶段执行。",
      "哪种法律与运营结构最适合客户。",
      "税务逻辑、银行与合规应如何排序。",
      "项目属于哈萨克斯坦、格鲁吉亚，还是仍需比较两者。",
      "下一步应是 routing、structuring 还是直接本地执行。",
    ],
    timingLabel: "为什么时机重要",
    timingTitle: "如果路径判断过晚，通常会出现可以避免的返工。",
    timingBody: "如果 market entry 在路径未清楚前就直接进入执行，通常会导致重复 setup、文件流薄弱以及更慢的实际落地。",
    comparisonLabel: "市场方向",
    comparisonTitle: "哈萨克斯坦与格鲁吉亚解决的是不同的进入问题。",
    kzTitle: "哈萨克斯坦",
    kzBody: "当项目依赖本地运营、会计、税务执行和地面实际存在时，哈萨克斯坦通常是更合适的路径。",
    geTitle: "格鲁吉亚",
    geBody: "当客户需要更灵活的结构环境、FIZ 路径、投资者逻辑或英文优先的 setup 讨论时，格鲁吉亚通常更合适。",
    faqLabel: "FAQ",
    faqTitle: "在分流前，这页应回答的问题。",
    faqItems: [
      { question: "国际市场进入一开始包括什么？", answer: "包括辖区、结构、税务逻辑、银行顺序和启动模型的初步决定。" },
      { question: "什么时候应先从全球入口开始，而不是直接进入国家站点？", answer: "当市场路径仍在定义，而不是已经固定时。" },
      { question: "什么时候可以直接进入本地执行？", answer: "当路径、辖区和第一步执行已经清楚时。" },
    ],
  },
  it: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "Ingresso Internazionale Nel Mercato",
    description: "Usa InterLex per chiarire l'international market entry prima che inizi l'esecuzione locale in Kazakistan o Georgia.",
    keywords: ["international market entry", "market entry advisory", "Kazakistan", "Georgia", "InterLex"],
    eyebrow: "International Market Entry",
    heroTitle: "L'ingresso nel mercato comincia prima della registrazione, non dopo.",
    heroBody: "Il cliente arriva spesso con un Paese in mente, ma non sempre con un percorso già chiaro. InterLex aiuta a trasformare un'idea iniziale di market entry in una rotta praticabile tra giurisdizione, struttura, fiscalità e lancio.",
    primaryCta: "Apri Contatti",
    secondaryCta: "Apri Strutturazione Cross-border",
    overviewLabel: "Logica Di Ingresso",
    overviewTitle: "La prima decisione è capire se il percorso è già chiaro oppure no.",
    overviewBody: "Se giurisdizione e execution path sono già definiti, il cliente dovrebbe passare direttamente al sito Paese. Se il percorso è ancora da costruire, il global hub deve gestire la prima conversazione.",
    decisionLabel: "Cosa Va Deciso",
    decisionTitle: "L'international market entry dipende spesso da cinque decisioni iniziali.",
    decisionItems: [
      "Quale giurisdizione deve prendere in carico la prima fase.",
      "Quale struttura legale e operativa si adatta meglio al cliente.",
      "Come sequenziare fiscalità, banking e compliance.",
      "Se il progetto appartiene al Kazakistan, alla Georgia o a un confronto tra entrambi.",
      "Qual è il prossimo passo: routing, structuring o execution locale diretta.",
    ],
    timingLabel: "Perché Il Timing Conta",
    timingTitle: "Quando il routing viene deciso troppo tardi, il riavvio del lavoro diventa quasi inevitabile.",
    timingBody: "Se il market entry parte dall'implementazione prima che il percorso sia chiarito, il risultato è quasi sempre setup duplicato, documentazione debole e un accesso più lento al modello operativo reale.",
    comparisonLabel: "Direzione Di Mercato",
    comparisonTitle: "Kazakistan e Georgia risolvono problemi di ingresso diversi.",
    kzTitle: "Kazakistan",
    kzBody: "Il Kazakistan è più adatto quando il progetto dipende da operazioni locali, controparti locali, contabilità, execution fiscale e presenza concreta sul mercato.",
    geTitle: "Georgia",
    geBody: "La Georgia è più adatta quando il cliente ha bisogno di un ambiente più flessibile per la strutturazione, logica investor-facing, percorsi FIZ o una discussione setup in inglese prima del dettaglio locale.",
    faqLabel: "FAQ",
    faqTitle: "Domande che questa pagina dovrebbe chiarire prima dell'handoff.",
    faqItems: [
      { question: "Che cosa include l'international market entry all'inizio?", answer: "Include le prime decisioni su giurisdizione, struttura, logica fiscale, sequenza bancaria e modello di lancio." },
      { question: "Quando è meglio partire dal global hub invece che dal sito Paese?", answer: "Quando il percorso di mercato è ancora in definizione e non già fissato." },
      { question: "Quando si può passare subito all'execution locale?", answer: "Quando percorso, giurisdizione e primo step operativo sono già chiari." },
    ],
  },
  fr: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "Entrée Internationale Sur Le Marché",
    description: "Utilisez InterLex pour cadrer l'international market entry avant que l'exécution locale ne commence au Kazakhstan ou en Géorgie.",
    keywords: ["international market entry", "conseil en entrée de marché", "Kazakhstan", "Géorgie", "InterLex"],
    eyebrow: "International Market Entry",
    heroTitle: "L'entrée sur le marché commence avant l'immatriculation, pas après.",
    heroBody: "Le client arrive souvent avec un pays en tête, mais pas toujours avec une route claire. InterLex aide à transformer une idée initiale de market entry en un chemin praticable entre juridiction, structure, fiscalité et séquence de lancement.",
    primaryCta: "Ouvrir Contact",
    secondaryCta: "Ouvrir Structuration Cross-border",
    overviewLabel: "Logique D'entrée",
    overviewTitle: "La première décision consiste à savoir si la route est déjà claire.",
    overviewBody: "Si la juridiction et le chemin d'exécution sont déjà fixés, le client doit aller directement vers le site pays. Si la route est encore en train d'être définie, le hub global doit prendre le premier échange.",
    decisionLabel: "Ce Qui Doit Être Décidé",
    decisionTitle: "L'international market entry dépend souvent de cinq décisions initiales.",
    decisionItems: [
      "Quelle juridiction doit porter la première phase.",
      "Quelle structure juridique et opérationnelle convient au client.",
      "Comment séquencer fiscalité, banking et compliance.",
      "Si le projet relève du Kazakhstan, de la Géorgie ou d'une comparaison entre les deux.",
      "Quelle doit être la prochaine étape : routing, structuring ou exécution locale directe.",
    ],
    timingLabel: "Pourquoi Le Timing Compte",
    timingTitle: "Quand la décision de routing arrive trop tard, le redémarrage du travail devient presque inévitable.",
    timingBody: "Si le market entry commence par l'implémentation avant que la route soit cadrée, le résultat est généralement un setup dupliqué, un flux documentaire faible et un accès plus lent au vrai modèle opérationnel.",
    comparisonLabel: "Direction De Marché",
    comparisonTitle: "Le Kazakhstan et la Géorgie ne résolvent pas le même problème d'entrée.",
    kzTitle: "Kazakhstan",
    kzBody: "Le Kazakhstan est souvent la bonne route lorsque le projet dépend d'opérations locales, de contreparties locales, de comptabilité, d'exécution fiscale et d'une présence qui doit fonctionner immédiatement sur le terrain.",
    geTitle: "Géorgie",
    geBody: "La Géorgie est souvent la bonne route lorsque le client a besoin d'un environnement plus flexible de structuration, d'une logique investisseur, de voies FIZ ou d'une discussion setup en anglais avant le détail local.",
    faqLabel: "FAQ",
    faqTitle: "Questions auxquelles cette page devrait répondre avant l'handoff.",
    faqItems: [
      { question: "Que comprend l'international market entry au début ?", answer: "Il comprend les premières décisions sur la juridiction, la structure, la logique fiscale, la séquence bancaire et le modèle de lancement." },
      { question: "Quand faut-il commencer par le hub plutôt que par un site pays ?", answer: "Quand la route de marché est encore en cours de définition et non déjà fixée." },
      { question: "Quand peut-on passer directement à l'exécution locale ?", answer: "Quand la route, la juridiction et la première étape d'exécution sont déjà claires." },
    ],
  },
  ka: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "საერთაშორისო ბაზარზე შესვლა",
    description: "გამოიყენეთ InterLex, რომ სწორად ააწყოთ international market entry მანამ, სანამ ყაზახეთსა თუ საქართველოში ადგილობრივი შესრულება დაიწყება.",
    keywords: ["საერთაშორისო ბაზარზე შესვლა", "market entry advisory", "ყაზახეთი", "საქართველო", "InterLex"],
    eyebrow: "საერთაშორისო ბაზარზე შესვლა",
    heroTitle: "ბაზარზე შესვლა რეგისტრაციის შემდეგ კი არა, მანამდე იწყება.",
    heroBody: "კლიენტი ხშირად უკვე კონკრეტულ ქვეყანაზე ფიქრობს, მაგრამ არა ყოველთვის გასაგები მარშრუტით. InterLex ეხმარება ადრეული market-entry იდეის გადაქცევას სამუშაო გზად, სადაც გასაგებია იურისდიქცია, სტრუქტურა, საგადასახადო ლოგიკა და გაშვების თანმიმდევრობა.",
    primaryCta: "კონტაქტის გახსნა",
    secondaryCta: "საერთაშორისო სტრუქტურირების გახსნა",
    overviewLabel: "შესვლის ლოგიკა",
    overviewTitle: "პირველი გადაწყვეტილება არის გაირკვეს, უკვე ნათელია მარშრუტი თუ ჯერ არა.",
    overviewBody: "თუ იურისდიქცია და execution გზა უკვე ფიქსირებულია, კლიენტი პირდაპირ country site-ზე უნდა გადავიდეს. თუ მარშრუტი ჯერ კიდევ ფორმირდება, გლობალურმა ჰაბმა პირველი საუბარი უნდა აიღოს საკუთარ თავზე.",
    decisionLabel: "რა უნდა გადაწყდეს",
    decisionTitle: "საერთაშორისო ბაზარზე შესვლა ხშირად ხუთ ადრეულ გადაწყვეტილებაზეა დამოკიდებული.",
    decisionItems: [
      "რომელმა იურისდიქციამ უნდა აიღოს პირველი ფაზა.",
      "რომელი სამართლებრივი და ოპერაციული სტრუქტურა ჯდება უკეთ.",
      "როგორ უნდა დალაგდეს საგადასახადო ლოგიკა, banking და compliance.",
      "ეკუთვნის თუ არა პროექტი ყაზახეთს, საქართველოს თუ ჯერ ორივეს შედარებას მოითხოვს.",
      "რა არის შემდეგი ნაბიჯი: routing, structuring თუ პირდაპირ local execution.",
    ],
    timingLabel: "რატომ არის დრო მნიშვნელოვანი",
    timingTitle: "თუ routing გადაწყვეტილება გვიან მიიღება, თითქმის ყოველთვის ჩნდება ზედმეტი გადაკეთება.",
    timingBody: "თუ market entry იწყება შესრულებით მანამდე, სანამ მარშრუტი სწორად არის აწყობილი, შედეგი ხშირად არის setup-ის დუბლირება, სუსტი დოკუმენტური ნაკადი და უფრო ნელი გასვლა რეალურ ოპერაციულ მოდელზე.",
    comparisonLabel: "ბაზრის მიმართულება",
    comparisonTitle: "ყაზახეთი და საქართველო სხვადასხვა შესვლის პრობლემას წყვეტენ.",
    kzTitle: "ყაზახეთი",
    kzBody: "ყაზახეთი უფრო სწორია მაშინ, როცა პროექტი დამოკიდებულია ადგილობრივ ოპერაციებზე, ადგილობრივ კონტრაგენტებზე, ბუღალტერიასა და საგადასახადო შესრულებაზე.",
    geTitle: "საქართველო",
    geBody: "საქართველო უფრო სწორია მაშინ, როცა კლიენტს სჭირდება უფრო მოქნილი სტრუქტურირება, investor-facing ლოგიკა, FIZ გზები ან English-first setup განხილვა ადგილობრივ დეტალებამდე.",
    faqLabel: "FAQ",
    faqTitle: "კითხვები, რომლებსაც ეს გვერდი უნდა პასუხობდეს routing-მდე.",
    faqItems: [
      { question: "რას მოიცავს international market entry საწყის ეტაპზე?", answer: "ის მოიცავს პირველ გადაწყვეტილებებს იურისდიქციაზე, სტრუქტურაზე, საგადასახადო ლოგიკაზე, საბანკო თანმიმდევრობაზე და გაშვების მოდელზე." },
      { question: "როდის უნდა დაიწყოს კლიენტმა ჰაბიდან და არა პირდაპირ country site-დან?", answer: "როცა ბაზრის მარშრუტი ჯერ კიდევ ფორმირების პროცესშია და უკვე ფიქსირებული არ არის." },
      { question: "როდის შეიძლება პირდაპირ local execution-ზე გადასვლა?", answer: "როცა მარშრუტი, იურისდიქცია და პირველი შესრულების ნაბიჯი უკვე გასაგებია." },
    ],
  },
  de: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "Internationaler Markteintritt",
    description: "Nutzen Sie InterLex, um den internationalen Markteintritt zu rahmen, bevor die lokale Umsetzung in Kasachstan oder Georgien beginnt.",
    keywords: ["internationaler Markteintritt", "Markteintrittsberatung", "Kasachstan", "Georgien", "InterLex"],
    eyebrow: "International Market Entry",
    heroTitle: "Markteintritt beginnt vor der Registrierung, nicht nach ihr.",
    heroBody: "Der Kunde kommt oft schon mit einem Land im Kopf, aber nicht immer mit einem klaren Weg. InterLex hilft, eine frühe Markteintrittsidee in eine praktikable Route zwischen Jurisdiktion, Struktur, Steuerlogik und Startsequenz zu übersetzen.",
    primaryCta: "Kontakt Öffnen",
    secondaryCta: "Grenzüberschreitende Strukturierung Öffnen",
    overviewLabel: "Eintrittslogik",
    overviewTitle: "Die erste Markteintrittsentscheidung ist, ob der Weg schon klar ist.",
    overviewBody: "Wenn Jurisdiktion und Umsetzungsweg bereits feststehen, sollte der Kunde direkt zur Länderseite gehen. Wenn der Weg noch geformt wird, sollte der globale Hub das erste Gespräch tragen.",
    decisionLabel: "Was Entschieden Werden Muss",
    decisionTitle: "Internationaler Markteintritt hängt oft von fünf frühen Entscheidungen ab.",
    decisionItems: [
      "Welche Jurisdiktion die erste Phase tragen soll.",
      "Welche rechtliche und operative Struktur besser zum Mandat passt.",
      "Wie Steuerlogik, Banking und Compliance zu sequenzieren sind.",
      "Ob das Projekt zu Kasachstan, Georgien oder zu einem Vergleich zwischen beiden gehört.",
      "Was der nächste Schritt sein soll: Routing, Structuring oder direkte lokale Umsetzung.",
    ],
    timingLabel: "Warum Timing Zählt",
    timingTitle: "Wenn die Routing-Entscheidung zu spät kommt, entsteht fast immer vermeidbare Neustartarbeit.",
    timingBody: "Wenn der Markteintritt mit Umsetzung beginnt, bevor der Weg sauber gerahmt ist, sind doppeltes Setup, schwacher Dokumentenfluss und ein langsamerer Weg in das reale Betriebsmodell fast unvermeidbar.",
    comparisonLabel: "Marktrichtung",
    comparisonTitle: "Kasachstan und Georgien lösen unterschiedliche Eintrittsprobleme.",
    kzTitle: "Kasachstan",
    kzBody: "Kasachstan ist meist der richtige Weg, wenn das Projekt von lokalen Operationen, Gegenparteien, Buchhaltung, Steuerumsetzung und einer Präsenz vor Ort abhängt.",
    geTitle: "Georgien",
    geBody: "Georgien ist meist der richtige Weg, wenn der Kunde ein flexibleres Strukturierungsumfeld, investor-facing Logik, FIZ-Wege oder eine English-first Setup-Diskussion braucht.",
    faqLabel: "FAQ",
    faqTitle: "Fragen, die diese Seite vor dem Handoff beantworten sollte.",
    faqItems: [
      { question: "Was umfasst internationaler Markteintritt am Anfang?", answer: "Er umfasst erste Entscheidungen zu Jurisdiktion, Struktur, Steuerlogik, Banksequenz und Startmodell." },
      { question: "Wann sollte der Kunde vom Hub statt von einer Länderseite starten?", answer: "Wenn die Marktroute noch definiert wird und nicht bereits feststeht." },
      { question: "Wann kann der Kunde direkt in die lokale Umsetzung gehen?", answer: "Wenn Route, Jurisdiktion und der erste Umsetzungsschritt bereits klar sind." },
    ],
  },
  ar: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "دخول الأسواق الدولية",
    description: "استخدم InterLex لتأطير international market entry قبل بدء التنفيذ المحلي في كازاخستان أو جورجيا.",
    keywords: ["دخول الأسواق الدولية", "استشارات دخول السوق", "كازاخستان", "جورجيا", "InterLex"],
    eyebrow: "International Market Entry",
    heroTitle: "دخول السوق يبدأ قبل التسجيل وليس بعده.",
    heroBody: "يصل العميل غالباً وهو يفكر في دولة معينة، لكن ليس دائماً مع مسار واضح. تساعد InterLex على تحويل فكرة market entry المبكرة إلى طريق عملي بين الولاية القضائية والبنية والمنطق الضريبي وتسلسل الإطلاق.",
    primaryCta: "افتح صفحة الاتصال",
    secondaryCta: "افتح صفحة الهيكلة العابرة للحدود",
    overviewLabel: "منطق الدخول",
    overviewTitle: "أول قرار في دخول السوق هو ما إذا كان المسار واضحاً بالفعل أم لا.",
    overviewBody: "إذا كانت الولاية القضائية ومسار التنفيذ محددين بالفعل، فيجب أن ينتقل العميل مباشرة إلى موقع الدولة. وإذا كان المسار لا يزال في طور التشكيل، فيجب أن يتولى المركز العالمي المحادثة الأولى.",
    decisionLabel: "ما الذي يجب حسمه",
    decisionTitle: "يعتمد international market entry غالباً على خمسة قرارات مبكرة.",
    decisionItems: [
      "أي ولاية قضائية يجب أن تحمل المرحلة الأولى.",
      "أي بنية قانونية وتشغيلية تناسب العميل أكثر.",
      "كيف يجب ترتيب المنطق الضريبي والبنوك والامتثال.",
      "هل ينتمي المشروع إلى كازاخستان أو جورجيا أو إلى مقارنة بينهما.",
      "ما الخطوة التالية: routing أم structuring أم تنفيذ محلي مباشر.",
    ],
    timingLabel: "لماذا التوقيت مهم",
    timingTitle: "عندما يأتي قرار routing متأخراً، تظهر عادة إعادة تشغيل يمكن تجنبها.",
    timingBody: "إذا بدأ market entry بالتنفيذ قبل أن يُصاغ المسار بشكل صحيح، فالنتيجة عادة هي setup مكرر وتدفق وثائقي ضعيف وطريق أبطأ إلى النموذج التشغيلي الحقيقي.",
    comparisonLabel: "اتجاه السوق",
    comparisonTitle: "كازاخستان وجورجيا لا تحلان نفس مشكلة الدخول.",
    kzTitle: "كازاخستان",
    kzBody: "تكون كازاخستان هي الطريق الأصح عندما يعتمد المشروع على العمليات المحلية، والجهات المقابلة المحلية، والمحاسبة، والتنفيذ الضريبي، وحضور يجب أن يعمل فوراً على الأرض.",
    geTitle: "جورجيا",
    geBody: "تكون جورجيا هي الطريق الأصح عندما يحتاج العميل إلى بيئة أكثر مرونة للهيكلة، أو منطق موجه للمستثمرين، أو مسارات FIZ، أو نقاش setup باللغة الإنجليزية قبل التفاصيل المحلية.",
    faqLabel: "FAQ",
    faqTitle: "أسئلة يجب أن تجيب عنها هذه الصفحة قبل تحويل الطلب.",
    faqItems: [
      { question: "ماذا يشمل international market entry في البداية؟", answer: "يشمل القرارات الأولى حول الولاية القضائية والبنية والمنطق الضريبي وتسلسل البنوك ونموذج الإطلاق." },
      { question: "متى يجب أن يبدأ العميل من المركز العالمي بدلاً من موقع الدولة؟", answer: "عندما يكون مسار السوق ما زال قيد التعريف وليس مثبتاً بالفعل." },
      { question: "متى يمكن الانتقال مباشرة إلى التنفيذ المحلي؟", answer: "عندما تكون route والولاية القضائية وأول خطوة تنفيذ واضحة بالفعل." },
    ],
  },
  tr: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "Uluslararası Pazara Giriş",
    description: "Kazakistan veya Gürcistan'da yerel execution başlamadan önce international market entry çerçevesini InterLex ile netleştirin.",
    keywords: ["uluslararası pazara giriş", "market entry advisory", "Kazakistan", "Gürcistan", "InterLex"],
    eyebrow: "International Market Entry",
    heroTitle: "Pazara giriş kayıt sonrası değil, kayıt öncesi başlar.",
    heroBody: "Müşteri çoğu zaman aklında bir ülkeyle gelir, ama her zaman net bir rotayla gelmez. InterLex erken market-entry fikrini; yargı alanı, yapı, vergi mantığı ve launch sıralaması arasında çalışabilir bir rotaya çevirir.",
    primaryCta: "İletişimi Aç",
    secondaryCta: "Sınır Ötesi Yapılandırmayı Aç",
    overviewLabel: "Giriş Mantığı",
    overviewTitle: "İlk karar, rotanın zaten net olup olmadığını anlamaktır.",
    overviewBody: "Yargı alanı ve execution yolu zaten belliyse müşteri doğrudan ülke sitesine geçmelidir. Rota hâlâ şekilleniyorsa ilk konuşmayı global hub taşımalıdır.",
    decisionLabel: "Neye Karar Verilmeli",
    decisionTitle: "Uluslararası pazara giriş çoğu zaman beş erken karara bağlıdır.",
    decisionItems: [
      "İlk fazı hangi yargı alanının taşıyacağı.",
      "Hangi hukuki ve operasyonel yapının daha uygun olduğu.",
      "Vergi mantığı, banking ve compliance'ın nasıl sıralanacağı.",
      "Projenin Kazakistan'a mı, Gürcistan'a mı, yoksa ikisinin karşılaştırmasına mı ait olduğu.",
      "Bir sonraki adımın routing mi, structuring mi yoksa doğrudan local execution mı olduğu.",
    ],
    timingLabel: "Neden Zamanlama Önemli",
    timingTitle: "Routing kararı geç verilirse neredeyse her zaman kaçınılabilir yeniden başlatma işi doğar.",
    timingBody: "Market entry, rota doğru kurulmadan execution ile başlarsa sonuç genelde tekrar setup, zayıf belge akışı ve gerçek operasyon modeline daha yavaş geçiş olur.",
    comparisonLabel: "Pazar Yönü",
    comparisonTitle: "Kazakistan ve Gürcistan farklı giriş problemlerini çözer.",
    kzTitle: "Kazakistan",
    kzBody: "Kazakistan; proje yerel operasyonlara, yerel counterparties'e, muhasebeye, vergi execution'a ve sahada hemen çalışması gereken bir varlığa bağlıysa daha doğru rotadır.",
    geTitle: "Gürcistan",
    geBody: "Gürcistan; müşteri daha esnek bir yapılandırma ortamına, investor-facing mantığa, FIZ yollarına veya derin yerel detaydan önce English-first bir setup tartışmasına ihtiyaç duyuyorsa daha doğru rotadır.",
    faqLabel: "FAQ",
    faqTitle: "Bu sayfanın handoff öncesi yanıtlaması gereken sorular.",
    faqItems: [
      { question: "International market entry başlangıçta neyi kapsar?", answer: "Başlangıçta yargı alanı, yapı, vergi mantığı, bankacılık sıralaması ve launch modeli hakkındaki ilk kararları kapsar." },
      { question: "Müşteri ne zaman ülke sitesi yerine hub'dan başlamalı?", answer: "Pazar rotası hâlâ tanımlanıyorsa ve önceden sabitlenmemişse." },
      { question: "Ne zaman doğrudan local execution'a geçilebilir?", answer: "Rota, yargı alanı ve ilk execution adımı zaten netse." },
    ],
  },
  es: {
    kind: "market-entry",
    slug: "international-market-entry",
    title: "Entrada Internacional Al Mercado",
    description: "Use InterLex para encuadrar el international market entry antes de que empiece la ejecución local en Kazajistán o Georgia.",
    keywords: ["entrada internacional al mercado", "market entry advisory", "Kazajistán", "Georgia", "InterLex"],
    eyebrow: "International Market Entry",
    heroTitle: "La entrada al mercado empieza antes del registro, no después.",
    heroBody: "El cliente suele llegar con un país en mente, pero no siempre con una ruta clara. InterLex ayuda a convertir una idea temprana de market entry en un camino práctico entre jurisdicción, estructura, lógica fiscal y secuencia de lanzamiento.",
    primaryCta: "Abrir Contacto",
    secondaryCta: "Abrir Estructuración Cross-border",
    overviewLabel: "Lógica De Entrada",
    overviewTitle: "La primera decisión es entender si la ruta ya está clara o no.",
    overviewBody: "Si la jurisdicción y el camino de ejecución ya están fijados, el cliente debe pasar directamente al sitio país. Si la ruta aún se está definiendo, el hub global debe asumir la primera conversación.",
    decisionLabel: "Qué Debe Decidirse",
    decisionTitle: "La entrada internacional al mercado suele depender de cinco decisiones tempranas.",
    decisionItems: [
      "Qué jurisdicción debe asumir la primera fase.",
      "Qué estructura legal y operativa encaja mejor con el cliente.",
      "Cómo deben secuenciarse fiscalidad, banking y compliance.",
      "Si el proyecto pertenece a Kazajistán, a Georgia o a una comparación entre ambos.",
      "Cuál debe ser el siguiente paso: routing, structuring o ejecución local directa.",
    ],
    timingLabel: "Por Qué El Momento Importa",
    timingTitle: "Cuando la decisión de routing llega tarde, casi siempre aparece trabajo de reinicio evitable.",
    timingBody: "Si el market entry empieza por implementación antes de que la ruta quede bien encuadrada, el resultado suele ser setup duplicado, flujo documental débil y un acceso más lento al modelo operativo real.",
    comparisonLabel: "Dirección Del Mercado",
    comparisonTitle: "Kazajistán y Georgia resuelven problemas de entrada distintos.",
    kzTitle: "Kazajistán",
    kzBody: "Kazajistán suele ser la ruta correcta cuando el proyecto depende de operaciones locales, contrapartes locales, contabilidad, ejecución fiscal y presencia que debe funcionar de inmediato sobre el terreno.",
    geTitle: "Georgia",
    geBody: "Georgia suele ser la ruta correcta cuando el cliente necesita un entorno más flexible de estructuración, lógica investor-facing, rutas FIZ o una discusión setup en inglés antes del detalle local.",
    faqLabel: "FAQ",
    faqTitle: "Preguntas que esta página debe responder antes del handoff.",
    faqItems: [
      { question: "¿Qué incluye el international market entry al principio?", answer: "Incluye las primeras decisiones sobre jurisdicción, estructura, lógica fiscal, secuencia bancaria y modelo de lanzamiento." },
      { question: "¿Cuándo debe empezar el cliente por el hub en vez del sitio país?", answer: "Cuando la ruta de mercado todavía se está definiendo y no está ya fijada." },
      { question: "¿Cuándo puede ir directamente a ejecución local?", answer: "Cuando la ruta, la jurisdicción y el primer paso de ejecución ya están claros." },
    ],
  },
};

export function getKazakhstanVsGeorgiaContent(locale: Locale) {
  return kazakhstanVsGeorgiaContent[locale];
}

export function getCrossBorderStructuringContent(locale: Locale) {
  return crossBorderStructuringContent[locale];
}

export function getInternationalMarketEntryContent(locale: Locale) {
  return internationalMarketEntryContent[locale];
}

export function getSeoGuideCards(locale: Locale): SeoGuideCard[] {
  const comparison = getKazakhstanVsGeorgiaContent(locale);
  const structuring = getCrossBorderStructuringContent(locale);
  const marketEntry = getInternationalMarketEntryContent(locale);
  const hubCards = ["kz/sez", "ge/vz", "ma", "investors", "ma/dd"]
    .map((slug) => getHubSeoPage(locale, slug))
    .filter((page): page is HubSeoPageContent => page !== null)
    .map((page) => {
      const override =
        locale === "ru"
          ? ruHubGuideCardOverrides[page.slug]
          : hubGuideCardOverrides[locale]?.[page.slug];

      return {
        slug: page.slug,
        eyebrow: override?.eyebrow ?? page.eyebrow,
        title: override?.title ?? normalizeGuideCardTitle(page.title),
        body: override?.body ?? page.description,
      };
    });

  return [
    {
      slug: comparison.slug,
      eyebrow: comparison.eyebrow,
      title: comparison.heroTitle,
      body: comparison.overviewBody,
    },
    {
      slug: structuring.slug,
      eyebrow: structuring.eyebrow,
      title: structuring.heroTitle,
      body: structuring.overviewBody,
    },
    {
      slug: marketEntry.slug,
      eyebrow: marketEntry.eyebrow,
      title: marketEntry.heroTitle,
      body: marketEntry.overviewBody,
    },
    ...hubCards,
  ];
}
