export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // prettier-ignore
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false,
  },
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons',
      },
    ],
  },
  fonts: {
    provider: 'local',
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
    },
  },
});
