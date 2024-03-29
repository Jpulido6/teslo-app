import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui()
  ],
}