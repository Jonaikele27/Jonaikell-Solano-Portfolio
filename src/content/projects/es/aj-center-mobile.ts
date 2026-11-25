import cover from "../../../assets/images/projects/aj-center-mobile/AJ-CenterMovil.png";
import home from "../../../assets/images/projects/aj-center-mobile/home.png";
import login from "../../../assets/images/projects/aj-center-mobile/login.png";
import physiotherapy from "../../../assets/images/projects/aj-center-mobile/fisioterapia.png";
import challenges from "../../../assets/images/projects/aj-center-mobile/retos.jpeg";
import customRoutine from "../../../assets/images/projects/aj-center-mobile/Rutina personalizada.jpeg";
import routines from "../../../assets/images/projects/aj-center-mobile/rutinas.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "AJ-Center Móvil",
  theme: "dark",
  tags: ["reactnative", "nestjs", "mysql"],
  videoBorder: false,
  description:
    "AJ-Center Móvil es la aplicación oficial para los socios del gimnasio AJ-Center.<br/><br/>Permite agendar citas, consultar rutinas de entrenamiento, acceder a planes personalizados, seguir el progreso fitness y participar en retos con incentivos para mantener la motivación. Diseñada para acompañar al usuario durante todo su proceso de entrenamiento, la aplicación ofrece una experiencia práctica y personalizada que facilita la consecución de sus objetivos de salud y bienestar.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "Vista general de AJ-Center Móvil",
        caption: "Vista general",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: login,
        alt: "Inicio de sesión en AJ-Center Móvil",
        caption: "Inicio de sesión",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: home,
        alt: "Inicio de AJ-Center Móvil",
        caption: "Inicio",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: routines,
        alt: "Rutinas en AJ-Center Móvil",
        caption: "Rutinas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: customRoutine,
        alt: "Rutina personalizada en AJ-Center Móvil",
        caption: "Rutina personalizada",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: physiotherapy,
        alt: "Fisioterapia en AJ-Center Móvil",
        caption: "Fisioterapia",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: challenges,
        alt: "Retos en AJ-Center Móvil",
        caption: "Retos",
      },
    },
  ],
} as const satisfies ProjectContent;
