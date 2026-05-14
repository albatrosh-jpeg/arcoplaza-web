/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        corporate: {
          DEFAULT: "#18375D",
        },

        corporateGreen: {
          DEFAULT: "#4F8A5B",
          dark: "#3F7A54",
          light: "#DCE8DE",
        },
      },
    },
  },

  plugins: [],
}