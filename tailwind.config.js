/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html", "./docs/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#F9D423",
        secondary: "#00B6FF",
      },
      fontFamily: {
        display: ["'InterVariable'", "sans-serif"],
      },
    },
  },
  plugins: [],
}