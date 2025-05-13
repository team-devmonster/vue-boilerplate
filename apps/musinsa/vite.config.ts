import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
    vueJsx(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@app': fileURLToPath(new URL('./src', import.meta.url)),
      '@bynd/buildcenter': fileURLToPath(new URL('../../packages/buildcenter/src', import.meta.url)),
      '@bynd/ui': fileURLToPath(new URL('../../packages/ui/src', import.meta.url)),
      '@bynd/tailwind.preset': fileURLToPath(new URL('../../packages/tailwind.preset', import.meta.url)),
    },
  },
  server: {
    port: 39001,
  },
})
