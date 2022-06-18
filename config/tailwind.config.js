/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./app/**/*.{js,ts,jsx,tsx}'],
   theme: {
      fontFamily: {
         body: ['Manrope', 'sans-serif'],
         title: ['Quicksand', 'sans-serif'],
      },
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         black: {
            DEFAULT: 'rgb(24,2,12)',
         },
         white: {
            50: 'rgb(255,255,255)',
            DEFAULT: 'rgb(251,245,243)',
         },
         blue: {
            300: 'rgb(81, 101, 245)',
            DEFAULT: 'rgb(15,96,155)',
            700: 'rgb(0,62,107)',
         },
         yellow: {
            300: 'rgb(255, 251, 133)',
            DEFAULT: 'rgb(255, 249, 79)',
            700: 'rgb(255, 248, 31)',
         },
      },
      extend: {
         spacing: {
            maxwidth: '1440px',
         },
      },
   },
   plugins: [],
}
