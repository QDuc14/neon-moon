/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0B0F19',
        primary: '#3B0CA3',
        accent: '#6366F1',
        glow: '#fff',
        highlight: '#38BDF8',
        light: '#E0E7FF',
      }
    }
  },
  plugins: [],
}