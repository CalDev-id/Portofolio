/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        body: '#1f1f1f',
        greenbase: '#007d0d',
        body2: '#262626',
        body3: '#303030',
        hitamNav: '#171717'
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
