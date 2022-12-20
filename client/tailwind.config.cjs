/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [ 
       "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        "default": ["Roboto", "sans-serif"],
        "display": ["Roboto Slab", "sans-serif"],
        "body": ["Roboto Mono", "sans-serif"],
      },
      colors:{
        "primary-black":'#151619',
        "secondary-black":'#1d1f22',
        "tertiary-black":'#1d1f22',
        "secondary-black":'#1d1f22',
        "primary-gray":'#5a6069',
        "secondary-gray":'#7c8187',
        "tertiary-gray":'#c1c4cb',
        "quaternary-gray":'#e4e4e4',
        "primary-white":"#f5f5f5",
        "secondary-white":"#ffffff",
        "primary-orange":"#e46643",
        "secondary-orange":"#f39765"
  
      }
    },
    
  },
  plugins: [],
}
