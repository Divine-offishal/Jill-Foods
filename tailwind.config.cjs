/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    textShadow: {
      'default': '3px 3px 6px rgb(120 53 15), 0 0 5px rgb(120 53 15)'
    },
    extend: {
      backgroundColor: {
        'primary': '#F7E7CE'
      },
      colors: {
        'primary': '#F7E7CE'
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
