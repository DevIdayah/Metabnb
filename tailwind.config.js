/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './index.html'],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        rr: ["Red Rose", "sans-serif"],
      },
      colors: {
        primary: "#A02279",
        secondary: "#434343",
        opaciity: "#a0227835",
        foot: "#1D1D1E",

      },
    },
  },
  plugins: [],
};
