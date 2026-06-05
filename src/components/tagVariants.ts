export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "reactnative"
  | "vue"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "nestjs"
  | "springboot"
  | "mysql"
  | "sqlserver"
  | "vite"
  | "tailwind"
  | "laravel"
  | "fastapi"
  | "docker"
  | "dotnet"
  | "bootstrap"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  reactnative: "React Native",
  vue: "Vue",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  nestjs: "NestJS",
  springboot: "Spring Boot",
  mysql: "MySQL",
  sqlserver: "SQL Server",
  vite: "Vite",
  tailwind: "Tailwind",
  laravel: "Laravel",
  fastapi: "FastAPI",
  docker: "Docker",
  dotnet: ".NET Core",
  bootstrap: "Bootstrap",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
