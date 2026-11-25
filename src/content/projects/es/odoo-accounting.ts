import accountingImage from "../../../assets/images/projects/odoo-accounting/accounting.png";
import fiscalImage from "../../../assets/images/projects/odoo-accounting/fiscal.png";
import reportsImage from "../../../assets/images/projects/odoo-accounting/reports.png";
import invoicingImage from "../../../assets/images/projects/odoo-accounting/invoicing.png";
import customsImage from "../../../assets/images/projects/odoo-accounting/customs.png";
import profitImage from "../../../assets/images/projects/odoo-accounting/profit.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Sistema de gestión contable y fiscal — Odoo 19",
  theme: "light",
  tags: ["odoo", "python", "postgresql", "xml", "javascript", "docker"],
  videoBorder: true,
  description:
    "Plataforma de gestión contable y fiscal para Costa Rica, desarrollada en Odoo 19 por Solvosoft. Simplifica los procesos contables, la gestión fiscal, los reportes financieros, la facturación electrónica y las declaraciones aduaneras.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: accountingImage,
        alt: "Asientos contables registrados en el libro mayor",
        caption: "Asientos contables",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: fiscalImage,
        alt: "Panel de gestión fiscal con las obligaciones tributarias",
        caption: "Gestión fiscal",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reportsImage,
        alt: "Centro unificado de reportes contables con opciones de exportación",
        caption: "Centro de reportes",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: invoicingImage,
        alt: "Facturación electrónica e integración con la autoridad tributaria",
        caption: "Facturación electrónica",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: customsImage,
        alt: "Declaraciones aduaneras y catálogo arancelario",
        caption: "Declaraciones aduaneras",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: profitImage,
        alt: "Reparto de utilidades y auxiliares contables",
        caption: "Reparto de utilidades",
      },
    },
  ],
} as const satisfies ProjectContent;
