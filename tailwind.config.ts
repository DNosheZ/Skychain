import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita el modo oscuro con clases
  safelist: ["dark"], // Asegura que la clase 'dark' se mantenga en la compilación
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        blue1_1:"var(--blue1_1)",
        blue1_2:"var(--blue1_2)",
        blue1_3:"var(--blue1_3)",
        blue1_m1:"var(--blue1_-1)",
        blue1_m2:"var(--blue1_-2)",
        blue1_m3:"var(--blue1_-3)",

        blue2_1:"var(--blue2_1)",
        blue2_2:"var(--blue2_2)",
        blue2_3:"var(--blue2_3)",
        blue2_m1:"var(--blue2_-1)",
        blue2_m2:"var(--blue2_-2)",
        blue2_m3:"var(--blue2_-3)",

        blue3_1:"var(--blue3_1)",
        blue3_2:"var(--blue3_2)",
        blue3_3:"var(--blue3_3)",
        blue3_m1:"var(--blue3_-1)",
        blue3_m2:"var(--blue3_-2)",
        blue3_m3:"var(--blue3_-3)",

        orange_1:"var(--orange_1)",
        orange_2:"var(--orange_2)",
        orange_3:"var(--orange_3)",
        orange_m1:"var(--orange_-1)",
        orange_m2:"var(--orange_-2)",
        orange_m3:"var(--orange_-3)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
