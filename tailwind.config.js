const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        rubik: ["var(--font-rubik)"],
        federo: ["var(--font-federo)"],
        public: ["var(--font-public)"],
      },
      colors: {
        primary: "#4169E1",
        secondary: "#000000",
        textsecondary: "#616162",
        heading: "#1f1f1f",
        subheading: "#9e9e9e",
        grey: "#5A5A5A",
        background: "#FFFFFF",
        lightwhite: "#F5F5F5",
        liteblack: "4D4D4D",
        lightGray: "#AFAFAF",
        watermark: "#EBEBEB",
        bghover: "#19181D",
        bordercolor: "#DBE0E5",
        litesky: "#cdddff",
      },
      screens: {"2xl": "1636px"},
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({addBase, theme}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
