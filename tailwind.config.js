/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        secondary : "#6C757D",
        primary : '#022081'
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      }
    },
    backgroundSize:{
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      "100% 100%": '100% 100%'
    }
  },
  plugins: [],
}