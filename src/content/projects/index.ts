import type { Locale } from "../../i18n/types";
import ajCenterDe from "./de/aj-center";
import ajCenterMobileDe from "./de/aj-center-mobile";
import serviciosMultiplesOmmDe from "./de/servicios-multiples-omm";
import zybusDe from "./de/zybus";
import gameverseDe from "./de/gameverse";
import cineflixDe from "./de/cineflix";
import ajCenterEn from "./en/aj-center";
import ajCenterMobileEn from "./en/aj-center-mobile";
import serviciosMultiplesOmmEn from "./en/servicios-multiples-omm";
import zybusEn from "./en/zybus";
import gameverseEn from "./en/gameverse";
import cineflixEn from "./en/cineflix";

export const projectIds = [
  "aj-center",
  "aj-center-mobile",
  "servicios-multiples-omm",
  "zybus",
  "gameverse",
  "cineflix",
] as const;

export const projectModules: Record<Locale, Record<string, any>> = {
  de: {
    "aj-center": { default: ajCenterDe },
    "aj-center-mobile": { default: ajCenterMobileDe },
    "servicios-multiples-omm": { default: serviciosMultiplesOmmDe },
    zybus: { default: zybusDe },
    gameverse: { default: gameverseDe },
    cineflix: { default: cineflixDe },
  },
  en: {
    "aj-center": { default: ajCenterEn },
    "aj-center-mobile": { default: ajCenterMobileEn },
    "servicios-multiples-omm": { default: serviciosMultiplesOmmEn },
    zybus: { default: zybusEn },
    gameverse: { default: gameverseEn },
    cineflix: { default: cineflixEn },
  },
};
