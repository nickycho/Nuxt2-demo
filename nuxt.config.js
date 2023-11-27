const BASE_URL = process.env.BASE_URL

export default {
  publicRuntimeConfig: {
    base_url: BASE_URL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-vant2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
    '@/plugins/axios',
    '@/plugins/my-plugin',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  axios: {
    // Axios module configuration
    baseURL: BASE_URL // Your API base URL
    // Other options...
  },

  auth: {
    strategies: {
      local: {
        provider: 'laravel/jwt',
        url: BASE_URL,
        endpoints: {
          logout: false,
          refresh: false,
          user: {
            url: '/api/auth/me',
          },
        },
        user: {
          property: 'user'
        },
        token: {
          property: 'token',
          maxAge: 60 * 60 * 24 * 7
        },
        refreshToken: {
          maxAge: 60 * 60 * 24 * 30
        },
    }

    },
    redirect: {
      login: '/login',
      logout: '/',
    }
  }, 

  serverMiddleware: [
    {
      path: '/login',
      handler: '~/server-middleware/cors.js'
    }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
