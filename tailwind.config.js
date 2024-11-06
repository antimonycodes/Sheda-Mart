/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#302F2F",
        lightGrey: "#5B5853",
      },
    },
  },
  plugins: [],
};
