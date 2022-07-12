/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      colors:{
        //主题
        'theme':{
          "lighter": "var(--lighter)",
          "light": "var(--light)",
          "default": "var(--default)",
          "dark": "var(--dark)",
          "darker": "var(--darker)",
        }
      }
    },
  },
  plugins: [],
}
