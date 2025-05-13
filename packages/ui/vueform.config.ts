import ko from '@vueform/vueform/locales/ko'
import tailwind from '@vueform/vueform/dist/tailwind'
import { defineConfig } from '@vueform/vueform'

export default defineConfig({
  theme: tailwind,
  locales: { ko },
  locale: 'ko',
})
