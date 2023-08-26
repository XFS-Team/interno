/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      colors: {
        primary: "#CDA274",
        "dark-gray": "#292F36",
        slate: "#4D5053",
        "pale-cream": "#F4F0EC",
        white: "#FFFFFF",
      },
      boxShadow: {
        gray: "0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
        deep: "0px 10px 20px 0px rgba(31, 32, 34, 1)"
      },   
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1230px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "15px",
          paddingRight: "15px",
        },
      });
    },
  ],
}
