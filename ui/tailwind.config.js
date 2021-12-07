const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit', // in preview: https://tailwindcss.com/docs/just-in-time-mode
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.{vue,md,ts,html}",
    ]
  },
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
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
