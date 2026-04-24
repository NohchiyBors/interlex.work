import type { Locale } from "@/lib/i18n";

type HubSeoKind = "registration" | "regime" | "transaction" | "investors";
type HubSeoTarget = "kz" | "ge" | "hub";

type LocalizedEntry = {
  title: string;
  description: string;
  primaryCta?: string;
};

type HubSeoRoute = {
  slug: string;
  kind: HubSeoKind;
  target: HubSeoTarget;
  related: string[];
  entries: Record<Locale, LocalizedEntry>;
};

type LocaleCopy = {
  eyebrow: Record<HubSeoKind, string>;
  intro: Record<HubSeoKind, string>;
  summaryLabel: string;
  pointsLabel: string;
  points: Record<HubSeoKind, string[]>;
  routeLabel: string;
  routeTitle: Record<HubSeoTarget, string>;
  routeBody: Record<HubSeoTarget, string>;
  primaryCta: string;
};

const routes: HubSeoRoute[] = [
  {
    slug: "kz",
    kind: "registration",
    target: "kz",
    related: ["kz/sez", "kz/aifc"],
    entries: {
      en: {
        title: "Business Registration in Kazakhstan for Foreign Owners — InterLex",
        description:
          "Entry into Kazakhstan for foreign owners: company form, documents, tax logic, banking route, and handoff into the local InterLex team.",
      },
      ru: {
        title: "Регистрация бизнеса в Казахстане для иностранцев — InterLex",
        description:
          "Выход в Казахстан для иностранных собственников: форма компании, документы, налоговая логика, банковский трек и передача проекта в локальную команду InterLex.",
      },
      zh: {
        title: "外国人在哈萨克斯坦注册公司 — InterLex",
        description:
          "面向外国所有人的哈萨克斯坦进入路线：公司形式、文件、税务逻辑、银行路径，以及转入 InterLex 当地团队。",
      },
      it: {
        title: "Registrazione di impresa in Kazakistan per proprietari stranieri — InterLex",
        description:
          "Ingresso in Kazakistan per proprietari stranieri: forma societaria, documenti, logica fiscale, percorso bancario e passaggio al team locale InterLex.",
      },
      fr: {
        title: "Enregistrer une entreprise au Kazakhstan pour étrangers — InterLex",
        description:
          "Entrée au Kazakhstan pour des propriétaires étrangers : forme de société, documents, logique fiscale, parcours bancaire et transfert vers l'équipe locale d'InterLex.",
      },
      ka: {
        title: "ბიზნესის რეგისტრაცია ყაზახეთში უცხოელებისთვის — InterLex",
        description:
          "ყაზახეთში შესვლის გზა უცხოელი მფლობელებისთვის: კომპანიის ფორმა, დოკუმენტები, საგადასახადო ლოგიკა, საბანკო ტრეკი და გადაცემა InterLex-ის ადგილობრივ გუნდში.",
      },
      de: {
        title: "Unternehmensregistrierung in Kasachstan für Ausländer — InterLex",
        description:
          "Markteintritt in Kasachstan für ausländische Eigentümer: Gesellschaftsform, Dokumente, Steuerlogik, Banking-Route und Übergabe an das lokale InterLex-Team.",
      },
      ar: {
        title: "تسجيل الأعمال في كازاخستان للأجانب — InterLex",
        description:
          "مسار الدخول إلى كازاخستان للمالكين الأجانب: شكل الشركة، المستندات، المنطق الضريبي، المسار البنكي، ونقل المشروع إلى فريق InterLex المحلي.",
      },
      tr: {
        title: "Yabancılar için Kazakistan'da şirket kuruluşu — InterLex",
        description:
          "Yabancı sahipler için Kazakistan'a giriş: şirket formu, belgeler, vergi mantığı, bankacılık rotası ve mandatın yerel InterLex ekibine devri.",
      },
      es: {
        title: "Registro de empresa en Kazajistán para extranjeros — InterLex",
        description:
          "Entrada en Kazajistán para propietarios extranjeros: forma societaria, documentos, lógica fiscal, ruta bancaria y traspaso al equipo local de InterLex.",
      },
    },
  },
  {
    slug: "kz/sez",
    kind: "regime",
    target: "kz",
    related: ["kz", "kz/aifc"],
    entries: {
      en: {
        title: "16 SEZs of Kazakhstan: incentives, profiles, turnkey setup",
        description:
          "Compare all 16 special economic zones of Kazakhstan by incentives, business profile, eligibility, and practical setup route before registration.",
      },
      ru: {
        title: "16 СЭЗ Казахстана: льготы, профили, регистрация под ключ",
        description:
          "Сравните 16 СЭЗ Казахстана по профилю, льготам и требованиям, чтобы выбрать площадку под реальный бизнес, а не под красивую презентацию режима.",
        primaryCta: "Выбрать подходящую СЭЗ",
      },
      zh: {
        title: "哈萨克斯坦 16 个经济特区：优惠、定位与落地注册",
        description:
          "在注册前比较哈萨克斯坦全部 16 个经济特区的优惠、业务定位、适用条件和实际进入路径。",
      },
      it: {
        title: "Le 16 SEZ del Kazakistan: incentivi, profili e registrazione turnkey",
        description:
          "Confronta tutte le 16 zone economiche speciali del Kazakistan per incentivi, profilo di business, requisiti e percorso pratico di ingresso prima della registrazione.",
      },
      fr: {
        title: "16 ZES du Kazakhstan : avantages, profils et enregistrement clé en main",
        description:
          "Comparez les 16 zones économiques spéciales du Kazakhstan par avantages, profil d'activité, critères d'accès et route pratique avant l'enregistrement.",
      },
      ka: {
        title: "ყაზახეთის 16 სპეციალური ეკონომიკური ზონა: შეღავათები, პროფილები და სრული რეგისტრაცია",
        description:
          "რეგისტრაციამდე შეადარეთ ყაზახეთის ყველა 16 სპეციალური ეკონომიკური ზონა შეღავათებით, ბიზნეს-პროფილით, მოთხოვნებით და პრაქტიკული შესვლის გზით.",
      },
      de: {
        title: "16 SWZ in Kasachstan: Vorteile, Profile und schlüsselfertige Registrierung",
        description:
          "Vergleichen Sie alle 16 Sonderwirtschaftszonen Kasachstans nach Vorteilen, Geschäftsprofil, Zugangsvoraussetzungen und praktischer Eintrittsroute vor der Registrierung.",
      },
      ar: {
        title: "16 منطقة اقتصادية خاصة في كازاخستان: الحوافز والملفات والتسجيل المتكامل",
        description:
          "قارن بين جميع المناطق الاقتصادية الخاصة الـ 16 في كازاخستان من حيث الحوافز وطبيعة الأعمال والمتطلبات ومسار الدخول العملي قبل التسجيل.",
      },
      tr: {
        title: "Kazakistan'ın 16 SEZ bölgesi: teşvikler, profiller ve uçtan uca kurulum",
        description:
          "Kayıttan önce Kazakistan'ın tüm 16 özel ekonomik bölgesini teşvikler, iş profili, uygunluk ve pratik giriş rotası açısından karşılaştırın.",
      },
      es: {
        title: "Las 16 ZEE de Kazajistán: incentivos, perfiles y registro llave en mano",
        description:
          "Compare las 16 zonas económicas especiales de Kazajistán por incentivos, perfil de negocio, requisitos y ruta práctica de entrada antes del registro.",
      },
    },
  },
  {
    slug: "kz/aifc",
    kind: "regime",
    target: "kz",
    related: ["kz", "investors"],
    entries: {
      en: {
        title: "AIFC Registration — fintech, funds, English law",
        description:
          "AIFC entry for fintech, funds, holding and investment structures using English law and the right regulatory route.",
      },
      ru: {
        title: "Регистрация в МФЦА (AIFC) — финтех, фонды, английское право",
        description:
          "Маршрут входа в МФЦА для финтеха, фондов, холдинговых и инвестиционных структур с английским правом и правильной регуляторной логикой.",
      },
      zh: {
        title: "AIFC 注册：金融科技、基金与英国法框架",
        description:
          "面向金融科技、基金、控股和投资结构的 AIFC 路线，结合英国法框架与合适的监管逻辑。",
      },
      it: {
        title: "Registrazione AIFC — fintech, fondi e diritto inglese",
        description:
          "Percorso AIFC per fintech, fondi, strutture holding e d'investimento con diritto inglese e corretta logica regolatoria.",
      },
      fr: {
        title: "Enregistrement à l'AIFC — fintech, fonds et droit anglais",
        description:
          "Route d'entrée à l'AIFC pour fintech, fonds, structures holding et d'investissement avec droit anglais et logique réglementaire adaptée.",
      },
      ka: {
        title: "AIFC-ში რეგისტრაცია — ფინტექი, ფონდები და ინგლისური სამართალი",
        description:
          "AIFC-ის მარშრუტი ფინტექისთვის, ფონდებისთვის, ჰოლდინგური და საინვესტიციო სტრუქტურებისთვის ინგლისური სამართლისა და სწორი რეგულატორული ლოგიკის საფუძველზე.",
      },
      de: {
        title: "AIFC-Registrierung — Fintech, Fonds und englisches Recht",
        description:
          "AIFC-Einstieg für Fintech, Fonds, Holding- und Investmentstrukturen mit englischem Recht und passender regulatorischer Route.",
      },
      ar: {
        title: "التسجيل في AIFC — فينتك، صناديق، وقانون إنجليزي",
        description:
          "مسار AIFC لشركات الفينتك والصناديق والهياكل القابضة والاستثمارية ضمن إطار القانون الإنجليزي والمنطق التنظيمي الصحيح.",
      },
      tr: {
        title: "AIFC kaydı — fintech, fonlar ve İngiliz hukuku",
        description:
          "Fintech, fonlar, holding ve yatırım yapıları için İngiliz hukuku ve doğru düzenleyici rota ile AIFC girişi.",
      },
      es: {
        title: "Registro en AIFC — fintech, fondos y derecho inglés",
        description:
          "Ruta AIFC para fintech, fondos y estructuras holding o de inversión con derecho inglés y la lógica regulatoria correcta.",
      },
    },
  },
  {
    slug: "ge",
    kind: "registration",
    target: "ge",
    related: ["ge/vz", "investors"],
    entries: {
      en: {
        title: "Open a Company in Georgia: Virtual Zone, LLC, FIZ — in 1 day",
        description:
          "Georgia company setup through LLC, Virtual Zone, and FIZ-style routes with fast entry logic and a clean handoff to the Georgia team.",
      },
      ru: {
        title: "Открыть компанию в Грузии: Virtual Zone, LLC, СИЗ — за 1 день",
        description:
          "Запуск компании в Грузии через LLC, Virtual Zone и режимы СИЗ с быстрой логикой входа и передачей проекта в грузинскую команду.",
      },
      zh: {
        title: "在格鲁吉亚开公司：Virtual Zone、LLC、FIZ — 1 天内",
        description:
          "通过 LLC、Virtual Zone 和 FIZ 类路径在格鲁吉亚设立公司，快速完成进入逻辑并转入格鲁吉亚团队。",
      },
      it: {
        title: "Aprire una società in Georgia: Virtual Zone, LLC, FIZ — in 1 giorno",
        description:
          "Avvio di una società in Georgia tramite LLC, Virtual Zone e percorsi FIZ con logica di ingresso rapida e passaggio al team georgiano.",
      },
      fr: {
        title: "Ouvrir une société en Géorgie : Virtual Zone, LLC, FIZ — en 1 jour",
        description:
          "Lancement d'une société en Géorgie via LLC, Virtual Zone et routes de type FIZ avec une logique d'entrée rapide et un transfert vers l'équipe géorgienne.",
      },
      ka: {
        title: "კომპანიის გახსნა საქართველოში: Virtual Zone, LLC, FIZ — 1 დღეში",
        description:
          "კომპანიის გაშვება საქართველოში LLC-ის, Virtual Zone-ის და FIZ ტიპის გზებით სწრაფი შესვლის ლოგიკით და გადაცემით ქართულ გუნდში.",
      },
      de: {
        title: "Eine Gesellschaft in Georgien eröffnen: Virtual Zone, LLC, FIZ — in 1 Tag",
        description:
          "Gesellschaftsaufbau in Georgien über LLC, Virtual Zone und FIZ-Routen mit schneller Eintrittslogik und sauberer Übergabe an das georgische Team.",
      },
      ar: {
        title: "فتح شركة في جورجيا: Virtual Zone و LLC و FIZ — خلال يوم واحد",
        description:
          "إطلاق شركة في جورجيا عبر LLC وVirtual Zone ومسارات FIZ مع منطق دخول سريع ونقل واضح إلى الفريق الجورجي.",
      },
      tr: {
        title: "Gürcistan'da şirket açmak: Virtual Zone, LLC, FIZ — 1 günde",
        description:
          "LLC, Virtual Zone ve FIZ benzeri rotalar üzerinden Gürcistan'da şirket kurulumu; hızlı giriş mantığı ve Gürcistan ekibine temiz devir.",
      },
      es: {
        title: "Abrir una empresa en Georgia: Virtual Zone, LLC, FIZ — en 1 día",
        description:
          "Constitución de empresa en Georgia mediante LLC, Virtual Zone y rutas tipo FIZ con lógica de entrada rápida y traspaso al equipo georgiano.",
      },
    },
  },
  {
    slug: "ge/vz",
    kind: "regime",
    target: "ge",
    related: ["ge", "international-market-entry"],
    entries: {
      en: {
        title: "Virtual Zone Person in Georgia: 0% tax for IT companies",
        description:
          "Virtual Zone Person in Georgia for IT and service-export companies: eligibility check, 0% tax logic, and structure around real operations.",
      },
      ru: {
        title: "Virtual Zone Person Грузия: 0% налог для IT-компаний",
        description:
          "Virtual Zone Person в Грузии для IT и сервисного экспорта: проверка применимости режима, логика 0% налога и структура вокруг реальной деятельности, а не формальной оболочки.",
        primaryCta: "Открыть IT-компанию в Грузии",
      },
      zh: {
        title: "格鲁吉亚 Virtual Zone Person：IT 公司 0% 税率",
        description:
          "面向 IT 与服务出口公司的格鲁吉亚 Virtual Zone Person：适用性检查、0% 税务逻辑以及围绕真实运营的结构设计。",
      },
      it: {
        title: "Virtual Zone Person in Georgia: tassa 0% per aziende IT",
        description:
          "Regime Virtual Zone Person in Georgia per aziende IT ed export di servizi: verifica dell'idoneità, logica fiscale 0% e struttura legata all'operatività reale.",
      },
      fr: {
        title: "Virtual Zone Person en Géorgie : fiscalité 0 % pour les sociétés IT",
        description:
          "Régime Virtual Zone Person en Géorgie pour les sociétés IT et l'export de services : vérification d'éligibilité, logique 0 % et structure liée aux opérations réelles.",
      },
      ka: {
        title: "Virtual Zone Person საქართველოში: 0% გადასახადი IT-კომპანიებისთვის",
        description:
          "Virtual Zone Person რეჟიმი საქართველოში IT და სერვისის ექსპორტის კომპანიებისთვის: შესაბამისობის შემოწმება, 0%-იანი საგადასახადო ლოგიკა და რეალურ ოპერაციებზე მიბმული სტრუქტურა.",
      },
      de: {
        title: "Virtual Zone Person in Georgien: 0 % Steuer für IT-Unternehmen",
        description:
          "Virtual-Zone-Person-Regime in Georgien für IT- und Service-Export-Unternehmen: Eignungsprüfung, 0-%-Steuerlogik und Strukturierung um reale Operations.",
      },
      ar: {
        title: "Virtual Zone Person في جورجيا: ضريبة 0% لشركات IT",
        description:
          "نظام Virtual Zone Person في جورجيا لشركات التقنية وتصدير الخدمات: فحص الأهلية، منطق ضريبة 0%، وهيكلة مرتبطة بالنشاط الحقيقي.",
      },
      tr: {
        title: "Gürcistan Virtual Zone Person: IT şirketleri için %0 vergi",
        description:
          "IT ve hizmet ihracatı yapan şirketler için Gürcistan Virtual Zone Person rejimi: uygunluk kontrolü, %0 vergi mantığı ve gerçek operasyona bağlı yapı.",
      },
      es: {
        title: "Virtual Zone Person en Georgia: 0% de impuesto para empresas IT",
        description:
          "Régimen Virtual Zone Person en Georgia para empresas IT y de exportación de servicios: verificación de elegibilidad, lógica fiscal 0% y estructura ligada a la operación real.",
      },
    },
  },
  {
    slug: "ma",
    kind: "transaction",
    target: "hub",
    related: ["ma/dd", "investors"],
    entries: {
      en: {
        title: "Buy a Business in Kazakhstan and Georgia — turnkey M&A",
        description:
          "M&A support in Kazakhstan and Georgia: target screening, deal structure, negotiations, due diligence coordination, and a single cross-border advisory track.",
      },
      ru: {
        title: "Купить бизнес в Казахстане и Грузии — M&A под ключ",
        description:
          "Сопровождение M&A в Казахстане и Грузии: скрининг цели, структура сделки, переговоры, due diligence и единый cross-border трек до подписания.",
        primaryCta: "Обсудить покупку актива",
      },
      zh: {
        title: "在哈萨克斯坦和格鲁吉亚收购企业 — 一站式 M&A",
        description:
          "哈萨克斯坦与格鲁吉亚的 M&A 支持：目标筛选、交易结构、谈判、尽职调查协调以及统一的跨境顾问轨道。",
      },
      it: {
        title: "Acquistare un business in Kazakistan e Georgia — M&A chiavi in mano",
        description:
          "Supporto M&A in Kazakistan e Georgia: screening del target, struttura della transazione, negoziazione, coordinamento della due diligence e un unico track cross-border.",
      },
      fr: {
        title: "Acheter une entreprise au Kazakhstan et en Géorgie — M&A clé en main",
        description:
          "Accompagnement M&A au Kazakhstan et en Géorgie : screening de la cible, structure de transaction, négociation, coordination de due diligence et un seul track cross-border.",
      },
      ka: {
        title: "ბიზნესის ყიდვა ყაზახეთსა და საქართველოში — M&A სრული მხარდაჭერით",
        description:
          "M&A მხარდაჭერა ყაზახეთსა და საქართველოში: მიზნის სკრინინგი, გარიგების სტრუქტურა, მოლაპარაკებები, due diligence-ის კოორდინაცია და ერთიანი cross-border ტრეკი.",
      },
      de: {
        title: "Ein Unternehmen in Kasachstan und Georgien kaufen — M&A aus einer Hand",
        description:
          "M&A-Begleitung in Kasachstan und Georgien: Target-Screening, Deal-Struktur, Verhandlungen, Due-Diligence-Koordination und ein einheitlicher cross-border Track.",
      },
      ar: {
        title: "شراء شركة في كازاخستان وجورجيا — M&A متكامل",
        description:
          "دعم M&A في كازاخستان وجورجيا: فحص الهدف، هيكلة الصفقة، التفاوض، تنسيق due diligence، ومسار استشاري cross-border واحد.",
      },
      tr: {
        title: "Kazakistan ve Gürcistan'da şirket satın almak — uçtan uca M&A",
        description:
          "Kazakistan ve Gürcistan'da M&A desteği: hedef taraması, işlem yapısı, müzakereler, due diligence koordinasyonu ve tek bir cross-border çalışma hattı.",
      },
      es: {
        title: "Comprar una empresa en Kazajistán y Georgia — M&A llave en mano",
        description:
          "Soporte M&A en Kazajistán y Georgia: screening del objetivo, estructura de la operación, negociación, coordinación de due diligence y un único track cross-border.",
      },
    },
  },
  {
    slug: "ma/dd",
    kind: "transaction",
    target: "hub",
    related: ["ma", "investors"],
    entries: {
      en: {
        title: "Due Diligence before Acquisition — 5 audit tracks in 30 days",
        description:
          "Pre-deal due diligence for acquisition and investment: legal, tax, financial, operational, and compliance review within one coordinated workstream.",
      },
      ru: {
        title: "Due Diligence перед покупкой — 5 видов аудита за 30 дней",
        description:
          "Предсделочный due diligence для покупки и инвестиций: юридическая, налоговая, финансовая, операционная и compliance-проверка в одном координируемом процессе до оплаты сделки.",
        primaryCta: "Обсудить покупку актива",
      },
      zh: {
        title: "收购前 Due Diligence：30 天内完成 5 类审查",
        description:
          "用于收购和投资前的尽职调查：法律、税务、财务、运营与合规五条审查线，置于同一协调工作流中。",
      },
      it: {
        title: "Due Diligence prima dell'acquisto — 5 audit in 30 giorni",
        description:
          "Due diligence pre-deal per acquisizioni e investimenti: revisione legale, fiscale, finanziaria, operativa e compliance in un unico workstream coordinato.",
      },
      fr: {
        title: "Due Diligence avant acquisition — 5 audits en 30 jours",
        description:
          "Due diligence pré-transaction pour acquisition ou investissement : revue juridique, fiscale, financière, opérationnelle et compliance dans un seul flux coordonné.",
      },
      ka: {
        title: "Due Diligence შეძენამდე — 5 ტიპის აუდიტი 30 დღეში",
        description:
          "წინასაგარიგებო due diligence შეძენისა და ინვესტიციისთვის: იურიდიული, საგადასახადო, ფინანსური, ოპერაციული და compliance-შემოწმება ერთ კოორდინირებულ პროცესში.",
      },
      de: {
        title: "Due Diligence vor dem Kauf — 5 Prüfungsfelder in 30 Tagen",
        description:
          "Transaktionsvorbereitende Due Diligence für Kauf und Investment: rechtliche, steuerliche, finanzielle, operative und Compliance-Prüfung in einem koordinierten Ablauf.",
      },
      ar: {
        title: "Due Diligence قبل الشراء — 5 مسارات تدقيق خلال 30 يوماً",
        description:
          "فحص due diligence قبل الصفقة لعمليات الشراء والاستثمار: مراجعة قانونية وضريبية ومالية وتشغيلية وامتثال ضمن مسار عمل منسق واحد.",
      },
      tr: {
        title: "Satın alma öncesi Due Diligence — 30 günde 5 denetim hattı",
        description:
          "Satın alma ve yatırım öncesi due diligence: hukuki, vergisel, finansal, operasyonel ve compliance incelemesi tek bir koordineli iş akışında.",
      },
      es: {
        title: "Due Diligence antes de la compra — 5 vías de auditoría en 30 días",
        description:
          "Due diligence previo a la operación para compra e inversión: revisión jurídica, fiscal, financiera, operativa y de compliance en un único flujo coordinado.",
      },
    },
  },
  {
    slug: "investors",
    kind: "investors",
    target: "hub",
    related: ["ma", "kz/aifc"],
    entries: {
      en: {
        title: "Investment Programs in KZ and GE — grants, incentives, GR",
        description:
          "Kazakhstan and Georgia investment programs: incentives, grants, residency routes, GR support, and investor structuring before launch or deal execution.",
      },
      ru: {
        title: "Инвестиционные программы КЗ и ГЕ — гранты, преференции, GR",
        description:
          "Инвестиционные программы Казахстана и Грузии: преференции, гранты, резидентские маршруты, GR-поддержка и подготовка проекта к прямому рабочему диалогу с профильными органами.",
      },
      zh: {
        title: "哈萨克斯坦与格鲁吉亚投资项目：补助、优惠与 GR",
        description:
          "哈萨克斯坦和格鲁吉亚的投资项目：优惠、补助、居留路径、GR 支持以及在启动或交易前的投资人结构设计。",
      },
      it: {
        title: "Programmi di investimento in KZ e GE — grant, incentivi, GR",
        description:
          "Programmi di investimento in Kazakistan e Georgia: incentivi, grant, percorsi di residenza, supporto GR e strutturazione per investitori prima del lancio o della transazione.",
      },
      fr: {
        title: "Programmes d'investissement au KZ et en GE — subventions, avantages, GR",
        description:
          "Programmes d'investissement au Kazakhstan et en Géorgie : avantages, subventions, routes de résidence, support GR et structuration investisseur avant lancement ou transaction.",
      },
      ka: {
        title: "საინვესტიციო პროგრამები ყაზახეთსა და საქართველოში — გრანტები, შეღავათები, GR",
        description:
          "ყაზახეთისა და საქართველოს საინვესტიციო პროგრამები: შეღავათები, გრანტები, რეზიდენტობის გზები, GR-მხარდაჭერა და ინვესტორული სტრუქტურირება გაშვებამდე ან გარიგებამდე.",
      },
      de: {
        title: "Investitionsprogramme in KZ und GE — Zuschüsse, Anreize, GR",
        description:
          "Investitionsprogramme in Kasachstan und Georgien: Anreize, Zuschüsse, Residency-Routen, GR-Support und Investor-Structuring vor Launch oder Deal-Umsetzung.",
      },
      ar: {
        title: "البرامج الاستثمارية في كازاخستان وجورجيا — منح وحوافز وGR",
        description:
          "البرامج الاستثمارية في كازاخستان وجورجيا: الحوافز والمنح ومسارات الإقامة ودعم GR وهيكلة المستثمر قبل الإطلاق أو تنفيذ الصفقة.",
      },
      tr: {
        title: "KZ ve GE yatırım programları — hibeler, teşvikler, GR",
        description:
          "Kazakistan ve Gürcistan yatırım programları: teşvikler, hibeler, oturum rotaları, GR desteği ve lansman ya da işlem öncesi yatırımcı yapılandırması.",
      },
      es: {
        title: "Programas de inversión en KZ y GE — subvenciones, incentivos y GR",
        description:
          "Programas de inversión en Kazajistán y Georgia: incentivos, subvenciones, rutas de residencia, soporte GR y estructuración del inversor antes del lanzamiento o la operación.",
      },
    },
  },
];

