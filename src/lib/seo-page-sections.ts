import type { Locale } from "@/lib/i18n";

type Section = {
  label: string;
  title: string;
  body: string;
  items?: string[];
};

type SeoPageSections = {
  comparisonIntent: Section;
  structuringIntent: Section;
  structuringScope: Section;
  marketEntryIntent: Section;
  marketEntryScope: Section;
};

const sections: Record<Locale, SeoPageSections> = {
  en: {
    comparisonIntent: {
      label: "When This Matters",
      title: "This page is for clients choosing the best market for launch, not just comparing countries out of curiosity.",
      body:
        "Owners, investors, and operating teams usually come here when they need to understand where the project can start more cleanly, where the risk of a weak setup is lower, and where InterLex can deliver the strongest first-stage result.",
      items: [
        "Compare Kazakhstan and Georgia before company registration and tax setup begin.",
        "Understand where operations should start and where a more flexible international structure makes more sense.",
        "Come to the consultation with a defined question instead of a generic request to recommend a country.",
      ],
    },
    structuringIntent: {
      label: "What The Client Gets",
      title: "Cross-border structuring helps assemble the business so it does not need to be rebuilt after launch.",
      body:
        "If a project touches two or more jurisdictions, a mistake at the start usually costs more than the registration itself. InterLex helps define where ownership should sit, where operations should sit, how tax and banking logic should be distributed, and how to prepare the project for a calm launch.",
      items: [
        "An ownership and governance structure for the international mandate.",
        "A clear split of roles between Kazakhstan, Georgia, and other operating points.",
        "A practical plan showing which parts of the mandate need registration, banking support, accounting, due diligence, or investor support.",
      ],
    },
    structuringScope: {
      label: "What InterLex Can Cover",
      title: "Structuring is usually followed by several practical workstreams that we can take on.",
      body:
        "In practice the client rarely needs advice alone. Once the structure is set, the mandate often moves into company setup, special regimes, account opening, accounting and legal support, and sometimes investor or transaction support.",
      items: [
        "Company registration and presence-format selection.",
        "Special regimes and zones such as AIFC, FIZ, SEZ, and similar models.",
        "Banking support, KYC preparation, and fallback account-opening scenarios.",
        "Accounting, legal support, and corporate maintenance after launch.",
        "Due diligence, investor support, and M&A advisory when the project depends on a deal or investment logic.",
      ],
    },
    marketEntryIntent: {
      label: "What This Page Solves",
      title: "Entering a new market starts with the right sequence of decisions, not with registration alone.",
      body:
        "When a company looks at Kazakhstan, Georgia, or the region more broadly, it needs a clear entry plan: where the first structure should sit, how tax, banking, documents, and operations fit together, and when the work should move from strategy into implementation.",
      items: [
        "Choose the right starting jurisdiction for the first phase of entry.",
        "Connect market entry with structure, banking logic, and compliance instead of solving them separately.",
        "Reduce the risk of avoidable restarts, delays, and expensive corrections after registration.",
      ],
    },
    marketEntryScope: {
      label: "How The Work Is Built",
      title: "A strong market-entry project is assembled in stages around the real business goal.",
      body:
        "First the presence model and jurisdiction are chosen, then the banking and tax logic is aligned, and only after that come registration, launch, and ongoing support. This sequence usually saves time and reduces the cost of mistakes.",
      items: [
        "Presence-model selection: local entity, branch, holding, or special regime.",
        "Launch-roadmap preparation: documents, timing, dependencies, and decision points.",
        "Banking support, KYC, accounting, legal support, and corporate maintenance after launch.",
        "An investor-facing or transaction-driven layer when market entry depends on partnership, investment, or asset acquisition.",
      ],
    },
  },
  ru: {
    comparisonIntent: {
      label: "Когда это актуально",
      title: "Эта страница для тех, кто выбирает лучший рынок для запуска, а не просто сравнивает страны из интереса.",
      body:
        "Обычно сюда приходят собственники, инвесторы и операционные команды, которым нужно быстро понять, где проекту будет проще стартовать, где ниже риск неверной конфигурации и в какой стране InterLex сможет дать лучший практический результат уже на первом этапе.",
      items: [
        "Сравнить Казахстан и Грузию до регистрации компании и налоговой настройки.",
        "Понять, где лучше запускать операционную деятельность, а где удобнее собирать гибкую международную структуру.",
        "Прийти на консультацию уже с понятным вопросом, а не с общим запросом «посоветуйте страну».",
      ],
    },
    structuringIntent: {
      label: "Что получает клиент",
      title: "Международное структурирование помогает собрать бизнес так, чтобы его не пришлось переделывать после запуска.",
      body:
        "Если проект затрагивает две и более юрисдикции, ошибка на старте обычно обходится дороже, чем сама регистрация. InterLex помогает заранее определить, где должна быть структура владения, где нужен операционный контур, как разложить налоговую и банковскую логику и как подготовить проект к спокойному запуску.",
      items: [
        "Структуру владения и управления под международный проект.",
        "Понятное распределение ролей между Казахстаном, Грузией и другими точками присутствия.",
        "Четкий план, какие части задачи требуют регистрации, банкового сопровождения, бухгалтерии, due diligence или поддержки инвестора.",
      ],
    },
    structuringScope: {
      label: "Что можно закрыть с InterLex",
      title: "Обычно за структурированием сразу следуют несколько прикладных задач, которые мы берем в работу.",
      body:
        "На практике клиенту редко нужен только совет. После сборки структуры обычно требуется запуск компании, выбор специального режима, открытие счетов, настройка бухгалтерского и юридического сопровождения, а иногда и поддержка сделки или инвестора.",
      items: [
        "Регистрация компании и выбор формы присутствия.",
        "Подбор специальных режимов и зон: AIFC, FIZ, SEZ и других решений.",
        "Банковское сопровождение, KYC-подготовка и резервные сценарии открытия счетов.",
        "Бухгалтерское, юридическое и корпоративное сопровождение после запуска.",
        "Due diligence, поддержка инвестора и M&A-консультирование, если проект завязан на сделку или инвестицию.",
      ],
    },
    marketEntryIntent: {
      label: "Что решает эта страница",
      title: "Выход на новый рынок начинается не с регистрации, а с правильной последовательности решений.",
      body:
        "Когда компания рассматривает Казахстан, Грузию или регион в целом, ей нужен не формальный список шагов, а ясный план входа: где запускать первую структуру, как связать налоги, банки, документы и операционную модель и в какой момент переходить от стратегии к практической реализации.",
      items: [
        "Определить правильную стартовую юрисдикцию для первого этапа выхода.",
        "Связать выход на рынок со структурой, банковой и регуляторной логикой, а не решать эти вопросы по отдельности.",
        "Сократить риск лишних перезапусков, задержек и дорогих исправлений уже после регистрации.",
      ],
    },
    marketEntryScope: {
      label: "Как строится работа",
      title: "Сильный проект выхода на рынок собирается поэтапно и под конкретную бизнес-задачу.",
      body:
        "Сначала определяется формат присутствия и юрисдикция, затем выстраиваются банковая и налоговая логика, после этого подключаются регистрация, запуск операционной модели и регулярное сопровождение. Такой порядок обычно экономит время и снижает стоимость ошибок.",
      items: [
        "Выбор модели присутствия: локальная компания, филиал, холдинговая структура или специальный режим.",
        "Подготовка дорожной карты запуска: документы, сроки, зависимости и точки принятия решения.",
        "Банковское сопровождение, KYC, бухгалтерия, юридическая поддержка и корпоративное сопровождение после старта.",
        "Инвесторский или транзакционный слой, если выход на рынок связан с партнерством, инвестициями или покупкой актива.",
      ],
    },
  },
  zh: {
    comparisonIntent: {
      label: "适用情形",
      title: "这一页适合正在选择最佳进入市场路径的客户，而不是仅仅出于兴趣比较国家的人。",
      body:
        "通常会来到这里的是企业所有者、投资者和运营团队。他们需要尽快看清项目在哪个市场更容易启动、哪里更不容易出现错误配置，以及 InterLex 在哪个方向上更能在第一阶段给出强有力的实际结果。",
      items: [
        "在公司注册和税务设置开始之前先比较哈萨克斯坦和格鲁吉亚。",
        "理解哪里更适合启动运营，哪里更适合搭建更灵活的国际结构。",
        "带着明确问题来咨询，而不是笼统地问“该选哪个国家？”。",
      ],
    },
    structuringIntent: {
      label: "客户能得到什么",
      title: "跨境结构设计的意义，是把业务一开始就搭好，而不是上线后再返工。",
      body:
        "如果项目涉及两个或更多司法辖区，前期的错误往往比注册本身更贵。InterLex 会帮助明确持股结构应放在哪里、运营部分应放在哪里、税务与银行逻辑如何分配，以及如何让项目以更稳妥的方式启动。",
      items: [
        "适合国际项目的持股与治理结构。",
        "哈萨克斯坦、格鲁吉亚及其他运营节点之间清晰的角色分工。",
        "一份明确的执行计划，说明哪些部分需要注册、银行支持、会计、尽职调查或投资者支持。",
      ],
    },
    structuringScope: {
      label: "InterLex 可以覆盖什么",
      title: "在实践中，结构设计之后通常会马上跟着几条我们可以接手的执行工作流。",
      body:
        "客户真正需要的通常不只是意见。结构定下来后，项目往往会进入公司设立、特殊制度选择、开户、会计与法律支持，有时还会涉及投资者或交易支持。",
      items: [
        "公司注册与存在形式选择。",
        "AIFC、FIZ、SEZ 等特殊制度和专区的选择。",
        "银行支持、KYC 准备和备用开户方案。",
        "启动后的会计、法律支持和公司维护。",
        "当项目与交易或投资逻辑相关时，对应的尽职调查、投资者支持和并购顾问服务。",
      ],
    },
    marketEntryIntent: {
      label: "这一页解决什么",
      title: "进入新市场，起点不是注册本身，而是正确的决策顺序。",
      body:
        "当一家企业考虑哈萨克斯坦、格鲁吉亚或更广泛的区域时，它需要的不是形式化的步骤清单，而是一份明确的进入方案: 第一层结构放在哪里、税务、银行、文件和运营如何衔接，以及何时从战略阶段转入实施阶段。",
      items: [
        "为进入市场的第一阶段确定正确的起始司法辖区。",
        "把市场进入与结构、银行逻辑和合规联动起来，而不是分开处理。",
        "降低注册后出现不必要重启、延误和高成本修正的风险。",
      ],
    },
    marketEntryScope: {
      label: "工作如何搭建",
      title: "强有力的市场进入项目，是围绕真实商业目标分阶段搭建出来的。",
      body:
        "首先确定存在形式和司法辖区，然后梳理银行与税务逻辑，之后才进入注册、启动和持续支持。这种顺序通常更省时间，也能降低犯错成本。",
      items: [
        "存在形式选择: 本地公司、分支机构、控股结构或特殊制度。",
        "启动路线图准备: 文件、时间、依赖关系和决策节点。",
        "启动后的银行支持、KYC、会计、法律支持和公司维护。",
        "如果市场进入与合作、投资或资产收购相关，还需要配置面向投资者或交易驱动的工作层。",
      ],
    },
  },
  it: {
    comparisonIntent: {
      label: "Quando è rilevante",
      title: "Questa pagina serve a chi sta scegliendo il mercato giusto per partire, non a chi confronta i Paesi solo per curiosità.",
      body:
        "Di solito arrivano qui proprietari, investitori e team operativi che vogliono capire rapidamente dove il progetto può partire in modo più pulito, dove il rischio di una configurazione sbagliata è più basso e in quale Paese InterLex può dare il risultato pratico più forte già nella prima fase.",
      items: [
        "Confrontare Kazakistan e Georgia prima di avviare registrazione della società e assetto fiscale.",
        "Capire dove conviene lanciare l'operatività e dove ha più senso costruire una struttura internazionale più flessibile.",
        "Arrivare in consulenza con una domanda definita, non con una richiesta generica di consigliare un Paese.",
      ],
    },
    structuringIntent: {
      label: "Cosa ottiene il cliente",
      title: "La strutturazione internazionale aiuta a costruire il business in modo da non doverlo rifare dopo il lancio.",
      body:
        "Se il progetto tocca due o più giurisdizioni, un errore all'inizio costa di solito più della registrazione stessa. InterLex aiuta a definire dove deve stare la proprietà, dove deve stare il perimetro operativo, come distribuire la logica fiscale e bancaria e come preparare il progetto a un lancio ordinato.",
      items: [
        "Una struttura di proprietà e governance adatta al mandato internazionale.",
        "Una distribuzione chiara dei ruoli tra Kazakistan, Georgia e altri punti operativi.",
        "Un piano pratico che mostra quali parti del mandato richiedono registrazione, supporto bancario, contabilità, due diligence o supporto agli investitori.",
      ],
    },
    structuringScope: {
      label: "Cosa può coprire InterLex",
      title: "Nella pratica, dopo la strutturazione arrivano subito diversi filoni operativi che possiamo prendere in carico.",
      body:
        "Il cliente raramente ha bisogno soltanto di un parere. Una volta definita la struttura, il mandato passa spesso a costituzione della società, regimi speciali, apertura dei conti, contabilità e supporto legale, e talvolta anche a supporto per investitori o transazioni.",
      items: [
        "Registrazione della società e scelta del formato di presenza.",
        "Regimi speciali e zone come AIFC, FIZ, SEZ e modelli simili.",
        "Supporto bancario, preparazione KYC e scenari alternativi per l'apertura dei conti.",
        "Contabilità, supporto legale e manutenzione societaria dopo il lancio.",
        "Due diligence, supporto agli investitori e consulenza M&A quando il progetto dipende da una logica di operazione o investimento.",
      ],
    },
    marketEntryIntent: {
      label: "Cosa risolve questa pagina",
      title: "L'ingresso in un nuovo mercato inizia dalla sequenza giusta di decisioni, non dalla sola registrazione.",
      body:
        "Quando un'azienda guarda al Kazakistan, alla Georgia o alla regione in generale, non le serve un elenco formale di passi, ma un piano di ingresso chiaro: dove collocare la prima struttura, come collegare fiscalità, banking, documenti e operatività e quando passare dalla strategia all'implementazione.",
      items: [
        "Scegliere la giurisdizione iniziale corretta per la prima fase di ingresso.",
        "Collegare l'ingresso nel mercato con la struttura, la logica bancaria e quella regolatoria invece di risolverle separatamente.",
        "Ridurre il rischio di riavvii evitabili, ritardi e correzioni costose dopo la registrazione.",
      ],
    },
    marketEntryScope: {
      label: "Come si costruisce il lavoro",
      title: "Un progetto di ingresso nel mercato solido si costruisce per fasi attorno all'obiettivo reale del business.",
      body:
        "Prima si sceglie il modello di presenza e la giurisdizione, poi si allineano logica bancaria e fiscale, e solo dopo arrivano registrazione, lancio e supporto continuativo. Questa sequenza di solito fa risparmiare tempo e riduce il costo degli errori.",
      items: [
        "Scelta del modello di presenza: entità locale, filiale, holding o regime speciale.",
        "Preparazione del piano di lancio: documenti, tempi, dipendenze e punti decisionali.",
        "Supporto bancario, KYC, contabilità, supporto legale e manutenzione societaria dopo il lancio.",
        "Un livello orientato agli investitori o legato alla transazione quando l'ingresso nel mercato dipende da partnership, investimento o acquisizione di asset.",
      ],
    },
  },
  fr: {
    comparisonIntent: {
      label: "Quand c’est pertinent",
      title: "Cette page s’adresse à ceux qui choisissent le meilleur marché pour démarrer, pas à ceux qui comparent des pays par simple curiosité.",
      body:
        "On y trouve le plus souvent des dirigeants, investisseurs et équipes opérationnelles qui doivent comprendre rapidement où le projet démarrera le plus proprement, où le risque d’une mauvaise configuration est plus faible et dans quel pays InterLex peut produire le meilleur résultat pratique dès la première phase.",
      items: [
        "Comparer le Kazakhstan et la Géorgie avant de lancer l’enregistrement de la société et le cadrage fiscal.",
        "Comprendre où il vaut mieux lancer l’opérationnel et où il est plus logique de construire une structure internationale plus souple.",
        "Arriver en consultation avec une question précise, et non avec une demande générale de recommandation de pays.",
      ],
    },
    structuringIntent: {
      label: "Ce que le client obtient",
      title: "La structuration internationale permet de monter l’activité de façon à ne pas devoir la refaire après le lancement.",
      body:
        "Si le projet touche deux juridictions ou plus, une erreur au départ coûte souvent plus cher que l’enregistrement lui-même. InterLex aide à définir où doit se trouver la structure de détention, où doit se situer le périmètre opérationnel, comment répartir la logique fiscale et bancaire et comment préparer le projet à un lancement serein.",
      items: [
        "Une structure de détention et de gouvernance adaptée au mandat international.",
        "Une répartition claire des rôles entre le Kazakhstan, la Géorgie et les autres points d’activité.",
        "Un plan pratique montrant quelles parties du mandat exigent enregistrement, support bancaire, comptabilité, due diligence ou support investisseurs.",
      ],
    },
    structuringScope: {
      label: "Ce qu’InterLex peut couvrir",
      title: "Dans la pratique, la structuration est presque toujours suivie de plusieurs chantiers opérationnels que nous pouvons prendre en charge.",
      body:
        "Le client a rarement besoin d’un simple conseil. Une fois la structure définie, le mandat passe souvent à la création de société, aux régimes spéciaux, à l’ouverture des comptes, à la comptabilité et au support juridique, et parfois aussi au support transactionnel ou investisseur.",
      items: [
        "Enregistrement de la société et choix du format de présence.",
        "Régimes spéciaux et zones tels que AIFC, FIZ, SEZ et modèles comparables.",
        "Support bancaire, préparation KYC et scénarios de secours pour l’ouverture des comptes.",
        "Comptabilité, support juridique et maintenance corporate après le lancement.",
        "Due diligence, support investisseurs et conseil M&A lorsque le projet dépend d’une logique d’investissement ou de transaction.",
      ],
    },
    marketEntryIntent: {
      label: "Ce que cette page résout",
      title: "L’entrée sur un nouveau marché commence par le bon enchaînement de décisions, pas par la seule immatriculation.",
      body:
        "Quand une entreprise regarde le Kazakhstan, la Géorgie ou la région au sens large, elle n’a pas besoin d’une checklist formelle, mais d’un plan d’entrée clair: où placer la première structure, comment relier fiscalité, banques, documents et opérationnel, et à quel moment passer de la stratégie à l’exécution.",
      items: [
        "Choisir la bonne juridiction de départ pour la première phase d’entrée.",
        "Relier l’entrée sur le marché à la structure, à la logique bancaire et à la logique réglementaire au lieu de traiter ces sujets séparément.",
        "Réduire le risque de redémarrages évitables, de retards et de corrections coûteuses après l’enregistrement.",
      ],
    },
    marketEntryScope: {
      label: "Comment le travail se construit",
      title: "Un projet d’entrée sur le marché solide se construit par étapes autour de l’objectif réel du business.",
      body:
        "On choisit d’abord le format de présence et la juridiction, puis on aligne la logique bancaire et fiscale, et seulement ensuite viennent l’enregistrement, le lancement et le support continu. Cette séquence fait généralement gagner du temps et réduit le coût des erreurs.",
      items: [
        "Choix du modèle de présence: entité locale, succursale, holding ou régime spécial.",
        "Préparation de la feuille de route de lancement: documents, calendrier, dépendances et points de décision.",
        "Support bancaire, KYC, comptabilité, support juridique et suivi corporate après le lancement.",
        "Une couche orientée investisseurs ou centrée sur la transaction lorsque l’entrée sur le marché dépend d’un partenariat, d’un investissement ou d’une acquisition d’actif.",
      ],
    },
  },
  ka: {
    comparisonIntent: {
      label: "როდის არის ეს აქტუალური",
      title: "ეს გვერდი მათთვისაა, ვინც გაშვებისთვის სწორ ბაზარს ირჩევს და ქვეყნებს უბრალოდ ინტერესის გამო არ ადარებს.",
      body:
        "აქ ჩვეულებრივ მოდიან მფლობელები, ინვესტორები და საოპერაციო გუნდები, რომლებსაც სჭირდებათ სწრაფად გაიგონ, სად დაიწყებს პროექტი უფრო სწორად, სად არის დაბალი არასწორი კონფიგურაციის რისკი და რომელ ქვეყანაში შეძლებს InterLex პირველ ეტაპზევე ყველაზე პრაქტიკული შედეგის მიცემას.",
      items: [
        "შეადარეთ ყაზახეთი და საქართველო კომპანიის რეგისტრაციისა და საგადასახადო კონფიგურაციის დაწყებამდე.",
        "გაიგეთ, სად ჯობს ოპერაციული საქმიანობის დაწყება და სად უფრო ლოგიკურია მოქნილი საერთაშორისო სტრუქტურის აწყობა.",
        "კონსულტაციაზე მოდით უკვე ჩამოყალიბებული კითხვით და არა ზოგადი თხოვნით, რომ ქვეყანა გირჩიონ.",
      ],
    },
    structuringIntent: {
      label: "რას იღებს კლიენტი",
      title: "საერთაშორისო სტრუქტურირება ეხმარება ბიზნესს ისე აეწყოს, რომ გაშვების შემდეგ თავიდან გადასაკეთებელი არ გახდეს.",
      body:
        "თუ პროექტი ორ ან მეტ იურისდიქციას ეხება, დასაწყისში დაშვებული შეცდომა, როგორც წესი, თვით რეგისტრაციაზე ძვირი ჯდება. InterLex ეხმარება წინასწარ განსაზღვროს, სად უნდა იყოს მფლობელობის სტრუქტურა, სად უნდა განთავსდეს ოპერაციული კონტური, როგორ განაწილდეს საგადასახადო და საბანკო ლოგიკა და როგორ მომზადდეს პროექტი მშვიდი გაშვებისთვის.",
      items: [
        "მფლობელობისა და მმართველობის სტრუქტურა საერთაშორისო პროექტისთვის.",
        "როლების გასაგები გადანაწილება ყაზახეთს, საქართველოსა და სხვა საოპერაციო წერტილებს შორის.",
        "პრაქტიკული გეგმა, რომელიც აჩვენებს, პროექტის რომელ ნაწილს სჭირდება რეგისტრაცია, საბანკო მხარდაჭერა, ბუღალტერია, due diligence ან ინვესტორის მხარდაჭერა.",
      ],
    },
    structuringScope: {
      label: "რის დაფარვა შეუძლია InterLex-ს",
      title: "პრაქტიკაში სტრუქტურირებას თითქმის ყოველთვის მოჰყვება რამდენიმე გამოყენებითი სამუშაო ნაკადი, რომელსაც ჩვენ ვიღებთ.",
      body:
        "კლიენტს იშვიათად სჭირდება მხოლოდ რჩევა. სტრუქტურის განსაზღვრის შემდეგ, პროექტი ხშირად გადადის კომპანიის გაშვებაზე, სპეციალურ რეჟიმებზე, ანგარიშების გახსნაზე, ბუღალტერიასა და იურიდიულ მხარდაჭერაზე, ზოგჯერ კი ინვესტორთან ან გარიგებასთან დაკავშირებულ მხარდაჭერაზეც.",
      items: [
        "კომპანიის რეგისტრაცია და ყოფნის ფორმატის არჩევა.",
        "სპეციალური რეჟიმები და ზონები: AIFC, FIZ, SEZ და მსგავსი მოდელები.",
        "საბანკო მხარდაჭერა, KYC-მომზადება და ანგარიშის გახსნის სარეზერვო სცენარები.",
        "გაშვების შემდეგ ბუღალტრული, იურიდიული და კორპორაციული მხარდაჭერა.",
        "Due diligence, ინვესტორის მხარდაჭერა და M&A კონსულტაცია, თუ პროექტი გარიგებაზე ან ინვესტიციაზეა მიბმული.",
      ],
    },
    marketEntryIntent: {
      label: "რას წყვეტს ეს გვერდი",
      title: "ახალ ბაზარზე შესვლა რეგისტრაციით კი არა, სწორი გადაწყვეტილებების თანმიმდევრობით იწყება.",
      body:
        "როცა კომპანია ყაზახეთს, საქართველოს ან მთელ რეგიონს განიხილავს, მას ფორმალური ნაბიჯების სია კი არა, მკაფიო შესვლის გეგმა სჭირდება: სად განთავსდეს პირველი სტრუქტურა, როგორ დაუკავშირდეს ერთმანეთს საგადასახადო, საბანკო, დოკუმენტური და საოპერაციო ლოგიკა და როდის უნდა გადავიდეს პროექტი სტრატეგიიდან რეალიზაციაზე.",
      items: [
        "შესვლის პირველი ეტაპისთვის სწორი საწყისი იურისდიქციის განსაზღვრა.",
        "ბაზარზე შესვლის დაკავშირება სტრუქტურასთან, საბანკო და რეგულატორულ ლოგიკასთან, და არა ამ თემების ცალ-ცალკე გადაწყვეტა.",
        "რეგისტრაციის შემდეგ ზედმეტი გადაკეთებების, დაგვიანებებისა და ძვირი შესწორებების რისკის შემცირება.",
      ],
    },
    marketEntryScope: {
      label: "როგორ იგება სამუშაო",
      title: "ძლიერი ბაზარზე შესვლის პროექტი ეტაპობრივად ეწყობა რეალური ბიზნეს-ამოცანის გარშემო.",
      body:
        "ჯერ განისაზღვრება ყოფნის ფორმატი და იურისდიქცია, შემდეგ ლაგდება საბანკო და საგადასახადო ლოგიკა, და მხოლოდ ამის შემდეგ ერთვება რეგისტრაცია, გაშვება და მუდმივი მხარდაჭერა. ასეთი მიმდევრობა ჩვეულებრივ დროს ზოგავს და შეცდომების ფასს ამცირებს.",
      items: [
        "ყოფნის მოდელის არჩევა: ადგილობრივი კომპანია, ფილიალი, ჰოლდინგი ან სპეციალური რეჟიმი.",
        "გაშვების გეგმის მომზადება: დოკუმენტები, ვადები, დამოკიდებულებები და გადაწყვეტილების წერტილები.",
        "გაშვების შემდეგ საბანკო მხარდაჭერა, KYC, ბუღალტერია, იურიდიული მხარდაჭერა და კორპორაციული მხარდაჭერა.",
        "ინვესტორზე ან გარიგებაზე ორიენტირებული ფენა, როცა ბაზარზე შესვლა პარტნიორობაზე, ინვესტიციაზე ან აქტივის შეძენაზეა დამოკიდებული.",
      ],
    },
  },
  de: {
    comparisonIntent: {
      label: "Wann das relevant ist",
      title: "Diese Seite ist für Mandanten gedacht, die den besten Markt für den Start wählen, nicht für einen Vergleich aus bloßer Neugier.",
      body:
        "Hier landen meist Eigentümer, Investoren und operative Teams, die schnell verstehen müssen, wo das Projekt sauberer starten kann, wo das Risiko einer schwachen Konfiguration geringer ist und in welchem Land InterLex schon in der ersten Phase das stärkste praktische Ergebnis liefern kann.",
      items: [
        "Kasachstan und Georgien vergleichen, bevor Gesellschaftsregistrierung und Steuerstruktur festgelegt werden.",
        "Verstehen, wo der operative Start sinnvoller ist und wo sich eine flexiblere internationale Struktur besser aufbauen lässt.",
        "Mit einer klaren Frage in die Beratung kommen statt mit einer allgemeinen Bitte um Länderempfehlung.",
      ],
    },
    structuringIntent: {
      label: "Was der Mandant bekommt",
      title: "Grenzüberschreitende Strukturierung hilft, das Geschäft so aufzubauen, dass es nach dem Start nicht neu gebaut werden muss.",
      body:
        "Wenn ein Projekt zwei oder mehr Jurisdiktionen berührt, kostet ein Fehler am Anfang meist mehr als die Registrierung selbst. InterLex hilft festzulegen, wo die Eigentumsstruktur sitzen soll, wo der operative Rahmen liegen soll, wie Steuer- und Banklogik verteilt werden und wie das Projekt sauber in den Start geführt wird.",
      items: [
        "Eine Eigentums- und Governance-Struktur für das internationale Mandat.",
        "Eine klare Rollenverteilung zwischen Kasachstan, Georgien und anderen operativen Punkten.",
        "Einen praktischen Plan, welche Teile des Mandats Registrierung, Bankbegleitung, Buchhaltung, Due Diligence oder Investorenbegleitung benötigen.",
      ],
    },
    structuringScope: {
      label: "Was InterLex abdecken kann",
      title: "Auf die Strukturierung folgen in der Praxis fast immer mehrere operative Arbeitspakete, die wir übernehmen können.",
      body:
        "Mandanten brauchen selten nur einen Rat. Sobald die Struktur steht, geht das Mandat oft in Gesellschaftsgründung, Sonderregime, Kontoeröffnung, Buchhaltung und Rechtsbegleitung und manchmal auch in Investoren- oder Transaktionsunterstützung über.",
      items: [
        "Unternehmensregistrierung und Wahl des Präsenzformats.",
        "Sonderregime und Zonen wie AIFC, FIZ, SEZ und ähnliche Modelle.",
        "Bankbegleitung, KYC-Vorbereitung und Ausweichszenarien für Kontoeröffnungen.",
        "Buchhaltung, Rechtsbegleitung und gesellschaftsrechtliche Begleitung nach dem Start.",
        "Due Diligence, Investorenbegleitung und M&A-Beratung, wenn das Projekt von einer Deal- oder Investmentlogik abhängt.",
      ],
    },
    marketEntryIntent: {
      label: "Was diese Seite löst",
      title: "Der Eintritt in einen neuen Markt beginnt mit der richtigen Reihenfolge von Entscheidungen, nicht mit der Registrierung allein.",
      body:
        "Wenn ein Unternehmen Kasachstan, Georgien oder die Region insgesamt betrachtet, braucht es keine formale Checkliste, sondern einen klaren Eintrittsplan: wo die erste Struktur sitzen soll, wie Steuern, Banking, Dokumente und Betrieb zusammenhängen und wann der Wechsel von Strategie zu Umsetzung erfolgen soll.",
      items: [
        "Die richtige Startjurisdiktion für die erste Eintrittsphase wählen.",
        "Markteintritt mit Struktur, Banklogik und Regulatorik verbinden, statt diese Themen getrennt zu lösen.",
        "Das Risiko vermeidbarer Neustarts, Verzögerungen und teurer Korrekturen nach der Registrierung senken.",
      ],
    },
    marketEntryScope: {
      label: "Wie die Arbeit aufgebaut wird",
      title: "Ein starkes Markteintrittsprojekt wird stufenweise um das reale Geschäftsziel herum aufgebaut.",
      body:
        "Zuerst werden Präsenzmodell und Jurisdiktion gewählt, dann Bank- und Steuerlogik abgestimmt und erst danach folgen Registrierung, Start und laufende Begleitung. Diese Reihenfolge spart meist Zeit und senkt die Kosten von Fehlern.",
      items: [
        "Wahl des Präsenzmodells: lokale Gesellschaft, Niederlassung, Holding oder Sonderregime.",
        "Vorbereitung des Startfahrplans: Dokumente, Timing, Abhängigkeiten und Entscheidungspunkte.",
        "Bankbegleitung, KYC, Buchhaltung, Rechtsbegleitung und gesellschaftsrechtliche Begleitung nach dem Start.",
        "Eine investorenbezogene oder transaktionsbezogene Schicht, wenn der Markteintritt von Partnerschaft, Investment oder Asset-Erwerb abhängt.",
      ],
    },
  },
  ar: {
    comparisonIntent: {
      label: "متى يكون هذا مناسبًا",
      title: "هذه الصفحة مخصصة لمن يختار السوق الأنسب للانطلاق، لا لمن يقارن بين الدول بدافع الفضول فقط.",
      body:
        "يصل إلى هذه الصفحة عادةً الملاك والمستثمرون والفرق التشغيلية الذين يحتاجون إلى فهم سريع للمكان الذي يمكن أن يبدأ فيه المشروع بشكل أنظف، وأين يكون خطر التهيئة الخاطئة أقل، وفي أي بلد يمكن لـ InterLex أن يحقق أفضل نتيجة عملية منذ المرحلة الأولى.",
      items: [
        "قارن بين كازاخستان وجورجيا قبل بدء تسجيل الشركة وترتيب المنطق الضريبي.",
        "افهم أين من الأفضل إطلاق العمليات وأين يكون بناء هيكل دولي أكثر مرونة هو الخيار الأنسب.",
        "ادخل إلى الاستشارة بسؤال محدد بدلًا من طلب عام لاختيار بلد مناسب.",
      ],
    },
    structuringIntent: {
      label: "ما الذي يحصل عليه العميل",
      title: "الهيكلة العابرة للحدود تساعد على بناء الأعمال بطريقة لا تضطر معها إلى إعادة البناء بعد الإطلاق.",
      body:
        "إذا كان المشروع يمس ولايتين قضائيتين أو أكثر، فإن الخطأ في البداية يكون عادةً أعلى كلفة من التسجيل نفسه. تساعد InterLex على تحديد مكان هيكل الملكية، ومكان الإطار التشغيلي، وكيفية توزيع المنطق الضريبي والمصرفي، وكيفية تجهيز المشروع لانطلاق هادئ.",
      items: [
        "هيكل ملكية وحوكمة مناسب للتكليف الدولي.",
        "توزيع واضح للأدوار بين كازاخستان وجورجيا ونقاط التشغيل الأخرى.",
        "خطة عملية توضّح أي أجزاء من التكليف تحتاج إلى تسجيل أو دعم مصرفي أو محاسبة أو عناية واجبة أو دعم المستثمرين.",
      ],
    },
    structuringScope: {
      label: "ما الذي يمكن أن تغطيه InterLex",
      title: "في الواقع العملي، تتبع الهيكلة عادةً عدة مسارات تنفيذية يمكننا توليها.",
      body:
        "نادراً ما يحتاج العميل إلى المشورة فقط. بعد تثبيت الهيكل، ينتقل التكليف غالبًا إلى تأسيس الشركة، والأنظمة الخاصة، وفتح الحسابات، والمحاسبة والدعم القانوني، وأحيانًا إلى دعم المستثمر أو الصفقة أيضًا.",
      items: [
        "تسجيل الشركة واختيار صيغة الوجود.",
        "الأنظمة والمناطق الخاصة مثل AIFC وFIZ وSEZ والنماذج المشابهة.",
        "الدعم المصرفي، وتحضير KYC، وسيناريوهات احتياطية لفتح الحسابات.",
        "المحاسبة والدعم القانوني والصيانة المؤسسية بعد الإطلاق.",
        "العناية الواجبة ودعم المستثمرين واستشارات الاندماج والاستحواذ عندما يعتمد المشروع على صفقة أو منطق استثماري.",
      ],
    },
    marketEntryIntent: {
      label: "ما الذي تحله هذه الصفحة",
      title: "الدخول إلى سوق جديد يبدأ بتسلسل صحيح للقرارات، لا بالتسجيل وحده.",
      body:
        "عندما تنظر شركة إلى كازاخستان أو جورجيا أو إلى المنطقة بشكل أوسع، فهي لا تحتاج إلى قائمة شكلية من الخطوات، بل إلى خطة دخول واضحة: أين توضع البنية الأولى، وكيف يرتبط المنطق الضريبي والمصرفي والوثائقي والتشغيلي، ومتى يجب الانتقال من الاستراتيجية إلى التنفيذ.",
      items: [
        "اختيار الولاية القضائية الصحيحة التي تبدأ منها المرحلة الأولى.",
        "ربط دخول السوق بالهيكل والمنطق المصرفي والامتثال بدل معالجة هذه العناصر بشكل منفصل.",
        "تقليل خطر إعادة التشغيل غير الضرورية والتأخير والتصحيحات المكلفة بعد التسجيل.",
      ],
    },
    marketEntryScope: {
      label: "كيف يُبنى العمل",
      title: "مشروع دخول السوق القوي يُبنى على مراحل حول الهدف التجاري الحقيقي.",
      body:
        "يتم أولًا اختيار نموذج الوجود والولاية القضائية، ثم ترتيب المنطق المصرفي والضريبي، وبعد ذلك فقط تأتي إجراءات التسجيل والإطلاق والدعم المستمر. هذا التسلسل يوفّر الوقت عادةً ويخفض كلفة الأخطاء.",
      items: [
        "اختيار نموذج الوجود: شركة محلية أو فرع أو شركة قابضة أو نظام خاص.",
        "إعداد خريطة الإطلاق: الوثائق، والتوقيت، والاعتماديات، ونقاط اتخاذ القرار.",
        "الدعم المصرفي وKYC والمحاسبة والدعم القانوني والصيانة المؤسسية بعد الإطلاق.",
        "طبقة موجهة للمستثمرين أو مدفوعة بالصفقة عندما يعتمد دخول السوق على شراكة أو استثمار أو شراء أصل.",
      ],
    },
  },
  tr: {
    comparisonIntent: {
      label: "Ne zaman anlamlıdır",
      title: "Bu sayfa, ülkeleri meraktan karşılaştıranlar için değil, lansman için doğru pazarı seçen müşteriler içindir.",
      body:
        "Buraya genelde projenin nerede daha temiz başlayacağını, zayıf bir kurulum riskinin nerede daha düşük olduğunu ve InterLex'in ilk fazda en güçlü pratik sonucu hangi ülkede verebileceğini hızla anlaması gereken sahipler, yatırımcılar ve operasyon ekipleri gelir.",
      items: [
        "Şirket kuruluşu ve vergi kurgusu başlamadan önce Kazakistan ile Gürcistan'ı karşılaştırın.",
        "Operasyonların nerede başlamasının daha doğru olduğunu ve daha esnek bir uluslararası yapının nerede daha mantıklı kurulacağını anlayın.",
        "Görüşmeye genel bir ülke tavsiyesi talebiyle değil, net bir soruyla gelin.",
      ],
    },
    structuringIntent: {
      label: "Müşteri ne kazanır",
      title: "Sınır ötesi yapılandırma, işi lansmandan sonra yeniden kurmak zorunda kalmamak için en baştan doğru toplar.",
      body:
        "Proje iki veya daha fazla yargı alanına dokunuyorsa, başlangıçtaki bir hata genelde kayıt maliyetinin kendisinden daha pahalıya çıkar. InterLex mülkiyet yapısının nerede duracağını, operasyonların nerede oturacağını, vergi ve bankacılık mantığının nasıl dağılacağını ve projenin sakin bir lansmana nasıl hazırlanacağını netleştirir.",
      items: [
        "Uluslararası mandat için mülkiyet ve yönetişim yapısı.",
        "Kazakistan, Gürcistan ve diğer operasyon noktaları arasında net rol dağılımı.",
        "Mandatın hangi parçalarının kayıt, bankacılık desteği, muhasebe, due diligence veya yatırımcı desteği gerektirdiğini gösteren pratik plan.",
      ],
    },
    structuringScope: {
      label: "InterLex neleri üstlenebilir",
      title: "Pratikte yapılandırmanın ardından çoğu zaman üstlenebileceğimiz birkaç uygulamalı iş akışı gelir.",
      body:
        "Müşterinin ihtiyacı çoğu zaman yalnızca tavsiye değildir. Yapı netleştikten sonra iş genellikle şirket kuruluşuna, özel rejimlere, hesap açılışına, muhasebe ve hukuki desteğe, bazen de yatırımcı veya işlem desteğine geçer.",
      items: [
        "Şirket kuruluşu ve varlık formatının seçimi.",
        "AIFC, FIZ, SEZ ve benzeri modeller gibi özel rejimler ve bölgeler.",
        "Bankacılık desteği, KYC hazırlığı ve yedek hesap açılış senaryoları.",
        "Lansman sonrası muhasebe, hukuki destek ve kurumsal bakım.",
        "Proje bir işlem veya yatırım mantığına bağlıysa due diligence, yatırımcı desteği ve M&A danışmanlığı.",
      ],
    },
    marketEntryIntent: {
      label: "Bu sayfa neyi çözer",
      title: "Yeni bir pazara giriş, tek başına kayıtla değil, doğru karar sıralamasıyla başlar.",
      body:
        "Bir şirket Kazakistan'ı, Gürcistan'ı veya bölgeyi genel olarak değerlendirirken, biçimsel bir adım listesine değil, net bir giriş planına ihtiyaç duyar: ilk yapı nereye kurulmalı, vergi, bankacılık, belgeler ve operasyonlar nasıl bağlanmalı ve iş ne zaman stratejiden uygulamaya geçmelidir.",
      items: [
        "Girişin ilk fazı için doğru başlangıç yargı alanını seçmek.",
        "Pazara girişi yapı, bankacılık mantığı ve uyum gereklilikleriyle bağlamak; bunları ayrı ayrı çözmemek.",
        "Kayıttan sonra yaşanabilecek gereksiz yeniden başlangıç, gecikme ve pahalı düzeltme riskini azaltmak.",
      ],
    },
    marketEntryScope: {
      label: "İş nasıl kurulur",
      title: "Güçlü bir pazara giriş projesi, gerçek iş hedefine göre aşama aşama kurulur.",
      body:
        "Önce varlık modeli ve yargı alanı seçilir, sonra bankacılık ve vergi mantığı hizalanır, ancak ondan sonra kayıt, lansman ve devam eden destek gelir. Bu sıra genellikle zaman kazandırır ve hata maliyetini düşürür.",
      items: [
        "Varlık modeli seçimi: yerel şirket, şube, holding veya özel rejim.",
        "Lansman yol haritasının hazırlanması: belgeler, zamanlama, bağımlılıklar ve karar noktaları.",
        "Lansman sonrası bankacılık desteği, KYC, muhasebe, hukuki destek ve kurumsal bakım.",
        "Pazara giriş ortaklık, yatırım veya varlık alımına bağlıysa yatırımcı odaklı ya da işlem odaklı katman.",
      ],
    },
  },
  es: {
    comparisonIntent: {
      label: "Cuándo es relevante",
      title: "Esta página es para quienes eligen el mejor mercado para lanzar el proyecto, no para quienes comparan países solo por curiosidad.",
      body:
        "Aquí suelen llegar propietarios, inversores y equipos operativos que necesitan entender con rapidez dónde el proyecto puede arrancar mejor, dónde es menor el riesgo de una configuración débil y en qué país InterLex puede dar el mejor resultado práctico desde la primera fase.",
      items: [
        "Comparar Kazajistán y Georgia antes de empezar el registro de la empresa y la configuración fiscal.",
        "Entender dónde conviene lanzar la operación y dónde tiene más sentido montar una estructura internacional más flexible.",
        "Llegar a la consulta con una pregunta definida y no con una petición genérica para que se recomiende un país.",
      ],
    },
    structuringIntent: {
      label: "Qué obtiene el cliente",
      title: "La estructuración internacional ayuda a montar el negocio de forma que no haya que rehacerlo después del lanzamiento.",
      body:
        "Si el proyecto toca dos o más jurisdicciones, un error al inicio suele costar más que el propio registro. InterLex ayuda a definir dónde debe estar la estructura de propiedad, dónde debe ubicarse el perímetro operativo, cómo repartir la lógica fiscal y bancaria y cómo preparar el proyecto para un lanzamiento ordenado.",
      items: [
        "Una estructura de propiedad y gobierno para el mandato internacional.",
        "Un reparto claro de roles entre Kazajistán, Georgia y otros puntos operativos.",
        "Un plan práctico que muestra qué partes del mandato requieren registro, soporte bancario, contabilidad, due diligence o apoyo al inversor.",
      ],
    },
    structuringScope: {
      label: "Qué puede cubrir InterLex",
      title: "En la práctica, después de la estructuración suelen venir varios frentes operativos que podemos asumir.",
      body:
        "El cliente rara vez necesita solo consejo. Una vez definida la estructura, el mandato suele pasar a constitución de empresa, regímenes especiales, apertura de cuentas, contabilidad y soporte legal, y a veces también a soporte para el inversor o la transacción.",
      items: [
        "Registro de la empresa y elección del formato de presencia.",
        "Regímenes y zonas especiales como AIFC, FIZ, SEZ y modelos similares.",
        "Soporte bancario, preparación de KYC y escenarios de respaldo para apertura de cuentas.",
        "Contabilidad, soporte legal y mantenimiento corporativo después del lanzamiento.",
        "Due diligence, apoyo al inversor y asesoría M&A cuando el proyecto depende de una lógica de inversión o de transacción.",
      ],
    },
    marketEntryIntent: {
      label: "Qué resuelve esta página",
      title: "Entrar en un nuevo mercado empieza por la secuencia correcta de decisiones, no solo por el registro.",
      body:
        "Cuando una empresa mira a Kazajistán, Georgia o a la región en general, no necesita una lista formal de pasos, sino un plan claro de entrada: dónde debe situarse la primera estructura, cómo se conectan fiscalidad, banca, documentos y operaciones, y en qué momento el trabajo debe pasar de la estrategia a la implementación.",
      items: [
        "Elegir la jurisdicción inicial correcta para la primera fase de entrada.",
        "Conectar la entrada al mercado con la estructura, la lógica bancaria y la regulatoria en lugar de resolverlas por separado.",
        "Reducir el riesgo de reinicios evitables, retrasos y correcciones costosas después del registro.",
      ],
    },
    marketEntryScope: {
      label: "Cómo se construye el trabajo",
      title: "Un proyecto sólido de entrada al mercado se arma por etapas alrededor del objetivo real del negocio.",
      body:
        "Primero se eligen el modelo de presencia y la jurisdicción, luego se ordenan la lógica bancaria y fiscal, y solo después llegan el registro, el lanzamiento y el soporte continuo. Esa secuencia normalmente ahorra tiempo y reduce el coste de los errores.",
      items: [
        "Elección del modelo de presencia: entidad local, sucursal, holding o régimen especial.",
        "Preparación de la hoja de ruta de lanzamiento: documentos, tiempos, dependencias y puntos de decisión.",
        "Soporte bancario, KYC, contabilidad, soporte legal y mantenimiento corporativo después del lanzamiento.",
        "Una capa orientada al inversor o a la transacción cuando la entrada al mercado depende de una alianza, inversión o compra de activos.",
      ],
    },
  },
};

export function getComparisonIntentSection(locale: Locale) {
  return sections[locale].comparisonIntent;
}

export function getStructuringIntentSection(locale: Locale) {
  return sections[locale].structuringIntent;
}

export function getStructuringScopeSection(locale: Locale) {
  return sections[locale].structuringScope;
}

export function getMarketEntryIntentSection(locale: Locale) {
  return sections[locale].marketEntryIntent;
}

export function getMarketEntryScopeSection(locale: Locale) {
  return sections[locale].marketEntryScope;
}
