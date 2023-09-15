/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px', // Set the max-width for the xl breakpoint to 1200px
        },
      },
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
        "light-gray" : "#F6F6F6"
      },
      boxShadow: {
        gray: "0px 10px 20px 0px rgba(192, 192, 192, 0.35)",
        deep: "0px 10px 20px 0px rgba(31, 32, 34, 1)",
      },
    },
  },
};
