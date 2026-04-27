// Localized copy for the site-wide cookie consent layer.
//
// Two surfaces share the same source of truth:
//   1. The cookie banner rendered by `<CookieConsent />` (Accept / Decline /
//      Manage for EU visitors, soft notice with a single OK for the rest).
//   2. The standalone /[locale]/cookies policy page rendered by
//      `src/app/[locale]/cookies/page.tsx`.
//
// Russian is the editorial source. Other locales are translations from the
// Russian layer with the same structure (no English fallback) — this matches
// the project rule that every supported locale must have explicit copy.
//
// Keep this file the single place to edit cookie wording. The
// `EU_LOCALES` set decides which locales render strict opt-in by default;
// timezone-based detection inside the client component widens that net to
// EU/EEA visitors arriving on non-EU locales.

import type { Locale } from "@/lib/i18n";

export const COOKIE_CONSENT_STORAGE_KEY = "interlex_cookie_consent_v1";

// Locales that get the strict opt-in banner regardless of timezone signal.
export const EU_LOCALES: ReadonlySet<Locale> = new Set(["de", "fr", "it", "es"]);

export type CookieBannerCopy = Readonly<{
  // Short banner shown above the fold on first visit.
  notice: string;
  // Lead sentence appearing on top of the banner before the buttons.
  lead: string;
  acceptLabel: string;
  declineLabel: string;
  manageLabel: string;
  okLabel: string;
  policyLinkLabel: string;
  closeLabel: string;
}>;

export type CookiePageCopy = Readonly<{
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lead: string;
  updatedLabel: string;
  updatedValue: string;
  sections: ReadonlyArray<{
    title: string;
    body: string;
    bullets?: ReadonlyArray<string>;
  }>;
  table: Readonly<{
    label: string;
    headers: Readonly<{ name: string; provider: string; purpose: string; lifetime: string }>;
    rows: ReadonlyArray<Readonly<{ name: string; provider: string; purpose: string; lifetime: string }>>;
  }>;
  withdraw: Readonly<{
    label: string;
    title: string;
    body: string;
    cta: string;
  }>;
  contact: Readonly<{
    label: string;
    title: string;
    body: string;
    email: string;
  }>;
}>;

export type CookieFooterCopy = Readonly<{
  linkLabel: string;
}>;

export type CookieConsentCopy = Readonly<{
  banner: CookieBannerCopy;
  page: CookiePageCopy;
  footer: CookieFooterCopy;
}>;

const PUBLIC_EMAIL = "hello@interlex.work";

const ru: CookieConsentCopy = {
  banner: {
    lead: "Этот сайт использует кукисы.",
    notice:
      "Мы используем технические кукисы, необходимые для работы сайта, и аналитические кукисы Google Analytics, чтобы понимать, как страницы помогают клиентам InterLex. Аналитика включается только с вашего согласия.",
    acceptLabel: "Принять",
    declineLabel: "Отклонить",
    manageLabel: "Подробнее",
    okLabel: "Понятно",
    policyLinkLabel: "Политика кукисов",
    closeLabel: "Закрыть",
  },
  page: {
    metaTitle: "Политика использования кукисов — InterLex",
    metaDescription:
      "Какие кукисы использует interlex.work, зачем они нужны, как ими управлять и как отозвать согласие на аналитику.",
    eyebrow: "Кукисы",
    title: "Политика использования кукисов",
    lead:
      "Сайт interlex.work — глобальный хаб InterLex. Здесь объясняем, какие файлы кукисов мы устанавливаем, зачем они нужны и как вы можете управлять своим согласием.",
    updatedLabel: "Действует с",
    updatedValue: "27 апреля 2026 года",
    sections: [
      {
        title: "Что такое кукисы",
        body:
          "Кукисы — это небольшие текстовые файлы, которые сайт сохраняет в вашем браузере. Они помогают сайту работать корректно, запоминать выбранный язык и собирать обезличенную статистику посещений.",
      },
      {
        title: "Какие кукисы мы используем",
        body: "Мы делим кукисы на две категории:",
        bullets: [
          "Технические кукисы — необходимы для работы сайта (язык интерфейса, защита форм, состояние согласия на аналитику). Они устанавливаются всегда и не требуют согласия.",
          "Аналитические кукисы — Google Analytics 4 (идентификатор G-V16R7S8WGC). Они помогают видеть, какие страницы и какие маршруты помогают клиентам разобраться, в Казахстане или в Грузии запускать проект, и нужны ли пакеты под ключ. Эти кукисы включаются только после вашего согласия.",
        ],
      },
      {
        title: "Управление согласием",
        body:
          "При первом визите в зависимости от вашей юрисдикции мы показываем либо опт-ин баннер (для посетителей из ЕС/ЕЭЗ), либо короткое уведомление. До получения согласия аналитика не запускается. Вы можете в любой момент изменить решение через ссылку «Политика кукисов» в подвале сайта.",
      },
      {
        title: "Передача данных третьим лицам",
        body:
          "Аналитика обрабатывается на стороне Google в соответствии с их политикой. Мы не продаём данные пользователей и не используем рекламные сегменты. Контактные формы отправляют данные напрямую в наш почтовый ящик и не используют кукисы для трекинга.",
      },
    ],
    table: {
      label: "Перечень кукисов",
      headers: {
        name: "Название",
        provider: "Поставщик",
        purpose: "Назначение",
        lifetime: "Срок жизни",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "Хранит ваше решение по аналитическим кукисам",
          lifetime: "12 месяцев",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "Идентификатор посетителя для статистики посещений",
          lifetime: "до 24 месяцев",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "Состояние сессии в GA4",
          lifetime: "до 24 месяцев",
        },
      ],
    },
    withdraw: {
      label: "Отзыв согласия",
      title: "Как отозвать согласие на аналитику",
      body:
        "Нажмите на кнопку ниже — мы откроем баннер согласия и вы сможете отклонить аналитику. Решение хранится в кукисе interlex_cookie_consent_v1 на этом устройстве; чтобы сбросить его на других устройствах, повторите действие там.",
      cta: "Изменить решение",
    },
    contact: {
      label: "Контакт",
      title: "Вопросы по обработке данных",
      body: "Если у вас есть вопросы по политике кукисов или обработке персональных данных — напишите нам:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "Кукисы",
  },
};

