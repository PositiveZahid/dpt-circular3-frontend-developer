/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#457AEE",
        secondaryColor: "#312E81",
      },
    },
  },
  plugins: [],
};
