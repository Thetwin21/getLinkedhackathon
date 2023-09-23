/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#D434FE',
      'gpink': '#903AFF',
      'gblue': '#FE34B9',
      'blight': '#470985',
      'bg': '#160d29',
    },
    extend: {
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(270deg ,${theme('colors.gpink')}, ${theme('colors.gblue')})`,
        'gradient-circle': `linear-gradient(to left, ${theme('colors.pink')}, ${theme('colors.gpink')})`,
      }),
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blink: {
            'from': {opacity: 0.2},
            'to': {opacity: 1}
        },
        noding: {
          '0%, 100%': { transform: 'rotate(-15deg)'},
          '50%': { transform: 'rotate(15deg)'},
        },
        writing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        caret: {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "#D434FE" },
        },
      },
      animation: {
        'rotating' : 'rotate 10s linear infinite',
        'blinking' : 'blink 2s linear infinite',
        'noding': 'noding 2s linear infinite',
        'writing': 'writing 4.5s steps(40, end) infinite, caret 0.75s step-end infinite',
      }
    },
  },
  plugins: [],
}


