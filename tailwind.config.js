/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: "414px",
          sm: "500px",
          md: "768px",
          lg: "1024px",
          xl: "1728px",
          "2xl": "1496px",
        },
        center: true,
        padding: {
          DEFAULT: "9px",
          xl: "200px",
          "2xl": "140px",
        },
      },
    },
  },
  plugins: [],
};
