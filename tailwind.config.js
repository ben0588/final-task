/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // maxWidth: {
      //   1296: "81rem",
      // },
      colors: {
        primary: "#0027D5",
      },
    },
  },
  plugins: [],
};
