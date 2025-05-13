import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ROOT',
      component: () => import('@bynd/ui/previews/MainView.vue'),
    },
  ],
})

export default router
