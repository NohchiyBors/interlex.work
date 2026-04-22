import type { Locale } from "@/lib/i18n";

type Section = {
  label: string;
  title: string;
  body: string;
  items?: string[];
};

const comparisonIntentRu: Section = {
  label: "Когда это актуально",
  title: "Эта страница для тех, кто выбирает лучший рынок для запуска, а не просто сравнивает страны из интереса.",
  body:
    "Обычно сюда приходят собственники, инвесторы и операционные команды, которым нужно быстро понять, где проекту будет проще стартовать, где ниже риск неверной конфигурации и в какой стране InterLex сможет дать лучший практический результат уже на первом этапе.",
  items: [
    "Сравнить Казахстан и Грузию до регистрации компании и налоговой настройки.",
    "Понять, где лучше запускать операционную деятельность, а где удобнее собирать гибкую международную структуру.",
    "Прийти на консультацию уже с понятным вопросом, а не с общим запросом “посоветуйте страну”.",
  ],
};

const comparisonIntentEn: Section = {
  label: "When It Matters",
  title: "This page is for clients choosing the best market for launch, not just comparing countries out of curiosity.",
  body:
    "It is meant for owners, investors, and operating teams who need to understand where the project can start more cleanly, where the risk of a weak setup is lower, and where InterLex can produce the strongest practical result from the first phase.",
  items: [
    "Compare Kazakhstan and Georgia before company registration and tax setup begin.",
    "Understand where operations should start and where a more flexible international structure makes more sense.",
    "Come to the consultation with a defined question instead of a generic request to recommend a country.",
  ],
};

const structuringIntentRu: Section = {
  label: "Что получает клиент",
  title: "Международное структурирование помогает собрать бизнес так, чтобы его не пришлось переделывать после запуска.",
  body:
    "Если проект затрагивает две и более юрисдикции, ошибка на старте обычно обходится дороже, чем сама регистрация. InterLex помогает заранее определить, где должна быть структура владения, где нужен операционный контур, как разложить налоговую и банковскую логику и как подготовить проект к спокойному запуску.",
  items: [
    "Структуру владения и управления под международный проект.",
    "Понятное распределение ролей между Казахстаном, Грузией и другими точками присутствия.",
    "Четкий план, какие части задачи требуют регистрации, банкового сопровождения, бухгалтерии, due diligence или investor support.",
  ],
};

const structuringIntentEn: Section = {
  label: "What The Client Gets",
  title: "Cross-border structuring helps assemble the business so it does not need to be rebuilt after launch.",
  body:
    "When a mandate touches two or more jurisdictions, mistakes at the beginning usually cost more than the registration itself. InterLex helps define where ownership should sit, where operations should sit, how tax and banking logic should be distributed, and how to prepare the project for a clean launch.",
  items: [
    "An ownership and governance structure for the international mandate.",
    "A clear split of roles between Kazakhstan, Georgia, and other operating points.",
    "A practical plan showing which parts of the mandate need registration, banking support, accounting, due diligence, or investor support.",
  ],
};

const structuringScopeRu: Section = {
  label: "Что можно закрыть с InterLex",
  title: "Обычно за структурированием сразу следуют несколько прикладных задач, которые мы берем в работу.",
  body:
    "На практике клиенту редко нужен только совет. После сборки структуры обычно требуется запуск компании, выбор специального режима, открытие счетов, настройка бухгалтерского и юридического сопровождения, а иногда и поддержка сделки или инвестора.",
  items: [
    "Регистрация компании и выбор формы присутствия.",
    "Подбор специальных режимов и зон: AIFC, FIZ, SEZ и других решений.",
    "Банковое сопровождение, KYC-подготовка и резервные сценарии открытия счетов.",
    "Бухгалтерское, юридическое и корпоративное сопровождение после запуска.",
    "Due diligence, investor support и M&A advisory, если проект завязан на сделку или инвестицию.",
  ],
};

