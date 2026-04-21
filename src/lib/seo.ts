import type { Locale } from "@/lib/i18n";

type SeoPageMeta = {
  description: string;
  keywords: string[];
};

type SeoContent = {
  home: SeoPageMeta & {
    searchLabel: string;
    searchTitle: string;
    searchIntro: string;
    searchCards: { title: string; body: string }[];
    faqLabel: string;
    faqTitle: string;
    faqItems: { question: string; answer: string }[];
  };
  about: SeoPageMeta;
  crossBorder: SeoPageMeta;
  contact: SeoPageMeta;
};

const seoContent: Record<Locale, SeoContent> = {
  en: {
    home: {
      description:
        "InterLex global hub for cross-border legal advisory, company registration, tax positioning, market entry, and business setup in Kazakhstan and Georgia.",
      keywords: [
        "InterLex",
        "cross-border legal advisory",
        "company registration Kazakhstan",
        "business setup Georgia",
        "tax advisory Kazakhstan",
        "FIZ Georgia",
        "market entry Kazakhstan",
        "international business structuring",
      ],
      searchLabel: "Search Intent",
      searchTitle: "Topics the hub should rank for before the mandate moves to a market site.",
      searchIntro:
        "The global hub should capture intent around cross-border legal advisory, market entry, business structuring, and company setup before routing the client into the correct jurisdiction-specific site.",
      searchCards: [
        {
          title: "Company registration in Kazakhstan",
          body: "Support for market entry, legal setup, tax positioning, accounting coordination, and operating launch in Kazakhstan.",
        },
        {
          title: "Business setup in Georgia",
          body: "Guidance on Georgia company formation, FIZ pathways, operating structures, tax models, and investor-friendly setup routes.",
        },
        {
          title: "Cross-border legal and tax advisory",
          body: "Mandates that need jurisdiction comparison, holding logic, group structuring, and business continuity across multiple countries.",
        },
        {
          title: "International founders and investors",
          body: "A first step for founders, holding companies, HNW clients, and investor teams comparing Kazakhstan and Georgia as entry points.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "High-intent questions this hub should answer clearly.",
      faqItems: [
        {
          question: "What is interlex.work used for?",
          answer:
            "interlex.work is the multilingual global hub of InterLex. It introduces the brand, explains cross-border positioning, and routes the mandate into the correct market-specific site.",
        },
        {
          question: "When should a client use interlex.kz?",
          answer:
            "A client should use interlex.kz when the work belongs to Kazakhstan, especially for company registration, legal support, tax positioning, accounting, and local operational execution.",
        },
        {
          question: "When should a client use interlex.ge?",
          answer:
            "A client should use interlex.ge when the work belongs to Georgia, especially for business setup, FIZ structures, tax planning, and English-first market guidance.",
        },
      ],
    },
    about: {
      description:
        "About InterLex: global brand hub for cross-border legal advisory, market entry strategy, business structuring, and routing into Kazakhstan and Georgia.",
      keywords: ["about InterLex", "global legal advisory", "market entry strategy", "Kazakhstan advisory", "Georgia advisory"],
    },
    crossBorder: {
      description:
        "Compare Kazakhstan and Georgia for company registration, tax positioning, business structuring, investor entry, and cross-border legal advisory.",
      keywords: ["Kazakhstan vs Georgia", "company setup comparison", "cross-border structuring", "tax positioning", "investor entry"],
    },
    contact: {
      description:
        "Contact InterLex for cross-border legal advisory, Kazakhstan market entry, Georgia business setup, and multilingual mandate routing.",
      keywords: ["contact InterLex", "cross-border legal contact", "Kazakhstan market entry", "Georgia business setup"],
    },
  },
  ru: {
    home: {
      description:
        "InterLex — глобальный хаб для cross-border legal advisory, регистрации компании, налогового позиционирования, выхода на рынок и business setup в Казахстане и Грузии.",
      keywords: ["InterLex", "регистрация компании Казахстан", "бизнес в Грузии", "cross-border legal advisory", "налоговое структурирование"],
      searchLabel: "SEO Темы",
      searchTitle: "Темы, по которым хаб должен ранжироваться до передачи мандата на market site.",
      searchIntro:
        "Глобальный хаб должен покрывать спрос вокруг cross-border legal advisory, market entry, business structuring и company setup, а затем переводить клиента в нужную юрисдикцию.",
      searchCards: [
        { title: "Регистрация компании в Казахстане", body: "Выход на рынок, legal setup, налоги, бухгалтерия и запуск операционной деятельности в Казахстане." },
        { title: "Business setup в Грузии", body: "Регистрация компании в Грузии, FIZ-маршруты, налоговые модели и investor-friendly setup." },
        { title: "Cross-border legal и tax advisory", body: "Сравнение юрисдикций, holding logic, групповое структурирование и continuity across countries." },
        { title: "Международные фаундеры и инвесторы", body: "Первая точка входа для фаундеров, инвесторов и холдингов, сравнивающих Казахстан и Грузию." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Вопросы с высоким поисковым намерением, на которые хаб должен отвечать прямо.",
      faqItems: [
        { question: "Для чего нужен interlex.work?", answer: "interlex.work — мультиязычный глобальный хаб InterLex. Он представляет бренд, объясняет cross-border позиционирование и переводит мандат на правильный market-specific сайт." },
        { question: "Когда использовать interlex.kz?", answer: "interlex.kz нужен, когда работа относится к Казахстану: регистрация компании, legal support, налоги, бухгалтерия и локальное операционное исполнение." },
        { question: "Когда использовать interlex.ge?", answer: "interlex.ge нужен, когда работа относится к Грузии: business setup, FIZ-структуры, налоговое планирование и англоязычная market guidance." },
      ],
    },
    about: {
      description:
        "О InterLex: глобальный бренд-хаб для cross-border legal advisory, стратегии выхода на рынок, business structuring и маршрутизации в Казахстан и Грузию.",
      keywords: ["о InterLex", "международный юридический консалтинг", "выход на рынок", "Казахстан", "Грузия"],
    },
    crossBorder: {
      description:
        "Сравнение Казахстана и Грузии для регистрации компании, налогового позиционирования, business structuring, investor entry и cross-border legal advisory.",
      keywords: ["Казахстан или Грузия", "сравнение юрисдикций", "структурирование бизнеса", "налоги", "вход инвестора"],
    },
    contact: {
      description:
        "Связаться с InterLex по вопросам cross-border legal advisory, выхода на рынок Казахстана, business setup в Грузии и мультиязычной маршрутизации мандата.",
      keywords: ["контакты InterLex", "юридический консалтинг", "Казахстан", "Грузия", "cross-border"],
    },
  },
  zh: {
    home: {
      description:
        "InterLex 全球枢纽，覆盖跨境法律顾问、公司注册、税务定位、市场进入以及哈萨克斯坦和格鲁吉亚的 business setup。",
      keywords: ["InterLex", "哈萨克斯坦公司注册", "格鲁吉亚设立公司", "跨境法律顾问", "税务结构"],
      searchLabel: "搜索主题",
      searchTitle: "在用户进入市场站点之前，枢纽应覆盖的搜索意图。",
      searchIntro: "全球枢纽应先覆盖跨境法律、市场进入、公司结构与设立等搜索需求，再把客户导向正确司法辖区。",
      searchCards: [
        { title: "哈萨克斯坦公司注册", body: "覆盖市场进入、法律设立、税务定位、会计协同与运营启动。" },
        { title: "格鲁吉亚 business setup", body: "覆盖公司设立、FIZ 路径、税务模型与面向投资者的架构。" },
        { title: "跨境法律与税务顾问", body: "适用于需要比较司法辖区、控股逻辑和跨国业务结构的项目。" },
        { title: "国际创始人与投资者", body: "为比较哈萨克斯坦与格鲁吉亚的创始人、家族办公室和投资团队提供入口。" },
      ],
      faqLabel: "FAQ",
      faqTitle: "枢纽应直接回答的高意图问题。",
      faqItems: [
        { question: "interlex.work 的作用是什么？", answer: "interlex.work 是 InterLex 的多语言全球枢纽，用于介绍品牌、解释跨境定位，并把项目导向正确市场站点。" },
        { question: "什么时候应该使用 interlex.kz？", answer: "当项目明确属于哈萨克斯坦，例如公司注册、法律支持、税务定位、会计与本地执行时，应使用 interlex.kz。" },
        { question: "什么时候应该使用 interlex.ge？", answer: "当项目明确属于格鲁吉亚，例如 business setup、FIZ 结构、税务规划与英语优先市场指导时，应使用 interlex.ge。" },
      ],
    },
    about: {
      description: "关于 InterLex：面向跨境法律顾问、市场进入、商业结构设计以及哈萨克斯坦和格鲁吉亚路由的全球品牌枢纽。",
      keywords: ["关于 InterLex", "全球法律顾问", "市场进入", "哈萨克斯坦", "格鲁吉亚"],
    },
    crossBorder: {
      description: "比较哈萨克斯坦与格鲁吉亚在公司注册、税务定位、业务结构设计、投资者进入和跨境法律顾问方面的差异。",
      keywords: ["哈萨克斯坦还是格鲁吉亚", "公司设立比较", "税务定位", "投资者进入", "跨境结构"],
    },
    contact: {
      description: "联系 InterLex，讨论跨境法律顾问、哈萨克斯坦市场进入、格鲁吉亚 business setup 与多语言项目路由。",
      keywords: ["联系 InterLex", "跨境法律顾问", "哈萨克斯坦市场进入", "格鲁吉亚 business setup"],
    },
  },
  it: {
    home: {
      description: "InterLex global hub per consulenza legale cross-border, registrazione società, posizionamento fiscale, market entry e business setup in Kazakistan e Georgia.",
      keywords: ["InterLex", "registrazione società Kazakistan", "business setup Georgia", "consulenza legale cross-border", "strutturazione fiscale"],
      searchLabel: "Temi SEO",
      searchTitle: "Argomenti per cui l’hub dovrebbe posizionarsi prima del passaggio al market site.",
      searchIntro: "Il global hub dovrebbe intercettare intenti legati a consulenza cross-border, ingresso nei mercati, strutturazione e setup societario.",
      searchCards: [
        { title: "Registrazione società in Kazakistan", body: "Ingresso nel mercato, legal setup, tax positioning, accounting e avvio operativo in Kazakistan." },
        { title: "Business setup in Georgia", body: "Formazione societaria in Georgia, percorsi FIZ, modelli fiscali e setup investor-friendly." },
        { title: "Consulenza legale e fiscale cross-border", body: "Confronto tra giurisdizioni, holding logic, group structuring e continuità operativa tra più paesi." },
        { title: "Founder e investitori internazionali", body: "Primo ingresso per founder, holding, family office e team che confrontano Kazakistan e Georgia." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Domande ad alta intenzione che l’hub dovrebbe chiarire subito.",
      faqItems: [
        { question: "A cosa serve interlex.work?", answer: "interlex.work è il global hub multilingue di InterLex. Presenta il brand, spiega il posizionamento cross-border e instrada il mandato verso il market site corretto." },
        { question: "Quando usare interlex.kz?", answer: "Quando il lavoro appartiene al Kazakistan, in particolare per registrazione società, supporto legale, tax positioning, accounting ed esecuzione locale." },
        { question: "Quando usare interlex.ge?", answer: "Quando il lavoro appartiene alla Georgia, in particolare per business setup, strutture FIZ, pianificazione fiscale e guida di mercato in inglese." },
      ],
    },
    about: {
      description: "Su InterLex: hub globale del brand per consulenza legale cross-border, strategie di market entry, business structuring e routing verso Kazakistan e Georgia.",
      keywords: ["InterLex", "consulenza legale globale", "market entry", "Kazakistan", "Georgia"],
    },
    crossBorder: {
      description: "Confronta Kazakistan e Georgia per registrazione società, posizionamento fiscale, business structuring, investor entry e consulenza legale cross-border.",
      keywords: ["Kazakistan o Georgia", "confronto giurisdizioni", "registrazione società", "fiscale", "investor entry"],
    },
    contact: {
      description: "Contatta InterLex per consulenza legale cross-border, ingresso nel mercato kazako, business setup in Georgia e routing multilingue del mandato.",
      keywords: ["contatto InterLex", "consulenza legale", "Kazakistan", "Georgia", "cross-border"],
    },
  },
  fr: {
    home: {
      description: "Hub mondial InterLex pour le conseil juridique cross-border, l’immatriculation de sociétés, le positionnement fiscal, l’entrée sur le marché et le business setup au Kazakhstan et en Géorgie.",
      keywords: ["InterLex", "création société Kazakhstan", "business setup Géorgie", "conseil juridique cross-border", "structuration fiscale"],
      searchLabel: "Thèmes SEO",
      searchTitle: "Les sujets sur lesquels le hub doit se positionner avant le transfert vers un market site.",
      searchIntro: "Le hub global doit capter les recherches liées au conseil cross-border, à l’entrée sur le marché, à la structuration et au setup d’entreprise.",
      searchCards: [
        { title: "Création de société au Kazakhstan", body: "Entrée sur le marché, legal setup, tax positioning, accounting et lancement opérationnel au Kazakhstan." },
        { title: "Business setup en Géorgie", body: "Création de société en Géorgie, parcours FIZ, modèles fiscaux et setup orienté investisseurs." },
        { title: "Conseil juridique et fiscal cross-border", body: "Comparaison de juridictions, logique de holding, structuration de groupe et continuité opérationnelle multi-pays." },
        { title: "Fondateurs et investisseurs internationaux", body: "Point d’entrée pour fondateurs, holdings, family offices et équipes qui comparent Kazakhstan et Géorgie." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Questions à forte intention auxquelles le hub doit répondre clairement.",
      faqItems: [
        { question: "À quoi sert interlex.work ?", answer: "interlex.work est le hub mondial multilingue d’InterLex. Il présente la marque, explique le positionnement cross-border et route le mandat vers le bon market site." },
        { question: "Quand utiliser interlex.kz ?", answer: "Lorsqu’un mandat relève du Kazakhstan, notamment pour création de société, support juridique, positionnement fiscal, comptabilité et exécution locale." },
        { question: "Quand utiliser interlex.ge ?", answer: "Lorsqu’un mandat relève de la Géorgie, notamment pour business setup, structures FIZ, planification fiscale et guidance de marché en anglais." },
      ],
    },
    about: {
      description: "À propos d’InterLex : hub global de marque pour le conseil juridique cross-border, la stratégie d’entrée sur le marché, la structuration business et le routing vers le Kazakhstan et la Géorgie.",
      keywords: ["InterLex", "conseil juridique global", "entrée sur le marché", "Kazakhstan", "Géorgie"],
    },
    crossBorder: {
      description: "Comparez le Kazakhstan et la Géorgie pour création de société, positionnement fiscal, business structuring, investor entry et conseil juridique cross-border.",
      keywords: ["Kazakhstan ou Géorgie", "comparaison juridictions", "création société", "fiscalité", "investisseur"],
    },
    contact: {
      description: "Contactez InterLex pour du conseil juridique cross-border, l’entrée sur le marché kazakh, le business setup en Géorgie et le routing multilingue du mandat.",
      keywords: ["contact InterLex", "conseil juridique", "Kazakhstan", "Géorgie", "cross-border"],
    },
  },
  ka: {
    home: {
      description: "InterLex-ის გლობალური ჰაბი cross-border legal advisory-სთვის, კომპანიის რეგისტრაციისთვის, საგადასახადო პოზიციონირებისთვის, market entry-სა და business setup-ისთვის ყაზახეთსა და საქართველოში.",
      keywords: ["InterLex", "კომპანიის რეგისტრაცია ყაზახეთში", "business setup საქართველოში", "cross-border legal advisory", "tax structuring"],
      searchLabel: "SEO თემები",
      searchTitle: "თემები, რომლებზეც ჰაბი უნდა ჩანდეს ძიებაში market site-ზე გადაყვანამდე.",
      searchIntro: "გლობალურმა ჰაბმა უნდა დაიჭიროს ძიების განზრახვა cross-border legal advisory, market entry, business structuring და company setup მიმართულებებზე.",
      searchCards: [
        { title: "კომპანიის რეგისტრაცია ყაზახეთში", body: "მოიცავს ბაზარზე შესვლას, legal setup-ს, tax positioning-ს, accounting-ს და ოპერაციულ დაწყებას." },
        { title: "Business setup საქართველოში", body: "მოიცავს კომპანიის შექმნას საქართველოში, FIZ გზებს, საგადასახადო მოდელებს და investor-friendly setup-ს." },
        { title: "Cross-border legal და tax advisory", body: "იურსდიქციების შედარება, holding logic, group structuring და მრავალქვეყნიანი continuity." },
        { title: "საერთაშორისო დამფუძნებლები და ინვესტორები", body: "შესასვლელი founders, holdings, family offices და investor teams-ისთვის, რომლებიც ადარებენ ყაზახეთსა და საქართველოს." },
      ],
      faqLabel: "FAQ",
      faqTitle: "მაღალი ძიებითი განზრახვის კითხვები, რომლებზეც ჰაბმა უნდა უპასუხოს.",
      faqItems: [
        { question: "რისთვის გამოიყენება interlex.work?", answer: "interlex.work არის InterLex-ის მრავალენოვანი გლობალური ჰაბი. ის წარმოადგენს ბრენდს, ხსნის cross-border პოზიციონირებას და მანდატს სწორ market site-ზე მიმართავს." },
        { question: "როდის უნდა გამოიყენოს კლიენტმა interlex.kz?", answer: "როცა საქმე ყაზახეთს ეკუთვნის, განსაკუთრებით კომპანიის რეგისტრაციის, legal support-ის, tax positioning-ის, accounting-ისა და ადგილობრივი execution-ისთვის." },
        { question: "როდის უნდა გამოიყენოს კლიენტმა interlex.ge?", answer: "როცა საქმე საქართველოს ეკუთვნის, განსაკუთრებით business setup-ის, FIZ სტრუქტურების, tax planning-ისა და English-first market guidance-ისთვის." },
      ],
    },
    about: {
      description: "InterLex-ის შესახებ: გლობალური ბრენდ-ჰაბი cross-border legal advisory-სთვის, market entry strategy-სთვის, business structuring-ისთვის და routing-ისთვის ყაზახეთსა და საქართველოში.",
      keywords: ["InterLex", "გლობალური იურიდიული კონსალტინგი", "market entry", "ყაზახეთი", "საქართველო"],
    },
    crossBorder: {
      description: "შეადარეთ ყაზახეთი და საქართველო კომპანიის რეგისტრაციის, საგადასახადო პოზიციონირების, business structuring-ის, investor entry-ისა და cross-border legal advisory-ისთვის.",
      keywords: ["ყაზახეთი თუ საქართველო", "იურისდიქციის შედარება", "კომპანიის რეგისტრაცია", "გადასახადები", "ინვესტორი"],
    },
    contact: {
      description: "დაუკავშირდით InterLex-ს cross-border legal advisory-ისთვის, ყაზახეთში market entry-სთვის, საქართველოში business setup-ისთვის და მრავალენოვანი routing-ისთვის.",
      keywords: ["InterLex კონტაქტი", "იურიდიული კონსალტინგი", "ყაზახეთი", "საქართველო", "cross-border"],
    },
  },
  de: {
    home: {
      description: "InterLex Global Hub für cross-border Rechtsberatung, Gesellschaftsgründung, steuerliche Positionierung, Markteintritt und Business Setup in Kasachstan und Georgien.",
      keywords: ["InterLex", "Gesellschaftsgründung Kasachstan", "Business Setup Georgien", "Cross-border Rechtsberatung", "Steuerstrukturierung"],
      searchLabel: "SEO Themen",
      searchTitle: "Themen, für die der Hub ranken sollte, bevor das Mandat auf eine Marktseite wechselt.",
      searchIntro: "Der globale Hub sollte Suchintentionen rund um cross-border Beratung, Markteintritt, Strukturierung und Gesellschaftsaufbau abdecken.",
      searchCards: [
        { title: "Gesellschaftsgründung in Kasachstan", body: "Markteintritt, Legal Setup, steuerliche Positionierung, Accounting und operativer Start in Kasachstan." },
        { title: "Business Setup in Georgien", body: "Gründung in Georgien, FIZ-Pfade, Steuerlogik und investor-friendly Setup-Modelle." },
        { title: "Cross-border Legal- und Tax-Advisory", body: "Vergleich von Jurisdiktionen, Holding-Logik, Konzernstrukturierung und Business Continuity über mehrere Länder." },
        { title: "Internationale Gründer und Investoren", body: "Erster Einstieg für Gründer, Holdings, Family Offices und Teams, die Kasachstan und Georgien vergleichen." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Suchstarke Fragen, die der Hub klar beantworten sollte.",
      faqItems: [
        { question: "Wofür dient interlex.work?", answer: "interlex.work ist der mehrsprachige globale Hub von InterLex. Er stellt die Marke vor, erklärt die cross-border Positionierung und routet das Mandat auf die richtige Marktseite." },
        { question: "Wann sollte interlex.kz genutzt werden?", answer: "Wenn das Mandat zu Kasachstan gehört, insbesondere für Gesellschaftsgründung, Rechtsberatung, steuerliche Positionierung, Accounting und lokale Umsetzung." },
        { question: "Wann sollte interlex.ge genutzt werden?", answer: "Wenn das Mandat zu Georgien gehört, insbesondere für Business Setup, FIZ-Strukturen, Steuerplanung und englischsprachige Marktführung." },
      ],
    },
    about: {
      description: "Über InterLex: globaler Marken-Hub für cross-border Rechtsberatung, Markteintrittsstrategie, Business Structuring und Routing nach Kasachstan und Georgien.",
      keywords: ["InterLex", "globale Rechtsberatung", "Markteintritt", "Kasachstan", "Georgien"],
    },
    crossBorder: {
      description: "Vergleichen Sie Kasachstan und Georgien für Gesellschaftsgründung, steuerliche Positionierung, Business Structuring, Investor Entry und cross-border Rechtsberatung.",
      keywords: ["Kasachstan oder Georgien", "Jurisdiktionsvergleich", "Gesellschaftsgründung", "Steuern", "Investor Entry"],
    },
    contact: {
      description: "Kontaktieren Sie InterLex für cross-border Rechtsberatung, Markteintritt in Kasachstan, Business Setup in Georgien und mehrsprachiges Mandatsrouting.",
      keywords: ["Kontakt InterLex", "Rechtsberatung", "Kasachstan", "Georgien", "cross-border"],
    },
  },
  ar: {
    home: {
      description: "المركز العالمي لـ InterLex للاستشارات القانونية عبر الحدود، وتسجيل الشركات، والتموضع الضريبي، والدخول إلى السوق، وbusiness setup في كازاخستان وجورجيا.",
      keywords: ["InterLex", "تسجيل شركة في كازاخستان", "تأسيس أعمال في جورجيا", "استشارات قانونية عبر الحدود", "هيكلة ضريبية"],
      searchLabel: "موضوعات SEO",
      searchTitle: "الموضوعات التي يجب أن يظهر فيها المركز قبل انتقال التكليف إلى موقع السوق.",
      searchIntro: "يجب أن يلتقط المركز العالمي نية البحث حول الاستشارات القانونية عبر الحدود، والدخول إلى السوق، وهيكلة الأعمال، وتأسيس الشركات.",
      searchCards: [
        { title: "تسجيل شركة في كازاخستان", body: "يشمل دخول السوق، والـ legal setup، والتموضع الضريبي، والمحاسبة، والانطلاق التشغيلي في كازاخستان." },
        { title: "Business setup في جورجيا", body: "يشمل تأسيس الشركات في جورجيا، ومسارات FIZ، والنماذج الضريبية، وهياكل صديقة للمستثمر." },
        { title: "استشارات قانونية وضريبية عبر الحدود", body: "لمشروعات تحتاج إلى مقارنة الولايات القضائية، ومنطق الهياكل القابضة، واستمرارية الأعمال عبر أكثر من بلد." },
        { title: "المؤسسون والمستثمرون الدوليون", body: "نقطة دخول للمؤسسين والهياكل القابضة والعائلات الاستثمارية والفرق التي تقارن بين كازاخستان وجورجيا." },
      ],
      faqLabel: "FAQ",
      faqTitle: "أسئلة ذات نية بحث عالية يجب أن يجيب عنها المركز بوضوح.",
      faqItems: [
        { question: "ما وظيفة interlex.work؟", answer: "interlex.work هو المركز العالمي متعدد اللغات لـ InterLex. يعرّف بالعلامة ويشرح التمركز عبر الحدود ويوجه التكليف إلى موقع السوق المناسب." },
        { question: "متى يجب استخدام interlex.kz؟", answer: "عندما يكون العمل متعلقاً بكازاخستان، وخصوصاً لتسجيل الشركات، والدعم القانوني، والتموضع الضريبي، والمحاسبة، والتنفيذ المحلي." },
        { question: "متى يجب استخدام interlex.ge؟", answer: "عندما يكون العمل متعلقاً بجورجيا، وخصوصاً لـ business setup، وهياكل FIZ، والتخطيط الضريبي، والإرشاد السوقي باللغة الإنجليزية." },
      ],
    },
    about: {
      description: "حول InterLex: مركز عالمي للعلامة من أجل الاستشارات القانونية عبر الحدود، واستراتيجية دخول السوق، وهيكلة الأعمال، والتوجيه إلى كازاخستان وجورجيا.",
      keywords: ["InterLex", "استشارات قانونية عالمية", "دخول السوق", "كازاخستان", "جورجيا"],
    },
    crossBorder: {
      description: "قارن بين كازاخستان وجورجيا من حيث تسجيل الشركات، والتموضع الضريبي، وهيكلة الأعمال، ودخول المستثمر، والاستشارات القانونية عبر الحدود.",
      keywords: ["كازاخستان أم جورجيا", "مقارنة الولايات القضائية", "تسجيل الشركات", "الضرائب", "دخول المستثمر"],
    },
    contact: {
      description: "تواصل مع InterLex بخصوص الاستشارات القانونية عبر الحدود، ودخول السوق في كازاخستان، وbusiness setup في جورجيا، والتوجيه متعدد اللغات.",
      keywords: ["اتصال InterLex", "استشارات قانونية", "كازاخستان", "جورجيا", "عبر الحدود"],
    },
  },
  tr: {
    home: {
      description: "InterLex global hub; sınır ötesi hukuk danışmanlığı, şirket kuruluşu, vergi konumlandırması, pazara giriş ve Kazakistan ile Gürcistan’da business setup için.",
      keywords: ["InterLex", "Kazakistan şirket kuruluşu", "Gürcistan business setup", "sınır ötesi hukuk danışmanlığı", "vergi yapılandırması"],
      searchLabel: "SEO Konuları",
      searchTitle: "Mandat market site’a taşınmadan önce hub’ın görünmesi gereken arama niyetleri.",
      searchIntro: "Global hub; sınır ötesi hukuk danışmanlığı, pazara giriş, iş yapılandırması ve şirket kuruluşu etrafındaki arama niyetini yakalamalıdır.",
      searchCards: [
        { title: "Kazakistan’da şirket kuruluşu", body: "Pazara giriş, legal setup, vergi konumlandırması, muhasebe ve operasyonel başlangıç konularını kapsar." },
        { title: "Gürcistan’da business setup", body: "Şirket kurulumu, FIZ yolları, vergi modelleri ve investor-friendly setup yapıları." },
        { title: "Sınır ötesi hukuk ve vergi danışmanlığı", body: "Yargı alanı karşılaştırması, holding logic, grup yapılandırması ve çok ülkeli iş sürekliliği." },
        { title: "Uluslararası kurucular ve yatırımcılar", body: "Kazakistan ve Gürcistan’ı karşılaştıran kurucular, holdingler ve yatırım ekipleri için ilk giriş noktası." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Hub’ın açık biçimde yanıtlaması gereken yüksek niyetli sorular.",
      faqItems: [
        { question: "interlex.work ne için kullanılır?", answer: "interlex.work, InterLex’in çok dilli global hub’ıdır. Markayı tanıtır, sınır ötesi konumlandırmayı açıklar ve mandatı doğru market site’a yönlendirir." },
        { question: "Ne zaman interlex.kz kullanılmalı?", answer: "İş Kazakistan’a ait olduğunda, özellikle şirket kuruluşu, hukuki destek, vergi konumlandırması, muhasebe ve yerel execution için interlex.kz kullanılmalıdır." },
        { question: "Ne zaman interlex.ge kullanılmalı?", answer: "İş Gürcistan’a ait olduğunda, özellikle business setup, FIZ yapıları, vergi planlaması ve English-first market guidance için interlex.ge kullanılmalıdır." },
      ],
    },
    about: {
      description: "InterLex hakkında: sınır ötesi hukuk danışmanlığı, pazara giriş stratejisi, iş yapılandırması ve Kazakistan ile Gürcistan’a routing için global marka hub’ı.",
      keywords: ["InterLex", "küresel hukuk danışmanlığı", "pazara giriş", "Kazakistan", "Gürcistan"],
    },
    crossBorder: {
      description: "Şirket kuruluşu, vergi konumlandırması, business structuring, investor entry ve sınır ötesi hukuk danışmanlığı için Kazakistan ile Gürcistan’ı karşılaştırın.",
      keywords: ["Kazakistan mı Gürcistan mı", "yargı alanı karşılaştırması", "şirket kuruluşu", "vergiler", "yatırımcı girişi"],
    },
    contact: {
      description: "Sınır ötesi hukuk danışmanlığı, Kazakistan pazar girişi, Gürcistan business setup ve çok dilli mandat routing için InterLex ile iletişime geçin.",
      keywords: ["InterLex iletişim", "hukuk danışmanlığı", "Kazakistan", "Gürcistan", "sınır ötesi"],
    },
  },
  es: {
    home: {
      description: "Hub global de InterLex para advisory legal cross-border, registro de empresas, posicionamiento fiscal, entrada de mercado y business setup en Kazajistán y Georgia.",
      keywords: ["InterLex", "registro de empresa Kazajistán", "business setup Georgia", "advisory legal cross-border", "estructuración fiscal"],
      searchLabel: "Temas SEO",
      searchTitle: "Temas por los que el hub debe posicionar antes de enviar el mandato al market site.",
      searchIntro: "El hub global debe captar intención de búsqueda sobre asesoría cross-border, entrada de mercado, estructuración empresarial y constitución de compañías.",
      searchCards: [
        { title: "Registro de empresa en Kazajistán", body: "Entrada de mercado, legal setup, posicionamiento fiscal, contabilidad y lanzamiento operativo en Kazajistán." },
        { title: "Business setup en Georgia", body: "Constitución en Georgia, rutas FIZ, modelos fiscales y estructuras investor-friendly." },
        { title: "Asesoría legal y fiscal cross-border", body: "Comparación de jurisdicciones, holding logic, estructuración de grupo y continuidad empresarial en varios países." },
        { title: "Founders e inversores internacionales", body: "Punto de entrada para founders, holdings, family offices y equipos que comparan Kazajistán y Georgia." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Preguntas de alta intención que el hub debe responder con claridad.",
      faqItems: [
        { question: "¿Para qué sirve interlex.work?", answer: "interlex.work es el hub global multilingüe de InterLex. Presenta la marca, explica el posicionamiento cross-border y dirige el mandato al market site correcto." },
        { question: "¿Cuándo usar interlex.kz?", answer: "Cuando el trabajo pertenece a Kazajistán, especialmente para registro de empresa, soporte legal, posicionamiento fiscal, contabilidad y ejecución local." },
        { question: "¿Cuándo usar interlex.ge?", answer: "Cuando el trabajo pertenece a Georgia, especialmente para business setup, estructuras FIZ, planificación fiscal y guidance de mercado en inglés." },
      ],
    },
    about: {
      description: "Sobre InterLex: hub global de marca para advisory legal cross-border, estrategia de entrada de mercado, business structuring y routing hacia Kazajistán y Georgia.",
      keywords: ["InterLex", "asesoría jurídica global", "entrada de mercado", "Kazajistán", "Georgia"],
    },
    crossBorder: {
      description: "Compare Kazajistán y Georgia para registro de empresas, posicionamiento fiscal, business structuring, investor entry y advisory legal cross-border.",
      keywords: ["Kazajistán o Georgia", "comparación de jurisdicciones", "registro de empresas", "fiscalidad", "entrada de inversor"],
    },
    contact: {
      description: "Contacte con InterLex para advisory legal cross-border, entrada al mercado de Kazajistán, business setup en Georgia y routing multilingüe del mandato.",
      keywords: ["contacto InterLex", "asesoría jurídica", "Kazajistán", "Georgia", "cross-border"],
    },
  },
};

export function getSeoContent(locale: Locale) {
  return seoContent[locale];
}

const baseUrl = "https://interlex.work";

export function getOrganizationJsonLd(locale: Locale) {
  const seo = seoContent[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InterLex",
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    sameAs: ["https://interlex.kz", "https://interlex.ge"],
    description: seo.home.description,
  };
}

export function getWebsiteJsonLd(locale: Locale) {
  const seo = seoContent[locale];
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InterLex",
    url: `${baseUrl}/${locale}`,
    inLanguage: locale,
    description: seo.home.description,
  };
}

export function getFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
