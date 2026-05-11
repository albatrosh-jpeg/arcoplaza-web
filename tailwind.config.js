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
          DEFAULT: "#18375D", // azul corporativo
        },
      },
    },
  },

  plugins: [],
}