/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      buttons: {
        primary: {
          DEFAULT: "rgb(59 130 246)",
          hover: "rgb(29 78 216)",
          disable: "rgb(107 114 128)",
        },
      },
      white: {
        DEFAULT: "rgb(255 255 255)",
      },
    },
    extend: {},
  },
  plugins: [],
};
