import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-grey": "#f8f8f8",
        "sec-black": "#333",
        "bg-white": "#fff",
        tomato: "#eb3223",
        mid: "#b8b8b8",
      },
      spacing: {},
      fontFamily: {
        jost: "Jost",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      xl: "20px",
      inherit: "inherit",
    }, 
  },
  plugins: [],
};
export default config;
