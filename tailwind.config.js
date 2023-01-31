/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        blueMain: '#0084ff',
        blueSec : '#0084ff',
        whiteSnow: '#fff9f9',
        blackTrans:'rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
