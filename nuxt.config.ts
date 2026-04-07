// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode'
  ],
  css: ['~/assets/css/tailwind.css'],
  supabase: {
    redirect: false
  }
})