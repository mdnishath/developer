/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#0a192f",
        "bg-light": "#F5F7F9",
        primary: "#64FFDA",
        secondery: "#112240",
      },
      maxWidth: {
        container: "1280px",
      },
      gridTemplateColumns: {
        navbar: "1fr 3fr 1fr",
      },
      boxShadow: {
        btn: "0px 2px 20px -1px rgba(0,176,255,0.50)",
        btn2: "0px 2px 10px -1px rgba(0,0,0,0.30)",
        all: "0px 0px 70px -2px rgba(0,0,0,0.20)",
        btn3: "0px 2px 10px -1px rgba(0,176,255,0.30)",
      },
    },
    fontFamily: {
      work: ["Work Sans", "system-ui"],
    },
  },
  plugins: [],
};
