import { LANG } from "@/app/lib/types";

export const SUPPORTED_LANGUAGES: LANG[] = ["en", "fr"];
export const DEFAULT_LANGUAGE: LANG = "en";

export const isSupportedLanguage = (value: string): value is LANG => {
  return SUPPORTED_LANGUAGES.includes(value as LANG);
};
