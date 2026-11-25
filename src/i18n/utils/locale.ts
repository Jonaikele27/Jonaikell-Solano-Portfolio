import { locale } from "../store";
import { LOCALES, LOCALE_DEFAULT } from "../constants";

import type { Locale } from "../types";

export const isLocale = (value: string | null | undefined): value is Locale => {
  return !!value && value in LOCALES;
};

/**
 * Resolves the locale to use on the first render, before any component mounts.
 * The stored preference always wins so a reload keeps the chosen language.
 */
export const resolveInitialLocale = (): Locale => {
  if (typeof window === "undefined") return LOCALE_DEFAULT;

  const stored = window.localStorage.getItem("portfolio-locale");
  if (isLocale(stored)) return stored;

  const preferred = navigator.language?.split("-")[0] ?? "";
  if (isLocale(preferred)) return preferred;

  return LOCALE_DEFAULT;
};

/** Keeps the document language in sync with the active locale. */
export const applyDocumentLocale = (value: Locale) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = LOCALES[value].iso;
};

export const changeLocale = (newLocale: Locale) => {
  locale.value = newLocale;
};
