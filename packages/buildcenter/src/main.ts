import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { ko } from 'primelocale/js/ko.js'

import '@fortawesome/fontawesome-free/js/all.js'
import './assets/css/base.css'

import App from './App.vue'
import { router } from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const PEPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
      950: '{purple.950}',
    },
  },
})

app.use(PrimeVue, {
  locale: ko,

  theme: {
    preset: PEPreset,
  },
  // unstyled: true,
})

app.use(pinia)
app.use(router)

app.mount('#app')
