import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          3: "#F4F5F6",
          5: "#E9EBEC",
          10: "#DEE2E4",
          20: "#C9CED1",
          30: "#ADB5BA",
          40: "#929DA4",
          50: "#77848D",
          60: "#4D5A62",
          70: "#3D484F",
          80: "#2E363B",
          90: "#1F2427",
          100: "#121618",
          base: "#5C6C76",
        },
        primary: {
          3: "#F8FCFC",
          5: "#E3F2F1",
          10: "#CFEAE7",
          20: "#AEDBD7",
          30: "#86C9C3",
          40: "#5EB8B0",
          50: "#35A69C",
          60: "#0B7B71",
          70: "#09635B",
          80: "#074A44",
          90: "#04312D",
          100: "#031E1B",
          base: "#",
        },
        "chathams-blue": "#19647E",
        "eastern-blue": "#119DA4",
        "purple-haze": "#4B3F72",
        "saffron-mango": "#FFC857",
        "ebony-clay": "#1F2041",
        "teal": "#0D9488",
      },
    },
  },
  plugins: [],
} satisfies Config;
