import './commands'
import { mount } from 'cypress/vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'


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

const primevueConfig = {
  // locale: ko,

  theme: {
    preset: PEPreset,
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  return mount(component, {
    global: {
      plugins: [PrimeVue],
      provide: {
        $primevue: primevueConfig,
        ...(options.global?.provide || {}),
      },
      ...(options.global || {}),
    },
    ...options,
  })
})

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}
