// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/supabase", "@nuxt/icon/module"],

  supabase: {
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: ["/"],
    },

    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: "lax",
      secure: false,
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "~/assets/icons",
      },
    ],
  },

  css: ["~/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/styles/_colors.scss" as *;
            @use "~/assets/styles/_variables.scss" as *;
          `,
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      supabaseUrl: "",
      supabaseAnonKey: "",
    },
  },
});
