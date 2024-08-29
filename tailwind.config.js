/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crayolaGreen: "#1CAC78",
        darkCrayolaGreen: "#199a6c",
        lightCrayolaGreen: "#32b485",
        gold: "#bf9b30",
        silver: "#a7a7a7",
        darkGrey: "#222222",
        offWhite: " #fffff2",
      },
      fontFamily: {
        chalk: ["film-cryptic", "sans-serif"],
        chalkItalic: ["film-cryptic-italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