const en: CookieConsentCopy = {
  banner: {
    lead: "This site uses cookies.",
    notice:
      "We use strictly necessary cookies to keep the site working and Google Analytics cookies to understand how our pages help InterLex clients. Analytics only runs with your consent.",
    acceptLabel: "Accept",
    declineLabel: "Decline",
    manageLabel: "Learn more",
    okLabel: "Got it",
    policyLinkLabel: "Cookie policy",
    closeLabel: "Close",
  },
  page: {
    metaTitle: "Cookie Policy — InterLex",
    metaDescription:
      "Which cookies interlex.work uses, why we use them, how to manage your preferences, and how to withdraw your consent for analytics.",
    eyebrow: "Cookies",
    title: "Cookie Policy",
    lead:
      "interlex.work is the global InterLex hub. This page explains which cookies we set, what they are for, and how you can manage your consent.",
    updatedLabel: "Effective from",
    updatedValue: "27 April 2026",
    sections: [
      {
        title: "What cookies are",
        body:
          "Cookies are small text files a site stores in your browser. They keep the site working, remember the language you selected, and collect anonymous visit statistics.",
      },
      {
        title: "Which cookies we use",
        body: "We split cookies into two categories:",
        bullets: [
          "Strictly necessary cookies — required for the site to work (interface language, form protection, your analytics consent decision). These are set unconditionally and do not require consent.",
          "Analytics cookies — Google Analytics 4 (property G-V16R7S8WGC). They help us see which pages and which routes actually help clients decide whether to launch in Kazakhstan or Georgia and whether they need a turnkey package. These cookies are only activated once you consent.",
        ],
      },
      {
        title: "Managing your consent",
        body:
          "On your first visit, depending on your jurisdiction, we show either an opt-in banner (visitors from the EU/EEA) or a short notice. Analytics will not run before consent is granted. You can change your decision at any time through the “Cookie policy” link in the site footer.",
      },
      {
        title: "Third-party processing",
        body:
          "Analytics is processed by Google under their own privacy framework. We do not sell user data and do not run advertising audiences. Contact forms send their data directly to our mailbox and do not use cookies for tracking.",
      },
    ],
    table: {
      label: "Cookie list",
      headers: {
        name: "Name",
        provider: "Provider",
        purpose: "Purpose",
        lifetime: "Lifetime",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "Stores your analytics consent decision",
          lifetime: "12 months",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "Visitor identifier for visit statistics",
          lifetime: "up to 24 months",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "Session state in GA4",
          lifetime: "up to 24 months",
        },
      ],
    },
    withdraw: {
      label: "Withdrawal",
      title: "How to withdraw your analytics consent",
      body:
        "Use the button below — it reopens the consent banner so you can decline analytics. The decision is stored in the interlex_cookie_consent_v1 cookie on this device; repeat on other devices to reset there.",
      cta: "Change my decision",
    },
    contact: {
      label: "Contact",
      title: "Data processing questions",
      body: "If you have any questions about this cookie policy or how we handle personal data, please write to us at:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "Cookies",
  },
};

