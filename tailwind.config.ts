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
      colors: {
        'ocean':'#060831',
        'ocean-lite':'#615f8e',
        'michael': '#908b71',
        'michael-white': '#fff4d6',
        'michael-red-500':'#a14c5e',
        'michael-green':'#4CA199',
        'michael-green-500':'#26514d'
      },
      fontSize: {
        'responsive-heading':'clamp(20px, 8vw, 60px)'
      }
    },
  },
  plugins: [],
};
export default config;
