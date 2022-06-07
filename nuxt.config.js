import { apiEndpoint } from './sm.json'
import smConfig from './sm.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cmda-midterm',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '../static/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/prismic',
  ],

  prismic: {
    endpoint: apiEndpoint,
    modern: true,
    /* see configuration for more */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["@nuxtjs/prismic", {endpoint: smConfig.apiEndpoint || ""}]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@prismicio/vue'],
  },
}
