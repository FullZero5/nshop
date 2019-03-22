import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  manifest: {
    theme_color: '#f4a00d',
    name: 'Продажа онлайн касс',
    description: 'У нас Вы можете купить онлайн кассу под 54ФЗ и получить полный спектр услуг: ввод в эксплуатацию, гарантийный и пост гарантийный ремонт касс',
    lang: 'ru'
  },
  head: {
    title: 'Онлайн кассы под ключ, установка, гарантийный  и послегарантийный ремонт кассовых аппаратов',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
     '~plugins/firebase',
    { src: '~plugins/lazysizes', ssr: false },
    { src: '~plugins/localStorage.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa',
  ],
  vendor: [
      'firebase/app',
      'firebase/database'
    ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
