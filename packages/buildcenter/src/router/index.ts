import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'


const baseRoutes = [
  {
    path: '/',
    name: 'ROOT',
    component: () => import('@bynd/buildcenter/layouts/DefaultLayout.vue'),
    redirect: { name: 'Main' },
    children: [
      {
        path: '/main',
        name: 'Main',
        component: () => import('@bynd/buildcenter/views/main/MainView.vue'),
      },
      {
        path: '/company',
        name: 'Company',
        redirect: { name: 'CompanyList' },
        children: [
          {
            path: '/company/list',
            name: 'CompanyList',
            component: () => import('@bynd/buildcenter/views/company/CompanyList.vue'),
            meta: {
              title: '회사 관리',
            },
          }, 
          {
            path: '/unity/digitalTwin',
            name: 'DigitalTwin',
            component: () => import('@bynd/buildcenter/views/unity/DigitalTwin.vue'),
          },
          {
            path: '/member',
            name: 'Member',
            redirect: { name: 'MemberList' },
            children: [
              {
                path: '/member/list',
                name: 'MemberList',
                component: () => import('@bynd/buildcenter/views/member/MemberList.vue'),
                meta: {
                  title: '멤버 관리',
                },
              },
            ],
          },
        ],         
      },
    ],
  },
]

export function mergeRoutes(base: RouteRecordRaw[], external: RouteRecordRaw[]): RouteRecordRaw[] {
  const routeMap = new Map<string, RouteRecordRaw>()

  for (const route of base) {
    const key = route.name?.toString() || route.path
    routeMap.set(key, { ...route })
  }

  for (const overrideRoute of external) {
    const key = overrideRoute.name?.toString() || overrideRoute.path
    const baseRoute = routeMap.get(key)

    if (!baseRoute) {
      routeMap.set(key, { ...overrideRoute })
    } else {
      const merged: RouteRecordRaw = {
        ...baseRoute,
        ...overrideRoute,
        meta: {
          ...(baseRoute.meta || {}),
          ...(overrideRoute.meta || {}),
        },
        children: mergeRoutes(baseRoute.children || [], overrideRoute.children || []),
      }

      routeMap.set(key, merged)
    }
  }

  return Array.from(routeMap.values())
}

export function createBaseRouter(external: RouteRecordRaw[]) {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: mergeRoutes(baseRoutes, external),
  })
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes,
})
