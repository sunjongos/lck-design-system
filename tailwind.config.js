/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          navy: '#0A192F',
          cyan: '#00E5FF',
          gold: '#D4AF37',
          gray: '#8892B0',
          dark: '#020C1B',
          green: '#92C118',
          blue: '#0087B6',
          orange: '#F29D00'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
