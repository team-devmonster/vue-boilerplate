import baseConfig from '@bynd/tailwind.preset'
import path from 'path'

export default {
  presets: [baseConfig],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}