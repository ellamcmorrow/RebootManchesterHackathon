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
          DEFAULT: "#f5f5f5", // Background gray
          dark: "#333333", // Text gray
        },
      },
    },
  },
  plugins: [],
};
