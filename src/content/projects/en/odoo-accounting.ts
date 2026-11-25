import accountingImage from "../../../assets/images/projects/odoo-accounting/accounting.png";
import fiscalImage from "../../../assets/images/projects/odoo-accounting/fiscal.png";
import reportsImage from "../../../assets/images/projects/odoo-accounting/reports.png";
import invoicingImage from "../../../assets/images/projects/odoo-accounting/invoicing.png";
import customsImage from "../../../assets/images/projects/odoo-accounting/customs.png";
import profitImage from "../../../assets/images/projects/odoo-accounting/profit.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Accounting and Tax Management System — Odoo 19",
  theme: "light",
  tags: ["odoo", "python", "postgresql", "xml", "javascript", "docker"],
  videoBorder: true,
  description:
    "Accounting and tax management platform for Costa Rica, developed on Odoo 19 by Solvosoft. It streamlines accounting processes, tax management, financial reporting, electronic invoicing, and customs declarations.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: accountingImage,
        alt: "Accounting entries registered in the general ledger",
        caption: "Accounting entries",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: fiscalImage,
        alt: "Fiscal management dashboard with tax obligations",
        caption: "Fiscal management",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reportsImage,
        alt: "Unified accounting reporting hub with export options",
        caption: "Reporting hub",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: invoicingImage,
        alt: "Electronic invoicing and tax authority integration",
        caption: "Electronic invoicing",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: customsImage,
        alt: "Customs declarations and tariff catalog",
        caption: "Customs declarations",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: profitImage,
        alt: "Profit distribution and auxiliary ledgers",
        caption: "Profit distribution",
      },
    },
  ],
} as const satisfies ProjectContent;
