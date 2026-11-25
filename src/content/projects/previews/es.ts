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
    description: "Plataforma de gestión administrativa",
  },
  {
    title: "AJ-Center Móvil",
    slug: "aj-center-mobile",
    thumbnail: thumbnailAjCenterMobile,
    description: "Aplicación móvil de gestión",
  },
  {
    title: "Servicios Múltiples OMM",
    slug: "servicios-multiples-omm",
    thumbnail: thumbnailServiciosMultiplesOmm,
    description: "Plataforma de gestión de servicios",
  },
  {
    title: "Zybus",
    slug: "zybus",
    thumbnail: thumbnailZybus,
    description: "Plataforma de monitoreo de transporte",
  },
  {
    title: "GameVerse",
    slug: "gameverse",
    thumbnail: thumbnailGameVerse,
    description: "Plataforma de juegos en .NET Core y Vue",
  },
  {
    title: "CineFlix",
    slug: "cineflix",
    thumbnail: thumbnailCineFlix,
    description: "Plataforma web de cine",
  },
  {
    title: "Sistema de gestión contable y fiscal — Odoo 19",
    slug: "odoo-accounting",
    thumbnail: thumbnailOdooAccounting,
    description: "Gestión contable y fiscal sobre Odoo 19",
  },
] as const satisfies ProjectPreview[];
