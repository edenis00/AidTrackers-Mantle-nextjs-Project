import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
  
      colors: {
        'spray': {
          50: '#ecfdff',
          100: '#cef8ff',
          200: '#a4f0fd',
          300: '#6ae3fb',
          400: '#1fcbf1',
          500: '#03aed7',
          600: '#0689b4',
          700: '#0c6e92',
          800: '#145a76',
          900: '#154a64',
          950: '#073045',
        },
        
        'chestnut': {
          50: '#fcf5f4',
          100: '#fae8e6',
          200: '#f6d5d2',
          300: '#efb7b2',
          400: '#e48d85',
          500: '#d6675d',
          600: '#c4544a',
          700: '#a23c33',
          800: '#86352e',
          900: '#70322c',
          950: '#3c1613',
        },
    },
    }
  },
  plugins: [],
};
export default config;
