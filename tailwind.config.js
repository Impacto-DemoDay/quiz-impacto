/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'orange': "#D37116",
        'dark-blue': "#001858",
        'white': "#ffffff"
      },
      fontFamily: {
        'montserrat': ["Montserrat", "sans-serif"]
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.10)',
        'md': '2px 2px 5px rgba(0, 0, 0, 0.15)',
        'lg': '3px 3px 8px rgba(0, 0, 0, 0.20)',
        'xl': '4px 4px 10px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  variants: {
    extend: {
      textShadow: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.10)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 8px rgba(0, 0, 0, 0.20)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 10px rgba(0, 0, 0, 0.25)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}