const zh: CookieConsentCopy = {
  banner: {
    lead: "本网站使用 Cookie。",
    notice:
      "我们使用必要 Cookie 以保证网站正常运行,并使用 Google Analytics Cookie 了解页面如何帮助 InterLex 客户。分析功能仅在您同意后才会启用。",
    acceptLabel: "接受",
    declineLabel: "拒绝",
    manageLabel: "了解更多",
    okLabel: "知道了",
    policyLinkLabel: "Cookie 政策",
    closeLabel: "关闭",
  },
  page: {
    metaTitle: "Cookie 政策 — InterLex",
    metaDescription: "interlex.work 使用哪些 Cookie、用途、如何管理偏好以及如何撤回分析同意。",
    eyebrow: "Cookie",
    title: "Cookie 政策",
    lead: "interlex.work 是 InterLex 全球枢纽。本页面说明我们设置的 Cookie 及其用途,以及您如何管理同意选项。",
    updatedLabel: "生效日期",
    updatedValue: "2026 年 4 月 27 日",
    sections: [
      {
        title: "什么是 Cookie",
        body: "Cookie 是网站存储在您浏览器中的小型文本文件。它们让网站正常运行、记住您选择的语言,并收集匿名访问统计数据。",
      },
      {
        title: "我们使用的 Cookie",
        body: "我们将 Cookie 分为两类:",
        bullets: [
          "必要 Cookie — 网站正常运行所需(界面语言、表单保护、您的分析同意决定)。无条件设置,无需征得同意。",
          "分析 Cookie — Google Analytics 4(媒体资源 G-V16R7S8WGC)。帮助我们了解哪些页面和路径真正帮助客户决定在哈萨克斯坦还是格鲁吉亚启动项目,以及是否需要一站式套餐。仅在您同意后才会启用。",
        ],
      },
      {
        title: "管理您的同意",
        body:
          "首次访问时,我们会根据您所在的司法管辖区显示选择加入横幅(欧盟/欧洲经济区访客)或简短通知。在获得同意之前不会运行分析。您随时可以通过页脚的“Cookie 政策”链接更改决定。",
      },
      {
        title: "第三方处理",
        body:
          "分析由 Google 根据其隐私框架处理。我们不出售用户数据,也不运行广告受众。联系表单将数据直接发送到我们的邮箱,不使用 Cookie 进行跟踪。",
      },
    ],
    table: {
      label: "Cookie 列表",
      headers: {
        name: "名称",
        provider: "提供方",
        purpose: "用途",
        lifetime: "有效期",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "存储您的分析同意决定",
          lifetime: "12 个月",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "用于访问统计的访客标识符",
          lifetime: "最长 24 个月",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "GA4 会话状态",
          lifetime: "最长 24 个月",
        },
      ],
    },
    withdraw: {
      label: "撤回",
      title: "如何撤回分析同意",
      body:
        "点击下方按钮 — 我们将重新打开同意横幅,您可以拒绝分析。该决定存储在此设备的 interlex_cookie_consent_v1 Cookie 中;请在其他设备上重复操作以重置。",
      cta: "更改我的决定",
    },
    contact: {
      label: "联系方式",
      title: "数据处理咨询",
      body: "如果您对本 Cookie 政策或我们处理个人数据的方式有任何疑问,请写信给我们:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "Cookie",
  },
};

const it: CookieConsentCopy = {
  banner: {
    lead: "Questo sito utilizza i cookie.",
    notice:
      "Utilizziamo cookie tecnici necessari al funzionamento del sito e cookie analitici di Google Analytics per capire come le nostre pagine aiutano i clienti InterLex. L'analisi viene attivata solo con il tuo consenso.",
    acceptLabel: "Accetta",
    declineLabel: "Rifiuta",
    manageLabel: "Maggiori informazioni",
    okLabel: "Ho capito",
    policyLinkLabel: "Cookie policy",
    closeLabel: "Chiudi",
  },
  page: {
    metaTitle: "Cookie Policy — InterLex",
    metaDescription:
      "Quali cookie utilizza interlex.work, a cosa servono, come gestire le preferenze e come revocare il consenso all'analisi.",
    eyebrow: "Cookie",
    title: "Cookie Policy",
    lead:
      "interlex.work è l'hub globale di InterLex. Questa pagina spiega quali cookie installiamo, a cosa servono e come gestire il tuo consenso.",
    updatedLabel: "In vigore dal",
    updatedValue: "27 aprile 2026",
    sections: [
      {
        title: "Cosa sono i cookie",
        body:
          "I cookie sono piccoli file di testo che il sito memorizza nel tuo browser. Permettono al sito di funzionare, ricordano la lingua selezionata e raccolgono statistiche anonime sulle visite.",
      },
      {
        title: "Quali cookie utilizziamo",
        body: "Suddividiamo i cookie in due categorie:",
        bullets: [
          "Cookie tecnici — necessari per il funzionamento del sito (lingua dell'interfaccia, protezione dei form, decisione di consenso). Vengono impostati senza richiedere consenso.",
          "Cookie analitici — Google Analytics 4 (proprietà G-V16R7S8WGC). Ci aiutano a capire quali pagine e quali percorsi aiutano davvero i clienti a decidere se avviare il progetto in Kazakhstan o in Georgia e se necessitano di un pacchetto chiavi in mano. Si attivano solo dopo il tuo consenso.",
        ],
      },
      {
        title: "Gestione del consenso",
        body:
          "Alla prima visita, in base alla tua giurisdizione, mostriamo un banner di opt-in (visitatori UE/SEE) oppure una breve informativa. L'analisi non viene eseguita prima del consenso. Puoi modificare la tua decisione in qualsiasi momento tramite il link “Cookie policy” nel piè di pagina.",
      },
      {
        title: "Trattamento di terzi",
        body:
          "L'analisi è gestita da Google secondo il proprio quadro normativo. Non vendiamo dati degli utenti e non utilizziamo audience pubblicitarie. I form di contatto inviano i dati direttamente alla nostra casella email e non utilizzano cookie per il tracciamento.",
      },
    ],
    table: {
      label: "Elenco cookie",
      headers: {
        name: "Nome",
        provider: "Fornitore",
        purpose: "Finalità",
        lifetime: "Durata",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "Memorizza la tua decisione sull'analisi",
          lifetime: "12 mesi",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "Identificatore del visitatore per le statistiche",
          lifetime: "fino a 24 mesi",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "Stato della sessione in GA4",
          lifetime: "fino a 24 mesi",
        },
      ],
    },
    withdraw: {
      label: "Revoca",
      title: "Come revocare il consenso all'analisi",
      body:
        "Premi il pulsante qui sotto — riapriremo il banner di consenso e potrai rifiutare l'analisi. La decisione è memorizzata nel cookie interlex_cookie_consent_v1 su questo dispositivo; ripeti l'azione su altri dispositivi per reimpostarla.",
      cta: "Modifica la mia decisione",
    },
    contact: {
      label: "Contatto",
      title: "Domande sul trattamento dei dati",
      body: "Per qualsiasi domanda sulla cookie policy o sul trattamento dei dati personali, scrivici a:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "Cookie",
  },
};

