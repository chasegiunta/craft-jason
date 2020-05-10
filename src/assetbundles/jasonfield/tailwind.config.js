// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    boxShadow: theme => ({
      outline: `inset 0 0 1px 1px ${theme('colors.blue.600')}`,
    }),
    extend: {
      spacing: {},
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'important'],
    fontSize: ['responsive', 'important'],
    padding: ['responsive', 'important'],
    margin: ['responsive', 'important'],
  },
  plugins: [require('tailwindcss-important')()],
  purge: [
    './../../templates/**/*.html',
    './../../templates/**/*.twig',
    './src/**/*.vue',
  ],
}
