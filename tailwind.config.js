import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(badge|button|card|navbar|tabs|user|ripple|spinner|avatar).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}

