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
        "market entry advisory",
        "international structuring",
      ],
      searchLabel: "Search Intent",
      searchTitle: "Topics the hub should rank for before the mandate moves to a market site.",
      searchIntro:
        "The global hub should capture demand around cross-border legal support, business structuring, market entry, and company setup before routing the client into the right jurisdiction.",
      searchCards: [
        {
          title: "Company registration in Kazakhstan",
          body: "Support for legal setup, tax positioning, accounting coordination, and operational launch in Kazakhstan.",
        },
        {
          title: "Business setup in Georgia",
          body: "Guidance on company formation, FIZ routes, tax models, and investor-friendly operating structures in Georgia.",
        },
        {
          title: "Cross-border legal and tax advisory",
          body: "Mandates that require jurisdiction comparison, holding logic, group structuring, and continuity across multiple countries.",
        },
        {
          title: "International founders and investors",
          body: "A first entry point for founders, family offices, holding companies, and investor teams comparing Kazakhstan and Georgia.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "High-intent questions this hub should answer clearly.",
      faqItems: [
        {
          question: "What is interlex.work used for?",
          answer:
            "interlex.work is the multilingual global hub of InterLex. It introduces the brand, explains the cross-border logic, and routes each mandate to the correct market-specific site.",
        },
        {
          question: "When should a client use interlex.kz?",
          answer:
            "Use interlex.kz when the work belongs to Kazakhstan, especially for company registration, legal support, tax positioning, accounting, and local execution.",
        },
        {
          question: "When should a client use interlex.ge?",
          answer:
            "Use interlex.ge when the work belongs to Georgia, especially for company setup, FIZ structures, tax planning, and English-first market guidance.",
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
        "InterLex — международный хаб для регистрации компаний, выхода на рынок, структурирования бизнеса и юридического сопровождения проектов в Казахстане и Грузии.",
      keywords: [
        "InterLex",
        "регистрация компании в Казахстане",
        "открытие бизнеса в Грузии",
        "международное юридическое сопровождение",
        "налоговое структурирование",
      ],
      searchLabel: "Какие задачи мы решаем",
      searchTitle: "С чем к нам приходят до выбора конкретной юрисдикции.",
      searchIntro:
        "InterLex подключается, когда нужно определить правильную юрисдикцию, структуру входа на рынок, модель владения и рабочий маршрут проекта. Мы сопровождаем задачи, связанные с регистрацией компаний, международным структурированием, налоговой логикой, покупкой активов и запуском бизнеса в Казахстане и Грузии.",
      searchCards: [
        {
          title: "Регистрация компании в Казахстане",
          body: "Регистрация компании, локальные требования, налоги, бухгалтерия и подготовка к полноценному запуску в Казахстане.",
        },
        {
          title: "Запуск бизнеса в Грузии",
          body: "Регистрация компании в Грузии, маршруты FIZ, налоговые модели и понятная структура для международного бизнеса.",
        },
        {
          title: "Международное юридическое и налоговое сопровождение",
          body: "Сравнение юрисдикций, структура владения, налоговая логика и юридическая координация бизнеса в нескольких странах.",
        },
        {
          title: "Покупка актива в Казахстане или Грузии",
          body: "Скрининг цели, due diligence, структурирование сделки, переговорная поддержка и при необходимости взаимодействие с государством в рамках инвестиционного проекта.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "Коротко о том, как работает хаб.",
      faqItems: [
        {
          question: "Для чего нужен interlex.work?",
          answer:
            "interlex.work — это международный хаб InterLex. Здесь клиент может описать задачу, понять подходящий рынок и перейти в правильное направление работы.",
        },
        {
          question: "Когда использовать interlex.kz?",
          answer:
            "interlex.kz нужен, когда задача относится к Казахстану: регистрация компании, локальное юридическое сопровождение, налоги, бухгалтерия и операционная реализация.",
        },
        {
          question: "Когда использовать interlex.ge?",
          answer:
            "interlex.ge нужен, когда задача относится к Грузии: запуск бизнеса, структуры FIZ, налоговое планирование и сопровождение по грузинской юрисдикции.",
        },
        {
          question: "Можно ли обратиться в InterLex, если вы планируете купить актив в Казахстане или Грузии?",
          answer:
            "Да. InterLex сопровождает проекты по покупке компаний и активов: помогает со скринингом цели, due diligence, структурированием сделки, переговорами и, если это требуется проектом, с GR-взаимодействием.",
        },
      ],
    },
    about: {
      description:
        "О InterLex: международный хаб для регистрации компаний, структурирования бизнеса, выхода на рынок и сопровождения проектов в Казахстане и Грузии.",
      keywords: ["о InterLex", "международное юридическое сопровождение", "выход на рынок", "Казахстан", "Грузия"],
    },
    crossBorder: {
      description:
        "Сравните Казахстан и Грузию для регистрации компании, выхода на рынок, налоговой логики и выбора правильной структуры проекта.",
      keywords: ["Казахстан или Грузия", "сравнение юрисдикций", "структурирование бизнеса", "налоги", "регистрация компании"],
    },
    contact: {
      description:
        "Свяжитесь с InterLex по вопросам регистрации компании, выхода на рынок, международного структурирования и юридического сопровождения в Казахстане и Грузии.",
      keywords: ["контакты InterLex", "юридическое сопровождение", "Казахстан", "Грузия", "международный бизнес"],
    },
  },
  zh: {
    home: {
      description:
        "InterLex 是一个全球品牌入口，用于跨境法律咨询、公司注册、税务定位、市场进入以及在哈萨克斯坦和格鲁吉亚开展业务。",
      keywords: ["InterLex", "哈萨克斯坦公司注册", "格鲁吉亚设立公司", "跨境法律咨询", "税务架构"],
      searchLabel: "SEO 主题",
      searchTitle: "在客户进入具体市场站点之前，全球入口应先覆盖这些搜索意图。",
      searchIntro:
        "这个全球入口应先承接与跨境法律支持、市场进入、商业架构和公司设立相关的搜索需求，然后将客户导向合适的司法辖区。",
      searchCards: [
        {
          title: "哈萨克斯坦公司注册",
          body: "涵盖市场进入、法律架构、税务定位、会计协调和在哈萨克斯坦的落地启动。",
        },
        {
          title: "格鲁吉亚业务设立",
          body: "涵盖格鲁吉亚公司设立、FIZ 路径、税务模式以及对投资者友好的运营结构。",
        },
        {
          title: "跨境法律与税务咨询",
          body: "适用于需要比较司法辖区、设计控股逻辑、集团架构和多国持续运营方案的项目。",
        },
        {
          title: "国际创始人与投资者",
          body: "为比较哈萨克斯坦和格鲁吉亚的创始人、控股公司、家族办公室和投资团队提供第一入口。",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "这个入口站点应清晰回答的高意图问题。",
      faqItems: [
        {
          question: "interlex.work 的用途是什么？",
          answer:
            "interlex.work 是 InterLex 的多语言全球入口。它介绍品牌、说明跨境业务逻辑，并将每个需求导向正确的市场站点。",
        },
        {
          question: "什么时候应该使用 interlex.kz？",
          answer:
            "当项目属于哈萨克斯坦时，应使用 interlex.kz，尤其是公司注册、法律支持、税务定位、会计和本地执行类需求。",
        },
        {
          question: "什么时候应该使用 interlex.ge？",
          answer:
            "当项目属于格鲁吉亚时，应使用 interlex.ge，尤其是业务设立、FIZ 结构、税务规划和英文优先的市场导航。",
        },
      ],
    },
    about: {
      description:
        "关于 InterLex：一个面向跨境法律咨询、市场进入策略、商业架构设计以及通往哈萨克斯坦和格鲁吉亚业务入口的全球品牌枢纽。",
      keywords: ["关于 InterLex", "全球法律咨询", "市场进入策略", "哈萨克斯坦", "格鲁吉亚"],
    },
    crossBorder: {
      description:
        "比较哈萨克斯坦与格鲁吉亚在公司注册、税务定位、商业架构、投资者进入和跨境法律咨询方面的差异。",
      keywords: ["哈萨克斯坦还是格鲁吉亚", "司法辖区比较", "公司设立", "税务规划", "投资者进入"],
    },
    contact: {
      description:
        "联系 InterLex，咨询跨境法律事务、哈萨克斯坦市场进入、格鲁吉亚业务设立以及多语言需求分流。",
      keywords: ["联系 InterLex", "跨境法律咨询", "哈萨克斯坦", "格鲁吉亚", "国际业务"],
    },
  },
  it: {
    home: {
      description:
        "InterLex è l'hub globale per advisory legale cross-border, costituzione di società, posizionamento fiscale, market entry e business setup in Kazakistan e Georgia.",
      keywords: ["InterLex", "costituzione società Kazakistan", "business setup Georgia", "consulenza legale cross-border", "strutturazione fiscale"],
      searchLabel: "Temi SEO",
      searchTitle: "Temi per cui l'hub deve posizionarsi prima che il mandato passi al market site.",
      searchIntro:
        "L'hub globale deve intercettare la domanda su consulenza legale cross-border, ingresso nel mercato, strutturazione del business e costituzione societaria prima di indirizzare il cliente verso la giurisdizione corretta.",
      searchCards: [
        {
          title: "Costituzione di società in Kazakistan",
          body: "Supporto per market entry, assetto legale, posizionamento fiscale, coordinamento contabile e avvio operativo in Kazakistan.",
        },
        {
          title: "Business setup in Georgia",
          body: "Guida su costituzione societaria, percorsi FIZ, modelli fiscali e strutture operative favorevoli agli investitori in Georgia.",
        },
        {
          title: "Advisory legale e fiscale cross-border",
          body: "Mandati che richiedono confronto tra giurisdizioni, logica holding, strutturazione di gruppo e continuità operativa in più Paesi.",
        },
        {
          title: "Founder e investitori internazionali",
          body: "Primo punto di ingresso per founder, family office, holding e team di investimento che confrontano Kazakistan e Georgia.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "Domande ad alta intenzione a cui l'hub deve rispondere con chiarezza.",
      faqItems: [
        {
          question: "A cosa serve interlex.work?",
          answer:
            "interlex.work è l'hub globale multilingue di InterLex. Presenta il brand, spiega la logica cross-border e instrada ogni mandato verso il market site corretto.",
        },
        {
          question: "Quando usare interlex.kz?",
          answer:
            "Usa interlex.kz quando il lavoro riguarda il Kazakistan, soprattutto per costituzione societaria, supporto legale, posizionamento fiscale, contabilità ed execution locale.",
        },
        {
          question: "Quando usare interlex.ge?",
          answer:
            "Usa interlex.ge quando il lavoro riguarda la Georgia, soprattutto per business setup, strutture FIZ, pianificazione fiscale e market guidance in inglese.",
        },
      ],
    },
    about: {
      description:
        "InterLex: hub globale del brand per advisory legale cross-border, strategia di ingresso nel mercato, strutturazione del business e instradamento verso Kazakistan e Georgia.",
      keywords: ["InterLex", "consulenza legale globale", "ingresso nel mercato", "Kazakistan", "Georgia"],
    },
    crossBorder: {
      description:
        "Confronta Kazakistan e Georgia per costituzione societaria, posizionamento fiscale, business structuring, investor entry e advisory legale cross-border.",
      keywords: ["Kazakistan o Georgia", "confronto tra giurisdizioni", "costituzione società", "fiscalità", "ingresso investitore"],
    },
    contact: {
      description:
        "Contatta InterLex per advisory legale cross-border, ingresso nel mercato kazako, business setup in Georgia e routing multilingue del mandato.",
      keywords: ["contatto InterLex", "consulenza legale", "Kazakistan", "Georgia", "cross-border"],
    },
  },
  fr: {
    home: {
      description:
        "InterLex est le hub global pour le conseil juridique cross-border, l'immatriculation d'entreprises, le positionnement fiscal, l'entrée sur le marché et le business setup au Kazakhstan et en Géorgie.",
      keywords: ["InterLex", "création de société Kazakhstan", "business setup Géorgie", "conseil juridique cross-border", "structuration fiscale"],
      searchLabel: "Thèmes SEO",
      searchTitle: "Les sujets sur lesquels le hub doit se positionner avant que le mandat passe vers un site marché.",
      searchIntro:
        "Le hub global doit capter la demande autour du conseil juridique cross-border, de l'entrée sur le marché, de la structuration d'entreprise et de la création de société avant d'orienter le client vers la bonne juridiction.",
      searchCards: [
        {
          title: "Création de société au Kazakhstan",
          body: "Accompagnement pour l'entrée sur le marché, la structuration juridique, le positionnement fiscal, la coordination comptable et le lancement opérationnel au Kazakhstan.",
        },
        {
          title: "Business setup en Géorgie",
          body: "Conseil sur la création d'entreprise, les routes FIZ, les modèles fiscaux et les structures opérationnelles favorables aux investisseurs en Géorgie.",
        },
        {
          title: "Conseil juridique et fiscal cross-border",
          body: "Mandats nécessitant une comparaison de juridictions, une logique holding, une structuration de groupe et une continuité d'activité sur plusieurs pays.",
        },
        {
          title: "Fondateurs et investisseurs internationaux",
          body: "Point d'entrée pour les fondateurs, family offices, holdings et équipes d'investissement comparant le Kazakhstan et la Géorgie.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "Questions à forte intention auxquelles le hub doit répondre clairement.",
      faqItems: [
        {
          question: "À quoi sert interlex.work ?",
          answer:
            "interlex.work est le hub global multilingue d'InterLex. Il présente la marque, explique la logique cross-border et oriente chaque mandat vers le site marché approprié.",
        },
        {
          question: "Quand utiliser interlex.kz ?",
          answer:
            "Utilisez interlex.kz lorsque le travail concerne le Kazakhstan, notamment pour la création de société, le support juridique, le positionnement fiscal, la comptabilité et l'exécution locale.",
        },
        {
          question: "Quand utiliser interlex.ge ?",
          answer:
            "Utilisez interlex.ge lorsque le travail concerne la Géorgie, notamment pour le business setup, les structures FIZ, la planification fiscale et la guidance marché en anglais.",
        },
      ],
    },
    about: {
      description:
        "À propos d'InterLex : hub global de marque pour le conseil juridique cross-border, la stratégie d'entrée sur le marché, la structuration d'entreprise et l'orientation vers le Kazakhstan et la Géorgie.",
      keywords: ["InterLex", "conseil juridique international", "entrée sur le marché", "Kazakhstan", "Géorgie"],
    },
    crossBorder: {
      description:
        "Comparez le Kazakhstan et la Géorgie pour la création de société, le positionnement fiscal, la structuration d'entreprise, l'entrée d'investisseur et le conseil juridique cross-border.",
      keywords: ["Kazakhstan ou Géorgie", "comparaison de juridictions", "création de société", "fiscalité", "entrée investisseur"],
    },
    contact: {
      description:
        "Contactez InterLex pour le conseil juridique cross-border, l'entrée sur le marché kazakh, le business setup en Géorgie et le routage multilingue des mandats.",
      keywords: ["contact InterLex", "conseil juridique", "Kazakhstan", "Géorgie", "cross-border"],
    },
  },
  ka: {
    home: {
      description:
        "InterLex არის გლობალური ჰაბი საერთაშორისო იურიდიული კონსულტაციისთვის, კომპანიის რეგისტრაციისთვის, საგადასახადო პოზიციონირებისთვის, ბაზარზე შესვლისთვის და ბიზნესის დასაწყებად ყაზახეთსა და საქართველოში.",
      keywords: ["InterLex", "კომპანიის რეგისტრაცია ყაზახეთში", "ბიზნესის დაწყება საქართველოში", "საერთაშორისო იურიდიული კონსულტაცია", "საგადასახადო სტრუქტურირება"],
      searchLabel: "SEO თემები",
      searchTitle: "თემები, რომლებზეც ჰაბი უნდა ჩანდეს, სანამ მანდატი კონკრეტული ბაზრის საიტზე გადავა.",
      searchIntro:
        "გლობალურმა ჰაბმა უნდა შეკრიბოს მოთხოვნა საერთაშორისო იურიდიულ მხარდაჭერაზე, ბაზარზე შესვლაზე, ბიზნესის სტრუქტურირებაზე და კომპანიის დაფუძნებაზე, შემდეგ კი მომხმარებელი სწორ იურისდიქციაში გადაიყვანოს.",
      searchCards: [
        {
          title: "კომპანიის რეგისტრაცია ყაზახეთში",
          body: "მოიცავს ბაზარზე შესვლას, იურიდიულ მოწყობას, საგადასახადო პოზიციონირებას, ბუღალტრულ კოორდინაციას და ოპერაციულ გაშვებას ყაზახეთში.",
        },
        {
          title: "ბიზნესის დაწყება საქართველოში",
          body: "მოიცავს კომპანიის დაფუძნებას, FIZ მარშრუტებს, საგადასახადო მოდელებს და ინვესტორისთვის ხელსაყრელ ოპერაციულ სტრუქტურებს საქართველოში.",
        },
        {
          title: "საერთაშორისო იურიდიული და საგადასახადო კონსულტაცია",
          body: "პროცესები, სადაც საჭიროა იურისდიქციების შედარება, ჰოლდინგის ლოგიკა, ჯგუფური სტრუქტურირება და მრავალქვეყნიანი ოპერირების გამძლეობა.",
        },
        {
          title: "საერთაშორისო ფაუნდერები და ინვესტორები",
          body: "პირველი შესასვლელი წერტილი დამფუძნებლებისთვის, ჰოლდინგებისთვის, family office-ებისთვის და საინვესტიციო გუნდებისთვის, რომლებიც ყაზახეთსა და საქართველოს ადარებენ.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "მაღალი განზრახვის მქონე კითხვები, რომლებზეც ჰაბმა მკაფიო პასუხი უნდა გასცეს.",
      faqItems: [
        {
          question: "რისთვის გამოიყენება interlex.work?",
          answer:
            "interlex.work არის InterLex-ის მრავალენოვანი გლობალური ჰაბი. ის წარმოადგენს ბრენდს, ხსნის საერთაშორისო მუშაობის ლოგიკას და თითოეულ მოთხოვნას სწორ market-specific საიტზე გადაამისამართებს.",
        },
        {
          question: "როდის უნდა გამოვიყენო interlex.kz?",
          answer:
            "interlex.kz გამოიყენეთ მაშინ, როცა საქმე ყაზახეთს ეხება, განსაკუთრებით კომპანიის რეგისტრაციის, იურიდიული მხარდაჭერის, საგადასახადო პოზიციონირების, ბუღალტერიის და ლოკალური შესრულებისთვის.",
        },
        {
          question: "როდის უნდა გამოვიყენო interlex.ge?",
          answer:
            "interlex.ge გამოიყენეთ მაშინ, როცა საქმე საქართველოს ეხება, განსაკუთრებით ბიზნესის დაწყებისთვის, FIZ-სტრუქტურებისთვის, საგადასახადო დაგეგმვისა და ინგლისურენოვანი ბაზრის ნავიგაციისთვის.",
        },
      ],
    },
    about: {
      description:
        "InterLex-ის შესახებ: გლობალური ბრენდ-ჰაბი საერთაშორისო იურიდიული კონსულტაციისთვის, ბაზარზე შესვლის სტრატეგიისთვის, ბიზნესის სტრუქტურირებისთვის და ყაზახეთსა და საქართველოში მარშრუტიზაციისთვის.",
      keywords: ["InterLex", "საერთაშორისო იურიდიული კონსულტაცია", "ბაზარზე შესვლა", "ყაზახეთი", "საქართველო"],
    },
    crossBorder: {
      description:
        "შეადარეთ ყაზახეთი და საქართველო კომპანიის რეგისტრაციის, საგადასახადო პოზიციონირების, ბიზნესის სტრუქტურირების, ინვესტორის შესვლის და საერთაშორისო იურიდიული მხარდაჭერის კუთხით.",
      keywords: ["ყაზახეთი თუ საქართველო", "იურისდიქციების შედარება", "კომპანიის დაფუძნება", "გადასახადები", "ინვესტორის შესვლა"],
    },
    contact: {
      description:
        "დაუკავშირდით InterLex-ს საერთაშორისო იურიდიულ საკითხებზე, ყაზახეთში ბაზარზე შესვლისთვის, საქართველოში ბიზნესის დასაწყებად და მრავალენოვანი მოთხოვნის მარშრუტიზაციისთვის.",
      keywords: ["InterLex კონტაქტი", "იურიდიული კონსულტაცია", "ყაზახეთი", "საქართველო", "საერთაშორისო ბიზნესი"],
    },
  },
  de: {
    home: {
      description:
        "InterLex ist der globale Hub für grenzüberschreitende Rechtsberatung, Gesellschaftsgründung, steuerliche Positionierung, Markteintritt und Business Setup in Kasachstan und Georgien.",
      keywords: ["InterLex", "Firmengründung Kasachstan", "Business Setup Georgien", "grenzüberschreitende Rechtsberatung", "Steuerstrukturierung"],
      searchLabel: "SEO-Themen",
      searchTitle: "Themen, für die der Hub sichtbar sein sollte, bevor das Mandat auf eine Marktseite wechselt.",
      searchIntro:
        "Der globale Hub sollte Nachfrage rund um grenzüberschreitende Rechtsberatung, Markteintritt, Unternehmensstrukturierung und Gesellschaftsgründung aufnehmen und den Kunden danach in die passende Jurisdiktion weiterleiten.",
      searchCards: [
        {
          title: "Gesellschaftsgründung in Kasachstan",
          body: "Begleitung bei Markteintritt, rechtlichem Setup, steuerlicher Positionierung, Buchhaltungskoordination und operativem Start in Kasachstan.",
        },
        {
          title: "Business Setup in Georgien",
          body: "Beratung zu Gründung, FIZ-Modellen, Steuerstrukturen und investorfreundlichen Betriebsmodellen in Georgien.",
        },
        {
          title: "Grenzüberschreitende Rechts- und Steuerberatung",
          body: "Mandate mit Bedarf an Jurisdiktionsvergleich, Holding-Logik, Gruppenstrukturierung und Kontinuität über mehrere Länder hinweg.",
        },
        {
          title: "Internationale Gründer und Investoren",
          body: "Erster Einstiegspunkt für Gründer, Holdings, Family Offices und Investmentteams, die Kasachstan und Georgien vergleichen.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "Fragen mit hoher Suchintention, die der Hub klar beantworten sollte.",
      faqItems: [
        {
          question: "Wofür wird interlex.work genutzt?",
          answer:
            "interlex.work ist der mehrsprachige globale Hub von InterLex. Er stellt die Marke vor, erklärt die grenzüberschreitende Logik und leitet jedes Mandat an die passende Marktseite weiter.",
        },
        {
          question: "Wann sollte interlex.kz genutzt werden?",
          answer:
            "interlex.kz sollte genutzt werden, wenn das Vorhaben nach Kasachstan gehört, insbesondere für Firmengründung, rechtliche Begleitung, steuerliche Positionierung, Buchhaltung und lokale Umsetzung.",
        },
        {
          question: "Wann sollte interlex.ge genutzt werden?",
          answer:
            "interlex.ge sollte genutzt werden, wenn das Vorhaben nach Georgien gehört, insbesondere für Business Setup, FIZ-Strukturen, Steuerplanung und englischsprachige Marktführung.",
        },
      ],
    },
    about: {
      description:
        "Über InterLex: globaler Marken-Hub für grenzüberschreitende Rechtsberatung, Markteintrittsstrategie, Unternehmensstrukturierung und Routing nach Kasachstan und Georgien.",
      keywords: ["InterLex", "internationale Rechtsberatung", "Markteintritt", "Kasachstan", "Georgien"],
    },
    crossBorder: {
      description:
        "Vergleichen Sie Kasachstan und Georgien für Gesellschaftsgründung, steuerliche Positionierung, Unternehmensstrukturierung, Investor Entry und grenzüberschreitende Rechtsberatung.",
      keywords: ["Kasachstan oder Georgien", "Jurisdiktionsvergleich", "Firmengründung", "Steuern", "Investor Entry"],
    },
    contact: {
      description:
        "Kontaktieren Sie InterLex für grenzüberschreitende Rechtsberatung, Markteintritt in Kasachstan, Business Setup in Georgien und mehrsprachiges Mandatsrouting.",
      keywords: ["InterLex Kontakt", "Rechtsberatung", "Kasachstan", "Georgien", "cross-border"],
    },
  },
  ar: {
    home: {
      description:
        "InterLex هو المركز العالمي للاستشارات القانونية العابرة للحدود، وتسجيل الشركات، والتموضع الضريبي، ودخول الأسواق، وإطلاق الأعمال في كازاخستان وجورجيا.",
      keywords: ["InterLex", "تسجيل شركة في كازاخستان", "تأسيس أعمال في جورجيا", "استشارات قانونية عابرة للحدود", "هيكلة ضريبية"],
      searchLabel: "موضوعات SEO",
      searchTitle: "الموضوعات التي يجب أن يظهر فيها هذا المركز قبل انتقال العميل إلى موقع السوق المناسب.",
      searchIntro:
        "يجب أن يلتقط هذا المركز العالمي الطلب المرتبط بالاستشارات القانونية العابرة للحدود، ودخول الأسواق، وهيكلة الأعمال، وتأسيس الشركات، ثم يوجّه العميل إلى الولاية القضائية المناسبة.",
      searchCards: [
        {
          title: "تسجيل شركة في كازاخستان",
          body: "يشمل دخول السوق، والهيكلة القانونية، والتموضع الضريبي، وتنسيق المحاسبة، والانطلاق التشغيلي داخل كازاخستان.",
        },
        {
          title: "تأسيس الأعمال في جورجيا",
          body: "يشمل تأسيس الشركة في جورجيا، ومسارات FIZ، والنماذج الضريبية، والهياكل التشغيلية المناسبة للمستثمرين.",
        },
        {
          title: "استشارات قانونية وضريبية عابرة للحدود",
          body: "للمهام التي تتطلب مقارنة بين الولايات القضائية، ومنطق الهياكل القابضة، وهيكلة المجموعات، واستمرارية الأعمال عبر عدة دول.",
        },
        {
          title: "المؤسسون والمستثمرون الدوليون",
          body: "نقطة دخول أولى للمؤسسين، والهولدينغات، وفرق الاستثمار، والمكاتب العائلية التي تقارن بين كازاخستان وجورجيا.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "أسئلة عالية النية يجب أن يجيب عنها هذا المركز بوضوح.",
      faqItems: [
        {
          question: "ما الغرض من interlex.work؟",
          answer:
            "interlex.work هو المركز العالمي متعدد اللغات لشركة InterLex. يعرّف بالعلامة التجارية، ويشرح المنطق العابر للحدود، ويوجّه كل تفويض إلى موقع السوق المناسب.",
        },
        {
          question: "متى يجب استخدام interlex.kz؟",
          answer:
            "استخدم interlex.kz عندما يكون العمل مرتبطاً بكازاخستان، خصوصاً في تسجيل الشركات، والدعم القانوني، والتموضع الضريبي، والمحاسبة، والتنفيذ المحلي.",
        },
        {
          question: "متى يجب استخدام interlex.ge؟",
          answer:
            "استخدم interlex.ge عندما يكون العمل مرتبطاً بجورجيا، خصوصاً في تأسيس الأعمال، وهياكل FIZ، والتخطيط الضريبي، والتوجيه السوقي باللغة الإنجليزية.",
        },
      ],
    },
    about: {
      description:
        "حول InterLex: مركز عالمي للعلامة التجارية للاستشارات القانونية العابرة للحدود، واستراتيجية دخول الأسواق، وهيكلة الأعمال، والتوجيه نحو كازاخستان وجورجيا.",
      keywords: ["InterLex", "استشارات قانونية دولية", "دخول الأسواق", "كازاخستان", "جورجيا"],
    },
    crossBorder: {
      description:
        "قارن بين كازاخستان وجورجيا من حيث تسجيل الشركات، والتموضع الضريبي، وهيكلة الأعمال، ودخول المستثمرين، والاستشارات القانونية العابرة للحدود.",
      keywords: ["كازاخستان أم جورجيا", "مقارنة الولايات القضائية", "تأسيس شركة", "ضرائب", "دخول المستثمر"],
    },
    contact: {
      description:
        "تواصل مع InterLex بشأن الاستشارات القانونية العابرة للحدود، ودخول سوق كازاخستان، وتأسيس الأعمال في جورجيا، وتوجيه الطلبات متعددة اللغات.",
      keywords: ["الاتصال بـ InterLex", "استشارات قانونية", "كازاخستان", "جورجيا", "أعمال دولية"],
    },
  },
  tr: {
    home: {
      description:
        "InterLex; sınır ötesi hukuk danışmanlığı, şirket kuruluşu, vergi konumlandırması, pazara giriş ve Kazakistan ile Gürcistan'da business setup için global hub'dır.",
      keywords: ["InterLex", "Kazakistan şirket kuruluşu", "Gürcistan business setup", "sınır ötesi hukuk danışmanlığı", "vergi yapılandırması"],
      searchLabel: "SEO Konuları",
      searchTitle: "Mandat market site'a taşınmadan önce hub'ın görünmesi gereken arama niyetleri.",
      searchIntro:
        "Global hub; sınır ötesi hukuk danışmanlığı, pazara giriş, iş yapılandırması ve şirket kuruluşu etrafındaki arama niyetini yakalamalı, ardından müşteriyi doğru yargı alanına yönlendirmelidir.",
      searchCards: [
        {
          title: "Kazakistan'da şirket kuruluşu",
          body: "Pazara giriş, legal setup, vergi konumlandırması, muhasebe koordinasyonu ve operasyonel başlangıç konularını kapsar.",
        },
        {
          title: "Gürcistan'da business setup",
          body: "Şirket kuruluşu, FIZ yolları, vergi modelleri ve yatırımcı dostu operasyon yapıları hakkında rehberlik sunar.",
        },
        {
          title: "Sınır ötesi hukuk ve vergi danışmanlığı",
          body: "Yargı alanı karşılaştırması, holding logic, grup yapılandırması ve çok ülkeli iş sürekliliği gerektiren mandatlar içindir.",
        },
        {
          title: "Uluslararası kurucular ve yatırımcılar",
          body: "Kazakistan ve Gürcistan'ı karşılaştıran kurucular, holdingler, family office'ler ve yatırım ekipleri için ilk giriş noktasıdır.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "Hub'ın açık biçimde yanıtlaması gereken yüksek niyetli sorular.",
      faqItems: [
        {
          question: "interlex.work ne için kullanılır?",
          answer:
            "interlex.work, InterLex'in çok dilli global hub'ıdır. Markayı tanıtır, sınır ötesi iş mantığını açıklar ve her mandatı doğru market site'a yönlendirir.",
        },
        {
          question: "Ne zaman interlex.kz kullanılmalı?",
          answer:
            "İş Kazakistan'a ait olduğunda, özellikle şirket kuruluşu, hukuki destek, vergi konumlandırması, muhasebe ve yerel execution için interlex.kz kullanılmalıdır.",
        },
        {
          question: "Ne zaman interlex.ge kullanılmalı?",
          answer:
            "İş Gürcistan'a ait olduğunda, özellikle business setup, FIZ yapıları, vergi planlaması ve English-first market guidance için interlex.ge kullanılmalıdır.",
        },
      ],
    },
    about: {
      description:
        "InterLex hakkında: sınır ötesi hukuk danışmanlığı, pazara giriş stratejisi, iş yapılandırması ve Kazakistan ile Gürcistan'a routing için global marka hub'ı.",
      keywords: ["InterLex", "küresel hukuk danışmanlığı", "pazara giriş", "Kazakistan", "Gürcistan"],
    },
    crossBorder: {
      description:
        "Şirket kuruluşu, vergi konumlandırması, business structuring, investor entry ve sınır ötesi hukuk danışmanlığı için Kazakistan ile Gürcistan'ı karşılaştırın.",
      keywords: ["Kazakistan mı Gürcistan mı", "yargı alanı karşılaştırması", "şirket kuruluşu", "vergiler", "yatırımcı girişi"],
    },
    contact: {
      description:
        "Sınır ötesi hukuk danışmanlığı, Kazakistan pazarına giriş, Gürcistan'da business setup ve çok dilli mandat routing için InterLex ile iletişime geçin.",
      keywords: ["InterLex iletişim", "hukuk danışmanlığı", "Kazakistan", "Gürcistan", "uluslararası iş"],
    },
  },
  es: {
    home: {
      description:
        "InterLex es el hub global para advisory legal cross-border, constitución de empresas, posicionamiento fiscal, entrada de mercado y business setup en Kazajistán y Georgia.",
      keywords: ["InterLex", "registro de empresa en Kazajistán", "business setup en Georgia", "asesoría legal cross-border", "estructuración fiscal"],
      searchLabel: "Temas SEO",
      searchTitle: "Temas por los que el hub debe posicionar antes de enviar el mandato al market site.",
      searchIntro:
        "El hub global debe captar intención de búsqueda sobre asesoría legal cross-border, entrada de mercado, estructuración empresarial y constitución de compañías antes de dirigir al cliente a la jurisdicción correcta.",
      searchCards: [
        {
          title: "Registro de empresa en Kazajistán",
          body: "Entrada de mercado, legal setup, posicionamiento fiscal, coordinación contable y lanzamiento operativo en Kazajistán.",
        },
        {
          title: "Business setup en Georgia",
          body: "Constitución en Georgia, rutas FIZ, modelos fiscales y estructuras operativas favorables para inversores.",
        },
        {
          title: "Asesoría legal y fiscal cross-border",
          body: "Mandatos que requieren comparación de jurisdicciones, holding logic, estructuración de grupo y continuidad operativa en varios países.",
        },
        {
          title: "Founders e inversores internacionales",
          body: "Punto de entrada para founders, family offices, holdings y equipos que comparan Kazajistán y Georgia.",
        },
      ],
      faqLabel: "FAQ",
      faqTitle: "Preguntas de alta intención que el hub debe responder con claridad.",
      faqItems: [
        {
          question: "¿Para qué sirve interlex.work?",
          answer:
            "interlex.work es el hub global multilingüe de InterLex. Presenta la marca, explica la lógica cross-border y dirige cada mandato al market site correcto.",
        },
        {
          question: "¿Cuándo usar interlex.kz?",
          answer:
            "Use interlex.kz cuando el trabajo pertenezca a Kazajistán, especialmente para constitución de empresas, soporte legal, posicionamiento fiscal, contabilidad y ejecución local.",
        },
        {
          question: "¿Cuándo usar interlex.ge?",
          answer:
            "Use interlex.ge cuando el trabajo pertenezca a Georgia, especialmente para business setup, estructuras FIZ, planificación fiscal y market guidance en inglés.",
        },
      ],
    },
    about: {
      description:
        "Sobre InterLex: hub global de marca para advisory legal cross-border, estrategia de entrada de mercado, business structuring y routing hacia Kazajistán y Georgia.",
      keywords: ["InterLex", "asesoría jurídica internacional", "entrada de mercado", "Kazajistán", "Georgia"],
    },
    crossBorder: {
      description:
        "Compare Kazajistán y Georgia para constitución de empresas, posicionamiento fiscal, business structuring, investor entry y advisory legal cross-border.",
      keywords: ["Kazajistán o Georgia", "comparación de jurisdicciones", "constitución de empresas", "fiscalidad", "entrada del inversor"],
    },
    contact: {
      description:
        "Contacte con InterLex para advisory legal cross-border, entrada al mercado de Kazajistán, business setup en Georgia y routing multilingüe del mandato.",
      keywords: ["contacto InterLex", "asesoría legal", "Kazajistán", "Georgia", "cross-border"],
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
