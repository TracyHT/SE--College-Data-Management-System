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
  },
  plugins: [],
}