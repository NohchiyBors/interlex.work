import type { Locale } from "@/lib/i18n";

type GuideSectionCopy = {
  label: string;
  title: string;
  body: string;
};

type GuideSectionSet = {
  home: GuideSectionCopy;
  crossBorder: GuideSectionCopy;
  related: GuideSectionCopy;
};

const seoGuideSections: Record<Locale, GuideSectionSet> = {
  ru: {
    home: {
      label: "Отдельные маршруты",
      title: "Уже знаете задачу — открывайте нужный маршрут.",
      body: "СЭЗ и Virtual Zone — для выбора режима. M&A и due diligence — для подготовки к сделке. Инвестиционный маршрут — для упаковки проекта под вход.",
    },
    crossBorder: {
      label: "С чего начать",
      title: "Если запрос еще нужно собрать, начните с этих страниц.",
      body: "Они помогают до первой консультации понять, где лучше запускать проект, как выстроить структуру и какой следующий шаг даст наименьший риск ошибок и переделок.",
    },
    related: {
      label: "Что посмотреть дальше",
      title: "Следующая страница зависит от того, какое решение вам нужно принять сейчас.",
      body: "Если нужно выбрать страну, переходите к сравнению Казахстана и Грузии. Если важнее собрать структуру или подготовить выход на рынок, открывайте соответствующую страницу и двигайтесь к консультации уже с более точной задачей.",
    },
  },
  en: {
    home: {
      label: "Key Pages",
      title: "Know what you need — go straight to the right page.",
      body: "SEZ and Virtual Zone — for choosing a regime. M&A and due diligence — for preparing a deal. Investment route — for structuring a project entry.",
    },
    crossBorder: {
      label: "Where To Start",
      title: "If the mandate still needs to be shaped, start with these pages.",
      body: "They help clarify where the project should launch, how the structure should be built, and what next step reduces risk and rework before the first consultation.",
    },
    related: {
      label: "Next Reading",
      title: "The next page depends on the decision the client needs to make now.",
      body: "If the client needs to choose the country, move to the Kazakhstan vs Georgia page. If the main issue is structure or market entry, open the relevant page and come to the consultation with a sharper brief.",
    },
  },
  zh: {
    home: {
      label: "关键页面",
      title: "明确任务了吗——直接打开对应页面。",
      body: "SEZ 和 Virtual Zone——用于选择制度。M&A 和尽职调查——用于准备交易。投资路径——用于打包项目入场。",
    },
    crossBorder: {
      label: "从哪里开始",
      title: "如果需求还没有完全成型，请先从这些页面开始。",
      body: "它们帮助客户在首次咨询前先理清项目应在哪启动、结构应如何搭建，以及下一步怎样减少错误和返工。",
    },
    related: {
      label: "继续阅读",
      title: "下一页取决于客户现在最需要做出的决定。",
      body: "如果需要先选国家，就去看哈萨克斯坦与格鲁吉亚的比较。如果重点是结构或市场进入，就打开对应页面，再带着更明确的问题进入咨询。",
    },
  },
  it: {
    home: {
      label: "Pagine Chiave",
      title: "Sai già cosa ti serve — vai direttamente alla pagina giusta.",
      body: "SEZ e Virtual Zone — per scegliere il regime. M&A e due diligence — per preparare la transazione. Percorso investimento — per strutturare l'ingresso nel progetto.",
    },
    crossBorder: {
      label: "Da Dove Iniziare",
      title: "Se il mandato deve ancora essere definito, inizia da queste pagine.",
      body: "Aiutano a capire prima della consulenza dove conviene lanciare il progetto, come costruire la struttura e quale passo successivo riduce errori e rilavorazioni.",
    },
    related: {
      label: "Prossima Lettura",
      title: "La pagina successiva dipende dalla decisione che il cliente deve prendere ora.",
      body: "Se serve scegliere il Paese, passa al confronto tra Kazakistan e Georgia. Se il nodo e la struttura o il market entry, apri la pagina rilevante e arriva alla consulenza con una richiesta piu precisa.",
    },
  },
  fr: {
    home: {
      label: "Pages Clés",
      title: "Vous savez ce dont vous avez besoin — allez directement à la bonne page.",
      body: "SEZ et Virtual Zone — pour choisir le régime. M&A et due diligence — pour préparer la transaction. Parcours investissement — pour structurer l'entrée dans le projet.",
    },
    crossBorder: {
      label: "Par Où Commencer",
      title: "Si le mandat doit encore etre clarifie, commencez par ces pages.",
      body: "Elles aident a comprendre avant la consultation où lancer le projet, comment construire la structure et quelle etape reduit les erreurs et les reprises.",
    },
    related: {
      label: "Lecture Suivante",
      title: "La page suivante depend de la decision que le client doit prendre maintenant.",
      body: "S'il faut choisir le pays, passez a la comparaison Kazakhstan vs Georgie. Si le sujet principal est la structure ou l'entree sur le marche, ouvrez la page correspondante et arrivez a la consultation avec un besoin mieux defini.",
    },
  },
  ka: {
    home: {
      label: "მთავარი გვერდები",
      title: "ამოცანა ცხადია — გახსენით სასურველი გვერდი.",
      body: "SEZ და Virtual Zone — რეჟიმის ასარჩევად. M&A და due diligence — გარიგების მოსამზადებლად. საინვესტიციო მარშრუტი — პროექტში შესვლის სტრუქტურირებისთვის.",
    },
    crossBorder: {
      label: "საიდან დავიწყოთ",
      title: "თუ მოთხოვნა ჯერ კიდევ ფორმირდება, დაიწყეთ ამ გვერდებიდან.",
      body: "ისინი პირველ კონსულტაციამდე ეხმარება კლიენტს გაიგოს, სად ჯობს პროექტის დაწყება, როგორ უნდა აიწყოს სტრუქტურა და რომელი შემდეგი ნაბიჯი შეამცირებს შეცდომებისა და გადაკეთების რისკს.",
    },
    related: {
      label: "შემდეგი საკითხავი",
      title: "შემდეგი გვერდი დამოკიდებულია იმაზე, რა გადაწყვეტილება უნდა მიიღოს კლიენტმა ახლა.",
      body: "თუ საჭიროა ქვეყნის არჩევა, გადადით ყაზახეთი vs საქართველო გვერდზე. თუ მთავარი საკითხია სტრუქტურა ან ბაზარზე შესვლა, გახსენით შესაბამისი გვერდი და კონსულტაციაზე უფრო ზუსტი ამოცანით მიბრძანდით.",
    },
  },
  de: {
    home: {
      label: "Wichtige Seiten",
      title: "Sie wissen, was Sie brauchen — gehen Sie direkt zur richtigen Seite.",
      body: "SEZ und Virtual Zone — zur Auswahl des Regimes. M&A und Due Diligence — zur Vorbereitung des Deals. Investitionsroute — zur Strukturierung des Projekteinstiegs.",
    },
    crossBorder: {
      label: "Wo Beginnen",
      title: "Wenn das Mandat noch geschärft werden muss, beginnen Sie mit diesen Seiten.",
      body: "Sie helfen schon vor dem ersten Gespräch zu verstehen, wo das Projekt starten sollte, wie die Struktur aufgebaut wird und welcher nächste Schritt Fehler und Neustarts reduziert.",
    },
    related: {
      label: "Weiterlesen",
      title: "Die nächste Seite hängt von der Entscheidung ab, die jetzt ansteht.",
      body: "Wenn zuerst das Land gewählt werden muss, gehen Sie zur Seite Kazakhstan vs Georgia. Wenn Struktur oder Markteintritt im Vordergrund stehen, öffnen Sie die passende Seite und kommen Sie mit einem klareren Briefing ins Gespräch.",
    },
  },
  ar: {
    home: {
      label: "صفحات أساسية",
      title: "تعرف ما تحتاجه — انتقل مباشرةً إلى الصفحة المناسبة.",
      body: "SEZ وVirtual Zone — لاختيار النظام. M&A والعناية الواجبة — للتحضير للصفقة. مسار الاستثمار — لهيكلة دخول المشروع.",
    },
    crossBorder: {
      label: "من أين نبدأ",
      title: "إذا كان الطلب لا يزال في طور التشكيل فابدأ بهذه الصفحات.",
      body: "تساعد هذه الصفحات العميل قبل الاستشارة الأولى على فهم أين يجب أن يبدأ المشروع، وكيف يجب أن يُبنى الهيكل، وما الخطوة التالية التي تقلل الأخطاء وإعادة العمل.",
    },
    related: {
      label: "قراءة تالية",
      title: "تعتمد الصفحة التالية على القرار الذي يحتاج العميل إلى اتخاذه الآن.",
      body: "إذا كان المطلوب اختيار الدولة فانتقل إلى صفحة مقارنة كازاخستان وجورجيا. وإذا كانت الأولوية للهيكلة أو لدخول السوق فافتح الصفحة المناسبة وادخل إلى الاستشارة بطلب أوضح.",
    },
  },
  tr: {
    home: {
      label: "Temel Sayfalar",
      title: "Ne gerektiğini biliyorsunuz — doğru sayfaya gidin.",
      body: "SEZ ve Virtual Zone — rejim seçimi için. M&A ve due diligence — anlaşma hazırlığı için. Yatırım rotası — proje girişini yapılandırmak için.",
    },
    crossBorder: {
      label: "Nereden Baslanir",
      title: "Talep hala sekilleniyorsa bu sayfalardan baslayin.",
      body: "Bu sayfalar ilk gorusmeden once projenin nerede baslamasi gerektigini, yapinin nasil kurulacagini ve hangi sonraki adimin hata ile yeniden isi azalttigini anlamaya yardim eder.",
    },
    related: {
      label: "Sonraki Okuma",
      title: "Sonraki sayfa, musterinin simdi hangi karari vermesi gerektigine baglidir.",
      body: "Ulke secimi gerekiyorsa Kazakhstan vs Georgia sayfasina gecin. Ana konu yapi veya market entry ise ilgili sayfayi acin ve gorusmeye daha net bir ihtiyacla gelin.",
    },
  },
  es: {
    home: {
      label: "Paginas Clave",
      title: "Ya sabe lo que necesita — vaya directamente a la página correcta.",
      body: "SEZ y Virtual Zone — para elegir el régimen. M&A y due diligence — para preparar la operación. Ruta de inversión — para estructurar la entrada al proyecto.",
    },
    crossBorder: {
      label: "Por Donde Empezar",
      title: "Si el mandato aun debe definirse, empiece por estas paginas.",
      body: "Ayudan a entender antes de la primera consulta donde debe lanzarse el proyecto, como debe construirse la estructura y que siguiente paso reduce errores y rehacer trabajo.",
    },
    related: {
      label: "Lectura Siguiente",
      title: "La pagina siguiente depende de la decision que el cliente debe tomar ahora.",
      body: "Si primero hay que elegir el pais, vaya a Kazakhstan vs Georgia. Si la prioridad es la estructura o la entrada al mercado, abra la pagina correspondiente y llegue a la consulta con una necesidad mas clara.",
    },
  },
};

export function getSeoGuideSectionContent(locale: Locale) {
  return seoGuideSections[locale];
}
