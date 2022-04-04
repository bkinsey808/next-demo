const DESIGN_TOKENS = require("./src/theme/designTokens");

/** If true, tailwind will use css custom properties (unofficially known as css variables).
 *  This is easier for browser debugging and tracing,
 *  but breaks vscode tailwind extension showing the color in box next to the class in code editor. */
const USE_CSS_CUSTOM_PROPERTIES = true;

/** Convert design tokens to tailwind config. Don't need to manually iterate.
 *  @see https://levelup.gitconnected.com/tailwindcss-with-css-variables-513abe2e9a5 */
const filterDesignTokens = (prefix) =>
  Object.keys(DESIGN_TOKENS)
    .filter((key) => key.startsWith(prefix))
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: USE_CSS_CUSTOM_PROPERTIES
          ? // easier to debug and trace with css variables
            `var(--${key})`
          : // can see color square in code editor
            DESIGN_TOKENS[key],
      }),
      {}
    );

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: filterDesignTokens("color"),
      spacing: filterDesignTokens("spacing"),
    },
  },
  darkMode: "class",
};
