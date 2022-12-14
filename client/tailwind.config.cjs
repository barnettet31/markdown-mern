/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
       "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        "default": ["Roboto", "sans-serif"],
        "display": ["Roboto Slab", "sans-serif"],
        "body": ["Roboto Mono", "sans-serif"],
      }
    },
  },
  plugins: [],
}
