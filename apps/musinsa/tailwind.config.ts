import type { Config } from 'tailwindcss'
import preset from '@bynd/tailwind.preset'

const config: Config = {
  presets: [preset],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
    '../../packages/ui/src/**/.{vue,js,ts}',
    '../../packages/buildcenter/src/**/.{vue,js,ts}',
  ],
  theme: { extend: {} },
  plugins: []
}

export default config
