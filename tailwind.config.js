/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        itim: "Itim-Regular, sans-serif",
        montserrat: "Montserrat-Regular, sans-serif",
      },
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        content: "hsl(var(--color-text) / <alpha-value>)",
        bg: "hsl(var(--color-bkg) / <alpha-value>)",
        bgLight: "hsl(var(--color-accentLight) / <alpha-value>)",
        textLight: "var(--color-textLight)",
        red: "#FF5A5A",
        dark: {
          1: "hsl(240, 5%, 13%)",
        },
        light: {
          1: "hsl(0, 14%, 93%)/60",
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
