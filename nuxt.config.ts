import postcss from "./postcss.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/css/main.scss"],
  postcss,
  app: {
    baseURL: "/nuxt/"
  },
});
