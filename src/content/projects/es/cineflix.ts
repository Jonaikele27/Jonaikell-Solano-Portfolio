import cover from "../../../assets/images/projects/CineFlix/image.png";

import type { ProjectContent } from "../../types";

export default {
  title: "CineFlix",
  theme: "dark",
  tags: ["springboot", "sqlserver", "html", "javascript", "css", "bootstrap"],
  videoBorder: true,
  description:
    "CineFlix es un proyecto web enfocado en el cine, desarrollado con Spring Boot, SQL Server, HTML, JavaScript, CSS y Bootstrap.<br/><br/>La plataforma está preparada como caso de estudio de portafolio para presentar la interfaz, la estructura y la experiencia de usuario principal de la aplicación.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "Vista general de CineFlix",
        caption: "Vista general",
      },
    },
  ],
} as const satisfies ProjectContent;
