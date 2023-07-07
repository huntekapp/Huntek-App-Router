/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: "#046255",
        sec: "#ffffff",
        lig: "#ffffff20",
        "pri-800": "#207368",
        "pri-700": "#3c857b",
        "pri-600": "#58968e",
        "pri-500": "#74a8a1",
        "pri-400": "#8fb9b3",
        "pri-300": "#abcbc6",
        "pri-200": "#c7dcd9",
        "pri-100": "#e3eeec"
      },
      backgroundImage: {
        HKanimate: "url('/huntek/logo-text-animate/W(D).svg')",
        HKtext: "url('/huntek/logo-text/W(D).svg')",
        HKlogo: "url('/huntek/logo/W.svg')",
        HKGlogo: "url('/huntek/logo/G.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
