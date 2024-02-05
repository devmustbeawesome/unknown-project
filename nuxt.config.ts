// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/eslint-module",
    "@vueuse/nuxt",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],

  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "EN",
        iso: "en-US",
        file: "en.json",
      },
      {
        code: "ru",
        name: "RU",
        iso: "ru",
        file: "ru.json",
      },
    ],
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    langDir: "langs",
    lazy: true,
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  eslint: {
    lintOnStart: false,
  },
  stylelint: {
    lintOnStart: false,
  },
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
  colorMode: {
    preference: "system",
    fallback: "dark",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag.startsWith("swiper-"),
    },
  },
});
