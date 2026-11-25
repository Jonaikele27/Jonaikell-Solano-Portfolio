import cover from "../../../assets/images/projects/GameVerse/Captura de pantalla 2026-05-21 024252.png";
import gameverse1 from "../../../assets/images/projects/GameVerse/Captura de pantalla 2026-05-21 024342.png";
import gameverse2 from "../../../assets/images/projects/GameVerse/Captura de pantalla 2026-05-21 025006.png";

import type { ProjectContent } from "../../types";

export default {
  title: "GameVerse",
  theme: "dark",
  tags: ["dotnet", "vue", "mysql"],
  videoBorder: true,
  description:
    "GameVerse es un proyecto desarrollado con .NET Core, Vue y MySQL.<br/><br/>Este espacio está listo para el caso de estudio completo, la descripción final y las capturas de producción cuando los recursos del proyecto estén disponibles.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "Vista general de GameVerse",
        caption: "Vista general",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gameverse1,
        alt: "Interfaz de GameVerse",
        caption: "Interfaz",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gameverse2,
        alt: "Reportes de GameVerse",
        caption: "Reportes",
      },
    },
  ],
} as const satisfies ProjectContent;
