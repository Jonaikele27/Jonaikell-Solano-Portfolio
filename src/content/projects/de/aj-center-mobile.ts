import cover from "../../../assets/images/projects/aj-center-mobile/AJ-CenterMovil.png";
import home from "../../../assets/images/projects/aj-center-mobile/home.png";
import login from "../../../assets/images/projects/aj-center-mobile/login.png";
import physiotherapy from "../../../assets/images/projects/aj-center-mobile/fisioterapia.png";
import challenges from "../../../assets/images/projects/aj-center-mobile/retos.jpeg";
import customRoutine from "../../../assets/images/projects/aj-center-mobile/Rutina personalizada.jpeg";
import routines from "../../../assets/images/projects/aj-center-mobile/rutinas.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "AJ-Center Movil",
  theme: "dark",
  tags: ["reactnative", "nestjs", "mysql"],
  videoBorder: false,
  description:
    "AJ-Center Mobile is the official app for AJ-Center gym members.<br/><br/>It allows you to schedule appointments, view workout routines, access personalized plans, track your fitness progress, and participate in challenges with incentives to stay motivated. Designed to support users throughout their training journey, the app offers a practical and personalized experience that makes it easier to achieve your health and wellness goals.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "AJ-Center Mobile overview",
        caption: "Overview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: login,
        alt: "AJ-Center Mobile login",
        caption: "Login",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: home,
        alt: "AJ-Center Mobile home",
        caption: "Home",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: routines,
        alt: "AJ-Center Mobile routines",
        caption: "Routines",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: customRoutine,
        alt: "AJ-Center Mobile custom routine",
        caption: "Custom routine",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: physiotherapy,
        alt: "AJ-Center Mobile physiotherapy",
        caption: "Physiotherapy",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: challenges,
        alt: "AJ-Center Mobile challenges",
        caption: "Challenges",
      },
    },
  ],
} as const satisfies ProjectContent;
