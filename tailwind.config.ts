import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "#DFC57B",           
        secondaryColor:"#1A1A1A",
        headingLight: "#ffffff",       
        textMuted: "rgba(255, 255, 255, 0.8)"
      },
      fontFamily: {
  cairo: ['var(--font-cairo)', 'sans-serif'],
},
    },
    boxShadow: {
        'white-soft': '0 0 20px 20px rgba(255, 255, 255, 0.05)',
      },
  },
  plugins: [ 
],
};
export default config;
