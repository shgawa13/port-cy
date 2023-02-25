/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1536px" },
      lg: { max: "1023px" },
      tl: { max: "723px" },
      sm: { max: "640px" },
      xs: { max: "480px" },
    },
    extend: {
      backgroundImage: {
        back: "url('./src/assets/images/bg.jpg')",
        skills: "url('./src/assets/images/banner-bg.png')",
      },
    },
  },
  plugins: [],
};
