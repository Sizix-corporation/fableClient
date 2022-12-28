// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Fable",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-png", href: "/logo.png" }],
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    ablyKey:'wE-BTQ.XwG9Gg:7N1BB1JaZ-TRpfPCyjaUY5V_srt27OkxzqC2dd679VM',
    // Keys within public are also exposed client-side
    public: {
      apiBase: "http://localhost:8000",
    },
  },
  routeRules: {
    "/dashboard": { ssr: false },
    "/archive": { ssr: false },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-headlessui",
  ],

  headlessui: {
    prefix: "Headless",
  },
  colorMode: {
    classSuffix: "",
  },

});
