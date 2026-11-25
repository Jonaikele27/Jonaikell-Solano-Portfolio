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
    "AJ-Center Admin es una plataforma administrativa diseñada para gestionar de forma eficiente las operaciones de AJ-Center.<br/><br/>Permite controlar membresías, usuarios, pagos, asistencia, servicios y reportes desde una interfaz centralizada, facilitando el seguimiento de la información y optimizando los procesos administrativos del centro. Su objetivo es ofrecer una gestión rápida, segura y organizada que mejore la experiencia tanto del personal como de los clientes.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "Vista general de AJ-Center Admin",
        caption: "Vista general",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: dashboard,
        alt: "Panel de control de AJ-Center Admin",
        caption: "Panel de control",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: miembros,
        alt: "Membros de AJ-Center Admin",
        caption: "Miembros",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ejercicios,
        alt: "Ejercicios de AJ-Center Admin",
        caption: "Ejercicios",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rutinas,
        alt: "Rutinas de AJ-Center Admin",
        caption: "Rutinas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: rutinaSemanal,
        alt: "Rutina semanal de AJ-Center Admin",
        caption: "Rutina semanal",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: fisioterapia,
        alt: "Fisioterapia en AJ-Center Admin",
        caption: "Fisioterapia",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: reportes,
        alt: "Reportes de AJ-Center Admin",
        caption: "Reportes",
      },
    },
  ],
} as const satisfies ProjectContent;
