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
    "Zybus is a full stack transportation monitoring platform.<br/><br/>We developed a comprehensive digital solution to optimize the logistics of bus companies and improve the passenger experience. We designed and implemented the complete architecture: from real-time geolocation data synchronization to interactive administrative dashboards and intuitive mobile views for users.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "Zybus overview",
        caption: "Overview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: dashboard,
        alt: "Zybus dashboard",
        caption: "Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: empleados,
        alt: "Zybus employees",
        caption: "Employees",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reportes,
        alt: "Zybus reports",
        caption: "Reports",
      },
    },
    {
      type: "mediaPair",
      props: {
        items: [
          {
            src: landingMobile,
            alt: "Zybus mobile landing",
            caption: "Landing mobile",
          },
          {
            src: loginMobile,
            alt: "Zybus mobile login",
            caption: "Login",
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
            alt: "Zybus mobile home",
            caption: "Home mobile",
          },
          {
            src: darkMobile,
            alt: "Zybus mobile dark mode",
            caption: "Dark mode",
          },
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
