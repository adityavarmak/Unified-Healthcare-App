/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",   // blue
        secondary: "#0F172A", // dark
      },
    },
  },
  plugins: [],
}