const copy: Record<Locale, LocaleCopy> = {
  en: {
    eyebrow: {
      registration: "Market Entry",
      regime: "Special Regime",
      transaction: "Transactions",
      investors: "Investor Route",
    },
    intro: {
      registration:
        "Use this page when the country is already in focus and the client needs a clean route from first decision into local execution.",
      regime:
        "Use this page when a special regime may change the economics of the project and the setup must be tested before filing.",
      transaction:
        "Use this page when the mandate is moving toward acquisition, review, negotiation, or signing and the structure must support the deal.",
      investors:
        "Use this page when the project depends on incentives, state interaction, investor packaging, or a country-entry model built around capital.",
    },
    summaryLabel: "What This Route Covers",
    pointsLabel: "What Should Be Resolved At This Stage",
    points: {
      registration: [
        "Choose the right entry format before filings and launch begin.",
        "Align tax logic, documents, banking, and practical launch sequence early.",
        "Move the work into the correct local team without losing context.",
      ],
      regime: [
        "Check whether the regime really fits the business model and operating substance.",
        "Understand incentives, limits, timelines, and compliance before the application starts.",
        "Build the route so the regime supports real operations rather than just headline tax savings.",
      ],
      transaction: [
        "Define the target, risk map, and transaction sequence before commitment.",
        "Run diligence, structuring, and negotiations as one connected track instead of separate tasks.",
        "Keep the deal moving across countries without breaking the advisory context.",
      ],
      investors: [
        "Compare incentives, programs, and practical entry conditions before the project is fixed.",
        "Understand where GR support is required and where local execution will actually sit.",
        "Build the investor route before negotiations, filings, or asset acquisition begin.",
      ],
    },
    routeLabel: "Next Step",
    routeTitle: {
      kz: "Move Into The Kazakhstan Team",
      ge: "Move Into The Georgia Team",
      hub: "Keep The Mandate On A Cross-border Track",
    },
    routeBody: {
      kz: "If the project already belongs to Kazakhstan, the next step is to move from this routing page into the Kazakhstan practice and execute there without rebuilding the logic.",
      ge: "If the project already belongs to Georgia, the next step is to move from this routing page into the Georgia practice and execute there with the right local detail.",
      hub: "If the project still depends on comparison, structuring, investor logic, or a transaction path, keep it in the hub conversation first and only then route it into local execution.",
    },
    primaryCta: "Discuss Project",
  },
  ru: {
    eyebrow: {
      registration: "Выход на рынок",
      regime: "Специальный режим",
      transaction: "Сделки",
      investors: "Инвесторский маршрут",
    },
    intro: {
      registration:
        "Эта страница нужна, когда страна уже понятна и важно быстро перевести задачу от первого решения к локальному исполнению.",
      regime:
        "Эта страница нужна, когда специальный режим может менять экономику проекта и его нужно проверить до подачи и регистрации.",
      transaction:
        "Эта страница нужна, когда проект выходит на покупку, проверку, переговоры или подписание и структура должна поддерживать саму сделку.",
      investors:
        "Эта страница нужна, когда проект зависит от льгот, взаимодействия с государством, investor packaging или модели входа в страну через капитал.",
    },
    summaryLabel: "Что Закрывает Эта Страница",
    pointsLabel: "Что Важно Решить На Этом Этапе",
    points: {
      registration: [
        "Выбрать правильный формат входа до начала filings и запуска.",
        "Заранее связать налоги, документы, банки и реальную последовательность запуска.",
        "Передать задачу в нужную локальную команду без потери контекста.",
      ],
      regime: [
        "Понять, действительно ли режим подходит под модель бизнеса и операционную substance.",
        "Разобрать льготы, ограничения, сроки и compliance до запуска заявки.",
        "Собрать маршрут так, чтобы режим работал в реальной деятельности, а не только на уровне обещанной экономии.",
      ],
      transaction: [
        "До обязательств определить цель, карту рисков и последовательность сделки.",
        "Вести due diligence, структурирование и переговоры как единый трек, а не как разрозненные задачи.",
        "Двигать сделку между странами без разрыва рабочего контекста.",
      ],
      investors: [
        "Сравнить льготы, программы и реальные условия входа до фиксации проекта.",
        "Понять, где нужен GR, а где реально будет сидеть локальное исполнение.",
        "Собрать инвесторский маршрут до переговоров, подач и покупки актива.",
      ],
    },
    routeLabel: "Следующий Шаг",
    routeTitle: {
      kz: "Переход В Казахстанскую Практику",
      ge: "Переход В Грузинскую Практику",
      hub: "Маршрут Через Хаб И Cross-border Команду",
    },
    routeBody: {
      kz: "Если задача уже фактически относится к Казахстану, следующий шаг — перейти из этой routing page в казахстанскую практику и продолжить работу там без пересборки логики.",
      ge: "Если задача уже фактически относится к Грузии, следующий шаг — перейти из этой routing page в грузинскую практику и продолжить работу там с нужной локальной детализацией.",
      hub: "Если проект все еще зависит от сравнения, структурирования, инвесторской логики или сделки, лучше сначала вести его через хабовую консультацию и только потом отдавать в локальное исполнение.",
    },
    primaryCta: "Обсудить Проект",
  },
  zh: {
    eyebrow: {
      registration: "市场进入",
      regime: "特殊制度",
      transaction: "交易",
      investors: "投资人路径",
    },
    intro: {
      registration: "当国家方向已经明确，客户需要把问题从第一决策快速转入本地执行时，请使用此页。",
      regime: "当特殊制度可能改变项目经济模型，并且需要在申请前验证设立逻辑时，请使用此页。",
      transaction: "当项目进入收购、审查、谈判或签署阶段，且结构必须支持交易本身时，请使用此页。",
      investors: "当项目依赖优惠、政府互动、投资人包装或资本驱动的入国模型时，请使用此页。",
    },
    summaryLabel: "此页覆盖什么",
    pointsLabel: "这一阶段需要解决什么",
    points: {
      registration: [
        "在申报和启动前先确定正确的进入形式。",
        "提前把税务、文件、银行和实际启动顺序连在一起。",
        "把任务无缝转入正确的本地团队。",
      ],
      regime: [
        "确认该制度是否真正适合业务模型和实际经营。",
        "在申请开始前理解优惠、限制、时程和合规要求。",
        "把路线搭好，使制度服务真实运营，而不仅是纸面税负。",
      ],
      transaction: [
        "在作出承诺前先明确目标、风险图和交易顺序。",
        "把尽调、结构设计和谈判作为一个连续工作轨道推进。",
        "让交易跨国推进时不丢失顾问上下文。",
      ],
      investors: [
        "在项目定型前先比较优惠、项目和实际进入条件。",
        "看清哪里需要 GR，哪里才是本地执行落点。",
        "在谈判、申请或资产收购前先把投资人路径搭好。",
      ],
    },
    routeLabel: "下一步",
    routeTitle: {
      kz: "转入哈萨克斯坦团队",
      ge: "转入格鲁吉亚团队",
      hub: "继续留在跨境轨道上",
    },
    routeBody: {
      kz: "如果项目已经明确属于哈萨克斯坦，下一步就是从这张 routing page 转入哈萨克斯坦实践团队，并在那里继续执行而不重建逻辑。",
      ge: "如果项目已经明确属于格鲁吉亚，下一步就是从这张 routing page 转入格鲁吉亚实践团队，并在那里以正确的本地细节继续执行。",
      hub: "如果项目仍然依赖比较、结构设计、投资人逻辑或交易路径，最好先留在 hub 的跨境对话中，再决定本地执行。",
    },
    primaryCta: "讨论项目",
  },
  it: {
    eyebrow: {
      registration: "Ingresso Nel Mercato",
      regime: "Regime Speciale",
      transaction: "Operazioni",
      investors: "Percorso Investitore",
    },
    intro: {
      registration: "Usa questa pagina quando il Paese è già chiaro e il cliente deve passare rapidamente dalla prima decisione all'esecuzione locale.",
      regime: "Usa questa pagina quando un regime speciale può cambiare l'economia del progetto e deve essere verificato prima della domanda.",
      transaction: "Usa questa pagina quando il progetto si sta muovendo verso acquisizione, revisione, negoziazione o firma e la struttura deve sostenere la transazione.",
      investors: "Usa questa pagina quando il progetto dipende da incentivi, interazione con lo Stato, investor packaging o da un modello di ingresso basato sul capitale.",
    },
    summaryLabel: "Cosa Copre Questa Pagina",
    pointsLabel: "Cosa Va Risolto In Questa Fase",
    points: {
      registration: [
        "Scegliere il formato di ingresso corretto prima di filing e lancio.",
        "Collegare in anticipo logica fiscale, documenti, banca e sequenza reale del lancio.",
        "Passare il mandato al team locale giusto senza perdere contesto.",
      ],
      regime: [
        "Verificare se il regime si adatta davvero al modello di business e alla substance operativa.",
        "Capire incentivi, limiti, tempi e compliance prima di avviare la domanda.",
        "Costruire la route in modo che il regime sostenga l'operatività reale e non solo il risparmio fiscale teorico.",
      ],
      transaction: [
        "Definire target, mappa dei rischi e sequenza dell'operazione prima di assumere impegni.",
        "Gestire due diligence, structuring e negoziazione come un unico track connesso.",
        "Far avanzare la transazione tra Paesi senza spezzare il contesto advisory.",
      ],
      investors: [
        "Confrontare incentivi, programmi e condizioni pratiche di ingresso prima di fissare il progetto.",
        "Capire dove serve GR e dove siederà davvero l'esecuzione locale.",
        "Assemblare il percorso investitore prima di negoziazioni, filing o acquisizione di asset.",
      ],
    },
    routeLabel: "Passo Successivo",
    routeTitle: {
      kz: "Passare Al Team Del Kazakistan",
      ge: "Passare Al Team Della Georgia",
      hub: "Tenere Il Mandato Su Un Track Cross-border",
    },
    routeBody: {
      kz: "Se il progetto appartiene già di fatto al Kazakistan, il passo successivo è passare da questa routing page alla pratica kazaka e continuare lì senza ricostruire la logica.",
      ge: "Se il progetto appartiene già di fatto alla Georgia, il passo successivo è passare da questa routing page alla pratica georgiana e continuare lì con il giusto dettaglio locale.",
      hub: "Se il progetto dipende ancora da confronto, structuring, logica investitore o da una transazione, è meglio tenerlo prima in una conversazione hub e poi instradarlo nell'esecuzione locale.",
    },
    primaryCta: "Discutere Il Progetto",
  },
  fr: {
    eyebrow: {
      registration: "Entrée Sur Le Marché",
      regime: "Régime Spécial",
      transaction: "Transactions",
      investors: "Parcours Investisseur",
    },
    intro: {
      registration: "Utilisez cette page quand le pays est déjà identifié et qu'il faut faire passer rapidement le sujet de la première décision à l'exécution locale.",
      regime: "Utilisez cette page quand un régime spécial peut changer l'économie du projet et doit être vérifié avant dépôt.",
      transaction: "Utilisez cette page quand le projet avance vers acquisition, revue, négociation ou signature et que la structure doit soutenir la transaction.",
      investors: "Utilisez cette page quand le projet dépend d'incitations, d'interaction avec l'État, d'un packaging investisseur ou d'un modèle d'entrée fondé sur le capital.",
    },
    summaryLabel: "Ce Que Couvre Cette Page",
    pointsLabel: "Ce Qu'il Faut Régler À Ce Stade",
    points: {
      registration: [
        "Choisir le bon format d'entrée avant les filings et le lancement.",
        "Relier en amont fiscalité, documents, banque et séquence réelle de lancement.",
        "Transférer le mandat à la bonne équipe locale sans perdre le contexte.",
      ],
      regime: [
        "Vérifier si le régime correspond réellement au modèle économique et à la substance opérationnelle.",
        "Comprendre avantages, limites, délais et compliance avant d'engager la demande.",
        "Construire une route où le régime soutient l'exploitation réelle et pas seulement une économie fiscale théorique.",
      ],
      transaction: [
        "Définir la cible, la carte des risques et la séquence de transaction avant engagement.",
        "Mener due diligence, structuring et négociation comme un seul track cohérent.",
        "Faire avancer l'opération entre pays sans casser le contexte advisory.",
      ],
      investors: [
        "Comparer programmes, incitations et conditions d'entrée avant de figer le projet.",
        "Comprendre où un support GR est requis et où se situera réellement l'exécution locale.",
        "Assembler le parcours investisseur avant négociation, dépôt ou acquisition d'actif.",
      ],
    },
    routeLabel: "Étape Suivante",
    routeTitle: {
      kz: "Passer À L'équipe Kazakhstan",
      ge: "Passer À L'équipe Géorgie",
      hub: "Garder Le Mandat Sur Un Track Cross-border",
    },
    routeBody: {
      kz: "Si le sujet relève déjà du Kazakhstan, l'étape suivante est de passer de cette routing page à la pratique Kazakhstan et d'y continuer sans reconstruire la logique.",
      ge: "Si le sujet relève déjà de la Géorgie, l'étape suivante est de passer de cette routing page à la pratique Géorgie et d'y continuer avec le bon niveau de détail local.",
      hub: "Si le projet dépend encore d'une comparaison, d'un structuring, d'une logique investisseur ou d'une transaction, il vaut mieux le garder d'abord dans la conversation hub puis seulement ensuite l'orienter vers l'exécution locale.",
    },
    primaryCta: "Discuter Du Projet",
  },
  ka: {
    eyebrow: {
      registration: "ბაზარზე შესვლა",
      regime: "სპეციალური რეჟიმი",
      transaction: "გარიგებები",
      investors: "ინვესტორის მარშრუტი",
    },
    intro: {
      registration: "ეს გვერდი გამოიყენეთ მაშინ, როცა ქვეყანა უკვე არჩეულია და ამოცანა სწრაფად უნდა გადავიდეს პირველი გადაწყვეტილებიდან ადგილობრივ შესრულებაზე.",
      regime: "ეს გვერდი გამოიყენეთ მაშინ, როცა სპეციალურმა რეჟიმმა შეიძლება შეცვალოს პროექტის ეკონომიკა და მისი შემოწმება საჭიროა განაცხადამდე.",
      transaction: "ეს გვერდი გამოიყენეთ მაშინ, როცა პროექტი გადადის შეძენაზე, შემოწმებაზე, მოლაპარაკებაზე ან ხელმოწერაზე და სტრუქტურამ თავად გარიგება უნდა შეინარჩუნოს.",
      investors: "ეს გვერდი გამოიყენეთ მაშინ, როცა პროექტი დამოკიდებულია შეღავათებზე, სახელმწიფოსთან ურთიერთობაზე, investor packaging-ზე ან კაპიტალზე აგებულ შესვლის მოდელზე.",
    },
    summaryLabel: "რას ფარავს ეს გვერდი",
    pointsLabel: "რა უნდა გადაწყდეს ამ ეტაპზე",
    points: {
      registration: [
        "შესვლის სწორი ფორმატის შერჩევა filing-ებამდე და გაშვებამდე.",
        "საგადასახადო ლოგიკის, დოკუმენტების, ბანკისა და რეალური გაშვების თანმიმდევრობის წინასწარ შეკვრა.",
        "ამოცანის სწორ ადგილობრივ გუნდში გადატანა კონტექსტის დაკარგვის გარეშე.",
      ],
      regime: [
        "გაგება, მართლა ერგება თუ არა რეჟიმი ბიზნეს-მოდელსა და ოპერაციულ substance-ს.",
        "შეღავათების, შეზღუდვების, ვადებისა და compliance-ის გაგება განაცხადის დაწყებამდე.",
        "მარშრუტის აგება ისე, რომ რეჟიმმა რეალურ ოპერაციებს დაუჭიროს მხარი და არა მხოლოდ თეორიულ ეკონომიას.",
      ],
      transaction: [
        "ვალდებულებამდე მიზნის, რისკების რუკისა და გარიგების რიგის განსაზღვრა.",
        "due diligence-ის, structuring-ის და მოლაპარაკების ერთიან ტრეკად მართვა.",
        "გარიგების ქვეყნებს შორის გადაადგილება საკონსულტაციო კონტექსტის გაწყვეტის გარეშე.",
      ],
      investors: [
        "პროექტის ფიქსაციამდე პროგრამების, შეღავათებისა და შესვლის რეალური პირობების შედარება.",
        "გაგება, სად არის საჭირო GR და სად დაჯდება რეალური ადგილობრივი შესრულება.",
        "ინვესტორის მარშრუტის აწყობა მოლაპარაკებამდე, filing-ებამდე ან აქტივის ყიდვამდე.",
      ],
    },
    routeLabel: "შემდეგი ნაბიჯი",
    routeTitle: {
      kz: "გადასვლა ყაზახეთის გუნდში",
      ge: "გადასვლა საქართველოს გუნდში",
      hub: "მანდატის დატოვება cross-border ტრეკზე",
    },
    routeBody: {
      kz: "თუ ამოცანა უკვე ფაქტობრივად ყაზახეთს ეკუთვნის, შემდეგი ნაბიჯი არის ამ routing page-იდან ყაზახეთის პრაქტიკაში გადასვლა და იქ გაგრძელება ლოგიკის თავიდან აწყობის გარეშე.",
      ge: "თუ ამოცანა უკვე ფაქტობრივად საქართველოს ეკუთვნის, შემდეგი ნაბიჯი არის ამ routing page-იდან საქართველოს პრაქტიკაში გადასვლა და იქ გაგრძელება სწორი ადგილობრივი დეტალიზაციით.",
      hub: "თუ პროექტი ჯერ კიდევ დამოკიდებულია შედარებაზე, structuring-ზე, ინვესტორის ლოგიკაზე ან გარიგებაზე, ჯობს ჯერ hub-ის საუბარში დარჩეს და მხოლოდ მერე გადავიდეს ადგილობრივ შესრულებაზე.",
    },
    primaryCta: "პროექტის განხილვა",
  },
  de: {
    eyebrow: {
      registration: "Markteintritt",
      regime: "Sonderregime",
      transaction: "Transaktionen",
      investors: "Investor Route",
    },
    intro: {
      registration: "Nutzen Sie diese Seite, wenn das Land bereits feststeht und das Thema schnell von der ersten Entscheidung in die lokale Umsetzung geführt werden muss.",
      regime: "Nutzen Sie diese Seite, wenn ein Sonderregime die Projektökonomie verändern kann und vor Antragstellung geprüft werden muss.",
      transaction: "Nutzen Sie diese Seite, wenn das Projekt in Richtung Erwerb, Prüfung, Verhandlung oder Unterzeichnung geht und die Struktur den Deal selbst tragen muss.",
      investors: "Nutzen Sie diese Seite, wenn das Projekt von Anreizen, staatlicher Interaktion, Investor Packaging oder einem kapitalbasierten Markteintrittsmodell abhängt.",
    },
    summaryLabel: "Was Diese Seite Abdeckt",
    pointsLabel: "Was In Dieser Phase Geklärt Werden Muss",
    points: {
      registration: [
        "Das richtige Eintrittsformat vor Filings und Launch wählen.",
        "Steuerlogik, Dokumente, Banking und reale Startsequenz früh zusammenführen.",
        "Das Mandat ohne Kontextverlust an das richtige lokale Team übergeben.",
      ],
      regime: [
        "Prüfen, ob das Regime wirklich zum Geschäftsmodell und zur operativen Substance passt.",
        "Vorteile, Grenzen, Timing und Compliance vor Beginn des Antrags verstehen.",
        "Die Route so bauen, dass das Regime reale Operations trägt und nicht nur theoretische Steuerersparnis.",
      ],
      transaction: [
        "Target, Risikokarte und Deal-Sequenz vor jeder Verpflichtung definieren.",
        "Due Diligence, Structuring und Verhandlung als einen verbundenen Track führen.",
        "Die Transaktion länderübergreifend voranbringen, ohne den Advisory-Kontext zu verlieren.",
      ],
      investors: [
        "Programme, Anreize und reale Eintrittsbedingungen vergleichen, bevor das Projekt fixiert wird.",
        "Verstehen, wo GR nötig ist und wo die lokale Umsetzung tatsächlich sitzen wird.",
        "Die Investor Route vor Verhandlungen, Filings oder Asset-Erwerb aufbauen.",
      ],
    },
    routeLabel: "Nächster Schritt",
    routeTitle: {
      kz: "In Das Kasachstan-Team Wechseln",
      ge: "In Das Georgien-Team Wechseln",
      hub: "Das Mandat Auf Einem Cross-border Track Halten",
    },
    routeBody: {
      kz: "Wenn das Vorhaben bereits faktisch zu Kasachstan gehört, ist der nächste Schritt der Wechsel von dieser routing page in die Kasachstan-Praxis und die Fortsetzung dort ohne Neuaufbau der Logik.",
      ge: "Wenn das Vorhaben bereits faktisch zu Georgien gehört, ist der nächste Schritt der Wechsel von dieser routing page in die Georgien-Praxis und die Fortsetzung dort mit der richtigen lokalen Tiefe.",
      hub: "Wenn das Projekt noch von Vergleich, Structuring, Investorlogik oder einem Deal-Pfad abhängt, sollte es zunächst im Hub-Gespräch bleiben und erst danach in die lokale Umsetzung gehen.",
    },
    primaryCta: "Projekt Besprechen",
  },
  ar: {
    eyebrow: {
      registration: "دخول السوق",
      regime: "نظام خاص",
      transaction: "الصفقات",
      investors: "مسار المستثمر",
    },
    intro: {
      registration: "استخدم هذه الصفحة عندما تكون الدولة واضحة بالفعل ويجب نقل الموضوع بسرعة من القرار الأول إلى التنفيذ المحلي.",
      regime: "استخدم هذه الصفحة عندما يمكن للنظام الخاص أن يغيّر اقتصاديات المشروع ويجب اختباره قبل التقديم.",
      transaction: "استخدم هذه الصفحة عندما يتحرك المشروع نحو الاستحواذ أو الفحص أو التفاوض أو التوقيع ويجب أن يدعم الهيكل الصفقة نفسها.",
      investors: "استخدم هذه الصفحة عندما يعتمد المشروع على الحوافز أو التفاعل مع الدولة أو packaging للمستثمر أو نموذج دخول مبني على رأس المال.",
    },
    summaryLabel: "ما الذي تغطيه هذه الصفحة",
    pointsLabel: "ما الذي يجب حسمه في هذه المرحلة",
    points: {
      registration: [
        "اختيار صيغة الدخول الصحيحة قبل filings والإطلاق.",
        "ربط المنطق الضريبي والمستندات والبنوك وتسلسل الإطلاق الفعلي مبكراً.",
        "نقل التكليف إلى الفريق المحلي الصحيح من دون فقدان السياق.",
      ],
      regime: [
        "التأكد من أن النظام يناسب فعلاً نموذج الأعمال والـ substance التشغيلية.",
        "فهم الحوافز والحدود والجدول الزمني والامتثال قبل بدء الطلب.",
        "بناء المسار بحيث يخدم النظام العمليات الحقيقية لا مجرد الوفر الضريبي النظري.",
      ],
      transaction: [
        "تحديد الهدف وخريطة المخاطر وتسلسل الصفقة قبل الالتزام.",
        "إدارة due diligence والهيكلة والتفاوض كمسار واحد مترابط.",
        "دفع الصفقة بين الدول من دون كسر السياق الاستشاري.",
      ],
      investors: [
        "مقارنة البرامج والحوافز وشروط الدخول العملية قبل تثبيت المشروع.",
        "فهم أين يلزم GR وأين سيكون التنفيذ المحلي فعلياً.",
        "بناء مسار المستثمر قبل المفاوضات أو filings أو شراء الأصول.",
      ],
    },
    routeLabel: "الخطوة التالية",
    routeTitle: {
      kz: "الانتقال إلى فريق كازاخستان",
      ge: "الانتقال إلى فريق جورجيا",
      hub: "إبقاء التكليف على مسار cross-border",
    },
    routeBody: {
      kz: "إذا كانت المهمة تخص كازاخستان فعلاً، فالخطوة التالية هي الانتقال من هذه routing page إلى الممارسة الكازاخستانية ومواصلة التنفيذ هناك من دون إعادة بناء المنطق.",
      ge: "إذا كانت المهمة تخص جورجيا فعلاً، فالخطوة التالية هي الانتقال من هذه routing page إلى الممارسة الجورجية ومواصلة التنفيذ هناك بالتفصيل المحلي الصحيح.",
      hub: "إذا كان المشروع لا يزال يعتمد على المقارنة أو الهيكلة أو منطق المستثمر أو صفقة محتملة، فمن الأفضل إبقاؤه أولاً في محادثة hub ثم فقط نقله إلى التنفيذ المحلي.",
    },
    primaryCta: "مناقشة المشروع",
  },
  tr: {
    eyebrow: {
      registration: "Pazara Giriş",
      regime: "Özel Rejim",
      transaction: "İşlemler",
      investors: "Yatırımcı Rotası",
    },
    intro: {
      registration: "Bu sayfayı, ülke zaten netleştiğinde ve konunun ilk karardan yerel execution'a hızlı geçmesi gerektiğinde kullanın.",
      regime: "Bu sayfayı, özel bir rejim proje ekonomisini değiştirebilecekse ve başvuru öncesi test edilmesi gerekiyorsa kullanın.",
      transaction: "Bu sayfayı, proje satın alma, inceleme, müzakere veya imzaya gidiyorsa ve yapının işlemi taşıması gerekiyorsa kullanın.",
      investors: "Bu sayfayı, proje teşviklere, devletle etkileşime, investor packaging'e veya sermaye temelli giriş modeline bağlıysa kullanın.",
    },
    summaryLabel: "Bu Sayfa Ne Kapsar",
    pointsLabel: "Bu Aşamada Ne Çözülmeli",
    points: {
      registration: [
        "Filing ve launch başlamadan doğru giriş formatını seçmek.",
        "Vergi mantığını, belgeleri, bankacılığı ve gerçek launch sırasını önceden bağlamak.",
        "Mandatı doğru yerel ekibe bağlamı kaybetmeden geçirmek.",
      ],
      regime: [
        "Rejimin gerçekten iş modeline ve operasyonel substance'a uyup uymadığını görmek.",
        "Başvuru başlamadan teşvikleri, sınırları, takvimi ve compliance gerekliliklerini anlamak.",
        "Rotayı, rejimin sadece teorik vergi tasarrufu değil gerçek operasyonu destekleyeceği şekilde kurmak.",
      ],
      transaction: [
        "Taahhütten önce hedefi, risk haritasını ve işlem sırasını tanımlamak.",
        "Due diligence, structuring ve müzakereleri tek bağlı track olarak yürütmek.",
        "Advisory bağlamını koparmadan işlemi ülkeler arasında ilerletmek.",
      ],
      investors: [
        "Proje sabitlenmeden önce programları, teşvikleri ve pratik giriş koşullarını karşılaştırmak.",
        "Nerede GR gerektiğini ve yerel execution'ın gerçekte nerede oturacağını anlamak.",
        "Müzakere, filing veya varlık alımı başlamadan yatırımcı rotasını kurmak.",
      ],
    },
    routeLabel: "Sonraki Adım",
    routeTitle: {
      kz: "Kazakistan Ekibine Geçmek",
      ge: "Gürcistan Ekibine Geçmek",
      hub: "Mandatı Cross-border Track'te Tutmak",
    },
    routeBody: {
      kz: "İş artık fiilen Kazakistan'a aitse sonraki adım bu routing page'den Kazakistan pratiğine geçmek ve mantığı yeniden kurmadan orada devam etmektir.",
      ge: "İş artık fiilen Gürcistan'a aitse sonraki adım bu routing page'den Gürcistan pratiğine geçmek ve doğru yerel detayla orada devam etmektir.",
      hub: "Proje hâlâ karşılaştırmaya, structuring'e, yatırımcı mantığına veya işlem yoluna bağlıysa önce hub konuşmasında kalması ve ancak sonra yerel execution'a geçmesi daha doğrudur.",
    },
    primaryCta: "Projeyi Görüş",
  },
  es: {
    eyebrow: {
      registration: "Entrada Al Mercado",
      regime: "Régimen Especial",
      transaction: "Transacciones",
      investors: "Ruta Del Inversor",
    },
    intro: {
      registration: "Use esta página cuando el país ya está claro y hay que llevar el asunto rápidamente de la primera decisión a la ejecución local.",
      regime: "Use esta página cuando un régimen especial puede cambiar la economía del proyecto y debe comprobarse antes de presentar la solicitud.",
      transaction: "Use esta página cuando el proyecto avanza hacia compra, revisión, negociación o firma y la estructura debe sostener la operación.",
      investors: "Use esta página cuando el proyecto depende de incentivos, interacción con el Estado, investor packaging o un modelo de entrada basado en capital.",
    },
    summaryLabel: "Qué Cubre Esta Página",
    pointsLabel: "Qué Debe Resolverse En Esta Etapa",
    points: {
      registration: [
        "Elegir el formato de entrada correcto antes de filings y lanzamiento.",
        "Conectar por adelantado lógica fiscal, documentos, banca y secuencia real de lanzamiento.",
        "Pasar el mandato al equipo local correcto sin perder contexto.",
      ],
      regime: [
        "Ver si el régimen encaja de verdad con el modelo de negocio y la substance operativa.",
        "Entender incentivos, límites, plazos y compliance antes de iniciar la solicitud.",
        "Construir la ruta para que el régimen apoye la operación real y no solo un ahorro fiscal teórico.",
      ],
      transaction: [
        "Definir el objetivo, el mapa de riesgos y la secuencia de la operación antes de comprometerse.",
        "Llevar due diligence, structuring y negociación como un solo track conectado.",
        "Mover la operación entre países sin romper el contexto advisory.",
      ],
      investors: [
        "Comparar programas, incentivos y condiciones reales de entrada antes de fijar el proyecto.",
        "Entender dónde hace falta GR y dónde se sentará realmente la ejecución local.",
        "Construir la ruta del inversor antes de negociación, filings o compra de activos.",
      ],
    },
    routeLabel: "Siguiente Paso",
    routeTitle: {
      kz: "Pasar Al Equipo De Kazajistán",
      ge: "Pasar Al Equipo De Georgia",
      hub: "Mantener El Mandato En Un Track Cross-border",
    },
    routeBody: {
      kz: "Si el trabajo ya pertenece de hecho a Kazajistán, el siguiente paso es pasar de esta routing page a la práctica de Kazajistán y continuar allí sin reconstruir la lógica.",
      ge: "Si el trabajo ya pertenece de hecho a Georgia, el siguiente paso es pasar de esta routing page a la práctica de Georgia y continuar allí con el detalle local correcto.",
      hub: "Si el proyecto todavía depende de comparación, structuring, lógica del inversor o una operación, conviene mantenerlo primero en la conversación del hub y solo después llevarlo a la ejecución local.",
    },
    primaryCta: "Hablar Del Proyecto",
  },
};

