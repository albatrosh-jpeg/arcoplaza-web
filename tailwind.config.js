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
            soft: "#28496F",
          },

          corporateGreen: {
            DEFAULT: "#4F8A5B",
            dark: "#3F7A54",
            light: "#DCE8DE",
            soft: "#F3F6EE",
          },

          surface: {
            primary: "#F8F6F1",
            secondary: "#FCFBF8",
            elevated: "#FFFFFF",
          },

          border: {
            soft: "#ECE7DD",
            DEFAULT: "#D7D0C4",
          },

          text: {
            primary: "#18375D",
            secondary: "#5F6B7A",
            muted: "#7C8795",
          }

        },    
      },
  },

  plugins: [],
}