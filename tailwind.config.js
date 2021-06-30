const theme = require("dr066-ba-design-token-builder/build/web/tailwindTheme");

theme.extend.animation = {
  "ping-slow": "ping 1s linear infinite",
};

module.exports = {
  mode: "jit",
  purge: {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...theme,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
