// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/*/.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
    },
    fontFamily: {
      'ma-police': ['Montserrat'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
