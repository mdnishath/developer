/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0A192F",
        "dark-secondery": "#112240",
        "dark-third": "#8f9199",
        "dark-text-2": "#d5cfcf",
        "dark-text": "#EBF0FE",
        primary: "#64ffda",
        secondery:"#a5aece"
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
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
