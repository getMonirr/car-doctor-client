/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "cd-primary": '#FF3811',
        "cd-d1": '#151515',
        "cd-d2": '#444444',
        "cd-d3": '#737373',
        "cd-d4": '#A2A2A2',
        "cd-d5": '#D0D0D0',
        "cd-d6": '#E8E8E8',
        "cd-d7": '#F3F3F3',
        "cd-white": '#FFFFFF',
      },
      fontFamily: {
        "cd-inter": 'Inter'
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}

