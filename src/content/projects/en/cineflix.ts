import cover from "../../../assets/images/projects/CineFlix/image.png";

import type { ProjectContent } from "../../types";

export default {
  title: "CineFlix",
  theme: "dark",
  tags: ["springboot", "sqlserver", "html", "javascript", "css", "bootstrap"],
  videoBorder: true,
  description:
    "CineFlix is a movie-focused web project built with Spring Boot, SQL Server, HTML, JavaScript, CSS, and Bootstrap.<br/><br/>The platform is prepared as a portfolio case study for presenting the application's interface, structure, and core user experience.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cover,
        alt: "CineFlix overview",
        caption: "Overview",
      },
    },
  ],
} as const satisfies ProjectContent;