const routeMap = new Map(routes.map((route) => [route.slug, route]));

export type HubSeoPageContent = {
  slug: string;
  kind: HubSeoKind;
  target: HubSeoTarget;
  related: string[];
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  summaryLabel: string;
  pointsLabel: string;
  points: string[];
  routeLabel: string;
  routeTitle: string;
  routeBody: string;
  primaryCta: string;
};

export function getHubSeoPageSlugs() {
  return routes.map((route) => route.slug);
}

export function isHubSeoPageSlug(slug: string) {
  return routeMap.has(slug);
}

export function getHubSeoPage(locale: Locale, slug: string): HubSeoPageContent | null {
  const route = routeMap.get(slug);
  if (!route) return null;

  const entry = route.entries[locale];
  const localeCopy = copy[locale];

  return {
    slug: route.slug,
    kind: route.kind,
    target: route.target,
    related: route.related,
    title: entry.title,
    description: entry.description,
    eyebrow: localeCopy.eyebrow[route.kind],
    intro: localeCopy.intro[route.kind],
    summaryLabel: localeCopy.summaryLabel,
    pointsLabel: localeCopy.pointsLabel,
    points: localeCopy.points[route.kind],
    routeLabel: localeCopy.routeLabel,
    routeTitle: localeCopy.routeTitle[route.target],
    routeBody: localeCopy.routeBody[route.target],
    primaryCta: entry.primaryCta ?? localeCopy.primaryCta,
  };
}
