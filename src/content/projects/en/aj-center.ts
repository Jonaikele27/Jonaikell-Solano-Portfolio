import cover from "../../../assets/images/projects/aj-center/Aj-Center Admin.png";
import dashboard from "../../../assets/images/projects/aj-center/DashBoard.png";
import miembros from "../../../assets/images/projects/aj-center/Miembros.png";
import ejercicios from "../../../assets/images/projects/aj-center/Ejercicios.png";
import rutinas from "../../../assets/images/projects/aj-center/rutinas.png";
import rutinaSemanal from "../../../assets/images/projects/aj-center/Rutina Semanal.png";
import fisioterapia from "../../../assets/images/projects/aj-center/Fisioterapia.png";
import reportes from "../../../assets/images/projects/aj-center/reportes.png";

import type { ProjectContent } from "../../types";

export default {
  title: "AJ-Center Admin",
  theme: "dark",
  tags: ["react", "nestjs", "mysql", "vite", "tailwind"],
  videoBorder: false,
  description:
    "AJ-Center Admin is an administrative platform designed to efficiently manage AJ-Center's operations.<br/><br/>It allows you to control memberships, users, payments, attendance, services, and reports from a centralized interface, facilitating information tracking and optimizing the center's administrative processes. Its goal is to provide fast, secure, and organized management to improve the experience for both staff and customers.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "AJ-Center Admin overview",
        caption: "Overview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: dashboard,
        alt: "AJ-Center Admin dashboard",
        caption: "Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: miembros,
        alt: "AJ-Center Admin members",
        caption: "Members",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ejercicios,
        alt: "AJ-Center Admin exercises",
        caption: "Exercises",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rutinas,
        alt: "AJ-Center Admin routines",
        caption: "Routines",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rutinaSemanal,
        alt: "AJ-Center Admin weekly routine",
        caption: "Weekly routine",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: fisioterapia,
        alt: "AJ-Center Admin physiotherapy",
        caption: "Physiotherapy",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reportes,
        alt: "AJ-Center Admin reports",
        caption: "Reports",
      },
    },
  ],
} as const satisfies ProjectContent;
