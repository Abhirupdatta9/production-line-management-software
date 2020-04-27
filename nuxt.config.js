import pkg from './package'
import colors from "vuetify/es5/util/colors";

export default {
    mode: 'spa',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: "stylesheet", 
                href: 'https://fonts.googleapis.com/css?family=Baloo+2&display=swap'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: [],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/particles',
        '@plugins/axios.js',
        '@plugins/mixins/validation.js',
        '@plugins/mixins/user.js',
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/vuetify',
        '@nuxtjs/auth'
        
    ],

    // schemes : [
    //     "http"
    // ],

    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        theme: {
            light: true,
            themes: {
                light: {
                    primary: colors.purple.base,
                    accent: colors.grey.darken2,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                },
                dark: {
                    primary: colors.purple.lighten2,
                    accent: colors.grey.lighten1,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    /*
     ** Axios module configuration
     */
    axios: {
        baseURL: "http://localhost:8000/api"
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post', propertyName: 'meta.token' },
                    logout: { url: '/logout', method: 'post' },
                    user: { url: '/user', method: 'get', propertyName: 'data' }
                },
            }
        }
    },

    router : {
        middleware : ["clearValidationErrors"]
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}