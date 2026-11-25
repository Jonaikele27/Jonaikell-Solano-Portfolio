import { compileTemplate } from "./template";
import { fallbackTranslations, translations } from "../store";

export const t = (key: string, props: { [key: string]: any } = {}) => {
  const translation = translations.value[key] ?? fallbackTranslations.value[key];
  if (!translation) return "";

  const render = compileTemplate(translation);
  return render(props);
};
