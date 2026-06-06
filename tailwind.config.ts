import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        graphite: "#151515",
        steel: "#242424",
        blood: "#c1121f",
        bone: "#f6f3ee"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-oswald)", "Arial Narrow", "Arial", "sans-serif"]
      },
      boxShadow: {
        redline: "0 0 0 1px rgba(193, 18, 31, 0.28), 0 24px 80px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "radial-red": "radial-gradient(circle at 50% 0%, rgba(193, 18, 31, 0.24), transparent 36%)"
      }
    }
  },
  plugins: []
};

export default config;
