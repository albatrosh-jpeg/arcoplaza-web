/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
          fontFamily: {

            sans: ['var(--font-body)'],

            editorial: ['var(--font-heading)'],

            swiss: ['var(--font-body)'],

          },

        colors: {

          corporate: {
            DEFAULT: "#18375D",
            soft: "#2f4b6b",
          },

          corporateGreen: {
            DEFAULT: "#367e45",
            dark: "#2c5c3c",
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
            secondary: "#556274",
            muted: "#7C8795",
          }

        },    
      },
  },

  plugins: [],
}
