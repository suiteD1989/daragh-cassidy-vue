const checkProduction = process.env.WORK_ENV === 'production'
const env = checkProduction ? require('dotenv').config({ path: 'production.env' }) : require('dotenv').config({ path: 'staging.env' })

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    CTF_SPACE_ID: env.parsed.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: env.parsed.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: env.parsed.CTF_ENVIRONMENT,
    WORK_ENV: env.parsed.WORK_ENV
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
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
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
