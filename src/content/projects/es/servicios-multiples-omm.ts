import dashboard from "../../../assets/images/projects/servicios-multiples-omm/Dashboard.png";
import clientes from "../../../assets/images/projects/servicios-multiples-omm/Clientes.png";
import facturas from "../../../assets/images/projects/servicios-multiples-omm/Facturas.png";
import proveedores from "../../../assets/images/projects/servicios-multiples-omm/Proveedores.png";
import reportes from "../../../assets/images/projects/servicios-multiples-omm/Reportes.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Servicios Múltiples OMM",
  theme: "light",
  tags: ["react", "laravel", "mysql", "tailwind"],
  videoBorder: true,
  description:
    "Servicios Múltiples OMM es una plataforma web construida para presentar y administrar la oferta de servicios de la empresa mediante una experiencia limpia, organizada y responsiva.<br/><br/>El proyecto se centra en una arquitectura de información clara, una navegación práctica y una interfaz profesional que ayuda a los usuarios a comprender los servicios disponibles y a contactar al negocio de forma sencilla.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: dashboard,
        alt: "Panel de control de Servicios Múltiples OMM",
        caption: "Panel de control",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: clientes,
        alt: "Clientes de Servicios Múltiples OMM",
        caption: "Clientes",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: facturas,
        alt: "Facturas de Servicios Múltiples OMM",
        caption: "Facturas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: proveedores,
        alt: "Proveedores de Servicios Múltiples OMM",
        caption: "Proveedores",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reportes,
        alt: "Reportes de Servicios Múltiples OMM",
        caption: "Reportes",
      },
    },
  ],
} as const satisfies ProjectContent;
