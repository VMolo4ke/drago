import { createPinia, setActivePinia, type StateTree } from "pinia";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();

  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);

  if (import.meta.server) {
    nuxtApp.hooks.hook("app:rendered", () => {
      if (pinia && pinia.state) {
        nuxtApp.payload.pinia = pinia.state.value as Record<string, StateTree>;
      }
    });
  } else if (nuxtApp.payload && nuxtApp.payload.pinia) {
    pinia.state.value = nuxtApp.payload.pinia as Record<string, StateTree>;
  }
});
