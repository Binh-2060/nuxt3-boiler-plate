import { defineStore } from "pinia";

export const mainStore = defineStore("mainStore", {
  state: () => ({
    count: 0,
  }),

  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(mainStore, import.meta.hot));
}
