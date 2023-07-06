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
