/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        dark : "#7e1d53",
        light :"#f7f93c"
      }
    },
  },
  plugins: [],
}

