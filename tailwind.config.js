// eslint-disable-next-line @typescript-eslint/no-var-requires
const DESIGN_TOKENS = require("./src/theme/designTokens");

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
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
    },
  },
  darkMode: "class",
  plugins: [],
};
