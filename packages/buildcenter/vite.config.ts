import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'


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
      '@bynd/buildcenter': fileURLToPath(new URL('./src', import.meta.url)),
      '@bynd/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@bynd/tailwind.preset': path.resolve(__dirname, '../../packages/tailwind.preset'),
    },
  },
  server: {
    port: 38002,
  },
})
