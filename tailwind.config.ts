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
        "rm-primary": {
          //   "50": "#ecfffe",
          //   "100": "#cffefe",
          //   "200": "#a4fcfd",
          //   "300": "#66f6fa",
          //   "400": "#20e6f0",
          //   "500": "#04c8d4",
          //   "600": "#06a1b4",
          //   "700": "#0d8191",
          //   "800": "#146776",
          //   "900": "#155564",
          //   "950": "#073845",
          // },
          // lima:
          // {
          //   "50": "#fff0f0",
          //   "100": "#ffdddd",
          //   "200": "#ffc0c0",
          //   "300": "#ff9494",
          //   "400": "#ff5757",
          //   "500": "#ff2323",
          //   "600": "#ff0000",
          //   "700": "#d70000",
          //   "800": "#b10303",
          //   "900": "#920a0a",
          //   "950": "#500000",
          // },

          "50": "#eaffff",
          "100": "#cbfeff",
          "200": "#9efaff",
          "300": "#5bf3ff",
          "400": "#00e1ff",
          "500": "#00c5e5",
          "600": "#009dc0",
          "700": "#037c9b",
          "800": "#0d647d",
          "900": "#105269",
          "950": "#033649",
        },
      },
    },
  },
  plugins: [],
};
export default config;