const fr: CookieConsentCopy = {
  banner: {
    lead: "Ce site utilise des cookies.",
    notice:
      "Nous utilisons des cookies strictement nécessaires au fonctionnement du site et des cookies analytiques Google Analytics pour comprendre comment nos pages aident les clients InterLex. L'analyse n'est activée qu'avec votre consentement.",
    acceptLabel: "Accepter",
    declineLabel: "Refuser",
    manageLabel: "En savoir plus",
    okLabel: "J'ai compris",
    policyLinkLabel: "Politique cookies",
    closeLabel: "Fermer",
  },
  page: {
    metaTitle: "Politique de cookies — InterLex",
    metaDescription:
      "Quels cookies utilise interlex.work, à quoi ils servent, comment gérer vos préférences et comment retirer votre consentement à l'analyse.",
    eyebrow: "Cookies",
    title: "Politique de cookies",
    lead:
      "interlex.work est le hub global d'InterLex. Cette page explique quels cookies nous utilisons, à quoi ils servent et comment gérer votre consentement.",
    updatedLabel: "En vigueur depuis le",
    updatedValue: "27 avril 2026",
    sections: [
      {
        title: "Que sont les cookies",
        body:
          "Les cookies sont de petits fichiers texte que le site enregistre dans votre navigateur. Ils permettent au site de fonctionner, retiennent la langue choisie et recueillent des statistiques anonymes de visite.",
      },
      {
        title: "Quels cookies nous utilisons",
        body: "Nous distinguons deux catégories de cookies :",
        bullets: [
          "Cookies strictement nécessaires — indispensables au fonctionnement du site (langue de l'interface, protection des formulaires, choix de consentement). Ils sont déposés sans consentement préalable.",
          "Cookies analytiques — Google Analytics 4 (propriété G-V16R7S8WGC). Ils nous aident à comprendre quelles pages et quels parcours aident réellement les clients à choisir entre le Kazakhstan et la Géorgie, et à évaluer le besoin d'un package clé en main. Ils ne s'activent qu'après votre consentement.",
        ],
      },
      {
        title: "Gestion du consentement",
        body:
          "Lors de votre première visite, selon votre juridiction, nous affichons soit une bannière opt-in (visiteurs UE/EEE), soit une notice courte. L'analyse n'est pas exécutée avant l'octroi du consentement. Vous pouvez modifier votre décision à tout moment via le lien « Politique cookies » dans le pied de page.",
      },
      {
        title: "Traitement par des tiers",
        body:
          "L'analyse est traitée par Google selon son propre cadre de confidentialité. Nous ne vendons pas les données utilisateurs et n'exploitons pas d'audiences publicitaires. Les formulaires de contact envoient les données directement à notre boîte mail et n'utilisent pas de cookies de suivi.",
      },
    ],
    table: {
      label: "Liste des cookies",
      headers: {
        name: "Nom",
        provider: "Fournisseur",
        purpose: "Finalité",
        lifetime: "Durée",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "Conserve votre choix concernant l'analyse",
          lifetime: "12 mois",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "Identifiant visiteur pour les statistiques",
          lifetime: "jusqu'à 24 mois",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "État de la session GA4",
          lifetime: "jusqu'à 24 mois",
        },
      ],
    },
    withdraw: {
      label: "Retrait",
      title: "Comment retirer votre consentement",
      body:
        "Cliquez sur le bouton ci-dessous — la bannière de consentement se rouvrira et vous pourrez refuser l'analyse. Le choix est conservé dans le cookie interlex_cookie_consent_v1 sur cet appareil ; répétez l'opération sur d'autres appareils pour les réinitialiser.",
      cta: "Modifier ma décision",
    },
    contact: {
      label: "Contact",
      title: "Questions sur le traitement des données",
      body: "Pour toute question sur la politique cookies ou le traitement des données personnelles, écrivez-nous à :",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "Cookies",
  },
};

