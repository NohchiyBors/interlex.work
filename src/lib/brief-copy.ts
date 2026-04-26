import type { Locale } from "@/lib/i18n";

export const briefIds = ["kz-reg", "kz-sez", "ge-reg", "ge-vz", "support", "acq"] as const;

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
  backLabel: string;
  briefs: readonly BriefMeta[];
}>;

// NOTE: client intake briefs are produced in three languages: ru, en, ka.
// Other supported locales fall back to the English copy at the resolver level.
// TODO: when localized .docx briefs become available for ka (and other locales),
// replace the English `*-en.docx` filenames in the ka entries with the
// language-specific files (e.g. `kz-reg-ka.docx`).
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
    backLabel: "← Выбрать другой бриф",
    briefs: [
      {
        id: "kz-reg",
        title: "Регистрация бизнеса в Казахстане",
        subtitle: "ТОО / АО / Представительство",
        description:
          "Выбор правовой формы, сроки и стоимость регистрации, банковское сопровождение, налоговый режим.",
        filename: "kz-reg-ru.docx",
      },
      {
        id: "kz-sez",
        title: "СЭЗ и специальные режимы в Казахстане",
        subtitle: "AIFC / PIT / МЦФС / СЭЗ",
        description:
          "Аккредитация в МФЦА, регистрация в ПИТ или МЦФС, налоговые льготы и требования к деятельности.",
        filename: "kz-sez-ru.docx",
      },
      {
        id: "ge-reg",
        title: "Регистрация бизнеса в Грузии",
        subtitle: "LLC / Представительство / ИП",
        description:
          "Выбор структуры, открытие компании и счёта, налоговые режимы, соответствие требованиям.",
        filename: "ge-reg-ru.docx",
      },
      {
        id: "ge-vz",
        title: "Virtual Zone в Грузии",
        subtitle: "Статус VZ для IT-компаний",
        description:
          "Получение статуса Virtual Zone: требования, налоговые льготы, допустимые виды деятельности.",
        filename: "ge-vz-ru.docx",
      },
      {
        id: "support",
        title: "Бизнес-сопровождение",
        subtitle: "Бухгалтерия, юрподдержка, корпоративное управление",
        description:
          "Текущее сопровождение компании: бухгалтерский учёт, юридическая поддержка, корпоративные изменения.",
        filename: "support-ru.docx",
      },
      {
        id: "acq",
        title: "Приобретение актива",
        subtitle: "Недвижимость · Бизнес · Проект — KZ & GE",
        description:
          "Покупка недвижимости, готового бизнеса или инвестиция в проект в Казахстане или Грузии: структура сделки, due diligence, финансирование.",
        filename: "acq-ru.docx",
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
    backLabel: "← Choose a different brief",
    briefs: [
      {
        id: "kz-reg",
        title: "Business Registration in Kazakhstan",
        subtitle: "LLP / JSC / Representative Office",
        description:
          "Legal form selection, registration timeline and cost, banking setup, tax regime options.",
        filename: "kz-reg-en.docx",
      },
      {
        id: "kz-sez",
        title: "SEZ and Special Regimes in Kazakhstan",
        subtitle: "AIFC / PIT / ICDF / SEZ",
        description:
          "AIFC accreditation, registration in PIT or ICDF, tax benefits and operational requirements.",
        filename: "kz-sez-en.docx",
      },
      {
        id: "ge-reg",
        title: "Business Registration in Georgia",
        subtitle: "LLC / Representative Office / Sole Trader",
        description:
          "Entity structure, company and account opening, tax regimes, compliance requirements.",
        filename: "ge-reg-en.docx",
      },
      {
        id: "ge-vz",
        title: "Virtual Zone in Georgia",
        subtitle: "VZ Status for IT Companies",
        description:
          "Obtaining Virtual Zone status: eligibility criteria, tax exemptions, permitted activities.",
        filename: "ge-vz-en.docx",
      },
      {
        id: "support",
        title: "Business Support",
        subtitle: "Accounting, Legal, Corporate Governance",
        description:
          "Ongoing company maintenance: bookkeeping, legal support, corporate changes and compliance.",
        filename: "support-en.docx",
      },
      {
        id: "acq",
        title: "Asset Acquisition",
        subtitle: "Real Estate · Business · Project — KZ & GE",
        description:
          "Buying real estate, acquiring a going concern, or investing in a project in Kazakhstan or Georgia: deal structure, due diligence, financing.",
        filename: "acq-en.docx",
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
    backLabel: "← აირჩიეთ სხვა ბრიფი",
    briefs: [
      {
        id: "kz-reg",
        title: "ბიზნესის რეგისტრაცია ყაზახეთში",
        subtitle: "TOO / AO / წარმომადგენლობა",
        description:
          "სამართლებრივი ფორმის არჩევა, რეგისტრაციის ვადა და ღირებულება, საბანკო თანხლება, საგადასახადო რეჟიმი.",
        // TODO: replace with `kz-reg-ka.docx` once the Georgian brief is ready.
        filename: "kz-reg-en.docx",
      },
      {
        id: "kz-sez",
        title: "სეზ და სპეციალური რეჟიმები ყაზახეთში",
        subtitle: "AIFC / PIT / MCFS / SEZ",
        description:
          "AIFC-ში აკრედიტაცია, PIT-ში ან MCFS-ში რეგისტრაცია, საგადასახადო შეღავათები და საქმიანობის მოთხოვნები.",
        // TODO: replace with `kz-sez-ka.docx` once the Georgian brief is ready.
        filename: "kz-sez-en.docx",
      },
      {
        id: "ge-reg",
        title: "ბიზნესის რეგისტრაცია საქართველოში",
        subtitle: "LLC / წარმომადგენლობა / ინდ. მეწარმე",
        description:
          "სტრუქტურის არჩევა, კომპანიისა და ანგარიშის გახსნა, საგადასახადო რეჟიმები, შესაბამისობის მოთხოვნები.",
        // TODO: replace with `ge-reg-ka.docx` once the Georgian brief is ready.
        filename: "ge-reg-en.docx",
      },
      {
        id: "ge-vz",
        title: "Virtual Zone საქართველოში",
        subtitle: "VZ სტატუსი IT-კომპანიებისთვის",
        description:
          "Virtual Zone სტატუსის მიღება: მოთხოვნები, საგადასახადო შეღავათები, დასაშვები საქმიანობები.",
        // TODO: replace with `ge-vz-ka.docx` once the Georgian brief is ready.
        filename: "ge-vz-en.docx",
      },
      {
        id: "support",
        title: "ბიზნესის თანხლება",
        subtitle: "ბუღალტერია, იურიდიული მხარდაჭერა, კორპორაციული მართვა",
        description:
          "კომპანიის მიმდინარე თანხლება: ბუღალტრული აღრიცხვა, იურიდიული მხარდაჭერა, კორპორაციული ცვლილებები.",
        // TODO: replace with `support-ka.docx` once the Georgian brief is ready.
        filename: "support-en.docx",
      },
      {
        id: "acq",
        title: "აქტივის შეძენა",
        subtitle: "უძრავი ქონება · ბიზნესი · პროექტი — KZ & GE",
        description:
          "უძრავი ქონების შეძენა, მზა ბიზნესის ყიდვა ან პროექტში ინვესტიცია ყაზახეთში ან საქართველოში: გარიგების სტრუქტურა, due diligence, დაფინანსება.",
        // TODO: replace with `acq-ka.docx` once the Georgian brief is ready.
        filename: "acq-en.docx",
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
