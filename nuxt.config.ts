import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss', '@tailwindcss/typography'],
    tailwindcss: {
        jit: true,
        // add '~tailwind.config` alias
        exposeConfig: true
      },
      colorMode: {
        classSuffix: ""
      }
})
