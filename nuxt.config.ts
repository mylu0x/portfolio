export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@unocss/nuxt'],
  app: {
    head: {
      title: 'mylu0x',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }
      ]
    }
  },
  components: {
    dirs: [
      {
        path: '~/components/',
        pathPrefix: false
      }
    ]
  },
  css: ['~/assets/css/main.css'],
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 800],
      styles: ['normal', 'italic', 'oblique']
    }
  }
});
