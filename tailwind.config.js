/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        5: '5px',
        2: '2px',
      },
      backgroundPosition: {
        'heromobile': "center 15%",
        'herodesktop': "center 50%",
      },
      fontFamily: {
        'jost': 'Jost, sans-serif',
      },
      colors: {
        primary: {
          100: '#E7816B',
          200: '#1D1C1E',
          300: '#FFFFFF',
        },
        secondary: {
          100: '#FFAD9B',
          200: '#333136',
          300: '#F1F3F5',
        },
      }
    },
  },
  plugins: [],
}

