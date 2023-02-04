// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Blacklist",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-vuefire",
    "@pinia/nuxt",
    "@nuxtjs/apollo",
    "nuxt-headlessui",
    "@nuxtjs/i18n",
  ],

  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        file: "en.json",
        name: "English",
      },
      {
        code: "lo",
        file: "lo.json",
        name: "ພາສາລາວ",
      },
    ],
    langDir: "locales/",
    lazy: false,
    defaultLocale: "en",
  },

  css: ["~/assets/css/tailwind.css"],

  headlessui: {
    prefix: "Headless",
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  apollo: {
    clients: {
      default: {
        //REPLACE URL OF YOUR APOLLO
        httpEndpoint: "https://big-baboon-88.hasura.app/v1/graphql",
        wsEndpoint: "wss://big-baboon-88.hasura.app/v1/graphql",
        tokenName: "token",
        //DEFINE WHERE TOKEN SHOULD BE GET TO MAKE AUTHENTICATION FOR FETCHING DATA OR APOLLO SERVER THAT NEED AUTHENTICATION
        tokenStorage: "localStorage",
        authType: "Bearer",
        authHeader: "Authorization",
      },
    },
  },

  components: [
    {
      path: "~/components/",
      pathPrefix: false,
      // extensions: [".vue"],
    },
  ],

  vuefire: {
    auth: true,
    admin: {
      serviceAccount: "YOPUR_PATH_OF_YOU_ADMIN_CREDENTIAL",
    },
    config: {
      // YOU_FIREBASE_CONFIG
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
    },
  },

  plugins: [{ src: "@/plugins/set_token.ts", mode: "client" }],

  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "dark",
  },

  postcss: {
    plugins: {
      tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
      },
      autoprefixer: {},
    },
  },
});
