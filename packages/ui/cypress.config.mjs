import { defineConfig } from 'cypress'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: {
        plugins: [
          vue(),
          Components({
            resolvers: [PrimeVueResolver()],
          }),
          vueJsx(),
          vueDevTools(),
        ],
      },
    },
    specPattern: 'src/**/*.cy.{js,ts,jsx,tsx}',
  },
})
