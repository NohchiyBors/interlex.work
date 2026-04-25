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

const copy: Record<"ru" | "en", BriefPageCopy> = {
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
};

export function getBriefPageCopy(locale: Locale): BriefPageCopy {
  if (locale === "ru") return copy.ru;
  return copy.en;
}

export function getBriefById(locale: Locale, id: BriefId): BriefMeta | undefined {
  return getBriefPageCopy(locale).briefs.find((b) => b.id === id);
}
