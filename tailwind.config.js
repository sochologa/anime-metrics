/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: 'rgb(17 24 39)',
        'card-foreground': 'rgb(255 255 255)',
      },
    },
  },
  plugins: [],
}