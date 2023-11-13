/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FF1168",
        secondary: "#341931",
        additional: "#111625",
        gradient: {
          start: "#EE0979",
          end: "#FF6A00",
        },
        custom: {
          darkBlue: "#115793",
          oceanBlue: "#00A1CB",
          skyBlue: "#0AABEBE",
          forestGreen: "#3A7634",
          limeGreen: "#5EB11C",
          gold: "#F2BC06",
          orange: "#F18D05",
          fieryRed: "#E54028",
        },
      },
      boxShadow: {
        footer: "0px -5px 12.5px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  variants: {},
  plugins: [],
};
