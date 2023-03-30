/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
