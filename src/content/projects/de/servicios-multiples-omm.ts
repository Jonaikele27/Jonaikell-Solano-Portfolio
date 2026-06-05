import dashboard from "../../../assets/images/projects/servicios-multiples-omm/Dashboard.png";
import clientes from "../../../assets/images/projects/servicios-multiples-omm/Clientes.png";
import facturas from "../../../assets/images/projects/servicios-multiples-omm/Facturas.png";
import proveedores from "../../../assets/images/projects/servicios-multiples-omm/Proveedores.png";
import reportes from "../../../assets/images/projects/servicios-multiples-omm/Reportes.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Servicios Multiples OMM",
  theme: "light",
  tags: ["react", "laravel", "mysql", "tailwind"],
  videoBorder: true,
  description:
    "Servicios Multiples OMM is a web platform built to present and manage the company's service offering through a clean, organized, and responsive experience.<br/><br/>The project focuses on clear information architecture, practical navigation, and a professional interface that helps users understand available services and contact the business easily.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: dashboard,
        alt: "Servicios Multiples OMM dashboard",
        caption: "Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: clientes,
        alt: "Servicios Multiples OMM clients",
        caption: "Clients",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: facturas,
        alt: "Servicios Multiples OMM invoices",
        caption: "Invoices",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: proveedores,
        alt: "Servicios Multiples OMM suppliers",
        caption: "Suppliers",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reportes,
        alt: "Servicios Multiples OMM reports",
        caption: "Reports",
      },
    },
  ],
} as const satisfies ProjectContent;
