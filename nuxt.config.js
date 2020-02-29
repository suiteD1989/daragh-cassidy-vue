const checkProduction = process.env.SET_ENVIRONMENT === 'production'
const env = checkProduction ? require('dotenv').config({ path: 'production.env' }) : require('dotenv').config({ path: 'staging.env' })
import fetchAppRoutes from './utils/fetchRoutes.js';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-256.ico' }
    ]
  },
  env: {
    CTF_SPACE_ID: env.parsed.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: env.parsed.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: env.parsed.CTF_ENVIRONMENT,
    SET_ENVIRONMENT: env.parsed.SET_ENVIRONMENT
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'node_modules/bootstrap-4-grid/css/grid.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazysizes'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
    [ '@nuxtjs/google-analytics', {
      id: 'UA-120092935-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    [
      'nuxt-fontawesome', {
        imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
      }
    ]
  ],
  sitemap: {
    routes: () => {
      return fetchAppRoutes()
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    mode: 'production',
    extend (config, ctx) {
    }
  }
}
