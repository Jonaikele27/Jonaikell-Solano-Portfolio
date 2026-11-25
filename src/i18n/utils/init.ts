import { locale, translations, fallbackTranslations } from "../store";
import { loadTranslations } from "./load";
import { applyDocumentLocale, resolveInitialLocale } from "./locale";
import { applyDocumentMeta } from "./meta";
import { LOCALE_DEFAULT } from "../constants";

/**
 * Resolves the locale and loads the messages before the app is mounted,
 * so the first paint already shows the correct language (no content flash).
 */
export const initTranslations = async () => {
  const initialLocale = resolveInitialLocale();

  const [currentMessages, defaultMessages] = await Promise.all([
    loadTranslations("common", initialLocale),
    loadTranslations("common", LOCALE_DEFAULT),
  ]);

  fallbackTranslations.value = defaultMessages ?? {};
  translations.value = currentMessages ?? {};
  locale.value = initialLocale;
  applyDocumentLocale(initialLocale);
  applyDocumentMeta();
};
