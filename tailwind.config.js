/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'top-center': 'top center',
        'bottom-center': 'bottom center',
      },
      fontFamily: {
        'fast-hand': ['Fasthand', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'primary': '#350a4e',
        'second': 'rgba(54, 19, 84, .6)',
        'firt': 'rgba(54, 19, 84, .8)',
        'middle': 'rgba(54, 19, 84, .9)',
        'end': 'rgba(54, 19, 84, .6)',
        'primary-color': '#fa9e1b',
        'primary-color-to': "#8d4fff",
        'bottom-color': 'linear-gradient(to right, #fa9e1b, #8d4fff)'
      },
      height: {
        'default-height-network': '35px',
      },
      keyframes: {
        'top': {
          '0%': { top: '35px', height: '150px' },
          '100%': { top: 0, height: '110px' },
        },
        'search': {
          '0%': { top: '3rem', opacity: 0 },
          '100%': { top: '1.75rem', opacity: 1 },
        },


      },
      animation: {
        'go-top': 'top 1s ease-out forwards',
        'show-search': 'search 0.5s ease-out forwards',
      }

    },
  },
  plugins: [],
}
