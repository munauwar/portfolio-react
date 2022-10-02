/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'dark-red': '#330a00',
      },
      textColor: {
        'dark-red': '#330a00',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