const ka: CookieConsentCopy = {
  banner: {
    lead: "ეს საიტი იყენებს ქუქი-ფაილებს.",
    notice:
      "ვიყენებთ საიტის ფუნქციონირებისთვის აუცილებელ ქუქი-ფაილებს და Google Analytics-ის ანალიტიკურ ქუქი-ფაილებს, რათა გავიგოთ, როგორ ეხმარება ჩვენი გვერდები InterLex-ის კლიენტებს. ანალიტიკა ჩაირთვება მხოლოდ თქვენი თანხმობის შემდეგ.",
    acceptLabel: "მივიღოთ",
    declineLabel: "უარი",
    manageLabel: "მეტი ინფორმაცია",
    okLabel: "გასაგებია",
    policyLinkLabel: "ქუქი-ფაილების პოლიტიკა",
    closeLabel: "დახურვა",
  },
  page: {
    metaTitle: "ქუქი-ფაილების პოლიტიკა — InterLex",
    metaDescription:
      "რომელ ქუქი-ფაილებს იყენებს interlex.work, რისთვის, როგორ მართოთ თანხმობა და როგორ გააუქმოთ თანხმობა ანალიტიკაზე.",
    eyebrow: "ქუქი-ფაილები",
    title: "ქუქი-ფაილების პოლიტიკა",
    lead:
      "interlex.work არის InterLex-ის გლობალური ჰაბი. ამ გვერდზე ვხსნით, რომელ ქუქი-ფაილებს ვიყენებთ, რისთვის და როგორ შეგიძლიათ თანხმობის მართვა.",
    updatedLabel: "მოქმედებს",
    updatedValue: "2026 წლის 27 აპრილიდან",
    sections: [
      {
        title: "რა არის ქუქი-ფაილები",
        body:
          "ქუქი-ფაილები არის პატარა ტექსტური ფაილები, რომლებსაც საიტი ინახავს თქვენს ბრაუზერში. ისინი უზრუნველყოფენ საიტის გამართულ მუშაობას, იმახსოვრებენ არჩეულ ენას და აგროვებენ ანონიმურ სტატისტიკას.",
      },
      {
        title: "რომელ ქუქი-ფაილებს ვიყენებთ",
        body: "ქუქი-ფაილებს ვყოფთ ორ კატეგორიად:",
        bullets: [
          "ტექნიკური ქუქი-ფაილები — საიტის ფუნქციონირებისთვის აუცილებელია (ინტერფეისის ენა, ფორმების დაცვა, თქვენი თანხმობის გადაწყვეტილება). ისინი დაყენებულია უპირობოდ.",
          "ანალიტიკური ქუქი-ფაილები — Google Analytics 4 (იდენტიფიკატორი G-V16R7S8WGC). გვეხმარება დავინახოთ, რომელი გვერდები და რომელი მარშრუტები ეხმარება კლიენტებს გადაწყვეტილების მიღებაში — ყაზახეთში თუ საქართველოში დაიწყონ პროექტი და სჭირდებათ თუ არა „გასაღებზე“ პაკეტი. ეს ქუქი-ფაილები ჩაირთვება მხოლოდ თქვენი თანხმობის შემდეგ.",
        ],
      },
      {
        title: "თანხმობის მართვა",
        body:
          "პირველი ვიზიტისას, თქვენი იურისდიქციიდან გამომდინარე, ვაჩვენებთ ან opt-in ბანერს (ევროკავშირის/EEA-ს ვიზიტორებისთვის) ან მოკლე შეტყობინებას. ანალიტიკა არ ეშვება თანხმობის მიღებამდე. გადაწყვეტილების შეცვლა შეგიძლიათ ნებისმიერ დროს ფუტერში მოცემული ბმულის „ქუქი-ფაილების პოლიტიკა“ მეშვეობით.",
      },
      {
        title: "მესამე მხარის დამუშავება",
        body:
          "ანალიტიკას ამუშავებს Google საკუთარი წესების შესაბამისად. ჩვენ არ ვყიდით მომხმარებლის მონაცემებს და არ ვიყენებთ სარეკლამო აუდიტორიებს. საკონტაქტო ფორმები აგზავნიან მონაცემებს პირდაპირ ჩვენს საფოსტო ყუთში და არ იყენებენ ქუქი-ფაილებს თვალყურის დევნებისთვის.",
      },
    ],
    table: {
      label: "ქუქი-ფაილების ჩამონათვალი",
      headers: {
        name: "სახელი",
        provider: "მომწოდებელი",
        purpose: "დანიშნულება",
        lifetime: "ვადა",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "ინახავს თქვენს გადაწყვეტილებას ანალიტიკაზე",
          lifetime: "12 თვე",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "ვიზიტორის იდენტიფიკატორი სტატისტიკისთვის",
          lifetime: "24 თვემდე",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "სესიის მდგომარეობა GA4-ში",
          lifetime: "24 თვემდე",
        },
      ],
    },
    withdraw: {
      label: "გაუქმება",
      title: "როგორ გავაუქმოთ თანხმობა",
      body:
        "დააჭირეთ ქვემოთ მოცემულ ღილაკს — გაიხსნება თანხმობის ბანერი და შეძლებთ ანალიტიკის უარყოფას. გადაწყვეტილება ინახება interlex_cookie_consent_v1 ქუქი-ფაილში ამ მოწყობილობაზე; სხვა მოწყობილობებზე გასაუქმებლად გაიმეორეთ ქმედება იქ.",
      cta: "გადაწყვეტილების შეცვლა",
    },
    contact: {
      label: "კონტაქტი",
      title: "კითხვები მონაცემთა დამუშავებაზე",
      body: "ქუქი-ფაილების პოლიტიკაზე ან პერსონალური მონაცემების დამუშავებაზე კითხვების შემთხვევაში მოგვწერეთ:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "ქუქი-ფაილები",
  },
};

