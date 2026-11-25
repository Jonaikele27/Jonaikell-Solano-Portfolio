import cover from "../../../assets/images/projects/zybus/ZyBus.png";
import dashboard from "../../../assets/images/projects/zybus/Dashboard.png";
import empleados from "../../../assets/images/projects/zybus/Empleados.png";
import reportes from "../../../assets/images/projects/zybus/Reportes.png";
import landingMobile from "../../../assets/images/projects/zybus/LandinMovil.png";
import loginMobile from "../../../assets/images/projects/zybus/InicioSecionMovil.png";
import homeMobile from "../../../assets/images/projects/zybus/homeMovil.png";
import darkMobile from "../../../assets/images/projects/zybus/oscuroMovil.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Zybus",
  theme: "light",
  tags: ["fastapi", "mysql", "react", "tailwind", "reactnative", "docker"],
  videoBorder: true,
  description:
    "Zybus es una plataforma integral de monitoreo de transporte.<br/><br/>Desarrollamos una solución digital completa para optimizar la logística de las empresas de autobuses y mejorar la experiencia del pasajero. Diseñamos e implementamos la arquitectura completa: desde la sincronización de datos de geolocalización en tiempo real hasta paneles administrativos interactivos y vistas móviles intuitivas para los usuarios.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "Vista general de Zybus",
        caption: "Vista general",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: dashboard,
        alt: "Panel de control de Zybus",
        caption: "Panel de control",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: empleados,
        alt: "Empleados en Zybus",
        caption: "Empleados",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reportes,
        alt: "Reportes de Zybus",
        caption: "Reportes",
      },
    },
    {
      type: "mediaPair",
      props: {
        items: [
          {
            src: landingMobile,
            alt: "Landing móvil de Zybus",
            caption: "Landing móvil",
          },
          {
            src: loginMobile,
            alt: "Inicio de sesión móvil de Zybus",
            caption: "Inicio de sesión",
          },
        ],
      },
    },
    {
      type: "mediaPair",
      props: {
        items: [
          {
            src: homeMobile,
            alt: "Inicio móvil de Zybus",
            caption: "Inicio móvil",
          },
          {
            src: darkMobile,
            alt: "Modo oscuro de Zybus",
            caption: "Modo oscuro",
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
