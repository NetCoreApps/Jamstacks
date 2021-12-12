const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{vue,md,ts,html}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // https://github.com/tailwindlabs/tailwindcss-typography
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: null,
            code: null,
            'code::before': null,
            'code::after': null,
            'pre code': null,
            'pre code::before': null,
            'pre code::after': null
          },
        },
      }),      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