const de: CookieConsentCopy = {
  banner: {
    lead: "Diese Website verwendet Cookies.",
    notice:
      "Wir setzen technisch notwendige Cookies für den Betrieb der Website und Google-Analytics-Cookies ein, um zu verstehen, wie unsere Seiten InterLex-Mandanten helfen. Die Analyse läuft nur mit Ihrer Einwilligung.",
    acceptLabel: "Akzeptieren",
    declineLabel: "Ablehnen",
    manageLabel: "Mehr erfahren",
    okLabel: "Verstanden",
    policyLinkLabel: "Cookie-Richtlinie",
    closeLabel: "Schließen",
  },
  page: {
    metaTitle: "Cookie-Richtlinie — InterLex",
    metaDescription:
      "Welche Cookies interlex.work einsetzt, wozu sie dienen, wie Sie Ihre Einstellungen verwalten und Ihre Einwilligung zur Analyse widerrufen können.",
    eyebrow: "Cookies",
    title: "Cookie-Richtlinie",
    lead:
      "interlex.work ist der globale Hub von InterLex. Auf dieser Seite erläutern wir, welche Cookies wir setzen, wozu sie dienen und wie Sie Ihre Einwilligung verwalten.",
    updatedLabel: "Gültig ab",
    updatedValue: "27. April 2026",
    sections: [
      {
        title: "Was sind Cookies",
        body:
          "Cookies sind kleine Textdateien, die eine Website in Ihrem Browser speichert. Sie sorgen dafür, dass die Website funktioniert, merken sich die gewählte Sprache und erfassen anonyme Besuchsstatistiken.",
      },
      {
        title: "Welche Cookies wir einsetzen",
        body: "Wir unterscheiden zwei Cookie-Kategorien:",
        bullets: [
          "Technisch notwendige Cookies — erforderlich für den Betrieb der Website (Sprachwahl, Formularschutz, Ihre Einwilligungsentscheidung). Sie werden ohne Einwilligung gesetzt.",
          "Analyse-Cookies — Google Analytics 4 (Property G-V16R7S8WGC). Sie helfen uns zu erkennen, welche Seiten und welche Pfade Mandanten tatsächlich bei der Entscheidung zwischen Kasachstan und Georgien sowie bei der Wahl eines Schlüsselfertig-Pakets unterstützen. Sie werden erst nach Ihrer Einwilligung aktiviert.",
        ],
      },
      {
        title: "Verwaltung Ihrer Einwilligung",
        body:
          "Beim ersten Besuch zeigen wir je nach Rechtsraum entweder ein Opt-in-Banner (Besucher aus EU/EWR) oder einen kurzen Hinweis. Vor Ihrer Einwilligung wird keine Analyse ausgeführt. Sie können Ihre Entscheidung jederzeit über den Link „Cookie-Richtlinie“ im Footer ändern.",
      },
      {
        title: "Verarbeitung durch Dritte",
        body:
          "Die Analyse wird von Google nach dessen Datenschutzrahmen verarbeitet. Wir verkaufen keine Nutzerdaten und betreiben keine Werbezielgruppen. Kontaktformulare senden ihre Daten direkt an unser Postfach und nutzen keine Tracking-Cookies.",
      },
    ],
    table: {
      label: "Cookie-Liste",
      headers: {
        name: "Name",
        provider: "Anbieter",
        purpose: "Zweck",
        lifetime: "Laufzeit",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "Speichert Ihre Analyse-Einwilligung",
          lifetime: "12 Monate",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "Besucher-Identifikator für Statistiken",
          lifetime: "bis zu 24 Monate",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "Sitzungsstatus in GA4",
          lifetime: "bis zu 24 Monate",
        },
      ],
    },
    withdraw: {
      label: "Widerruf",
      title: "Einwilligung widerrufen",
      body:
        "Klicken Sie auf die Schaltfläche unten — wir öffnen das Einwilligungs-Banner erneut, sodass Sie die Analyse ablehnen können. Die Entscheidung wird im Cookie interlex_cookie_consent_v1 auf diesem Gerät gespeichert; wiederholen Sie den Schritt auf anderen Geräten zum Zurücksetzen.",
      cta: "Entscheidung ändern",
    },
    contact: {
      label: "Kontakt",
      title: "Fragen zur Datenverarbeitung",
      body: "Bei Fragen zu dieser Cookie-Richtlinie oder zur Verarbeitung personenbezogener Daten schreiben Sie uns an:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "Cookies",
  },
};

