/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        brandBg: "#fcf5eb",
        brandText: "#2e2d2b",
        brandBrown: "#885f45",
        brandGreen: "#638256",
      },
       fontFamily: {
        title: ["Montserrat", "sans-serif"], // Titles
        body: ["Axiforma", "sans-serif"],    // Body text
        ad: ["Just Lovely", "cursive"],      // Publicidad
    },
  },
},
  plugins: [],
};

