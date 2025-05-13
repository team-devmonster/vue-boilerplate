import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


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
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/build/index.ts'),
  //     name: 'UI',
  //     fileName: () => 'index.js',
  //     formats: ['es']
  //   },
  //   rollupOptions: {
  //     external: ['vue'],
  //     output: {
  //       globals: {
  //         vue: 'Vue'
  //       }
  //     }
  //   },
  //   emptyOutDir: true,
  //   outDir: 'dist',
  // },
  resolve: {
    alias: {
      '@bynd/ui': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 38088,
  },
})
