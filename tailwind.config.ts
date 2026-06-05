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
        background: "#090909",
        card: "#111111",
        border: "#1F1F1F",

        primary: "#00BFFF",
        secondary: "#D9D9D9",

        muted: "#8A8A8A",
        white: "#FFFFFF"
      },

      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },

      maxWidth: {
        container: "1400px"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },

      boxShadow: {
        glow: "0 0 40px rgba(0,191,255,0.25)"
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        }
      },

      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },

  plugins: []
};

export default config;
