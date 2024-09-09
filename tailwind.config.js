/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Inter, sans-serif",
        archivo: "Archivo, sans-serif",
      },
      colors: {
        white: "#ffffff",
        whiteSecond: "rgba(255, 255, 255, 0.50)",
        darkPurple: "#000319",
        purpleOne: "#0C0E23",
        primeNav: "#C1C2D3",

      },
    },
  },
  plugins: [],
};
