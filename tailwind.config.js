/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crayolaGreen: "#1CAC78",
        darkCrayolaGreen: "#199a6c",
        lightCrayolaGreen: "#32b485",
        Gold: "#bf9b30",
        Silver: "#a7a7a7",
        DarkGrey: "#222222",
      },
    },
  },
  plugins: [],
};
