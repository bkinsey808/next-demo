const DESIGN_TOKENS = require("./src/theme/designTokens");

// convert color design tokens to tailwind colors
const colors = Object.keys(DESIGN_TOKENS)
  .filter((key) => key.startsWith("color"))
  .reduce(
    (obj, key) => ({
      ...obj,
      [key]: DESIGN_TOKENS[key],
    }),
    {}
  );

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    extend: {
      colors,
    },
  },
  darkMode: "class",
};
