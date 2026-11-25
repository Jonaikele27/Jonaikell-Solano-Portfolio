import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { applyDocumentLocale } from "../utils/locale";
import { applyDocumentMeta } from "../utils/meta";

export const useTranslations = () => {
  watch(locale, async (newLocale) => {
    if (!newLocale) return;

    window.localStorage.setItem("portfolio-locale", newLocale);
    applyDocumentLocale(newLocale);

    translations.value = (await loadTranslations("common", newLocale)) ?? {};
    applyDocumentMeta();
  });
};
