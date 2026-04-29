export * from "./core";
export * from "./metadata";
export type { Dictionary } from "./types";

import type { Locale } from "./core";
import type { Dictionary } from "./types";
import { dictionaries } from "./dictionaries";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getServicesLabel(locale: Locale) {
  return dictionaries[locale].servicesLabel;
}
