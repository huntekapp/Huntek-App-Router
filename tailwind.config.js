/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{svg}'
  ],
  theme: {
    extend: {
      colors: {
        pri: "#046255",
        sec: "#ffffff",
        lig: "#063532",
      },
    },
  },
  plugins: [require("daisyui")],
}
