export default {
  /*
   ** Nuxt mode
   ** Possible values:
   ** - 'spa': No server-side rendering (only client-side navigation)
   ** - 'universal': Isomorphic application (server-side rendering + client-side navigation)
   */
  mode: 'universal',

  /*
   ** Nuxt source directory location
   */
  srcDir: './src/',

  /*
   **  Headers of the page
   */
  head: {
    title: 'Nuxt Typescript Example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt Typescript Example' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
  ** Build configuration
  */
  generate: {
    dir: './dist',
    routes: [
      '/'
    ]
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/scss/global.scss'],

  /*
   ** Plugins to load before mouting the App
   */
  plugins: ['~/plugins/hello'],

  /*
   ** Nuxt.js modules
   */
  modules: [],

 /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|vue)$/,
          loader: 'tslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
