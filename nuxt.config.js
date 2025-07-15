// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // prettier-ignore
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
});
