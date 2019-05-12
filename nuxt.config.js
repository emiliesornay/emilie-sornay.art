const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Danseuse et Acrobate' },
      { hid: 'msapplication-TileColor', name: "msapplication-TileColor", content: "#ffffff" },
      { hid: 'msapplication-TileImage', name: "msapplication-TileImage", content: "/img/icons/mstile-144x144.png" },
      { hid: 'msapplication-config', name: "msapplication-config", content: "/img/icons/browserconfig.xml" },
      { hid: 'theme-color', name: "theme-color", content: "#ffffff" },
      { hid: 'og:image:width', property: "og:image:width", content: "279" },
      { hid: 'og:image:height', property: "og:image:height", content: "213" },
      //Filled in index.vue : { property: "og:description", content: "Maison 239 m2 aux Mayons" },
      { hid: 'og:title', property: "og:title", content: "Émilie Sornay" },
      { hid: 'og:url', property: "og:url", content: "https://www.emilie-sornay.art" },
      { hid: 'og:image', property: "og:image", content: "https://www.emilie-sornay.art/img/icons/og-image.jpg" },
      { hid: 'google-site-verification', property: "google-site-verification", content: "" }
    ],
    link: [
      { rel:"apple-touch-icon", sizes: "180x180", href: "/img/icons/apple-touch-icon.png" },
      { rel:"icon", type: "image/png", sizes: "32x32", href: "/img/icons/favicon-32x32.png" },
      { rel:"icon", type: "image/png", sizes: "16x16", href: "/img/icons/favicon-16x16.png" },
      { rel:"manifest", href: "/manifest.json" },
      { rel:"shortcut icon", href: "/img/icons/favicon.ico" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  styleResources: {
    sass: [],
    less: [],
    stylus: [
      '@/assets/stylus/main.styl'
    ]
   }
}
