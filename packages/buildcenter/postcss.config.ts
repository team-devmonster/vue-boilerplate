const { join } = require('path')

export default {
  plugins: {
    '@tailwindcss/postcss':  {
      base: join(__dirname, '../../'),
    },
    autoprefixer: {},
  },
}
