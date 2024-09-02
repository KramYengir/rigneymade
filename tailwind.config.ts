import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rm-blue": {
          "50": "#ecfffe",
          "100": "#cffefe",
          "200": "#a4fcfd",
          "300": "#66f6fa",
          "400": "#20e6f0",
          "500": "#04c8d4",
          "600": "#06a1b4",
          "700": "#0d8191",
          "800": "#146776",
          "900": "#155564",
          "950": "#073845",
        },
      },
    },
  },
  plugins: [],
};
export default config;
