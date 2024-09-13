/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        white: '#ffffff',
        whiteSecond: 'rgba(255, 255, 255, 0.50)',
        darkPurple: '#000319',
        purpleOne: '#0C0E23',
        primeNav: '#C1C2D3',
        medsos: 'rgba(255, 255, 255, 0.01)',
      },
      backgroundImage: {
        strokeMedsos:
          'linear-gradient(180deg, rgba(255, 255, 255, .100) 0%, rgba(255, 255, 255, 0.0) 100%)',
        gradientNav: 'linear-gradient(103deg, #04071D 16.66%, #0C0E23 81.61%)',
        gradientPurple:
          'radial-gradient(127.11% 127.11% at 50.03% -4.65%, rgba(1, 2, 20, 0.90) 39.07%, #542BC8 71.97%, #F0EAFF 100%)',
      },
      transitionTimingFunction: {
        'in-expo': "cubic-bezier(0.6, 0.6, 0, 1)",
        'out-expo': "cubic-bezier(0.6, 0.6, 0, 1)",
      },
      animation: {
        spinSlow: 'spin 100s linear infinite',
      }
    },
  },
  plugins: [],
};
