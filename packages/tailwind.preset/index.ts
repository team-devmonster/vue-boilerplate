import type { Config } from 'tailwindcss'
const primeui = require('tailwindcss-primeui')
const lineClamp = require('@tailwindcss/line-clamp')

const config: Partial<Config> = {
  plugins: [
    primeui,
    lineClamp,
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn .2s ease-in-out',
        slideinup: 'slide-in-up .2s ease-in-out',
        slideoutbottom: 'slide-out-bottom .20s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        'slide-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)',
          },
          '100%': {
            opacity: 100,
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'slide-out-bottom': {
          '0%': {
            opacity: 100,
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)',
          },
        },
      },
    },
  }
}

export default config
