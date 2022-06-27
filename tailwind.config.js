/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/**/*.tsx`
  ],
  theme: {
    screens: {
      'max': '1500px',
      'ultra': '2000px'
    },
    extend: {
      colors: {
        gray: {
          900: '#0A0A0A',
          800: '#1C1C1C',
          100: '#DBDBDB',
          200: '#D5D5D5',
          300: '#E7E7E7'
        },
        blue: {
          400: '#2B7FFF'
        }
      },
      backgroundImage:{
        lines: 'url(/src/assets/lines-top.png)',
        contact: 'url(/src/assets/lines-contact.png)',
        blur: 'url(/src/assets/blur.png)'
      },
    },
  },
  plugins: [],
}
