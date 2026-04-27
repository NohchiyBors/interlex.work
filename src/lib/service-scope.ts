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

const content: Record<Locale, ServiceScopeContent> = {
  en: {
    intentLabel: "What InterLex Helps Solve",
    intentTitle: "InterLex is most useful when the client needs the whole project assembled correctly, not just one isolated service.",
    intentBody:
      "We step in when the client needs to choose the jurisdiction, launch the company, build the ownership structure, clear banking and tax questions, organise accounting and legal support, and, where needed, prepare an investment project, a deal, or a due diligence process. If you plan to acquire an asset in Kazakhstan or Georgia, InterLex can handle target screening, risk review, deal structuring, negotiation support, and working communication with the state where the project requires it.",
    directoryLabel: "InterLex Practices",
    directoryTitle: "Core directions the team handles in practice",
    directoryBody:
      "Below is a compact overview of the main InterLex service lines. On the homepage this is not a catalogue for its own sake, but a quick picture of the tasks the team can take on and carry through to a result.",
    groups: [
      { category: "Launch", services: ["Business Registration"] },
      { category: "Optimisation", services: ["Special Regimes and Zones"] },
      { category: "Support", services: ["Accounting and Legal Support"] },
      { category: "Governance", services: ["Corporate Management"] },
      { category: "Operations", services: ["Company Under Management", "Banking Support"] },
      { category: "Investment", services: ["Investor Support and GR"] },
      { category: "Transactions", services: ["M&A Advisory", "Due Diligence", "Asset Transactions — Real Estate, Manufacturing, Mineral Deposits"] },
    ],
  },
  ru: {
    intentLabel: "Услуги под ключ",
    intentTitle: "Регистрация — это только начало. Мы остаемся с проектом и после запуска.",
    intentBody:
      "InterLex берет на себя не один документ, а всю рабочую инфраструктуру проекта: запуск компании, банковский и налоговый контур, бухгалтерию, юридическое сопровождение, сделки, GR и инвесторские маршруты. Вы управляете бизнесом, мы держим на себе среду, в которой он должен работать без лишних сбоев.",
    directoryLabel: "Что закрывает InterLex",
    directoryTitle: "От первого документа до запуска операций все можно собрать через одно окно.",
    directoryBody:
      "Ниже собраны основные направления InterLex. На главной это не каталог ради каталога, а карта задач, которые можно передать одной команде: от регистрации и специальных режимов до due diligence, GR и ежедневного сопровождения бизнеса.",
    groups: [
      { category: "Запуск", services: ["Регистрация бизнеса"] },
      { category: "Оптимизация", services: ["Специальные режимы и зоны"] },
      { category: "Сопровождение", services: ["Бухгалтерия и юридическая поддержка"] },
      { category: "Управление", services: ["Корпоративный менеджмент"] },
      { category: "Операции", services: ["Компания под управлением", "Банковское сопровождение"] },
      { category: "Инвестиции", services: ["Инвесторская поддержка и GR"] },
      { category: "Сделки", services: ["M&A-консультирование", "Due diligence", "Сделки с активами — недвижимость, производство, месторождения"] },
    ],
  },
  zh: {
    intentLabel: "InterLex 能帮助什么",
    intentTitle: "当客户需要的不是单项服务，而是把整个项目正确搭建起来时，InterLex 最有价值。",
    intentBody:
      "当项目需要选择司法辖区、设立公司、设计持股结构、梳理银行与税务问题、搭建会计和法律支持体系，或在必要时准备投资项目、交易和尽职调查时，我们会介入。如果您计划在哈萨克斯坦或格鲁吉亚收购资产，InterLex 也可以负责目标筛选、风险审查、交易结构设计、谈判支持，以及在项目需要时与政府部门进行工作层面的沟通。",
    directoryLabel: "InterLex 的业务方向",
    directoryTitle: "团队在实践中处理的核心服务方向",
    directoryBody:
      "下面汇总的是 InterLex 的主要服务方向。放在首页上，它不是为了做一份冗长目录，而是让客户快速看清团队能接什么任务，并把项目推进到结果。",
    groups: [
      { category: "启动", services: ["企业注册"] },
      { category: "优化", services: ["特殊制度与专区"] },
      { category: "支持", services: ["会计与法律支持"] },
      { category: "治理", services: ["公司治理"] },
      { category: "运营", services: ["受托管理公司", "银行支持"] },
      { category: "投资", services: ["投资者支持与政府关系"] },
      { category: "交易", services: ["并购顾问", "尽职调查", "资产交易——不动产、制造业、矿产资源"] },
    ],
  },
  it: {
    intentLabel: "In cosa aiuta InterLex",
    intentTitle: "InterLex serve quando non basta acquistare un singolo servizio, ma occorre impostare correttamente l'intero progetto.",
    intentBody:
      "Interveniamo quando occorre scegliere la giurisdizione, avviare la società, costruire la struttura proprietaria, risolvere i temi bancari e fiscali, organizzare il supporto contabile e legale e, se necessario, preparare un progetto di investimento, una transazione o una due diligence. Se state pianificando l'acquisto di un asset in Kazakistan o in Georgia, InterLex può occuparsi della valutazione preliminare del target, dell'analisi dei rischi, della strutturazione dell'operazione, del supporto negoziale e dell'interlocuzione operativa con lo Stato quando il progetto lo richiede.",
    directoryLabel: "Aree di pratica InterLex",
    directoryTitle: "Le direzioni chiave su cui il team lavora nella pratica",
    directoryBody:
      "Qui sotto trovate una sintesi delle principali linee di servizio di InterLex. In homepage non deve sembrare un catalogo copiato, ma una rapida panoramica delle attività che il team può prendere in carico e portare a risultato.",
    groups: [
      { category: "Avvio", services: ["Registrazione dell'impresa"] },
      { category: "Ottimizzazione", services: ["Regimi speciali e zone"] },
      { category: "Supporto", services: ["Contabilità e supporto legale"] },
      { category: "Governance", services: ["Gestione societaria"] },
      { category: "Operatività", services: ["Società in gestione", "Supporto bancario"] },
      { category: "Investimenti", services: ["Supporto agli investitori e GR"] },
      { category: "Operazioni straordinarie", services: ["Consulenza M&A", "Due diligence", "Operazioni su asset — immobiliare, manifatturiero, giacimenti"] },
    ],
  },
  fr: {
    intentLabel: "Ce qu’InterLex prend en charge",
    intentTitle: "InterLex est utile lorsqu’il ne s’agit pas seulement d’acheter un service, mais de monter correctement l’ensemble du projet.",
    intentBody:
      "Nous intervenons lorsqu’il faut choisir la juridiction, lancer la société, construire la structure de détention, traiter les sujets bancaires et fiscaux, mettre en place l’accompagnement comptable et juridique et, si nécessaire, préparer un projet d’investissement, une transaction ou une due diligence. Si vous envisagez d’acquérir un actif au Kazakhstan ou en Géorgie, InterLex peut prendre en charge l’évaluation préliminaire de la cible, l’analyse des risques, la structuration de l’opération, l’appui aux négociations et, lorsque le projet l’exige, l’interaction de travail avec les autorités.",
    directoryLabel: "Pratiques InterLex",
    directoryTitle: "Les principaux axes sur lesquels l’équipe travaille en pratique",
    directoryBody:
      "Vous trouverez ci-dessous un aperçu compact des principales lignes de service d’InterLex. Sur la page d’accueil, ce bloc ne sert pas à reproduire un catalogue, mais à montrer rapidement quels sujets l’équipe peut prendre en main et mener jusqu’au résultat.",
    groups: [
      { category: "Lancement", services: ["Enregistrement d’entreprise"] },
      { category: "Optimisation", services: ["Régimes spéciaux et zones"] },
      { category: "Suivi", services: ["Comptabilité et support juridique"] },
      { category: "Gouvernance", services: ["Gestion corporate"] },
      { category: "Opérations", services: ["Société sous gestion", "Support bancaire"] },
      { category: "Investissement", services: ["Support investisseurs et GR"] },
      { category: "Transactions", services: ["Conseil M&A", "Due diligence", "Transactions d'actifs — immobilier, industrie, gisements"] },
    ],
  },
  ka: {
    intentLabel: "რას აკეთებს InterLex",
    intentTitle: "InterLex საჭიროა მაშინ, როცა კლიენტს ცალკე სერვისი კი არა, მთელი პროექტის სწორად აწყობა სჭირდება.",
    intentBody:
      "ჩვენ ვერთვებით მაშინ, როცა საჭიროა იურისდიქციის არჩევა, კომპანიის გაშვება, მფლობელობის სტრუქტურის აწყობა, საბანკო და საგადასახადო საკითხების გავლა, ბუღალტრული და იურიდიული მხარდაჭერის ორგანიზება და საჭიროების შემთხვევაში საინვესტიციო პროექტის, გარიგების ან due diligence-ის მომზადება. თუ ყაზახეთში ან საქართველოში აქტივის შეძენას გეგმავთ, InterLex-ს შეუძლია აიღოს მიზნის სკრინინგი, რისკების შეფასება, გარიგების სტრუქტურირება, მოლაპარაკებების მხარდაჭერა და, საჭიროების შემთხვევაში, სამუშაო კომუნიკაცია სახელმწიფო ორგანოებთან.",
    directoryLabel: "InterLex-ის პრაქტიკები",
    directoryTitle: "ძირითადი მიმართულებები, რომლებზეც გუნდი პრაქტიკაში მუშაობს",
    directoryBody:
      "ქვემოთ შეკრებილია InterLex-ის მთავარი სერვისული მიმართულებები. მთავარ გვერდზე ეს არ არის კატალოგი კატალოგისთვის, არამედ სწრაფი სურათი იმისა, რა ამოცანებს იღებს გუნდი და როგორ მიჰყავს პროექტი შედეგამდე.",
    groups: [
      { category: "გაშვება", services: ["ბიზნესის რეგისტრაცია"] },
      { category: "ოპტიმიზაცია", services: ["სპეციალური რეჟიმები და ზონები"] },
      { category: "მხარდაჭერა", services: ["ბუღალტრული და იურიდიული მხარდაჭერა"] },
      { category: "მართვა", services: ["კორპორაციული მენეჯმენტი"] },
      { category: "ოპერაციები", services: ["კომპანია მართვაში", "საბანკო მხარდაჭერა"] },
      { category: "ინვესტიციები", services: ["ინვესტორის მხარდაჭერა და GR"] },
      { category: "გარიგებები", services: ["M&A კონსულტაცია", "Due diligence", "აქტივების გარიგებები — უძრავი ქონება, წარმოება, საბადოები"] },
    ],
  },
  de: {
    intentLabel: "Wobei InterLex hilft",
    intentTitle: "InterLex ist dann besonders nützlich, wenn nicht nur eine Einzelleistung gebraucht wird, sondern das ganze Projekt sauber aufgebaut werden muss.",
    intentBody:
      "Wir steigen ein, wenn die passende Jurisdiktion gewählt, die Gesellschaft gestartet, die Beteiligungsstruktur aufgebaut, Bank- und Steuerfragen geklärt, Buchhaltung und Rechtsbegleitung organisiert und bei Bedarf ein Investmentprojekt, eine Transaktion oder eine Due-Diligence-Prüfung vorbereitet werden müssen. Wenn Sie den Erwerb eines Assets in Kasachstan oder Georgien planen, kann InterLex die Prüfung des Zielobjekts, die Risikoanalyse, die Deal-Strukturierung, die Verhandlungsunterstützung und, falls das Projekt es verlangt, die laufende Abstimmung mit dem Staat übernehmen.",
    directoryLabel: "InterLex-Praxisfelder",
    directoryTitle: "Die wichtigsten Richtungen, in denen das Team praktisch arbeitet",
    directoryBody:
      "Unten steht ein kompakter Überblick über die wichtigsten Servicebereiche von InterLex. Auf der Startseite soll das kein Katalog um des Katalogs willen sein, sondern ein schneller Eindruck davon, welche Aufgaben das Team übernehmen und bis zum Ergebnis führen kann.",
    groups: [
      { category: "Start", services: ["Unternehmensregistrierung"] },
      { category: "Optimierung", services: ["Sonderregime und Zonen"] },
      { category: "Begleitung", services: ["Buchhaltung und Rechtsbegleitung"] },
      { category: "Governance", services: ["Corporate Management"] },
      { category: "Betrieb", services: ["Gesellschaft unter Management", "Bankbegleitung"] },
      { category: "Investitionen", services: ["Investorenbegleitung und GR"] },
      { category: "Transaktionen", services: ["M&A-Beratung", "Due Diligence", "Asset-Transaktionen — Immobilien, Produktion, Lagerstätten"] },
    ],
  },
  ar: {
    intentLabel: "ما الذي تساعد فيه InterLex",
    intentTitle: "تكون InterLex مفيدة عندما لا يحتاج العميل إلى خدمة منفصلة فقط، بل إلى تجميع المشروع بالكامل بشكل صحيح.",
    intentBody:
      "نتدخل عندما يكون المطلوب اختيار الولاية القضائية، وإطلاق الشركة، وبناء هيكل الملكية، وحل المسائل المصرفية والضريبية، وتنظيم الدعم المحاسبي والقانوني، وعند الحاجة إعداد مشروع استثماري أو صفقة أو عملية عناية واجبة. وإذا كنتم تخططون لشراء أصل في كازاخستان أو جورجيا، يمكن لـ InterLex تولي فحص الهدف، وتقييم المخاطر، وهيكلة الصفقة، ودعم التفاوض، والتواصل العملي مع الجهات الحكومية عندما يتطلب المشروع ذلك.",
    directoryLabel: "ممارسات InterLex",
    directoryTitle: "المجالات الأساسية التي يعمل عليها الفريق عمليًا",
    directoryBody:
      "فيما يلي نظرة موجزة على خطوط الخدمة الرئيسية لدى InterLex. هذا القسم في الصفحة الرئيسية ليس كتالوجًا لمجرد العرض، بل صورة سريعة للمهام التي يستطيع الفريق توليها ودفعها إلى نتيجة.",
    groups: [
      { category: "الإطلاق", services: ["تسجيل الأعمال"] },
      { category: "التحسين", services: ["الأنظمة والمناطق الخاصة"] },
      { category: "الدعم", services: ["المحاسبة والدعم القانوني"] },
      { category: "الحوكمة", services: ["الإدارة المؤسسية"] },
      { category: "العمليات", services: ["شركة تحت الإدارة", "الدعم المصرفي"] },
      { category: "الاستثمار", services: ["دعم المستثمرين وGR"] },
      { category: "الصفقات", services: ["استشارات الاندماج والاستحواذ", "العناية الواجبة", "صفقات الأصول — عقارات، تصنيع، رواسب معدنية"] },
    ],
  },
  tr: {
    intentLabel: "InterLex neyi çözer",
    intentTitle: "InterLex, tek bir hizmet satın almak değil, bütün projeyi doğru kurmak gerektiğinde en faydalı olur.",
    intentBody:
      "Doğru yargı alanını seçmek, şirketi kurmak, ortaklık yapısını oluşturmak, bankacılık ve vergi konularını çözmek, muhasebe ve hukuki desteği kurmak ve gerektiğinde yatırım projesi, işlem veya due diligence hazırlamak gerektiğinde devreye giriyoruz. Kazakistan veya Gürcistan'da bir varlık satın almayı planlıyorsanız, InterLex hedef taraması, risk incelemesi, işlem yapılandırması, müzakere desteği ve proje gerektiriyorsa devletle çalışma iletişimini de üstlenebilir.",
    directoryLabel: "InterLex Pratikleri",
    directoryTitle: "Ekibin sahada gerçekten çalıştığı temel yönler",
    directoryBody:
      "Aşağıda InterLex'in ana hizmet hatlarının kısa bir özeti yer alır. Ana sayfada bu bölüm katalog olsun diye değil, ekibin hangi işleri üstlenip sonuca götürebildiğini hızlıca göstermek için vardır.",
    groups: [
      { category: "Lansman", services: ["Şirket kuruluşu"] },
      { category: "Optimizasyon", services: ["Özel rejimler ve bölgeler"] },
      { category: "Destek", services: ["Muhasebe ve hukuki destek"] },
      { category: "Yönetişim", services: ["Kurumsal yönetim"] },
      { category: "Operasyonlar", services: ["Yönetim altındaki şirket", "Bankacılık desteği"] },
      { category: "Yatırım", services: ["Yatırımcı desteği ve GR"] },
      { category: "İşlemler", services: ["M&A danışmanlığı", "Due diligence", "Varlık işlemleri — gayrimenkul, üretim, maden yatakları"] },
    ],
  },
  es: {
    intentLabel: "En qué ayuda InterLex",
    intentTitle: "InterLex es útil cuando no basta con contratar un servicio aislado, sino que hace falta armar bien todo el proyecto.",
    intentBody:
      "Entramos cuando hay que elegir la jurisdicción, lanzar la empresa, construir la estructura de propiedad, resolver los temas bancarios y fiscales, organizar el soporte contable y legal y, si hace falta, preparar un proyecto de inversión, una transacción o una due diligence. Si está planificando la compra de un activo en Kazajistán o Georgia, InterLex puede encargarse de la evaluación inicial del objetivo, la revisión de riesgos, la estructuración de la operación, el apoyo en negociación y la interacción de trabajo con el Estado cuando el proyecto lo requiere.",
    directoryLabel: "Prácticas de InterLex",
    directoryTitle: "Las direcciones clave con las que el equipo trabaja en la práctica",
    directoryBody:
      "A continuación se resumen las principales líneas de servicio de InterLex. En la página principal no funciona como catálogo por el catálogo mismo, sino como una vista rápida de las tareas que el equipo puede asumir y llevar hasta resultado.",
    groups: [
      { category: "Lanzamiento", services: ["Registro de empresa"] },
      { category: "Optimización", services: ["Regímenes y zonas especiales"] },
      { category: "Soporte", services: ["Contabilidad y soporte legal"] },
      { category: "Gobierno", services: ["Gestión corporativa"] },
      { category: "Operaciones", services: ["Empresa bajo gestión", "Soporte bancario"] },
      { category: "Inversión", services: ["Apoyo al inversor y GR"] },
      { category: "Transacciones", services: ["Asesoría M&A", "Due diligence", "Operaciones sobre activos — inmuebles, producción, yacimientos"] },
    ],
  },
};

export function getServiceScopeContent(locale: Locale): ServiceScopeContent {
  return content[locale];
}
