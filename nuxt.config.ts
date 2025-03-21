import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [400, 500, 600, 700],
    },
  },
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/api/**': { swr: 600 },
    }
  }
})
