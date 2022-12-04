/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      "2xs": "280px",
      // => @media (min-width: 300px) { ... }
      xs: "480px",
      widgeBreah: "543px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#ffffff",
      grey: "#E0E0E0",
      error: "#f44336",
      blue: "#673ab7",
    },
    extend: {},
  },
  plugins: [],
};
