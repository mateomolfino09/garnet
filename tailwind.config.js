/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'white-rgba': 'rgba(255, 255, 255, 0.9)',
      'green-light': '#93C01F',
      'dark-light': '#1E1E1E'

    },
  },
  },
  plugins: [],
}