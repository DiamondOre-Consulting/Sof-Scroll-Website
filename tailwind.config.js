/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        dark : "#3D5C26",
        light :"#F9F9F9"
      }
    },
  },
  plugins: [],
}

