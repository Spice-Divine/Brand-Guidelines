/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        'sdred': '#E62542',
        'black':'#161616'
      },
      fontFamily: {
        futura: ["futura", "open-sans"],
      },
    },
  },
  plugins: [],
}
