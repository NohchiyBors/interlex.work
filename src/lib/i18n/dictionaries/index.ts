import type { Locale } from "../core";
import type { Dictionary } from "../types";
import { en } from "./en";
import { ru } from "./ru";
import { zh } from "./zh";
import { it } from "./it";
import { fr } from "./fr";
import { ka } from "./ka";
import { de } from "./de";
import { ar } from "./ar";
import { tr } from "./tr";
import { es } from "./es";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru,
  zh,
  it,
  fr,
  ka,
  de,
  ar,
  tr,
  es,
};
