export const social = [
  { url: "jonaikele27@gmail.com", name: "mail" },
  { url: "https://github.com/Jonaikele27", name: "github" },
  { url: "https://www.linkedin.com/in/jonaikellsolanoserrano/", name: "linkedin" },
  { url: "https://www.instagram.com/jonaikele_27?igsh=MTBpdXB2emJzaHBlbA%3D%3D", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "instagram" }[];
