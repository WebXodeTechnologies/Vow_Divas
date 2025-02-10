import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        black: "#000",
        white: "#FFF",
        primary: "#D4AF37", // Gold for a premium feel
        secondary: "#A17A4D", // Elegant brown-gold
        accent: "#F8E1B4", // Soft golden tone
        muted: "#E5E5E5",
        background: "#FCFCFC",
        foreground: "#333",
        border: "#D3D3D3",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        didact: ["Didact Gothic", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
        full: "9999px",
      },
      spacing: {
        section: "4rem", // Standard section spacing
        container: "2rem",
      },
      boxShadow: {
        default: "0 4px 6px rgba(0, 0, 0, 0.1)",
        soft: "0px 2px 10px rgba(0, 0, 0, 0.08)",
        strong: "0px 4px 15px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
      },
    },
  },
};

export default config;
