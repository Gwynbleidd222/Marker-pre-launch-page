/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      colors: {
        lightBlue: 'hsl(179, 80%, 58%)',
        darkBlue: 'hsl(206, 84%, 22%)',
        gray: 'hsl(225, 14%, 53%)',
        black: 'hsl(230, 60%, 8%)',
        red: 'hsl(343, 100%, 58%)'
      }
    },
  },
  plugins: [],
}

