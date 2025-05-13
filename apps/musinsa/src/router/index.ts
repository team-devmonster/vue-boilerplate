export const routes = [
  {
    path: '/',
    name: 'ROOT',
    component: () => import('@app/layouts/DefaultLayout.vue'),
    redirect: { name: 'Main' },
    children: [{
      path: '/main',
      name: 'Main',
      component: () => import('@app/pages/main/MainView.vue'),
    }]
  }
]