/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'headings': '#000',
        'light-blue': '#9CA3AF',
        'price': '#22C55E',
      },
    },
  },
  plugins: [],
}

