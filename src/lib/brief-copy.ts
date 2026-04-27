import type { Locale } from "@/lib/i18n";

export const briefIds = [
  "kz-reg",
  "ge-reg",
  "kz-sez",
  "ge-vz",
  "support",
  "governance",
  "ops",
  "investors",
  "ma",
  "dd",
] as const;

export type BriefId = (typeof briefIds)[number];

export type BriefMeta = Readonly<{
  id: BriefId;
  title: string;
  subtitle: string;
  description: string;
  filename: string;
}>;

export type BriefPageCopy = Readonly<{
  eyebrow: string;
  pageTitle: string;
  pageBody: string;
  step1Label: string;
  step2Label: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  submitIdle: string;
  submitPending: string;
  successTitle: string;
  successBody: string;
  errorMessage: string;
  nameError: string;
  emailError: string;
  backLabel: string;
  briefs: readonly BriefMeta[];
}>;

// Client intake briefs are produced in three languages: ru, en, ka.
// Other supported locales fall back to the English copy at the resolver level.
type BriefLocale = "ru" | "en" | "ka";

const copy: Record<BriefLocale, BriefPageCopy> = {
  ru: {
    eyebrow: "Клиентские брифы",
    pageTitle: "Получите бриф для вашего проекта.",
    pageBody:
      "Выберите подходящий бриф, заполните контактные данные — документ придёт на ваш email. Мы также получим уведомление и свяжемся с вами в ближайшее время.",
    step1Label: "01 — Выберите бриф",
    step2Label: "02 — Ваши контакты",
    nameLabel: "Имя",
    namePlaceholder: "Как к вам обращаться",
    emailLabel: "Email",
    emailPlaceholder: "name@company.com",
    phoneLabel: "WhatsApp или телефон",
    phonePlaceholder: "+7 ... / +995 ...",
    submitIdle: "Получить бриф",
    submitPending: "Отправляем...",
    successTitle: "Бриф отправлен на ваш email.",
    successBody:
      "Проверьте почту — документ уже в пути. Если письмо не пришло в течение нескольких минут, проверьте папку «Спам».",
    errorMessage: "Не удалось отправить бриф. Попробуйте ещё раз или напишите нам в WhatsApp.",
    nameError: "Укажите ваше имя",
    emailError: "Введите корректный email",
    backLabel: "← Выбрать другой бриф",
    briefs: [
      {
        id: "kz-reg",
        title: "Регистрация бизнеса в Казахстане",
        subtitle: "ТОО / АО / Филиал · Налоговый режим · Банк",
        description:
          "Выбор формы и налогового режима, юридический адрес, открытие счёта, постановка на налоговый учёт.",
        filename: "kz-reg-ru.docx",
      },
      {
        id: "ge-reg",
        title: "Регистрация бизнеса в Грузии",
        subtitle: "LLC / ИП / Филиал · Малый бизнес · Банк",
        description:
          "Выбор формы, малый бизнес 1% или Virtual Zone, открытие счёта, налоговая постановка.",
        filename: "ge-reg-ru.docx",
      },
      {
        id: "kz-sez",
        title: "СЭЗ и спец. режимы Казахстана",
        subtitle: "МФЦА / ПИТ / МЦФС / СЭЗ — выбор и аккредитация",
        description:
          "Выбор оптимального режима, аккредитация, налоговые льготы и операционные требования.",
        filename: "kz-sez-ru.docx",
      },
      {
        id: "ge-vz",
        title: "Virtual Zone в Грузии",
        subtitle: "Статус VZ для IT-компаний — 0% НДС / 5% дивидендов",
        description:
          "Получение статуса Virtual Zone: соответствие требованиям, налоговые льготы, операционные условия.",
        filename: "ge-vz-ru.docx",
      },
      {
        id: "support",
        title: "Бухгалтерия и юридическая поддержка",
        subtitle: "Учёт · Отчётность · Договоры · HR",
        description:
          "Ежедневное сопровождение компании: бухучёт, налоги, договоры, HR, корпоративные изменения.",
        filename: "support-ru.docx",
      },
      {
        id: "governance",
        title: "Корпоративный менеджмент",
        subtitle: "Структура владения · SHA · Регламенты · KEPS / KYC",
        description:
          "Структура владения и органы управления, акционерные соглашения, регламенты и корпоративный календарь.",
        filename: "governance-ru.docx",
      },
      {
        id: "ops",
        title: "Компания под управлением и банк",
        subtitle: "Номинальный директор · Корп. секретарь · Банковский комплаенс",
        description:
          "Управление компанией под ключ: директор, корпоративный секретарь, KYC, банковский и валютный контур.",
        filename: "ops-ru.docx",
      },
      {
        id: "investors",
        title: "Инвесторская поддержка и GR",
        subtitle: "Инвестпроект · Виза инвестора · Соглашения с государством",
        description:
          "Структурирование инвестпроекта, льготные режимы, виза инвестора, сопровождение в работе с государством.",
        filename: "investors-ru.docx",
      },
      {
        id: "ma",
        title: "M&A — консультирование по сделке",
        subtitle: "Структура сделки · LOI / SPA · Escrow · Closing",
        description:
          "Структура и переговорный контур сделки, подготовка SPA, escrow, closing и пост-сделочная интеграция.",
        filename: "ma-ru.docx",
      },
      {
        id: "dd",
        title: "Due Diligence",
        subtitle: "Legal · Tax · Financial · Commercial — red-flag и full-scope",
        description:
          "Правовой, налоговый и финансовый аудит цели до сделки: риски, обязательства, рекомендации.",
        filename: "dd-ru.docx",
      },
    ],
  },
  en: {
    eyebrow: "Client Intake Briefs",
    pageTitle: "Get a brief for your project.",
    pageBody:
      "Select the relevant brief, fill in your contact details — the document will be sent to your email. We will also receive a notification and get in touch shortly.",
    step1Label: "01 — Select a brief",
    step2Label: "02 — Your contact details",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "name@company.com",
    phoneLabel: "WhatsApp or phone",
    phonePlaceholder: "+7 ... / +995 ...",
    submitIdle: "Get the brief",
    submitPending: "Sending...",
    successTitle: "The brief has been sent to your email.",
    successBody:
      "Check your inbox — the document is on its way. If the email does not arrive within a few minutes, please check your Spam folder.",
    errorMessage: "Could not send the brief. Please try again or reach us on WhatsApp.",
    nameError: "Please enter your name",
    emailError: "Please enter a valid email address",
    backLabel: "← Choose a different brief",
    briefs: [
      {
        id: "kz-reg",
        title: "Business Registration in Kazakhstan",
        subtitle: "LLP / JSC / Branch · Tax regime · Banking",
        description:
          "Entity choice, tax regime, registered address, account opening and tax registration.",
        filename: "kz-reg-en.docx",
      },
      {
        id: "ge-reg",
        title: "Business Registration in Georgia",
        subtitle: "LLC / IE / Branch · Small business · Banking",
        description:
          "Entity choice, small-business 1% or Virtual Zone, account opening and tax registration.",
        filename: "ge-reg-en.docx",
      },
      {
        id: "kz-sez",
        title: "SEZ and Special Regimes of Kazakhstan",
        subtitle: "AIFC / PIT / ICDF / SEZ — selection and accreditation",
        description:
          "Pick the right regime, run the accreditation, secure tax benefits and meet operating requirements.",
        filename: "kz-sez-en.docx",
      },
      {
        id: "ge-vz",
        title: "Virtual Zone in Georgia",
        subtitle: "VZ status for IT companies — 0% VAT / 5% dividends",
        description:
          "Obtaining Virtual Zone status: eligibility, tax benefits, operating conditions.",
        filename: "ge-vz-en.docx",
      },
      {
        id: "support",
        title: "Accounting and Legal Support",
        subtitle: "Bookkeeping · Reporting · Contracts · HR",
        description:
          "Ongoing company support: bookkeeping, taxes, contracts, HR, corporate changes.",
        filename: "support-en.docx",
      },
      {
        id: "governance",
        title: "Corporate Governance",
        subtitle: "Ownership · SHA · Procedures · KEPS / KYC",
        description:
          "Ownership structure and management bodies, shareholder agreements, procedures and corporate calendar.",
        filename: "governance-en.docx",
      },
      {
        id: "ops",
        title: "Managed Company and Banking",
        subtitle: "Nominee director · Corporate secretary · Banking compliance",
        description:
          "Turnkey company management: director, corporate secretary, KYC, banking and FX circuit.",
        filename: "ops-en.docx",
      },
      {
        id: "investors",
        title: "Investor Support and GR",
        subtitle: "Investment project · Investor visa · Government agreements",
        description:
          "Investment project structuring, preferential regimes, investor visa and government interaction.",
        filename: "investors-en.docx",
      },
      {
        id: "ma",
        title: "M&A — Deal Advisory",
        subtitle: "Deal structure · LOI / SPA · Escrow · Closing",
        description:
          "Deal structure and negotiations, SPA drafting, escrow, closing and post-deal integration.",
        filename: "ma-en.docx",
      },
      {
        id: "dd",
        title: "Due Diligence",
        subtitle: "Legal · Tax · Financial · Commercial — red-flag and full-scope",
        description:
          "Legal, tax and financial pre-deal audit of the target: risks, liabilities, recommendations.",
        filename: "dd-en.docx",
      },
    ],
  },
  ka: {
    eyebrow: "კლიენტის ბრიფები",
    pageTitle: "მიიღეთ ბრიფი თქვენი პროექტისთვის.",
    pageBody:
      "აირჩიეთ შესაბამისი ბრიფი, შეავსეთ საკონტაქტო ინფორმაცია — დოკუმენტი მოვა თქვენს ელფოსტაზე. ჩვენც მივიღებთ შეტყობინებას და მალე დაგიკავშირდებით.",
    step1Label: "01 — აირჩიეთ ბრიფი",
    step2Label: "02 — თქვენი კონტაქტები",
    nameLabel: "სახელი",
    namePlaceholder: "როგორ მოგმართოთ",
    emailLabel: "ელფოსტა",
    emailPlaceholder: "name@company.com",
    phoneLabel: "WhatsApp ან ტელეფონი",
    phonePlaceholder: "+7 ... / +995 ...",
    submitIdle: "ბრიფის მიღება",
    submitPending: "იგზავნება...",
    successTitle: "ბრიფი გაიგზავნა თქვენს ელფოსტაზე.",
    successBody:
      "შეამოწმეთ ფოსტა — დოკუმენტი უკვე გზაშია. თუ წერილი რამდენიმე წუთში არ მოვიდა, შეამოწმეთ „სპამის“ საქაღალდე.",
    errorMessage: "ბრიფის გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან მოგვწერეთ WhatsApp-ზე.",
    nameError: "შეიყვანეთ თქვენი სახელი",
    emailError: "შეიყვანეთ სწორი ელფოსტის მისამართი",
    backLabel: "← აირჩიეთ სხვა ბრიფი",
    briefs: [
      {
        id: "kz-reg",
        title: "ბიზნესის რეგისტრაცია ყაზახეთში",
        subtitle: "TOO / AO / ფილიალი · საგადასახადო რეჟიმი · ბანკი",
        description:
          "ფორმის და საგადასახადო რეჟიმის არჩევა, იურიდიული მისამართი, ანგარიშის გახსნა, საგადასახადო რეგისტრაცია.",
        filename: "kz-reg-ka.docx",
      },
      {
        id: "ge-reg",
        title: "ბიზნესის რეგისტრაცია საქართველოში",
        subtitle: "LLC / ინდმეწარმე / ფილიალი · მცირე ბიზნესი · ბანკი",
        description:
          "ფორმის არჩევა, მცირე ბიზნესის 1% ან Virtual Zone, ანგარიშის გახსნა და საგადასახადო რეგისტრაცია.",
        filename: "ge-reg-ka.docx",
      },
      {
        id: "kz-sez",
        title: "სეზ და სპეციალური რეჟიმები ყაზახეთში",
        subtitle: "AIFC / PIT / ICDF / SEZ — არჩევა და აკრედიტაცია",
        description:
          "ოპტიმალური რეჟიმის არჩევა, აკრედიტაცია, საგადასახადო შეღავათები და ოპერაციული მოთხოვნები.",
        filename: "kz-sez-ka.docx",
      },
      {
        id: "ge-vz",
        title: "Virtual Zone საქართველოში",
        subtitle: "VZ სტატუსი IT-კომპანიებისთვის — 0% დღგ / 5% დივიდენდი",
        description:
          "Virtual Zone სტატუსის მოპოვება: შესაბამისობა, საგადასახადო შეღავათები, ოპერაციული პირობები.",
        filename: "ge-vz-ka.docx",
      },
      {
        id: "support",
        title: "ბუღალტერია და იურიდიული მხარდაჭერა",
        subtitle: "აღრიცხვა · ანგარიშგება · ხელშეკრულებები · HR",
        description:
          "კომპანიის ყოველდღიური თანხლება: ბუღალტერია, გადასახადები, ხელშეკრულებები, HR, კორპორაციული ცვლილებები.",
        filename: "support-ka.docx",
      },
      {
        id: "governance",
        title: "კორპორაციული მენეჯმენტი",
        subtitle: "მფლობელობა · SHA · რეგლამენტები · KEPS / KYC",
        description:
          "მფლობელობის სტრუქტურა და მართვის ორგანოები, აქციონერთა შეთანხმებები, რეგლამენტები და კორპორაციული კალენდარი.",
        filename: "governance-ka.docx",
      },
      {
        id: "ops",
        title: "მართვაში მყოფი კომპანია და ბანკი",
        subtitle: "სანომერო დირექტორი · კორპორაციული მდივანი · საბანკო კომპლაიენსი",
        description:
          "კომპანიის სრული მართვა: დირექტორი, კორპორაციული მდივანი, KYC, საბანკო და სავალუტო კონტური.",
        filename: "ops-ka.docx",
      },
      {
        id: "investors",
        title: "ინვესტორთა მხარდაჭერა და GR",
        subtitle: "საინვესტიციო პროექტი · ინვესტორის ვიზა · სახელმწიფო შეთანხმებები",
        description:
          "საინვესტიციო პროექტის სტრუქტურირება, შეღავათიანი რეჟიმები, ინვესტორის ვიზა და სახელმწიფოსთან კომუნიკაცია.",
        filename: "investors-ka.docx",
      },
      {
        id: "ma",
        title: "M&A — გარიგების კონსულტაცია",
        subtitle: "გარიგების სტრუქტურა · LOI / SPA · Escrow · Closing",
        description:
          "გარიგების სტრუქტურა და მოლაპარაკებები, SPA, escrow, closing და გარიგების შემდგომი ინტეგრაცია.",
        filename: "ma-ka.docx",
      },
      {
        id: "dd",
        title: "Due Diligence",
        subtitle: "Legal · Tax · Financial · Commercial — red-flag და სრული",
        description:
          "სამიზნის სამართლებრივი, საგადასახადო და ფინანსური აუდიტი გარიგებამდე: რისკები, ვალდებულებები, რეკომენდაციები.",
        filename: "dd-ka.docx",
      },
    ],
  },
};

export function getBriefPageCopy(locale: Locale): BriefPageCopy {
  if (locale === "ru") return copy.ru;
  if (locale === "ka") return copy.ka;
  return copy.en;
}

export function getBriefById(locale: Locale, id: BriefId): BriefMeta | undefined {
  return getBriefPageCopy(locale).briefs.find((b) => b.id === id);
}
