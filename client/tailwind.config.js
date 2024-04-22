/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        muli: ["Mulish", "sans-serif"],
        rubik: ["Rubik", "serif"],
      },
      colors: {
        primary: "linear-gradient(90deg,#3956de 0,#657be5)",
        secondary: "#3956DE", // Exampl primary color
        heading: "#343A40",
        subheading: "#9B9BAE", // Example secondary color
        lightg: "#8A8AA0",
      },
    },
    plugins: [],
  },
};
