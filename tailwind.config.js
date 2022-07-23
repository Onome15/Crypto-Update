/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
      },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#0D1318",
      primary: "#E6E7E7",
      secondary: "#ABAABA",
      active: "#7dd3fc",
      light: "#283B47",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
