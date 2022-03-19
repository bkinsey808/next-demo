module.exports = {
  plugins: [
    require("./merged-prettier-plugin.js"),
    // require("@trivago/prettier-plugin-sort-imports"),
    // require("prettier-plugin-tailwindcss"),
  ],
  importOrder: ["^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
};
