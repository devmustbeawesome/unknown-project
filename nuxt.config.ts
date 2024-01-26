// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/eslint-module",
    "@vueuse/nuxt",
    "@nuxtjs/stylelint-module",
    "nuxt-swiper",
  ],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  eslint: {
    lintOnStart: false,
  },
  stylelint: {
    lintOnStart: false,
  },
  swiper: {
    // Swiper options
    //  ----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
});
