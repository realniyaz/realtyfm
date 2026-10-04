import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#b89246",
          goldLight: "#d4ab47",
          goldDark: "#865f27",
          dark: "#0c0d0e",
          charcoal: "#14171a",
          card: "#191c20",
        },
      },
    },
  },
  plugins: [],
};

export default config;