/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bottom-nav": "#0F2323",
        "bottom-nav-active": "#38383880",
        primary: "#36A546",

        "card-bg": "#000E09",
      },
    },
  },
  plugins: [],
};