const ar: CookieConsentCopy = {
  banner: {
    lead: "يستخدم هذا الموقع ملفات تعريف الارتباط.",
    notice:
      "نستخدم ملفات تعريف ارتباط ضرورية لعمل الموقع وملفات Google Analytics لفهم كيفية مساعدة صفحاتنا لعملاء InterLex. لا تعمل التحليلات إلا بموافقتك.",
    acceptLabel: "موافق",
    declineLabel: "رفض",
    manageLabel: "مزيد من المعلومات",
    okLabel: "حسناً",
    policyLinkLabel: "سياسة ملفات الارتباط",
    closeLabel: "إغلاق",
  },
  page: {
    metaTitle: "سياسة ملفات تعريف الارتباط — InterLex",
    metaDescription:
      "ملفات تعريف الارتباط التي يستخدمها interlex.work، أغراضها، وكيفية إدارة التفضيلات وسحب الموافقة على التحليلات.",
    eyebrow: "ملفات الارتباط",
    title: "سياسة ملفات تعريف الارتباط",
    lead:
      "interlex.work هو المركز العالمي لـ InterLex. توضح هذه الصفحة أي ملفات ارتباط نضعها، ولماذا، وكيف يمكنك إدارة موافقتك.",
    updatedLabel: "سارية من",
    updatedValue: "27 أبريل 2026",
    sections: [
      {
        title: "ما هي ملفات الارتباط",
        body:
          "ملفات الارتباط هي ملفات نصية صغيرة يخزنها الموقع في متصفحك. تساعد على عمل الموقع، وتذكُّر اللغة المختارة، وجمع إحصاءات زيارات مجهولة الهوية.",
      },
      {
        title: "ما الذي نستخدمه",
        body: "نقسم ملفات الارتباط إلى فئتين:",
        bullets: [
          "ملفات ضرورية — مطلوبة لعمل الموقع (لغة الواجهة، حماية النماذج، قرار موافقتك). تُضبط بدون موافقة.",
          "ملفات تحليلية — Google Analytics 4 (المعرّف G-V16R7S8WGC). تساعدنا في رؤية الصفحات والمسارات التي تساعد العملاء فعلاً على اتخاذ القرار بين كازاخستان وجورجيا، وما إذا كانوا بحاجة إلى باقة جاهزة. تُفعَّل فقط بعد موافقتك.",
        ],
      },
      {
        title: "إدارة الموافقة",
        body:
          "في الزيارة الأولى، وحسب اختصاصك القضائي، نعرض إما لافتة opt-in (لزوار الاتحاد الأوروبي/المنطقة الاقتصادية الأوروبية) أو إشعاراً قصيراً. لا تُشغَّل التحليلات قبل الموافقة. يمكنك تعديل قرارك في أي وقت عبر رابط «سياسة ملفات الارتباط» في أسفل الموقع.",
      },
      {
        title: "المعالجة من جهات خارجية",
        body:
          "تعالج Google التحليلات وفق إطارها الخاص. نحن لا نبيع بيانات المستخدمين ولا نشغّل جماهير إعلانية. ترسل نماذج الاتصال البيانات مباشرة إلى صندوقنا البريدي ولا تستخدم ملفات ارتباط للتعقب.",
      },
    ],
    table: {
      label: "قائمة الملفات",
      headers: {
        name: "الاسم",
        provider: "المزوّد",
        purpose: "الغرض",
        lifetime: "المدة",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "يحفظ قرارك بشأن التحليلات",
          lifetime: "12 شهراً",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "معرّف الزائر للإحصاءات",
          lifetime: "حتى 24 شهراً",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "حالة الجلسة في GA4",
          lifetime: "حتى 24 شهراً",
        },
      ],
    },
    withdraw: {
      label: "السحب",
      title: "كيفية سحب موافقتك على التحليلات",
      body:
        "اضغط الزر أدناه — ستفتح لافتة الموافقة من جديد ويمكنك رفض التحليلات. يُحفظ القرار في الكوكي interlex_cookie_consent_v1 على هذا الجهاز؛ كرّر الإجراء على الأجهزة الأخرى لإعادة الضبط.",
      cta: "تعديل قراري",
    },
    contact: {
      label: "اتصال",
      title: "أسئلة حول معالجة البيانات",
      body: "لأي سؤال يخص سياسة ملفات الارتباط أو معالجة البيانات الشخصية، راسلنا على:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "ملفات الارتباط",
  },
};

const tr: CookieConsentCopy = {
  banner: {
    lead: "Bu site çerez kullanır.",
    notice:
      "Sitenin çalışması için zorunlu çerezleri ve sayfalarımızın InterLex müşterilerine nasıl yardımcı olduğunu anlamak için Google Analytics çerezlerini kullanıyoruz. Analitik yalnızca onayınızla çalışır.",
    acceptLabel: "Kabul et",
    declineLabel: "Reddet",
    manageLabel: "Daha fazla bilgi",
    okLabel: "Anladım",
    policyLinkLabel: "Çerez politikası",
    closeLabel: "Kapat",
  },
  page: {
    metaTitle: "Çerez Politikası — InterLex",
    metaDescription:
      "interlex.work hangi çerezleri kullanır, nedenleri, tercihleri yönetme ve analitik onayını geri çekme.",
    eyebrow: "Çerezler",
    title: "Çerez Politikası",
    lead:
      "interlex.work, InterLex'in küresel merkezidir. Bu sayfa hangi çerezleri kurduğumuzu, ne için kullandığımızı ve onayınızı nasıl yönetebileceğinizi açıklar.",
    updatedLabel: "Yürürlük tarihi",
    updatedValue: "27 Nisan 2026",
    sections: [
      {
        title: "Çerez nedir",
        body:
          "Çerezler, sitenin tarayıcınıza kaydettiği küçük metin dosyalarıdır. Sitenin çalışmasını sağlar, seçtiğiniz dili hatırlar ve anonim ziyaret istatistikleri toplar.",
      },
      {
        title: "Hangi çerezleri kullanıyoruz",
        body: "Çerezleri iki kategoriye ayırıyoruz:",
        bullets: [
          "Zorunlu çerezler — sitenin çalışması için gereklidir (arayüz dili, form koruması, onay kararı). Onay olmadan ayarlanır.",
          "Analitik çerezler — Google Analytics 4 (mülk G-V16R7S8WGC). Hangi sayfaların ve hangi yolların müşterilerin Kazakistan ile Gürcistan arasında karar vermesine ve anahtar teslim paket ihtiyacını değerlendirmesine yardımcı olduğunu görmemizi sağlar. Yalnızca onayınızdan sonra etkinleşir.",
        ],
      },
      {
        title: "Onayınızın yönetimi",
        body:
          "İlk ziyaretinizde, yetki alanınıza göre ya bir opt-in afişi (AB/AEA ziyaretçileri için) ya da kısa bir bildirim gösteririz. Onay olmadan analitik çalışmaz. Kararınızı dilediğiniz zaman site altbilgisindeki “Çerez politikası” bağlantısından değiştirebilirsiniz.",
      },
      {
        title: "Üçüncü taraf işlem",
        body:
          "Analitik, Google tarafından kendi gizlilik çerçevesinde işlenir. Kullanıcı verisi satmıyor, reklam kitleleri kullanmıyoruz. İletişim formları verileri doğrudan posta kutumuza gönderir ve takip için çerez kullanmaz.",
      },
    ],
    table: {
      label: "Çerez listesi",
      headers: {
        name: "Ad",
        provider: "Sağlayıcı",
        purpose: "Amaç",
        lifetime: "Süre",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "Analitik onayınızı saklar",
          lifetime: "12 ay",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "İstatistikler için ziyaretçi tanımlayıcısı",
          lifetime: "24 aya kadar",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "GA4 oturum durumu",
          lifetime: "24 aya kadar",
        },
      ],
    },
    withdraw: {
      label: "Geri çekme",
      title: "Onayı nasıl geri çekersiniz",
      body:
        "Aşağıdaki düğmeye basın — onay afişi yeniden açılır ve analitik kullanımı reddedebilirsiniz. Karar bu cihazdaki interlex_cookie_consent_v1 çerezinde saklanır; diğer cihazlarda sıfırlamak için işlemi orada da tekrarlayın.",
      cta: "Kararımı değiştir",
    },
    contact: {
      label: "İletişim",
      title: "Veri işleme soruları",
      body: "Bu çerez politikası veya kişisel verilerin işlenmesiyle ilgili sorularınız için bize yazın:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "Çerezler",
  },
};

