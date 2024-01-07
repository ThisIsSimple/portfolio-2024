import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        coding: "JetbrainsMono",
      },
      colors: {
        todo: "#49FF00",
        comment: "#515151",
        let: "#F52984",
        "var-name": "#fff",
        string: "#9EDE73",
        json: "#E09872",
        error: "#",
      },
      aspectRatio: {
        card: "5 / 4",
      },
    },
  },
  plugins: [],
};
export default config;
