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
    lintOnStart: true,
  },
  stylelint: {
    lintOnStart: true,
  },
  swiper: {
    // Swiper options
    //  ----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
});