const structuringScopeEn: Section = {
  label: "What InterLex Can Cover",
  title: "In practice, structuring is usually followed by several practical workstreams that we can take on.",
  body:
    "Clients rarely need only advice. Once the structure is defined, the mandate often moves into company setup, special regimes, account opening, accounting and legal support, and sometimes transaction or investor support as well.",
  items: [
    "Company registration and presence-format selection.",
    "Special regimes and zones such as AIFC, FIZ, SEZ, and similar models.",
    "Banking support, KYC preparation, and fallback account-opening scenarios.",
    "Accounting, legal support, and corporate maintenance after launch.",
    "Due diligence, investor support, and M&A advisory when the project depends on a deal or investment logic.",
  ],
};

const marketEntryIntentRu: Section = {
  label: "Что решает эта страница",
  title: "Выход на новый рынок начинается не с регистрации, а с правильной последовательности решений.",
  body:
    "Когда компания рассматривает Казахстан, Грузию или регион в целом, ей нужен не формальный список шагов, а ясный план входа: где запускать первую структуру, как связать налоги, банки, документы и операционную модель и в какой момент переходить от стратегии к практической реализации.",
  items: [
    "Определить правильную стартовую юрисдикцию для первого этапа выхода.",
    "Связать выход на рынок со структурой, банковой логикой и compliance, а не решать эти вопросы по отдельности.",
    "Сократить риск лишних перезапусков, задержек и дорогих исправлений уже после регистрации.",
  ],
};

const marketEntryIntentEn: Section = {
  label: "What This Page Solves",
  title: "Entering a new market starts with the right sequence of decisions, not with registration alone.",
  body:
    "When a company looks at Kazakhstan, Georgia, or the region more broadly, it needs more than a formal checklist. It needs a clear entry plan: where the first structure should sit, how tax, banking, documents, and operations connect, and when the work should move from strategy into implementation.",
  items: [
    "Choose the right starting jurisdiction for the first phase of entry.",
    "Connect market entry with structure, banking logic, and compliance instead of solving them separately.",
    "Reduce the risk of avoidable restarts, delays, and expensive corrections after registration.",
  ],
};

const marketEntryScopeRu: Section = {
  label: "Как строится работа",
  title: "Сильный market entry проект собирается поэтапно и под конкретную бизнес-задачу.",
  body:
    "Сначала определяется формат присутствия и юрисдикция, затем выстраиваются банковая и налоговая логика, после этого подключаются регистрация, запуск операционной модели и регулярное сопровождение. Такой порядок обычно экономит время и снижает стоимость ошибок.",
  items: [
    "Выбор модели присутствия: local entity, branch, holding или special regime.",
    "Подготовка launch roadmap: документы, сроки, зависимости и точки принятия решения.",
    "Банковое сопровождение, KYC, бухгалтерия, юридическая поддержка и corporate maintenance после старта.",
    "Investor-facing или transaction-driven слой, если вход на рынок связан с партнерством, инвестициями или покупкой актива.",
  ],
};

const marketEntryScopeEn: Section = {
  label: "How The Work Is Built",
  title: "A strong market-entry project is built in stages around the real business goal.",
  body:
    "First comes the presence model and jurisdiction, then the banking and tax logic, and only after that registration, operating launch, and ongoing support. This sequence usually saves time and reduces the cost of mistakes.",
  items: [
    "Presence-model selection: local entity, branch, holding, or special regime.",
    "Launch-roadmap preparation: documents, timing, dependencies, and decision points.",
    "Banking support, KYC, accounting, legal support, and corporate maintenance after launch.",
    "An investor-facing or transaction-driven layer when market entry depends on partnership, investment, or asset acquisition.",
  ],
};

function choose(locale: Locale, ru: Section, en: Section) {
  return locale === "ru" ? ru : en;
}

export function getComparisonIntentSection(locale: Locale) {
  return choose(locale, comparisonIntentRu, comparisonIntentEn);
}

export function getStructuringIntentSection(locale: Locale) {
  return choose(locale, structuringIntentRu, structuringIntentEn);
}

export function getStructuringScopeSection(locale: Locale) {
  return choose(locale, structuringScopeRu, structuringScopeEn);
}

export function getMarketEntryIntentSection(locale: Locale) {
  return choose(locale, marketEntryIntentRu, marketEntryIntentEn);
}

export function getMarketEntryScopeSection(locale: Locale) {
  return choose(locale, marketEntryScopeRu, marketEntryScopeEn);
}
