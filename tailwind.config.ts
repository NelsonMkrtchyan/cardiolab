import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  // content: ["./src/**/*.tsx"],// Template config
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      backgroundImage: {
        "custom-linear": "linear-gradient(90deg, #1034A6, #69ba31)", // Example linear gradient
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",

        black: "#121723", // Template color
        dark: "#1D2430", // Template color

        // primary: "#4A6CF7", // Template color
        // bgColor: "#FFFFFF", // Template color

        primary: "#1034A6",
        lime: "#69ba31",

        bgColor: "#e1e1e1",
        bgColorDark: "#333333",
        bgColorDarker: "#262626",

        "bg-color-dark": "#171C28", // Template color

        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },

        stroke: {
          stroke: "#E3E8EF",
          dark: "#353943",
        },

        gray: {
          // dark: "#1E232E", // Template color
          // light: "#F0F2F9", // Template color
          dark: "#323232",
          Spanish: "#989898",
          light: "#D3D3D3",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
