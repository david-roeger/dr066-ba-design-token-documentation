const theme = require('dr066-ba-design-token-builder/tailwindTheme');
theme.extend.animation = {
  'pulse-fast': 'pulse 0.5s linear infinite',
}
console.log(theme);

module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...theme
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
