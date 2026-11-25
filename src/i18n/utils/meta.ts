import { translations } from "../store";

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector(selector);
  if (!element) return;

  element.setAttribute("content", content);
};

/**
 * Keeps the document title and the SEO/social metadata in sync with the
 * active locale, so a Spanish session never exposes English metadata.
 */
export const applyDocumentMeta = () => {
  const title = translations.value["meta-title"];
  const description = translations.value["meta-description"];

  if (title) document.title = title;
  if (!description) return;

  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', title ?? description);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[name="twitter:title"]', title ?? description);
  setMetaContent('meta[name="twitter:description"]', description);
};
