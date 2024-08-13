/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Dom : "#edf5ce",
        Comp: "#324a5e",
        Acc: "#546c12",
      },
    

    fontFamily: {
      pop: ["Poppins"],
    },

    },
  },

  plugins: [],
}
