import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F4F3F3",
        primary: "#FF5A36",
        secondary: "#306CBD",
      },
    },
  },
  plugins: [],
};

export default config;

