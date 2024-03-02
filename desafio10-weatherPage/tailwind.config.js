/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "weathear-clean": "#8E87FA",
        "card-weatherClean": "#6D67D0",
        "min-temperature": "#C2BFF4",
        "min-cards": "rgba(102, 96, 200, 0.60)",
        "white-50": "#DAD8F7",
        "white-gray": "#E7E6FB",
        "white-blue": "#C2BFF4",
        "dark-blue": "#080A2F",
      },
      fontSize:{
        "xl": "88px"
      },
      boxShadow:{
        "bxshadow": "0 25px 45px rgba(0, 0, 0, .2)"
      }
    },
  },
  plugins: [],
}

