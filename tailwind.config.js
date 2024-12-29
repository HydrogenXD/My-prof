/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          darkBlue:"#0036be",
          yellow: '#ffd300',
          darkYellow:"#e78404",
          darkMagenta:"#a54fab",
          pink: '#ff00ff',
        },
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00f3ff, 0 0 82px #00f3ff, 0 0 92px #00f3ff, 0 0 102px #00f3ff, 0 0 151px #00f3ff'
          },
          '50%': { 
            textShadow: '0 0 4px #fff, 0 0 7px #fff, 0 0 18px #fff, 0 0 38px #00f3ff, 0 0 73px #00f3ff, 0 0 80px #00f3ff, 0 0 94px #00f3ff, 0 0 140px #00f3ff'
          },
        },
      },
    },
  },
  plugins: [],
};