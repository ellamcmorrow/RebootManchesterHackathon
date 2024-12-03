/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#0f5c2c", // Lloyd's-inspired green
        gray: {
          DEFAULT: "#000000", // Background gray
          dark: "#333333", // Text gray
        },
      },
    },
  },
  plugins: [],
};
