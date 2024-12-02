/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': ["Montserrat", "sans-serif"],
      },
      colors: {
        "dark-purple": "#5c2dd5",
        "purple": "#7945FF",
        "red": "#FD6687",
        "yellow": "#FFCE67",
      },
      boxShadow: {
        "inner": "inset 0px 10px 0px 0px #000",
        "innerMild":  "inset 0px 6px 0px 0px #333;",
        "purple-sh": "0px 10px 0px 0px #5C2DD5",
        "black-sh": "0px 10px 0px 0px #000",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}