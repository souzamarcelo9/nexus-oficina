/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Garanta que esta linha cobre a pasta components e sections
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          bg: '#0B0F12',
          card: '#131A20',
          green: '#39FF14',
          darkGreen: '#003B00'
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(57, 255, 20, 0.4)',
        'glow-intense': '0 0 25px rgba(57, 255, 20, 0.8)',
      }
    },
  },
  plugins: [],
}