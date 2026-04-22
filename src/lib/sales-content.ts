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

const localizedSalesContent: Record<Locale, SalesContent> = {
  en: {
    label: "Work Formats",
    title: "InterLex does not sell isolated answers. It builds working solutions around a concrete result.",
    intro:
      "On the homepage the client should immediately see clear cooperation formats: market entry, cross-border structuring, and ongoing support. This makes it easier to understand where to start, which format fits the mandate, and what the next practical step should be.",
    cta: "Discuss Project",
    packages: [
      {
        name: "Market Entry",
        body: "For owners and operating teams that need to enter Kazakhstan or Georgia with a clear launch, registration, and support plan.",
        points: [
          "Jurisdiction choice and entry logic",
          "Company-registration and launch roadmap",
          "Tax and compliance logic before execution starts",
        ],
      },
      {
        name: "Cross-border Structuring",
        body: "For investors, holdings, and international groups that need to assemble ownership, tax logic, and operating architecture correctly.",
        points: [
          "Jurisdiction comparison and structure design",
          "Ownership, investor, and operating logic",
          "Asset-acquisition planning, due diligence, and negotiation support",
          "Transfer of the project into the right country team",
        ],
      },
      {
        name: "Local Support",
        body: "For clients who already understand the market and want to move quickly into local legal, accounting, and operating support.",
        points: [
          "Handoff into Kazakhstan or Georgia without losing context",
          "Local compliance, accounting, and legal support",
          "Support after registration and launch",
        ],
      },
    ],
  },
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
          "Налоговая и регуляторная логика до начала исполнения",
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
          "Локальные регуляторные требования, бухгалтерия и юридическая поддержка",
          "Сопровождение после регистрации и запуска",
        ],
      },
    ],
  },
  zh: {
    label: "合作形式",
    title: "InterLex 提供的不是零散答案，而是围绕明确结果搭建的可执行方案。",
    intro:
      "在首页上，客户应当立刻看到清晰的合作形式: 市场进入、跨境结构设计和后续支持。这能帮助客户快速判断从哪里开始、哪种合作方式更适合当前任务，以及下一步应当怎么走。",
    cta: "讨论项目",
    packages: [
      {
        name: "市场进入",
        body: "适合需要以明确的设立、注册和落地计划进入哈萨克斯坦或格鲁吉亚的所有者和运营团队。",
        points: [
          "选择司法辖区与进入路径",
          "公司注册与启动路线图",
          "在执行开始前先梳理税务与合规逻辑",
        ],
      },
      {
        name: "跨境结构设计",
        body: "适合需要把持股结构、税务模型和运营架构正确搭建起来的投资者、控股公司和国际集团。",
        points: [
          "司法辖区比较与结构设计",
          "持股、投资者和运营逻辑",
          "资产收购规划、尽职调查和谈判支持",
          "将项目转入正确的国家团队",
        ],
      },
      {
        name: "本地支持",
        body: "适合已经明确目标市场、希望快速进入本地法律、会计和运营支持阶段的客户。",
        points: [
          "无损衔接到哈萨克斯坦或格鲁吉亚团队",
          "本地合规、会计与法律支持",
          "注册和启动后的持续支持",
        ],
      },
    ],
  },
  it: {
    label: "Formati di lavoro",
    title: "InterLex non vende risposte isolate. Costruisce soluzioni operative orientate a un risultato concreto.",
    intro:
      "In homepage il cliente deve vedere subito formati di collaborazione chiari: ingresso nel mercato, strutturazione internazionale e supporto continuativo. Questo aiuta a capire da dove iniziare, quale formato si adatta al mandato e quale debba essere il passo successivo.",
    cta: "Discuti il progetto",
    packages: [
      {
        name: "Ingresso nel mercato",
        body: "Per proprietari e team operativi che devono entrare in Kazakistan o in Georgia con un piano chiaro di avvio, registrazione e supporto.",
        points: [
          "Scelta della giurisdizione e logica di ingresso",
          "Piano di registrazione della società e di lancio",
          "Logica fiscale e regolatoria prima dell'esecuzione",
        ],
      },
      {
        name: "Strutturazione internazionale",
        body: "Per investitori, holding e gruppi internazionali che devono costruire correttamente struttura proprietaria, modello fiscale e architettura operativa.",
        points: [
          "Confronto tra giurisdizioni e disegno della struttura",
          "Logica proprietaria, dell'investitore e dell'operatività",
          "Preparazione dell'acquisizione di asset, due diligence e supporto negoziale",
          "Passaggio del progetto al team Paese corretto",
        ],
      },
      {
        name: "Supporto locale",
        body: "Per clienti che conoscono già il mercato e vogliono passare rapidamente al lavoro legale, contabile e operativo locale.",
        points: [
          "Trasferimento in Kazakistan o Georgia senza perdere contesto",
          "Conformità locale, contabilità e supporto legale",
          "Assistenza dopo registrazione e lancio",
        ],
      },
    ],
  },
  fr: {
    label: "Formats de travail",
    title: "InterLex ne vend pas des réponses isolées, mais des solutions de travail construites autour d’un résultat concret.",
    intro:
      "Sur la page d’accueil, le client doit voir immédiatement des formats de coopération clairs: entrée sur le marché, structuration internationale et accompagnement continu. Cela aide à comprendre par où commencer, quel format correspond au mandat et quel doit être le prochain pas.",
    cta: "Discuter du projet",
    packages: [
      {
        name: "Entrée sur le marché",
        body: "Pour les dirigeants et équipes opérationnelles qui doivent entrer au Kazakhstan ou en Géorgie avec un plan clair de lancement, d’enregistrement et d’accompagnement.",
        points: [
          "Choix de la juridiction et logique d’entrée",
          "Feuille de route pour la création de société et le lancement",
          "Logique fiscale et réglementaire avant le démarrage de l’exécution",
        ],
      },
      {
        name: "Structuration internationale",
        body: "Pour les investisseurs, holdings et groupes internationaux qui doivent construire correctement la structure de détention, le modèle fiscal et l’architecture opérationnelle.",
        points: [
          "Comparaison des juridictions et construction de la structure",
          "Logique de détention, de l’investisseur et du périmètre opérationnel",
          "Préparation de l’acquisition d’actifs, due diligence et appui aux négociations",
          "Transmission du projet à la bonne équipe pays",
        ],
      },
      {
        name: "Accompagnement local",
        body: "Pour les clients qui connaissent déjà le marché et veulent passer rapidement au travail juridique, comptable et opérationnel local.",
        points: [
          "Passage vers le Kazakhstan ou la Géorgie sans perte de contexte",
          "Conformité locale, comptabilité et support juridique",
          "Accompagnement après l’enregistrement et le lancement",
        ],
      },
    ],
  },
  ka: {
    label: "თანამშრომლობის ფორმატები",
    title: "InterLex არ ყიდის ცალკე პასუხებს. ის აწყობს სამუშაო გადაწყვეტებს კონკრეტული შედეგისთვის.",
    intro:
      "მთავარ გვერდზე კლიენტმა მაშინვე უნდა დაინახოს თანამშრომლობის გასაგები ფორმატები: ბაზარზე შესვლა, საერთაშორისო სტრუქტურირება და შემდგომი მხარდაჭერა. ეს ეხმარება სწრაფად გაიგოს, საიდან ჯობია დაწყება, რომელი ფორმატი შეესაბამება ამოცანას და რა არის შემდეგი ნაბიჯი.",
    cta: "პროექტის განხილვა",
    packages: [
      {
        name: "ბაზარზე შესვლა",
        body: "მფლობელებისა და საოპერაციო გუნდებისთვის, რომლებსაც ყაზახეთსა თუ საქართველოში სჭირდებათ გასაგები გეგმა გაშვების, რეგისტრაციისა და შემდგომი მხარდაჭერისთვის.",
        points: [
          "იურისდიქციის არჩევა და შესვლის ლოგიკა",
          "კომპანიის რეგისტრაციისა და გაშვების გეგმა",
          "საგადასახადო და რეგულატორული ლოგიკა შესრულების დაწყებამდე",
        ],
      },
      {
        name: "საერთაშორისო სტრუქტურირება",
        body: "ინვესტორებისთვის, ჰოლდინგებისა და საერთაშორისო ჯგუფებისთვის, რომლებსაც სწორად უნდა ააწყონ მფლობელობის სტრუქტურა, საგადასახადო მოდელი და საოპერაციო არქიტექტურა.",
        points: [
          "იურისდიქციების შედარება და სტრუქტურის აწყობა",
          "მფლობელობის, ინვესტორისა და ოპერაციული კონტურის ლოგიკა",
          "აქტივის შეძენის დაგეგმვა, due diligence და მოლაპარაკებების მხარდაჭერა",
          "პროექტის გადაცემა სწორ ქვეყანაზე მომუშავე გუნდში",
        ],
      },
      {
        name: "ლოკალური მხარდაჭერა",
        body: "კლიენტებისთვის, რომლებმაც უკვე იციან ბაზარი და სწრაფად უნდათ გადასვლა ადგილობრივ იურიდიულ, საბუღალტრო და საოპერაციო მუშაობაზე.",
        points: [
          "პროექტის გადაცემა ყაზახეთსა ან საქართველოში კონტექსტის დაკარგვის გარეშე",
          "ადგილობრივი რეგულატორული მოთხოვნები, ბუღალტერია და იურიდიული მხარდაჭერა",
          "მხარდაჭერა რეგისტრაციისა და გაშვების შემდეგ",
        ],
      },
    ],
  },
  de: {
    label: "Arbeitsformate",
    title: "InterLex verkauft keine isolierten Antworten, sondern arbeitsfähige Lösungen für ein konkretes Ergebnis.",
    intro:
      "Auf der Startseite sollte der Kunde sofort klare Zusammenarbeitsformate sehen: Markteintritt, grenzüberschreitende Strukturierung und laufende Begleitung. So wird schneller verständlich, wo man beginnt, welches Format zum Mandat passt und was der nächste praktische Schritt sein sollte.",
    cta: "Projekt besprechen",
    packages: [
      {
        name: "Markteintritt",
        body: "Für Eigentümer und operative Teams, die mit einem klaren Plan für Start, Registrierung und Begleitung nach Kasachstan oder Georgien gehen wollen.",
        points: [
          "Wahl der Jurisdiktion und Eintrittslogik",
          "Plan für Gesellschaftsregistrierung und Start",
          "Steuerliche und regulatorische Logik vor Beginn der Umsetzung",
        ],
      },
      {
        name: "Grenzüberschreitende Strukturierung",
        body: "Für Investoren, Holdingstrukturen und internationale Gruppen, die Eigentumsstruktur, Steuerlogik und operative Architektur sauber aufsetzen müssen.",
        points: [
          "Jurisdiktionsvergleich und Strukturdesign",
          "Logik von Eigentum, Investor und operativem Modell",
          "Vorbereitung von Asset-Erwerb, Due Diligence und Verhandlungsführung",
          "Übergabe des Projekts an das richtige Länderteam",
        ],
      },
      {
        name: "Lokale Begleitung",
        body: "Für Kunden, die den Markt bereits verstehen und schnell in die lokale Rechts-, Buchhaltungs- und Umsetzungsschiene wechseln wollen.",
        points: [
          "Übergabe nach Kasachstan oder Georgien ohne Kontextverlust",
          "Lokale regulatorische Anforderungen, Buchhaltung und Rechtsbegleitung",
          "Begleitung nach Registrierung und Start",
        ],
      },
    ],
  },
  ar: {
    label: "صيغ العمل",
    title: "InterLex لا تبيع إجابات منفصلة، بل تبني حلولًا عملية حول نتيجة واضحة.",
    intro:
      "في الصفحة الرئيسية يجب أن يرى العميل فورًا صيغ تعاون واضحة: دخول السوق، والهيكلة العابرة للحدود، والدعم المستمر. هذا يساعد على فهم نقطة البداية، والصيغة الأنسب للمهمة، وما يجب أن تكون عليه الخطوة العملية التالية.",
    cta: "ناقش المشروع",
    packages: [
      {
        name: "دخول السوق",
        body: "للملاك والفرق التشغيلية التي تحتاج إلى دخول كازاخستان أو جورجيا بخطة واضحة للإطلاق والتسجيل والدعم.",
        points: [
          "اختيار الولاية القضائية ومنطق الدخول",
          "خريطة طريق لتسجيل الشركة والإطلاق",
          "المنطق الضريبي والامتثالي قبل بدء التنفيذ",
        ],
      },
      {
        name: "الهيكلة العابرة للحدود",
        body: "للمستثمرين والكيانات القابضة والمجموعات الدولية التي تحتاج إلى تجميع هيكل الملكية والمنطق الضريبي والعمليات بشكل صحيح.",
        points: [
          "مقارنة الولايات القضائية وبناء الهيكل",
          "منطق الملكية والمستثمر والإطار التشغيلي",
          "التخطيط لشراء الأصول والعناية الواجبة ودعم التفاوض",
          "نقل المشروع إلى فريق الدولة المناسب",
        ],
      },
      {
        name: "الدعم المحلي",
        body: "للعملاء الذين يفهمون السوق بالفعل ويريدون الانتقال بسرعة إلى العمل القانوني والمحاسبي والتشغيلي المحلي.",
        points: [
          "نقل المشروع إلى كازاخستان أو جورجيا من دون فقدان السياق",
          "الامتثال المحلي والمحاسبة والدعم القانوني",
          "الدعم بعد التسجيل والإطلاق",
        ],
      },
    ],
  },
  tr: {
    label: "Çalışma Formatları",
    title: "InterLex tek tek cevaplar satmaz. Somut sonuç etrafında çalışan çözümler kurar.",
    intro:
      "Ana sayfada müşteri iş birliği formatlarını hemen görmelidir: pazara giriş, sınır ötesi yapılandırma ve devam eden destek. Bu, nereden başlanacağını, hangi formatın göreve uyduğunu ve sıradaki pratik adımın ne olması gerektiğini hızla anlamayı sağlar.",
    cta: "Projeyi Görüş",
    packages: [
      {
        name: "Pazara Giriş",
        body: "Kazakistan veya Gürcistan'a net bir lansman, kayıt ve destek planıyla girmek isteyen sahipler ve operasyon ekipleri için.",
        points: [
          "Yargı alanı seçimi ve giriş mantığı",
          "Şirket kuruluşu ve lansman yol haritası",
          "İcra başlamadan önce vergi ve uyum mantığı",
        ],
      },
      {
        name: "Sınır Ötesi Yapılandırma",
        body: "Mülkiyet yapısını, vergi modelini ve operasyon mimarisini doğru kurması gereken yatırımcılar, holdingler ve uluslararası gruplar için.",
        points: [
          "Yargı alanı karşılaştırması ve yapı tasarımı",
          "Mülkiyet, yatırımcı ve operasyon mantığı",
          "Varlık alımı planlaması, due diligence ve müzakere desteği",
          "Projenin doğru ülke ekibine aktarılması",
        ],
      },
      {
        name: "Yerel Destek",
        body: "Pazarı zaten bilen ve hızla yerel hukuki, muhasebe ve operasyon desteğine geçmek isteyen müşteriler için.",
        points: [
          "Bağlam kaybetmeden Kazakistan veya Gürcistan'a devir",
          "Yerel uyum, muhasebe ve hukuki destek",
          "Kayıt ve lansman sonrasında destek",
        ],
      },
    ],
  },
  es: {
    label: "Formatos de trabajo",
    title: "InterLex no vende respuestas aisladas. Construye soluciones de trabajo alrededor de un resultado concreto.",
    intro:
      "En la página principal el cliente debe ver enseguida formatos claros de colaboración: entrada al mercado, estructuración internacional y soporte continuo. Esto ayuda a entender desde dónde conviene empezar, qué formato encaja con el mandato y cuál debe ser el siguiente paso práctico.",
    cta: "Hablar del proyecto",
    packages: [
      {
        name: "Entrada al mercado",
        body: "Para propietarios y equipos operativos que necesitan entrar en Kazajistán o Georgia con un plan claro de lanzamiento, registro y soporte.",
        points: [
          "Elección de jurisdicción y lógica de entrada",
          "Hoja de ruta para registro de la empresa y lanzamiento",
          "Lógica fiscal y regulatoria antes de empezar la ejecución",
        ],
      },
      {
        name: "Estructuración internacional",
        body: "Para inversores, holdings y grupos internacionales que necesitan montar correctamente la estructura de propiedad, el modelo fiscal y la arquitectura operativa.",
        points: [
          "Comparación de jurisdicciones y diseño de estructura",
          "Lógica de propiedad, inversor y operación",
          "Preparación de compra de activos, due diligence y apoyo en negociación",
          "Transferencia del proyecto al equipo país correcto",
        ],
      },
      {
        name: "Soporte local",
        body: "Para clientes que ya entienden el mercado y quieren pasar rápido al trabajo legal, contable y operativo local.",
        points: [
          "Paso a Kazajistán o Georgia sin perder contexto",
          "Cumplimiento local, contabilidad y soporte legal",
          "Acompañamiento después del registro y del lanzamiento",
        ],
      },
    ],
  },
};

export function getSalesContent(locale: Locale): SalesContent {
  return localizedSalesContent[locale];
}
