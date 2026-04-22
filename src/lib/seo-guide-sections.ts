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
      label: "Ключевые направления",
      title: "Выберите формат работы, который быстрее приведет проект к запуску.",
      body: "Эти страницы помогают быстро понять, с чего лучше начинать: со сравнения юрисдикций, со сборки структуры или с подготовки выхода на новый рынок.",
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
      title: "Choose the work format that brings the project to launch faster.",
      body: "These pages help the client decide where to start: with jurisdiction comparison, with structure design, or with preparation for entering a new market.",
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
      title: "先选择最能推动项目落地的工作方向。",
      body: "这些页面帮助客户判断应先比较司法辖区、先设计结构，还是先准备进入新市场。",
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
      title: "Scegli il formato di lavoro che porta il progetto al lancio piu rapidamente.",
      body: "Queste pagine aiutano a capire se conviene iniziare dal confronto tra giurisdizioni, dalla struttura o dalla preparazione dell'ingresso nel mercato.",
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
      title: "Choisissez le format de travail qui mène le plus vite au lancement.",
      body: "Ces pages aident a comprendre s'il faut commencer par la comparaison des juridictions, par la structuration ou par la preparation de l'entree sur le marche.",
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
      title: "აირჩიეთ სამუშაო ფორმატი, რომელიც პროექტს უფრო სწრაფად მიიყვანს გაშვებამდე.",
      body: "ეს გვერდები ეხმარება კლიენტს გადაწყვიტოს, საიდან ჯობს დაწყება: იურისდიქციების შედარებიდან, სტრუქტურის აწყობიდან თუ ახალ ბაზარზე გასვლის მომზადებიდან.",
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
      title: "Wählen Sie das Arbeitsformat, das das Projekt schneller zum Start bringt.",
      body: "Diese Seiten helfen zu verstehen, ob man mit dem Jurisdiktionsvergleich, mit der Struktur oder mit der Vorbereitung des Markteintritts beginnen sollte.",
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
      title: "اختر صيغة العمل التي تقود المشروع إلى الإطلاق بشكل أسرع.",
      body: "تساعد هذه الصفحات العميل على فهم ما إذا كان يجب البدء بمقارنة الولايات القضائية أو ببناء الهيكل أو بالتحضير لدخول سوق جديد.",
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
      title: "Projeyi lansmana daha hizli goturen calisma formatini secin.",
      body: "Bu sayfalar ise nereden baslamanin daha dogru oldugunu gosterir: jurisdiksiyon karsilastirmasi, yapi kurulumu ya da yeni pazara giris hazirligi.",
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
      title: "Elija el formato de trabajo que lleve el proyecto al lanzamiento mas rapido.",
      body: "Estas paginas ayudan a entender si conviene empezar por la comparacion de jurisdicciones, por la estructura o por la preparacion de la entrada al mercado.",
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
