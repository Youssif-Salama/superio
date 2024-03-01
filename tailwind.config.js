/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "bg-slider4": "url('/assets/images/bg-slider4.jpg')"
      },
      colors: {
        'blue-custom': '#2a6fdb',
        'blue-custom-2': '#122c91',
        'cyan-custom-1': "#48d6d2",
        'cyan-custom-2': "#81e9e6",
        'yellow-custom': "#fefcbf",
      },
      width: {
        "95": "95%"
      }
    },
  },
  plugins: [],
};
