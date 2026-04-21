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
        "InterLex — глобальный хаб для cross-border legal advisory, регистрации компаний, налогового позиционирования, выхода на рынок и business setup в Казахстане и Грузии.",
      keywords: ["InterLex", "регистрация компании Казахстан", "бизнес в Грузии", "cross-border legal advisory", "налоговое структурирование"],
      searchLabel: "SEO темы",
      searchTitle: "Темы, по которым хаб должен находиться до перехода на сайт конкретного рынка.",
      searchIntro:
        "Глобальный хаб должен закрывать поисковый спрос вокруг cross-border legal advisory, выхода на рынок, структурирования бизнеса и регистрации компаний, а затем переводить клиента в нужную юрисдикцию.",
      searchCards: [
        { title: "Регистрация компании в Казахстане", body: "Выход на рынок, legal setup, налоги, бухгалтерия и запуск операционной работы в Казахстане." },
        { title: "Business setup в Грузии", body: "Регистрация компании в Грузии, FIZ-маршруты, налоговые модели и investor-friendly setup." },
        { title: "Cross-border legal и tax advisory", body: "Сравнение юрисдикций, холдинговая логика, групповое структурирование и устойчивость бизнеса в нескольких странах." },
        { title: "Международные фаундеры и инвесторы", body: "Первая точка входа для фаундеров, инвесторов и холдингов, которые сравнивают Казахстан и Грузию." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Вопросы с высоким поисковым намерением, на которые хаб должен отвечать прямо.",
      faqItems: [
        { question: "Для чего нужен interlex.work?", answer: "interlex.work — это мультиязычный глобальный хаб InterLex. Он представляет бренд, объясняет cross-border логику и переводит запрос в нужный рынок." },
        { question: "Когда использовать interlex.kz?", answer: "interlex.kz нужен, когда задача относится к Казахстану: регистрация компании, юридическое сопровождение, налоги, бухгалтерия и локальная операционная работа." },
        { question: "Когда использовать interlex.ge?", answer: "interlex.ge нужен, когда задача относится к Грузии: business setup, FIZ-структуры, налоговое планирование и англоязычная рыночная ориентация." },
      ],
    },
    about: {
      description:
        "О InterLex: глобальный бренд-хаб для cross-border legal advisory, стратегии выхода на рынок, структурирования бизнеса и маршрутизации в Казахстан и Грузию.",
      keywords: ["о InterLex", "международный юридический консалтинг", "выход на рынок", "Казахстан", "Грузия"],
    },
    crossBorder: {
      description:
        "Сравнение Казахстана и Грузии для регистрации компаний, налогового позиционирования, структурирования бизнеса, investor entry и cross-border legal advisory.",
      keywords: ["Казахстан или Грузия", "сравнение юрисдикций", "структурирование бизнеса", "налоги", "вход инвестора"],
    },
    contact: {
      description:
        "Свяжитесь с InterLex по вопросам cross-border legal advisory, выхода на рынок Казахстана, business setup в Грузии и мультиязычной маршрутизации запроса.",
      keywords: ["контакты InterLex", "юридический консалтинг", "Казахстан", "Грузия", "cross-border"],
    },
  },
  zh: {
    home: {
      description:
        "InterLex е…ЁзђѓжћўзєЅпјЊи¦†з›–и·Ёеўѓжі•еѕ‹йЎѕй—®гЂЃе…¬еЏёжіЁе†ЊгЂЃзЁЋеЉЎе®љдЅЌгЂЃеё‚ењєиї›е…Ґд»ҐеЏЉе“€иђЁе…‹ж–Їеќ¦е’Њж јйІЃеђ‰дєљзљ„ business setupгЂ‚",
      keywords: ["InterLex", "е“€иђЁе…‹ж–Їеќ¦е…¬еЏёжіЁе†Њ", "ж јйІЃеђ‰дєљи®ѕз«‹е…¬еЏё", "и·Ёеўѓжі•еѕ‹йЎѕй—®", "зЁЋеЉЎз»“жћ„"],
      searchLabel: "жђњзґўдё»йў",
      searchTitle: "ењЁз”Ёж€·иї›е…Ґеё‚ењєз«™з‚№д№‹е‰ЌпјЊжћўзєЅеє”и¦†з›–зљ„жђњзґўж„Џе›ѕгЂ‚",
      searchIntro: "е…ЁзђѓжћўзєЅеє”е…€и¦†з›–и·Ёеўѓжі•еѕ‹гЂЃеё‚ењєиї›е…ҐгЂЃе…¬еЏёз»“жћ„дёЋи®ѕз«‹з­‰жђњзґўйњЂж±‚пјЊе†ЌжЉЉе®ўж€·еЇјеђ‘ж­ЈзЎ®еЏёжі•иѕ–еЊєгЂ‚",
      searchCards: [
        { title: "е“€иђЁе…‹ж–Їеќ¦е…¬еЏёжіЁе†Њ", body: "и¦†з›–её‚ењєиї›е…ҐгЂЃжі•еѕ‹и®ѕз«‹гЂЃзЁЋеЉЎе®љдЅЌгЂЃдјљи®ЎеЌЏеђЊдёЋиїђиђҐеђЇеЉЁгЂ‚" },
        { title: "ж јйІЃеђ‰дєљ business setup", body: "и¦†з›–е…¬еЏёи®ѕз«‹гЂЃFIZ и·Їеѕ„гЂЃзЁЋеЉЎжЁЎећ‹дёЋйќўеђ‘жЉ•иµ„иЂ…зљ„жћ¶жћ„гЂ‚" },
        { title: "и·Ёеўѓжі•еѕ‹дёЋзЁЋеЉЎйЎѕй—®", body: "йЂ‚з”ЁдєЋйњЂи¦ЃжЇ”иѕѓеЏёжі•иѕ–еЊєгЂЃжЋ§и‚ЎйЂ»иѕ‘е’Њи·Ёе›ЅдёљеЉЎз»“жћ„зљ„йЎ№з›®гЂ‚" },
        { title: "е›Ѕй™…е€›е§‹дєєдёЋжЉ•иµ„иЂ…", body: "дёєжЇ”иѕѓе“€иђЁе…‹ж–Їеќ¦дёЋж јйІЃеђ‰дєљзљ„е€›е§‹дєєгЂЃе®¶ж—ЏеЉће…¬е®¤е’ЊжЉ•иµ„е›ўйџжЏђдѕ›е…ҐеЏЈгЂ‚" },
      ],
      faqLabel: "FAQ",
      faqTitle: "жћўзєЅеє”з›ґжЋҐе›ћз­”зљ„й«ж„Џе›ѕй—®йўгЂ‚",
      faqItems: [
        { question: "interlex.work зљ„дЅњз”ЁжЇд»Ђд№€пјџ", answer: "interlex.work жЇ InterLex зљ„е¤љиЇ­иЁЂе…ЁзђѓжћўзєЅпјЊз”ЁдєЋд»‹з»Ќе“Ѓз‰ЊгЂЃи§Јй‡Љи·Ёеўѓе®љдЅЌпјЊе№¶жЉЉйЎ№з›®еЇјеђ‘ж­ЈзЎ®её‚ењєз«™з‚№гЂ‚" },
        { question: "д»Ђд№€ж—¶еЂ™еє”иЇҐдЅїз”Ё interlex.kzпјџ", answer: "еЅ“йЎ№з›®жЋзЎ®е±ћдєЋе“€иђЁе…‹ж–Їеќ¦пјЊдѕ‹е¦‚е…¬еЏёжіЁе†ЊгЂЃжі•еѕ‹ж”ЇжЊЃгЂЃзЁЋеЉЎе®љдЅЌгЂЃдјљи®ЎдёЋжњ¬ењ°ж‰§иЎЊж—¶пјЊеє”дЅїз”Ё interlex.kzгЂ‚" },
        { question: "д»Ђд№€ж—¶еЂ™еє”иЇҐдЅїз”Ё interlex.geпјџ", answer: "еЅ“йЎ№з›®жЋзЎ®е±ћдєЋж јйІЃеђ‰дєљпјЊдѕ‹е¦‚ business setupгЂЃFIZ з»“жћ„гЂЃзЁЋеЉЎи§„е€’дёЋи‹±иЇ­дје…€её‚ењєжЊ‡еЇјж—¶пјЊеє”дЅїз”Ё interlex.geгЂ‚" },
      ],
    },
    about: {
      description: "е…ідєЋ InterLexпјљйќўеђ‘и·Ёеўѓжі•еѕ‹йЎѕй—®гЂЃеё‚ењєиї›е…ҐгЂЃе•†дёљз»“жћ„и®ѕи®Ўд»ҐеЏЉе“€иђЁе…‹ж–Їеќ¦е’Њж јйІЃеђ‰дєљи·Їз”±зљ„е…Ёзђѓе“Ѓз‰ЊжћўзєЅгЂ‚",
      keywords: ["е…ідєЋ InterLex", "е…Ёзђѓжі•еѕ‹йЎѕй—®", "её‚ењєиї›е…Ґ", "е“€иђЁе…‹ж–Їеќ¦", "ж јйІЃеђ‰дєљ"],
    },
    crossBorder: {
      description: "жЇ”иѕѓе“€иђЁе…‹ж–Їеќ¦дёЋж јйІЃеђ‰дєљењЁе…¬еЏёжіЁе†ЊгЂЃзЁЋеЉЎе®љдЅЌгЂЃдёљеЉЎз»“жћ„и®ѕи®ЎгЂЃжЉ•иµ„иЂ…иї›е…Ґе’Њи·Ёеўѓжі•еѕ‹йЎѕй—®ж–№йќўзљ„е·®еј‚гЂ‚",
      keywords: ["е“€иђЁе…‹ж–Їеќ¦иїжЇж јйІЃеђ‰дєљ", "е…¬еЏёи®ѕз«‹жЇ”иѕѓ", "зЁЋеЉЎе®љдЅЌ", "жЉ•иµ„иЂ…иї›е…Ґ", "и·Ёеўѓз»“жћ„"],
    },
    contact: {
      description: "иЃ”зі» InterLexпјЊи®Ёи®єи·Ёеўѓжі•еѕ‹йЎѕй—®гЂЃе“€иђЁе…‹ж–Їеќ¦её‚ењєиї›е…ҐгЂЃж јйІЃеђ‰дєљ business setup дёЋе¤љиЇ­иЁЂйЎ№з›®и·Їз”±гЂ‚",
      keywords: ["иЃ”зі» InterLex", "и·Ёеўѓжі•еѕ‹йЎѕй—®", "е“€иђЁе…‹ж–Їеќ¦её‚ењєиї›е…Ґ", "ж јйІЃеђ‰дєљ business setup"],
    },
  },
  it: {
    home: {
      description: "InterLex global hub per consulenza legale cross-border, registrazione societГ , posizionamento fiscale, market entry e business setup in Kazakistan e Georgia.",
      keywords: ["InterLex", "registrazione societГ  Kazakistan", "business setup Georgia", "consulenza legale cross-border", "strutturazione fiscale"],
      searchLabel: "Temi SEO",
      searchTitle: "Argomenti per cui lвЂ™hub dovrebbe posizionarsi prima del passaggio al market site.",
      searchIntro: "Il global hub dovrebbe intercettare intenti legati a consulenza cross-border, ingresso nei mercati, strutturazione e setup societario.",
      searchCards: [
        { title: "Registrazione societГ  in Kazakistan", body: "Ingresso nel mercato, legal setup, tax positioning, accounting e avvio operativo in Kazakistan." },
        { title: "Business setup in Georgia", body: "Formazione societaria in Georgia, percorsi FIZ, modelli fiscali e setup investor-friendly." },
        { title: "Consulenza legale e fiscale cross-border", body: "Confronto tra giurisdizioni, holding logic, group structuring e continuitГ  operativa tra piГ№ paesi." },
        { title: "Founder e investitori internazionali", body: "Primo ingresso per founder, holding, family office e team che confrontano Kazakistan e Georgia." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Domande ad alta intenzione che lвЂ™hub dovrebbe chiarire subito.",
      faqItems: [
        { question: "A cosa serve interlex.work?", answer: "interlex.work ГЁ il global hub multilingue di InterLex. Presenta il brand, spiega il posizionamento cross-border e instrada il mandato verso il market site corretto." },
        { question: "Quando usare interlex.kz?", answer: "Quando il lavoro appartiene al Kazakistan, in particolare per registrazione societГ , supporto legale, tax positioning, accounting ed esecuzione locale." },
        { question: "Quando usare interlex.ge?", answer: "Quando il lavoro appartiene alla Georgia, in particolare per business setup, strutture FIZ, pianificazione fiscale e guida di mercato in inglese." },
      ],
    },
    about: {
      description: "Su InterLex: hub globale del brand per consulenza legale cross-border, strategie di market entry, business structuring e routing verso Kazakistan e Georgia.",
      keywords: ["InterLex", "consulenza legale globale", "market entry", "Kazakistan", "Georgia"],
    },
    crossBorder: {
      description: "Confronta Kazakistan e Georgia per registrazione societГ , posizionamento fiscale, business structuring, investor entry e consulenza legale cross-border.",
      keywords: ["Kazakistan o Georgia", "confronto giurisdizioni", "registrazione societГ ", "fiscale", "investor entry"],
    },
    contact: {
      description: "Contatta InterLex per consulenza legale cross-border, ingresso nel mercato kazako, business setup in Georgia e routing multilingue del mandato.",
      keywords: ["contatto InterLex", "consulenza legale", "Kazakistan", "Georgia", "cross-border"],
    },
  },
  fr: {
    home: {
      description: "Hub mondial InterLex pour le conseil juridique cross-border, lвЂ™immatriculation de sociГ©tГ©s, le positionnement fiscal, lвЂ™entrГ©e sur le marchГ© et le business setup au Kazakhstan et en GГ©orgie.",
      keywords: ["InterLex", "crГ©ation sociГ©tГ© Kazakhstan", "business setup GГ©orgie", "conseil juridique cross-border", "structuration fiscale"],
      searchLabel: "ThГЁmes SEO",
      searchTitle: "Les sujets sur lesquels le hub doit se positionner avant le transfert vers un market site.",
      searchIntro: "Le hub global doit capter les recherches liГ©es au conseil cross-border, Г  lвЂ™entrГ©e sur le marchГ©, Г  la structuration et au setup dвЂ™entreprise.",
      searchCards: [
        { title: "CrГ©ation de sociГ©tГ© au Kazakhstan", body: "EntrГ©e sur le marchГ©, legal setup, tax positioning, accounting et lancement opГ©rationnel au Kazakhstan." },
        { title: "Business setup en GГ©orgie", body: "CrГ©ation de sociГ©tГ© en GГ©orgie, parcours FIZ, modГЁles fiscaux et setup orientГ© investisseurs." },
        { title: "Conseil juridique et fiscal cross-border", body: "Comparaison de juridictions, logique de holding, structuration de groupe et continuitГ© opГ©rationnelle multi-pays." },
        { title: "Fondateurs et investisseurs internationaux", body: "Point dвЂ™entrГ©e pour fondateurs, holdings, family offices et Г©quipes qui comparent Kazakhstan et GГ©orgie." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Questions Г  forte intention auxquelles le hub doit rГ©pondre clairement.",
      faqItems: [
        { question: "ГЂ quoi sert interlex.work ?", answer: "interlex.work est le hub mondial multilingue dвЂ™InterLex. Il prГ©sente la marque, explique le positionnement cross-border et route le mandat vers le bon market site." },
        { question: "Quand utiliser interlex.kz ?", answer: "LorsquвЂ™un mandat relГЁve du Kazakhstan, notamment pour crГ©ation de sociГ©tГ©, support juridique, positionnement fiscal, comptabilitГ© et exГ©cution locale." },
        { question: "Quand utiliser interlex.ge ?", answer: "LorsquвЂ™un mandat relГЁve de la GГ©orgie, notamment pour business setup, structures FIZ, planification fiscale et guidance de marchГ© en anglais." },
      ],
    },
    about: {
      description: "ГЂ propos dвЂ™InterLex : hub global de marque pour le conseil juridique cross-border, la stratГ©gie dвЂ™entrГ©e sur le marchГ©, la structuration business et le routing vers le Kazakhstan et la GГ©orgie.",
      keywords: ["InterLex", "conseil juridique global", "entrГ©e sur le marchГ©", "Kazakhstan", "GГ©orgie"],
    },
    crossBorder: {
      description: "Comparez le Kazakhstan et la GГ©orgie pour crГ©ation de sociГ©tГ©, positionnement fiscal, business structuring, investor entry et conseil juridique cross-border.",
      keywords: ["Kazakhstan ou GГ©orgie", "comparaison juridictions", "crГ©ation sociГ©tГ©", "fiscalitГ©", "investisseur"],
    },
    contact: {
      description: "Contactez InterLex pour du conseil juridique cross-border, lвЂ™entrГ©e sur le marchГ© kazakh, le business setup en GГ©orgie et le routing multilingue du mandat.",
      keywords: ["contact InterLex", "conseil juridique", "Kazakhstan", "GГ©orgie", "cross-border"],
    },
  },
  ka: {
    home: {
      description: "InterLex-бѓбѓЎ бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓ°бѓђбѓ‘бѓ cross-border legal advisory-бѓЎбѓ—бѓ•бѓбѓЎ, бѓ™бѓќбѓ›бѓћбѓђбѓњбѓбѓбѓЎ бѓ бѓ”бѓ’бѓбѓЎбѓўбѓ бѓђбѓЄбѓбѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓЎбѓђбѓ’бѓђбѓ“бѓђбѓЎбѓђбѓ®бѓђбѓ“бѓќ бѓћбѓќбѓ–бѓбѓЄбѓбѓќбѓњбѓбѓ бѓ”бѓ‘бѓбѓЎбѓ—бѓ•бѓбѓЎ, market entry-бѓЎбѓђ бѓ“бѓђ business setup-бѓбѓЎбѓ—бѓ•бѓбѓЎ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЎбѓђ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ.",
      keywords: ["InterLex", "бѓ™бѓќбѓ›бѓћбѓђбѓњбѓбѓбѓЎ бѓ бѓ”бѓ’бѓбѓЎбѓўбѓ бѓђбѓЄбѓбѓђ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЁбѓ", "business setup бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ", "cross-border legal advisory", "tax structuring"],
      searchLabel: "SEO бѓ—бѓ”бѓ›бѓ”бѓ‘бѓ",
      searchTitle: "бѓ—бѓ”бѓ›бѓ”бѓ‘бѓ, бѓ бѓќбѓ›бѓљбѓ”бѓ‘бѓ–бѓ”бѓЄ бѓ°бѓђбѓ‘бѓ бѓЈбѓњбѓ“бѓђ бѓ©бѓђбѓњбѓ“бѓ”бѓЎ бѓ«бѓбѓ”бѓ‘бѓђбѓЁбѓ market site-бѓ–бѓ” бѓ’бѓђбѓ“бѓђбѓ§бѓ•бѓђбѓњбѓђбѓ›бѓ“бѓ”.",
      searchIntro: "бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ›бѓђ бѓ°бѓђбѓ‘бѓ›бѓђ бѓЈбѓњбѓ“бѓђ бѓ“бѓђбѓбѓ­бѓбѓ бѓќбѓЎ бѓ«бѓбѓ”бѓ‘бѓбѓЎ бѓ’бѓђбѓњбѓ–бѓ бѓђбѓ®бѓ•бѓђ cross-border legal advisory, market entry, business structuring бѓ“бѓђ company setup бѓ›бѓбѓ›бѓђбѓ бѓ—бѓЈбѓљбѓ”бѓ‘бѓ”бѓ‘бѓ–бѓ”.",
      searchCards: [
        { title: "бѓ™бѓќбѓ›бѓћбѓђбѓњбѓбѓбѓЎ бѓ бѓ”бѓ’бѓбѓЎбѓўбѓ бѓђбѓЄбѓбѓђ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЁбѓ", body: "бѓ›бѓќбѓбѓЄбѓђбѓ•бѓЎ бѓ‘бѓђбѓ–бѓђбѓ бѓ–бѓ” бѓЁбѓ”бѓЎбѓ•бѓљбѓђбѓЎ, legal setup-бѓЎ, tax positioning-бѓЎ, accounting-бѓЎ бѓ“бѓђ бѓќбѓћбѓ”бѓ бѓђбѓЄбѓбѓЈбѓљ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђбѓЎ." },
        { title: "Business setup бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ", body: "бѓ›бѓќбѓбѓЄбѓђбѓ•бѓЎ бѓ™бѓќбѓ›бѓћбѓђбѓњбѓбѓбѓЎ бѓЁбѓ”бѓҐбѓ›бѓњбѓђбѓЎ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ, FIZ бѓ’бѓ–бѓ”бѓ‘бѓЎ, бѓЎбѓђбѓ’бѓђбѓ“бѓђбѓЎбѓђбѓ®бѓђбѓ“бѓќ бѓ›бѓќбѓ“бѓ”бѓљбѓ”бѓ‘бѓЎ бѓ“бѓђ investor-friendly setup-бѓЎ." },
        { title: "Cross-border legal бѓ“бѓђ tax advisory", body: "бѓбѓЈбѓ бѓЎбѓ“бѓбѓҐбѓЄбѓбѓ”бѓ‘бѓбѓЎ бѓЁбѓ”бѓ“бѓђбѓ бѓ”бѓ‘бѓђ, holding logic, group structuring бѓ“бѓђ бѓ›бѓ бѓђбѓ•бѓђбѓљбѓҐбѓ•бѓ”бѓ§бѓњбѓбѓђбѓњбѓ continuity." },
        { title: "бѓЎбѓђбѓ”бѓ бѓ—бѓђбѓЁбѓќбѓ бѓбѓЎбѓќ бѓ“бѓђбѓ›бѓ¤бѓЈбѓ«бѓњбѓ”бѓ‘бѓљбѓ”бѓ‘бѓ бѓ“бѓђ бѓбѓњбѓ•бѓ”бѓЎбѓўбѓќбѓ бѓ”бѓ‘бѓ", body: "бѓЁбѓ”бѓЎбѓђбѓЎбѓ•бѓљбѓ”бѓљбѓ founders, holdings, family offices бѓ“бѓђ investor teams-бѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓ бѓќбѓ›бѓљбѓ”бѓ‘бѓбѓЄ бѓђбѓ“бѓђбѓ бѓ”бѓ‘бѓ”бѓњ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЎбѓђ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎ." },
      ],
      faqLabel: "FAQ",
      faqTitle: "бѓ›бѓђбѓ¦бѓђбѓљбѓ бѓ«бѓбѓ”бѓ‘бѓбѓ—бѓ бѓ’бѓђбѓњбѓ–бѓ бѓђбѓ®бѓ•бѓбѓЎ бѓ™бѓбѓ—бѓ®бѓ•бѓ”бѓ‘бѓ, бѓ бѓќбѓ›бѓљбѓ”бѓ‘бѓ–бѓ”бѓЄ бѓ°бѓђбѓ‘бѓ›бѓђ бѓЈбѓњбѓ“бѓђ бѓЈбѓћбѓђбѓЎбѓЈбѓ®бѓќбѓЎ.",
      faqItems: [
        { question: "бѓ бѓбѓЎбѓ—бѓ•бѓбѓЎ бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓ”бѓ‘бѓђ interlex.work?", answer: "interlex.work бѓђбѓ бѓбѓЎ InterLex-бѓбѓЎ бѓ›бѓ бѓђбѓ•бѓђбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњбѓ бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓ°бѓђбѓ‘бѓ. бѓбѓЎ бѓ¬бѓђбѓ бѓ›бѓќбѓђбѓ“бѓ’бѓ”бѓњбѓЎ бѓ‘бѓ бѓ”бѓњбѓ“бѓЎ, бѓ®бѓЎбѓњбѓбѓЎ cross-border бѓћбѓќбѓ–бѓбѓЄбѓбѓќбѓњбѓбѓ бѓ”бѓ‘бѓђбѓЎ бѓ“бѓђ бѓ›бѓђбѓњбѓ“бѓђбѓўбѓЎ бѓЎбѓ¬бѓќбѓ  market site-бѓ–бѓ” бѓ›бѓбѓ›бѓђбѓ бѓ—бѓђбѓ•бѓЎ." },
        { question: "бѓ бѓќбѓ“бѓбѓЎ бѓЈбѓњбѓ“бѓђ бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓќбѓЎ бѓ™бѓљбѓбѓ”бѓњбѓўбѓ›бѓђ interlex.kz?", answer: "бѓ бѓќбѓЄбѓђ бѓЎбѓђбѓҐбѓ›бѓ” бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЎ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ, бѓ’бѓђбѓњбѓЎбѓђбѓ™бѓЈбѓ—бѓ бѓ”бѓ‘бѓбѓ— бѓ™бѓќбѓ›бѓћбѓђбѓњбѓбѓбѓЎ бѓ бѓ”бѓ’бѓбѓЎбѓўбѓ бѓђбѓЄбѓбѓбѓЎ, legal support-бѓбѓЎ, tax positioning-бѓбѓЎ, accounting-бѓбѓЎбѓђ бѓ“бѓђ бѓђбѓ“бѓ’бѓбѓљбѓќбѓ‘бѓ бѓбѓ•бѓ execution-бѓбѓЎбѓ—бѓ•бѓбѓЎ." },
        { question: "бѓ бѓќбѓ“бѓбѓЎ бѓЈбѓњбѓ“бѓђ бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓќбѓЎ бѓ™бѓљбѓбѓ”бѓњбѓўбѓ›бѓђ interlex.ge?", answer: "бѓ бѓќбѓЄбѓђ бѓЎбѓђбѓҐбѓ›бѓ” бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЎ бѓ”бѓ™бѓЈбѓ—бѓ•бѓњбѓбѓЎ, бѓ’бѓђбѓњбѓЎбѓђбѓ™бѓЈбѓ—бѓ бѓ”бѓ‘бѓбѓ— business setup-бѓбѓЎ, FIZ бѓЎбѓўбѓ бѓЈбѓҐбѓўбѓЈбѓ бѓ”бѓ‘бѓбѓЎ, tax planning-бѓбѓЎбѓђ бѓ“бѓђ English-first market guidance-бѓбѓЎбѓ—бѓ•бѓбѓЎ." },
      ],
    },
    about: {
      description: "InterLex-бѓбѓЎ бѓЁбѓ”бѓЎбѓђбѓ®бѓ”бѓ‘: бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓ‘бѓ бѓ”бѓњбѓ“-бѓ°бѓђбѓ‘бѓ cross-border legal advisory-бѓЎбѓ—бѓ•бѓбѓЎ, market entry strategy-бѓЎбѓ—бѓ•бѓбѓЎ, business structuring-бѓбѓЎбѓ—бѓ•бѓбѓЎ бѓ“бѓђ routing-бѓбѓЎбѓ—бѓ•бѓбѓЎ бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЎбѓђ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ.",
      keywords: ["InterLex", "бѓ’бѓљбѓќбѓ‘бѓђбѓљбѓЈбѓ бѓ бѓбѓЈбѓ бѓбѓ“бѓбѓЈбѓљбѓ бѓ™бѓќбѓњбѓЎбѓђбѓљбѓўбѓбѓњбѓ’бѓ", "market entry", "бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓ", "бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќ"],
    },
    crossBorder: {
      description: "бѓЁбѓ”бѓђбѓ“бѓђбѓ бѓ”бѓ— бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓ бѓ“бѓђ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќ бѓ™бѓќбѓ›бѓћбѓђбѓњбѓбѓбѓЎ бѓ бѓ”бѓ’бѓбѓЎбѓўбѓ бѓђбѓЄбѓбѓбѓЎ, бѓЎбѓђбѓ’бѓђбѓ“бѓђбѓЎбѓђбѓ®бѓђбѓ“бѓќ бѓћбѓќбѓ–бѓбѓЄбѓбѓќбѓњбѓбѓ бѓ”бѓ‘бѓбѓЎ, business structuring-бѓбѓЎ, investor entry-бѓбѓЎбѓђ бѓ“бѓђ cross-border legal advisory-бѓбѓЎбѓ—бѓ•бѓбѓЎ.",
      keywords: ["бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓ бѓ—бѓЈ бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќ", "бѓбѓЈбѓ бѓбѓЎбѓ“бѓбѓҐбѓЄбѓбѓбѓЎ бѓЁбѓ”бѓ“бѓђбѓ бѓ”бѓ‘бѓђ", "бѓ™бѓќбѓ›бѓћбѓђбѓњбѓбѓбѓЎ бѓ бѓ”бѓ’бѓбѓЎбѓўбѓ бѓђбѓЄбѓбѓђ", "бѓ’бѓђбѓ“бѓђбѓЎбѓђбѓ®бѓђбѓ“бѓ”бѓ‘бѓ", "бѓбѓњбѓ•бѓ”бѓЎбѓўбѓќбѓ бѓ"],
    },
    contact: {
      description: "бѓ“бѓђбѓЈбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ“бѓбѓ— InterLex-бѓЎ cross-border legal advisory-бѓбѓЎбѓ—бѓ•бѓбѓЎ, бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓЁбѓ market entry-бѓЎбѓ—бѓ•бѓбѓЎ, бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќбѓЁбѓ business setup-бѓбѓЎбѓ—бѓ•бѓбѓЎ бѓ“бѓђ бѓ›бѓ бѓђбѓ•бѓђбѓљбѓ”бѓњбѓќбѓ•бѓђбѓњбѓ routing-бѓбѓЎбѓ—бѓ•бѓбѓЎ.",
      keywords: ["InterLex бѓ™бѓќбѓњбѓўбѓђбѓҐбѓўбѓ", "бѓбѓЈбѓ бѓбѓ“бѓбѓЈбѓљбѓ бѓ™бѓќбѓњбѓЎбѓђбѓљбѓўбѓбѓњбѓ’бѓ", "бѓ§бѓђбѓ–бѓђбѓ®бѓ”бѓ—бѓ", "бѓЎбѓђбѓҐбѓђбѓ бѓ—бѓ•бѓ”бѓљбѓќ", "cross-border"],
    },
  },
  de: {
    home: {
      description: "InterLex Global Hub fГјr cross-border Rechtsberatung, GesellschaftsgrГјndung, steuerliche Positionierung, Markteintritt und Business Setup in Kasachstan und Georgien.",
      keywords: ["InterLex", "GesellschaftsgrГјndung Kasachstan", "Business Setup Georgien", "Cross-border Rechtsberatung", "Steuerstrukturierung"],
      searchLabel: "SEO Themen",
      searchTitle: "Themen, fГјr die der Hub ranken sollte, bevor das Mandat auf eine Marktseite wechselt.",
      searchIntro: "Der globale Hub sollte Suchintentionen rund um cross-border Beratung, Markteintritt, Strukturierung und Gesellschaftsaufbau abdecken.",
      searchCards: [
        { title: "GesellschaftsgrГјndung in Kasachstan", body: "Markteintritt, Legal Setup, steuerliche Positionierung, Accounting und operativer Start in Kasachstan." },
        { title: "Business Setup in Georgien", body: "GrГјndung in Georgien, FIZ-Pfade, Steuerlogik und investor-friendly Setup-Modelle." },
        { title: "Cross-border Legal- und Tax-Advisory", body: "Vergleich von Jurisdiktionen, Holding-Logik, Konzernstrukturierung und Business Continuity Гјber mehrere LГ¤nder." },
        { title: "Internationale GrГјnder und Investoren", body: "Erster Einstieg fГјr GrГјnder, Holdings, Family Offices und Teams, die Kasachstan und Georgien vergleichen." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Suchstarke Fragen, die der Hub klar beantworten sollte.",
      faqItems: [
        { question: "WofГјr dient interlex.work?", answer: "interlex.work ist der mehrsprachige globale Hub von InterLex. Er stellt die Marke vor, erklГ¤rt die cross-border Positionierung und routet das Mandat auf die richtige Marktseite." },
        { question: "Wann sollte interlex.kz genutzt werden?", answer: "Wenn das Mandat zu Kasachstan gehГ¶rt, insbesondere fГјr GesellschaftsgrГјndung, Rechtsberatung, steuerliche Positionierung, Accounting und lokale Umsetzung." },
        { question: "Wann sollte interlex.ge genutzt werden?", answer: "Wenn das Mandat zu Georgien gehГ¶rt, insbesondere fГјr Business Setup, FIZ-Strukturen, Steuerplanung und englischsprachige MarktfГјhrung." },
      ],
    },
    about: {
      description: "Гњber InterLex: globaler Marken-Hub fГјr cross-border Rechtsberatung, Markteintrittsstrategie, Business Structuring und Routing nach Kasachstan und Georgien.",
      keywords: ["InterLex", "globale Rechtsberatung", "Markteintritt", "Kasachstan", "Georgien"],
    },
    crossBorder: {
      description: "Vergleichen Sie Kasachstan und Georgien fГјr GesellschaftsgrГјndung, steuerliche Positionierung, Business Structuring, Investor Entry und cross-border Rechtsberatung.",
      keywords: ["Kasachstan oder Georgien", "Jurisdiktionsvergleich", "GesellschaftsgrГјndung", "Steuern", "Investor Entry"],
    },
    contact: {
      description: "Kontaktieren Sie InterLex fГјr cross-border Rechtsberatung, Markteintritt in Kasachstan, Business Setup in Georgien und mehrsprachiges Mandatsrouting.",
      keywords: ["Kontakt InterLex", "Rechtsberatung", "Kasachstan", "Georgien", "cross-border"],
    },
  },
  ar: {
    home: {
      description: "Ш§Щ„Щ…Ш±ЩѓШІ Ш§Щ„Ш№Ш§Щ„Щ…ЩЉ Щ„ЩЂ InterLex Щ„Щ„Ш§ШіШЄШґШ§Ш±Ш§ШЄ Ш§Щ„Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇШЊ Щ€ШЄШіШ¬ЩЉЩ„ Ш§Щ„ШґШ±ЩѓШ§ШЄШЊ Щ€Ш§Щ„ШЄЩ…Щ€Ш¶Ш№ Ш§Щ„Ш¶Ш±ЩЉШЁЩЉШЊ Щ€Ш§Щ„ШЇШ®Щ€Щ„ ШҐЩ„Щ‰ Ш§Щ„ШіЩ€Щ‚ШЊ Щ€business setup ЩЃЩЉ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§.",
      keywords: ["InterLex", "ШЄШіШ¬ЩЉЩ„ ШґШ±ЩѓШ© ЩЃЩЉ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†", "ШЄШЈШіЩЉШі ШЈШ№Щ…Ш§Щ„ ЩЃЩЉ Ш¬Щ€Ш±Ш¬ЩЉШ§", "Ш§ШіШЄШґШ§Ш±Ш§ШЄ Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ", "Щ‡ЩЉЩѓЩ„Ш© Ш¶Ш±ЩЉШЁЩЉШ©"],
      searchLabel: "Щ…Щ€Ш¶Щ€Ш№Ш§ШЄ SEO",
      searchTitle: "Ш§Щ„Щ…Щ€Ш¶Щ€Ш№Ш§ШЄ Ш§Щ„ШЄЩЉ ЩЉШ¬ШЁ ШЈЩ† ЩЉШёЩ‡Ш± ЩЃЩЉЩ‡Ш§ Ш§Щ„Щ…Ш±ЩѓШІ Щ‚ШЁЩ„ Ш§Щ†ШЄЩ‚Ш§Щ„ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ ШҐЩ„Щ‰ Щ…Щ€Щ‚Ш№ Ш§Щ„ШіЩ€Щ‚.",
      searchIntro: "ЩЉШ¬ШЁ ШЈЩ† ЩЉЩ„ШЄЩ‚Ш· Ш§Щ„Щ…Ш±ЩѓШІ Ш§Щ„Ш№Ш§Щ„Щ…ЩЉ Щ†ЩЉШ© Ш§Щ„ШЁШ­Ш« Ш­Щ€Щ„ Ш§Щ„Ш§ШіШЄШґШ§Ш±Ш§ШЄ Ш§Щ„Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇШЊ Щ€Ш§Щ„ШЇШ®Щ€Щ„ ШҐЩ„Щ‰ Ш§Щ„ШіЩ€Щ‚ШЊ Щ€Щ‡ЩЉЩѓЩ„Ш© Ш§Щ„ШЈШ№Щ…Ш§Щ„ШЊ Щ€ШЄШЈШіЩЉШі Ш§Щ„ШґШ±ЩѓШ§ШЄ.",
      searchCards: [
        { title: "ШЄШіШ¬ЩЉЩ„ ШґШ±ЩѓШ© ЩЃЩЉ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†", body: "ЩЉШґЩ…Щ„ ШЇШ®Щ€Щ„ Ш§Щ„ШіЩ€Щ‚ШЊ Щ€Ш§Щ„ЩЂ legal setupШЊ Щ€Ш§Щ„ШЄЩ…Щ€Ш¶Ш№ Ш§Щ„Ш¶Ш±ЩЉШЁЩЉШЊ Щ€Ш§Щ„Щ…Ш­Ш§ШіШЁШ©ШЊ Щ€Ш§Щ„Ш§Щ†Ш·Щ„Ш§Щ‚ Ш§Щ„ШЄШґШєЩЉЩ„ЩЉ ЩЃЩЉ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†." },
        { title: "Business setup ЩЃЩЉ Ш¬Щ€Ш±Ш¬ЩЉШ§", body: "ЩЉШґЩ…Щ„ ШЄШЈШіЩЉШі Ш§Щ„ШґШ±ЩѓШ§ШЄ ЩЃЩЉ Ш¬Щ€Ш±Ш¬ЩЉШ§ШЊ Щ€Щ…ШіШ§Ш±Ш§ШЄ FIZШЊ Щ€Ш§Щ„Щ†Щ…Ш§Ш°Ш¬ Ш§Щ„Ш¶Ш±ЩЉШЁЩЉШ©ШЊ Щ€Щ‡ЩЉШ§ЩѓЩ„ ШµШЇЩЉЩ‚Ш© Щ„Щ„Щ…ШіШЄШ«Щ…Ш±." },
        { title: "Ш§ШіШЄШґШ§Ш±Ш§ШЄ Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Щ€Ш¶Ш±ЩЉШЁЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ", body: "Щ„Щ…ШґШ±Щ€Ш№Ш§ШЄ ШЄШ­ШЄШ§Ш¬ ШҐЩ„Щ‰ Щ…Щ‚Ш§Ш±Щ†Ш© Ш§Щ„Щ€Щ„Ш§ЩЉШ§ШЄ Ш§Щ„Щ‚Ш¶Ш§Ш¦ЩЉШ©ШЊ Щ€Щ…Щ†Ш·Щ‚ Ш§Щ„Щ‡ЩЉШ§ЩѓЩ„ Ш§Щ„Щ‚Ш§ШЁШ¶Ш©ШЊ Щ€Ш§ШіШЄЩ…Ш±Ш§Ш±ЩЉШ© Ш§Щ„ШЈШ№Щ…Ш§Щ„ Ш№ШЁШ± ШЈЩѓШ«Ш± Щ…Щ† ШЁЩ„ШЇ." },
        { title: "Ш§Щ„Щ…Ш¤ШіШіЩ€Щ† Щ€Ш§Щ„Щ…ШіШЄШ«Щ…Ш±Щ€Щ† Ш§Щ„ШЇЩ€Щ„ЩЉЩ€Щ†", body: "Щ†Щ‚Ш·Ш© ШЇШ®Щ€Щ„ Щ„Щ„Щ…Ш¤ШіШіЩЉЩ† Щ€Ш§Щ„Щ‡ЩЉШ§ЩѓЩ„ Ш§Щ„Щ‚Ш§ШЁШ¶Ш© Щ€Ш§Щ„Ш№Ш§Ш¦Щ„Ш§ШЄ Ш§Щ„Ш§ШіШЄШ«Щ…Ш§Ш±ЩЉШ© Щ€Ш§Щ„ЩЃШ±Щ‚ Ш§Щ„ШЄЩЉ ШЄЩ‚Ш§Ш±Щ† ШЁЩЉЩ† ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§." },
      ],
      faqLabel: "FAQ",
      faqTitle: "ШЈШіШ¦Щ„Ш© Ш°Ш§ШЄ Щ†ЩЉШ© ШЁШ­Ш« Ш№Ш§Щ„ЩЉШ© ЩЉШ¬ШЁ ШЈЩ† ЩЉШ¬ЩЉШЁ Ш№Щ†Щ‡Ш§ Ш§Щ„Щ…Ш±ЩѓШІ ШЁЩ€Ш¶Щ€Ш­.",
      faqItems: [
        { question: "Щ…Ш§ Щ€ШёЩЉЩЃШ© interlex.workШџ", answer: "interlex.work Щ‡Щ€ Ш§Щ„Щ…Ш±ЩѓШІ Ш§Щ„Ш№Ш§Щ„Щ…ЩЉ Щ…ШЄШ№ШЇШЇ Ш§Щ„Щ„ШєШ§ШЄ Щ„ЩЂ InterLex. ЩЉШ№Ш±Щ‘ЩЃ ШЁШ§Щ„Ш№Щ„Ш§Щ…Ш© Щ€ЩЉШґШ±Ш­ Ш§Щ„ШЄЩ…Ш±ЩѓШІ Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ Щ€ЩЉЩ€Ш¬Щ‡ Ш§Щ„ШЄЩѓЩ„ЩЉЩЃ ШҐЩ„Щ‰ Щ…Щ€Щ‚Ш№ Ш§Щ„ШіЩ€Щ‚ Ш§Щ„Щ…Щ†Ш§ШіШЁ." },
        { question: "Щ…ШЄЩ‰ ЩЉШ¬ШЁ Ш§ШіШЄШ®ШЇШ§Щ… interlex.kzШџ", answer: "Ш№Щ†ШЇЩ…Ш§ ЩЉЩѓЩ€Щ† Ш§Щ„Ш№Щ…Щ„ Щ…ШЄШ№Щ„Щ‚Ш§Щ‹ ШЁЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†ШЊ Щ€Ш®ШµЩ€ШµШ§Щ‹ Щ„ШЄШіШ¬ЩЉЩ„ Ш§Щ„ШґШ±ЩѓШ§ШЄШЊ Щ€Ш§Щ„ШЇШ№Щ… Ш§Щ„Щ‚Ш§Щ†Щ€Щ†ЩЉШЊ Щ€Ш§Щ„ШЄЩ…Щ€Ш¶Ш№ Ш§Щ„Ш¶Ш±ЩЉШЁЩЉШЊ Щ€Ш§Щ„Щ…Ш­Ш§ШіШЁШ©ШЊ Щ€Ш§Щ„ШЄЩ†ЩЃЩЉШ° Ш§Щ„Щ…Ш­Щ„ЩЉ." },
        { question: "Щ…ШЄЩ‰ ЩЉШ¬ШЁ Ш§ШіШЄШ®ШЇШ§Щ… interlex.geШџ", answer: "Ш№Щ†ШЇЩ…Ш§ ЩЉЩѓЩ€Щ† Ш§Щ„Ш№Щ…Щ„ Щ…ШЄШ№Щ„Щ‚Ш§Щ‹ ШЁШ¬Щ€Ш±Ш¬ЩЉШ§ШЊ Щ€Ш®ШµЩ€ШµШ§Щ‹ Щ„ЩЂ business setupШЊ Щ€Щ‡ЩЉШ§ЩѓЩ„ FIZШЊ Щ€Ш§Щ„ШЄШ®Ш·ЩЉШ· Ш§Щ„Ш¶Ш±ЩЉШЁЩЉШЊ Щ€Ш§Щ„ШҐШ±ШґШ§ШЇ Ш§Щ„ШіЩ€Щ‚ЩЉ ШЁШ§Щ„Щ„ШєШ© Ш§Щ„ШҐЩ†Ш¬Щ„ЩЉШІЩЉШ©." },
      ],
    },
    about: {
      description: "Ш­Щ€Щ„ InterLex: Щ…Ш±ЩѓШІ Ш№Ш§Щ„Щ…ЩЉ Щ„Щ„Ш№Щ„Ш§Щ…Ш© Щ…Щ† ШЈШ¬Щ„ Ш§Щ„Ш§ШіШЄШґШ§Ш±Ш§ШЄ Ш§Щ„Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇШЊ Щ€Ш§ШіШЄШ±Ш§ШЄЩЉШ¬ЩЉШ© ШЇШ®Щ€Щ„ Ш§Щ„ШіЩ€Щ‚ШЊ Щ€Щ‡ЩЉЩѓЩ„Ш© Ш§Щ„ШЈШ№Щ…Ш§Щ„ШЊ Щ€Ш§Щ„ШЄЩ€Ш¬ЩЉЩ‡ ШҐЩ„Щ‰ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§.",
      keywords: ["InterLex", "Ш§ШіШЄШґШ§Ш±Ш§ШЄ Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Ш№Ш§Щ„Щ…ЩЉШ©", "ШЇШ®Щ€Щ„ Ш§Щ„ШіЩ€Щ‚", "ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†", "Ш¬Щ€Ш±Ш¬ЩЉШ§"],
    },
    crossBorder: {
      description: "Щ‚Ш§Ш±Щ† ШЁЩЉЩ† ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† Щ€Ш¬Щ€Ш±Ш¬ЩЉШ§ Щ…Щ† Ш­ЩЉШ« ШЄШіШ¬ЩЉЩ„ Ш§Щ„ШґШ±ЩѓШ§ШЄШЊ Щ€Ш§Щ„ШЄЩ…Щ€Ш¶Ш№ Ш§Щ„Ш¶Ш±ЩЉШЁЩЉШЊ Щ€Щ‡ЩЉЩѓЩ„Ш© Ш§Щ„ШЈШ№Щ…Ш§Щ„ШЊ Щ€ШЇШ®Щ€Щ„ Ш§Щ„Щ…ШіШЄШ«Щ…Ш±ШЊ Щ€Ш§Щ„Ш§ШіШЄШґШ§Ш±Ш§ШЄ Ш§Щ„Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ.",
      keywords: ["ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ† ШЈЩ… Ш¬Щ€Ш±Ш¬ЩЉШ§", "Щ…Щ‚Ш§Ш±Щ†Ш© Ш§Щ„Щ€Щ„Ш§ЩЉШ§ШЄ Ш§Щ„Щ‚Ш¶Ш§Ш¦ЩЉШ©", "ШЄШіШ¬ЩЉЩ„ Ш§Щ„ШґШ±ЩѓШ§ШЄ", "Ш§Щ„Ш¶Ш±Ш§Ш¦ШЁ", "ШЇШ®Щ€Щ„ Ш§Щ„Щ…ШіШЄШ«Щ…Ш±"],
    },
    contact: {
      description: "ШЄЩ€Ш§ШµЩ„ Щ…Ш№ InterLex ШЁШ®ШµЩ€Шµ Ш§Щ„Ш§ШіШЄШґШ§Ш±Ш§ШЄ Ш§Щ„Щ‚Ш§Щ†Щ€Щ†ЩЉШ© Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇШЊ Щ€ШЇШ®Щ€Щ„ Ш§Щ„ШіЩ€Щ‚ ЩЃЩЉ ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†ШЊ Щ€business setup ЩЃЩЉ Ш¬Щ€Ш±Ш¬ЩЉШ§ШЊ Щ€Ш§Щ„ШЄЩ€Ш¬ЩЉЩ‡ Щ…ШЄШ№ШЇШЇ Ш§Щ„Щ„ШєШ§ШЄ.",
      keywords: ["Ш§ШЄШµШ§Щ„ InterLex", "Ш§ШіШЄШґШ§Ш±Ш§ШЄ Щ‚Ш§Щ†Щ€Щ†ЩЉШ©", "ЩѓШ§ШІШ§Ш®ШіШЄШ§Щ†", "Ш¬Щ€Ш±Ш¬ЩЉШ§", "Ш№ШЁШ± Ш§Щ„Ш­ШЇЩ€ШЇ"],
    },
  },
  tr: {
    home: {
      description: "InterLex global hub; sД±nД±r Г¶tesi hukuk danД±ЕџmanlД±ДџД±, Еџirket kuruluЕџu, vergi konumlandД±rmasД±, pazara giriЕџ ve Kazakistan ile GГјrcistanвЂ™da business setup iГ§in.",
      keywords: ["InterLex", "Kazakistan Еџirket kuruluЕџu", "GГјrcistan business setup", "sД±nД±r Г¶tesi hukuk danД±ЕџmanlД±ДџД±", "vergi yapД±landД±rmasД±"],
      searchLabel: "SEO KonularД±",
      searchTitle: "Mandat market siteвЂ™a taЕџД±nmadan Г¶nce hubвЂ™Д±n gГ¶rГјnmesi gereken arama niyetleri.",
      searchIntro: "Global hub; sД±nД±r Г¶tesi hukuk danД±ЕџmanlД±ДџД±, pazara giriЕџ, iЕџ yapД±landД±rmasД± ve Еџirket kuruluЕџu etrafД±ndaki arama niyetini yakalamalД±dД±r.",
      searchCards: [
        { title: "KazakistanвЂ™da Еџirket kuruluЕџu", body: "Pazara giriЕџ, legal setup, vergi konumlandД±rmasД±, muhasebe ve operasyonel baЕџlangД±Г§ konularД±nД± kapsar." },
        { title: "GГјrcistanвЂ™da business setup", body: "Ећirket kurulumu, FIZ yollarД±, vergi modelleri ve investor-friendly setup yapД±larД±." },
        { title: "SД±nД±r Г¶tesi hukuk ve vergi danД±ЕџmanlД±ДџД±", body: "YargД± alanД± karЕџД±laЕџtД±rmasД±, holding logic, grup yapД±landД±rmasД± ve Г§ok Гјlkeli iЕџ sГјrekliliДџi." },
        { title: "UluslararasД± kurucular ve yatД±rД±mcД±lar", body: "Kazakistan ve GГјrcistanвЂ™Д± karЕџД±laЕџtД±ran kurucular, holdingler ve yatД±rД±m ekipleri iГ§in ilk giriЕџ noktasД±." },
      ],
      faqLabel: "FAQ",
      faqTitle: "HubвЂ™Д±n aГ§Д±k biГ§imde yanД±tlamasД± gereken yГјksek niyetli sorular.",
      faqItems: [
        { question: "interlex.work ne iГ§in kullanД±lД±r?", answer: "interlex.work, InterLexвЂ™in Г§ok dilli global hubвЂ™Д±dД±r. MarkayД± tanД±tД±r, sД±nД±r Г¶tesi konumlandД±rmayД± aГ§Д±klar ve mandatД± doДџru market siteвЂ™a yГ¶nlendirir." },
        { question: "Ne zaman interlex.kz kullanД±lmalД±?", answer: "Д°Еџ KazakistanвЂ™a ait olduДџunda, Г¶zellikle Еџirket kuruluЕџu, hukuki destek, vergi konumlandД±rmasД±, muhasebe ve yerel execution iГ§in interlex.kz kullanД±lmalД±dД±r." },
        { question: "Ne zaman interlex.ge kullanД±lmalД±?", answer: "Д°Еџ GГјrcistanвЂ™a ait olduДџunda, Г¶zellikle business setup, FIZ yapД±larД±, vergi planlamasД± ve English-first market guidance iГ§in interlex.ge kullanД±lmalД±dД±r." },
      ],
    },
    about: {
      description: "InterLex hakkД±nda: sД±nД±r Г¶tesi hukuk danД±ЕџmanlД±ДџД±, pazara giriЕџ stratejisi, iЕџ yapД±landД±rmasД± ve Kazakistan ile GГјrcistanвЂ™a routing iГ§in global marka hubвЂ™Д±.",
      keywords: ["InterLex", "kГјresel hukuk danД±ЕџmanlД±ДџД±", "pazara giriЕџ", "Kazakistan", "GГјrcistan"],
    },
    crossBorder: {
      description: "Ећirket kuruluЕџu, vergi konumlandД±rmasД±, business structuring, investor entry ve sД±nД±r Г¶tesi hukuk danД±ЕџmanlД±ДџД± iГ§in Kazakistan ile GГјrcistanвЂ™Д± karЕџД±laЕџtД±rД±n.",
      keywords: ["Kazakistan mД± GГјrcistan mД±", "yargД± alanД± karЕџД±laЕџtД±rmasД±", "Еџirket kuruluЕџu", "vergiler", "yatД±rД±mcД± giriЕџi"],
    },
    contact: {
      description: "SД±nД±r Г¶tesi hukuk danД±ЕџmanlД±ДџД±, Kazakistan pazar giriЕџi, GГјrcistan business setup ve Г§ok dilli mandat routing iГ§in InterLex ile iletiЕџime geГ§in.",
      keywords: ["InterLex iletiЕџim", "hukuk danД±ЕџmanlД±ДџД±", "Kazakistan", "GГјrcistan", "sД±nД±r Г¶tesi"],
    },
  },
  es: {
    home: {
      description: "Hub global de InterLex para advisory legal cross-border, registro de empresas, posicionamiento fiscal, entrada de mercado y business setup en KazajistГЎn y Georgia.",
      keywords: ["InterLex", "registro de empresa KazajistГЎn", "business setup Georgia", "advisory legal cross-border", "estructuraciГіn fiscal"],
      searchLabel: "Temas SEO",
      searchTitle: "Temas por los que el hub debe posicionar antes de enviar el mandato al market site.",
      searchIntro: "El hub global debe captar intenciГіn de bГєsqueda sobre asesorГ­a cross-border, entrada de mercado, estructuraciГіn empresarial y constituciГіn de compaГ±Г­as.",
      searchCards: [
        { title: "Registro de empresa en KazajistГЎn", body: "Entrada de mercado, legal setup, posicionamiento fiscal, contabilidad y lanzamiento operativo en KazajistГЎn." },
        { title: "Business setup en Georgia", body: "ConstituciГіn en Georgia, rutas FIZ, modelos fiscales y estructuras investor-friendly." },
        { title: "AsesorГ­a legal y fiscal cross-border", body: "ComparaciГіn de jurisdicciones, holding logic, estructuraciГіn de grupo y continuidad empresarial en varios paГ­ses." },
        { title: "Founders e inversores internacionales", body: "Punto de entrada para founders, holdings, family offices y equipos que comparan KazajistГЎn y Georgia." },
      ],
      faqLabel: "FAQ",
      faqTitle: "Preguntas de alta intenciГіn que el hub debe responder con claridad.",
      faqItems: [
        { question: "ВїPara quГ© sirve interlex.work?", answer: "interlex.work es el hub global multilingГјe de InterLex. Presenta la marca, explica el posicionamiento cross-border y dirige el mandato al market site correcto." },
        { question: "ВїCuГЎndo usar interlex.kz?", answer: "Cuando el trabajo pertenece a KazajistГЎn, especialmente para registro de empresa, soporte legal, posicionamiento fiscal, contabilidad y ejecuciГіn local." },
        { question: "ВїCuГЎndo usar interlex.ge?", answer: "Cuando el trabajo pertenece a Georgia, especialmente para business setup, estructuras FIZ, planificaciГіn fiscal y guidance de mercado en inglГ©s." },
      ],
    },
    about: {
      description: "Sobre InterLex: hub global de marca para advisory legal cross-border, estrategia de entrada de mercado, business structuring y routing hacia KazajistГЎn y Georgia.",
      keywords: ["InterLex", "asesorГ­a jurГ­dica global", "entrada de mercado", "KazajistГЎn", "Georgia"],
    },
    crossBorder: {
      description: "Compare KazajistГЎn y Georgia para registro de empresas, posicionamiento fiscal, business structuring, investor entry y advisory legal cross-border.",
      keywords: ["KazajistГЎn o Georgia", "comparaciГіn de jurisdicciones", "registro de empresas", "fiscalidad", "entrada de inversor"],
    },
    contact: {
      description: "Contacte con InterLex para advisory legal cross-border, entrada al mercado de KazajistГЎn, business setup en Georgia y routing multilingГјe del mandato.",
      keywords: ["contacto InterLex", "asesorГ­a jurГ­dica", "KazajistГЎn", "Georgia", "cross-border"],
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
