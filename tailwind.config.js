const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source)', ...fontFamily.sans],
      },
      boxShadow: {
        menu: "0 0 10px rgb(0 0 0 / 15%)",
        small: "0 2px 8px rgb(0 0 0 / 25%)",
        medium: "0 10px 20px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 25%)",
        hover: "0 4px 4px rgb(0 0 0 / 15%)"
      },
      colors: {
        red: "#bd0032",
        txt: "#1f1d21"
      },
      spacing: {
        hero: "calc(50% - 1.5rem)"
      },
    },
  },
  plugins: [],
}
