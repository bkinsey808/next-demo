const DESIGN_TOKENS = require("./src/theme/designTokens");

/** Convert color design tokens to tailwind colors. Don't need to manually iterate.
 *  Contrast with @see https://levelup.gitconnected.com/tailwindcss-with-css-variables-513abe2e9a5 */
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
  // for tw-elements
  // plugins: [require("tw-elements/dist/plugin")],
  theme: {
    extend: {
      colors,
    },
  },
  darkMode: "class",
};
