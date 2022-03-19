module.exports = {
  plugins: [require("./merged-prettier-plugin.js")],
  importOrder: ["^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
};
