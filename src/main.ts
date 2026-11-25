import { createApp } from "vue";
import "./assets/styles/index.scss";
import App from "./App.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { initTranslations } from "./i18n/utils/init";

gsap.registerPlugin(ScrollTrigger);

initTranslations()
  .catch(() => {
    // The app still boots with the default locale if the messages fail to load.
  })
  .finally(() => {
    createApp(App).mount("#app");
  });