const es: CookieConsentCopy = {
  banner: {
    lead: "Este sitio utiliza cookies.",
    notice:
      "Usamos cookies estrictamente necesarias para que el sitio funcione y cookies analíticas de Google Analytics para entender cómo nuestras páginas ayudan a los clientes de InterLex. La analítica solo se activa con tu consentimiento.",
    acceptLabel: "Aceptar",
    declineLabel: "Rechazar",
    manageLabel: "Más información",
    okLabel: "Entendido",
    policyLinkLabel: "Política de cookies",
    closeLabel: "Cerrar",
  },
  page: {
    metaTitle: "Política de cookies — InterLex",
    metaDescription:
      "Qué cookies utiliza interlex.work, para qué sirven, cómo gestionar tus preferencias y cómo retirar tu consentimiento a la analítica.",
    eyebrow: "Cookies",
    title: "Política de cookies",
    lead:
      "interlex.work es el hub global de InterLex. Esta página explica qué cookies instalamos, para qué sirven y cómo puedes gestionar tu consentimiento.",
    updatedLabel: "En vigor desde el",
    updatedValue: "27 de abril de 2026",
    sections: [
      {
        title: "Qué son las cookies",
        body:
          "Las cookies son pequeños archivos de texto que el sitio guarda en tu navegador. Permiten que el sitio funcione, recuerdan el idioma elegido y recopilan estadísticas anónimas de visita.",
      },
      {
        title: "Qué cookies utilizamos",
        body: "Distinguimos dos categorías de cookies:",
        bullets: [
          "Cookies estrictamente necesarias — imprescindibles para el funcionamiento del sitio (idioma de la interfaz, protección de formularios, decisión de consentimiento). Se establecen sin consentimiento previo.",
          "Cookies analíticas — Google Analytics 4 (propiedad G-V16R7S8WGC). Nos ayudan a ver qué páginas y qué rutas realmente ayudan a los clientes a decidir entre Kazajistán y Georgia y a evaluar la necesidad de un paquete llave en mano. Se activan solo tras tu consentimiento.",
        ],
      },
      {
        title: "Gestión del consentimiento",
        body:
          "En tu primera visita, según tu jurisdicción, mostramos un banner opt-in (visitantes de UE/EEE) o un aviso breve. La analítica no se ejecuta antes de obtener el consentimiento. Puedes cambiar tu decisión en cualquier momento a través del enlace «Política de cookies» en el pie de página.",
      },
      {
        title: "Tratamiento por terceros",
        body:
          "La analítica es procesada por Google bajo su propio marco de privacidad. No vendemos datos de usuarios ni operamos audiencias publicitarias. Los formularios de contacto envían los datos directamente a nuestro buzón y no utilizan cookies de seguimiento.",
      },
    ],
    table: {
      label: "Listado de cookies",
      headers: {
        name: "Nombre",
        provider: "Proveedor",
        purpose: "Finalidad",
        lifetime: "Duración",
      },
      rows: [
        {
          name: "interlex_cookie_consent_v1",
          provider: "interlex.work",
          purpose: "Almacena tu decisión sobre la analítica",
          lifetime: "12 meses",
        },
        {
          name: "_ga",
          provider: "Google Analytics",
          purpose: "Identificador de visitante para estadísticas",
          lifetime: "hasta 24 meses",
        },
        {
          name: "_ga_V16R7S8WGC",
          provider: "Google Analytics",
          purpose: "Estado de sesión en GA4",
          lifetime: "hasta 24 meses",
        },
      ],
    },
    withdraw: {
      label: "Retirada",
      title: "Cómo retirar tu consentimiento",
      body:
        "Pulsa el botón inferior — se reabrirá el banner de consentimiento y podrás rechazar la analítica. La decisión se guarda en la cookie interlex_cookie_consent_v1 de este dispositivo; repítelo en otros dispositivos para reiniciarla.",
      cta: "Cambiar mi decisión",
    },
    contact: {
      label: "Contacto",
      title: "Preguntas sobre el tratamiento de datos",
      body: "Para cualquier pregunta sobre esta política de cookies o sobre el tratamiento de datos personales, escríbenos a:",
      email: PUBLIC_EMAIL,
    },
  },
  footer: {
    linkLabel: "Cookies",
  },
};

const dictionaries: Record<Locale, CookieConsentCopy> = {
  ru,
  en,
  zh,
  it,
  fr,
  ka,
  de,
  ar,
  tr,
  es,
};

export function getCookieConsentCopy(locale: Locale): CookieConsentCopy {
  return dictionaries[locale];
}
