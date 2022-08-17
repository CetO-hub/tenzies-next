/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      karla: ['"karla"', "sans - serif"],
      inter: ['"inter"', "sans - serif"],
      noto: ["'Noto Sans JP'", "sans-serif"],
      dyna: ["'DynaPuff'", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
