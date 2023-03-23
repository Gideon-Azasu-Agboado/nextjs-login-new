const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      raleway: ["var(--raleway-font)", ...fontFamily.sans],
      pacifico: ["var(--pacifico-font)", 'ui-serif', 'Georgia'],
    },
    extend: {},
  },
  plugins: [],
}
