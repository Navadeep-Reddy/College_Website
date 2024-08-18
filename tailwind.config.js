/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Dom : "#878eba",
        DomDark: '#6d76ab',
        Comp : "#f7f8ff",
        Accent: "#0d4ba0",
      },
    },
  },
  plugins: [],
}
