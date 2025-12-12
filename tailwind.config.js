/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pan-african-red': '#E31C23',
        'pan-african-yellow': '#FCD116',
        'pan-african-green': '#00853F',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
