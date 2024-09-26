/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "black",
        "secondary": "#f97316",
        "tertiary": "#54d6bb",
        "text": "white",
        // Colors for light mode
        "primary-light": "white",
        "tertiary-light": "#333333",
        "text-light": "black",
      },
    },
    screens: {
      'lg': { 'max': '3023px' },
      'sm': { 'max': '1070px' },
      'ssm': { 'max': '500px' },
    }
  },
  plugins: [],
}
