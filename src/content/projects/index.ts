import type { Locale } from "../../i18n/types";
import ajCenterEs from "./es/aj-center";
import ajCenterMobileEs from "./es/aj-center-mobile";
import serviciosMultiplesOmmEs from "./es/servicios-multiples-omm";
import zybusEs from "./es/zybus";
import gameverseEs from "./es/gameverse";
import cineflixEs from "./es/cineflix";
import odooAccountingEs from "./es/odoo-accounting";
import ajCenterEn from "./en/aj-center";
import ajCenterMobileEn from "./en/aj-center-mobile";
import serviciosMultiplesOmmEn from "./en/servicios-multiples-omm";
import zybusEn from "./en/zybus";
import gameverseEn from "./en/gameverse";
import cineflixEn from "./en/cineflix";
import odooAccountingEn from "./en/odoo-accounting";

export const projectIds = [
  "aj-center",
  "aj-center-mobile",
  "servicios-multiples-omm",
  "zybus",
  "gameverse",
  "cineflix",
  "odoo-accounting",
] as const;

export const projectModules: Record<Locale, Record<string, any>> = {
  es: {
    "aj-center": { default: ajCenterEs },
    "aj-center-mobile": { default: ajCenterMobileEs },
    "servicios-multiples-omm": { default: serviciosMultiplesOmmEs },
    zybus: { default: zybusEs },
    gameverse: { default: gameverseEs },
    cineflix: { default: cineflixEs },
    "odoo-accounting": { default: odooAccountingEs },
  },
  en: {
    "aj-center": { default: ajCenterEn },
    "aj-center-mobile": { default: ajCenterMobileEn },
    "servicios-multiples-omm": { default: serviciosMultiplesOmmEn },
    zybus: { default: zybusEn },
    gameverse: { default: gameverseEn },
    cineflix: { default: cineflixEn },
    "odoo-accounting": { default: odooAccountingEn },
  },
};
