import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => ({
    collapsed: false,
  }),
  actions: {},
  persist: true,
})
