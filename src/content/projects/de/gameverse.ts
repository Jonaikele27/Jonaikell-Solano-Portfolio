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
    "GameVerse is a project built with .NET Core, Vue, and MySQL.<br/><br/>This space is ready for the full case study, final description, and production screenshots when the project assets are available.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "GameVerse overview",
        caption: "Overview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gameverse1,
        alt: "GameVerse interface",
        caption: "Interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: gameverse2,
        alt: "GameVerse reports",
        caption: "Reports",
      },
    },
  ],
} as const satisfies ProjectContent;
