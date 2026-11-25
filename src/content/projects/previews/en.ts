import thumbnailAjCenterMobile from "../../../assets/images/projects/aj-center-mobile/AJ-CenterMovil.png";
import thumbnailServiciosMultiplesOmm from "../../../assets/images/projects/servicios-multiples-omm/OMMService.png";
import thumbnailAjCenter from "../../../assets/images/projects/aj-center/Aj-Center Admin.png";
import thumbnailZybus from "../../../assets/images/projects/zybus/ZyBus.png";
import thumbnailGameVerse from "../../../assets/images/projects/GameVerse/Captura de pantalla 2026-05-21 024252.png";
import thumbnailCineFlix from "../../../assets/images/projects/CineFlix/image.png";
import thumbnailOdooAccounting from "../../../assets/images/projects/odoo-accounting/accounting.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "AJ-Center Admin",
    slug: "aj-center",
    thumbnail: thumbnailAjCenter,
    description: "Administrative management platform",
  },
  {
    title: "AJ-Center Mobile",
    slug: "aj-center-mobile",
    thumbnail: thumbnailAjCenterMobile,
    description: "Mobile management app",
  },
  {
    title: "Servicios Multiples OMM",
    slug: "servicios-multiples-omm",
    thumbnail: thumbnailServiciosMultiplesOmm,
    description: "Service management platform",
  },
  {
    title: "Zybus",
    slug: "zybus",
    thumbnail: thumbnailZybus,
    description: "Transportation monitoring platform",
  },
  {
    title: "GameVerse",
    slug: "gameverse",
    thumbnail: thumbnailGameVerse,
    description: ".NET Core and Vue game platform",
  },
  {
    title: "CineFlix",
    slug: "cineflix",
    thumbnail: thumbnailCineFlix,
    description: "Movie web platform",
  },
  {
    title: "Accounting and Tax Management System — Odoo 19",
    slug: "odoo-accounting",
    thumbnail: thumbnailOdooAccounting,
    description: "Accounting and tax management on Odoo 19",
  },
] as const satisfies ProjectPreview[];
