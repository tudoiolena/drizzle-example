import en from "../../locales/en.json";
import uk from "../../locales/uk.json";

export const EN_LANG = "en" as const;
export const UK_LANG = "uk" as const;
export const LANGUAGES = [EN_LANG, UK_LANG] as const;
export const DEFAULT_LANG = "en" as const;

export const LANGUAGE_SESSION_KEY = "lang" as const;

export default {
  supportedLngs: LANGUAGES,
  fallbackLng: DEFAULT_LANG,
  defaultNS: "common",
  resources: {
    en: {
      common: en,
    },
    uk: {
      common: uk,
    },
  },
  interpolation: {
    prefix: "{",
    suffix: "}",
  },
};
