module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "string-quotes": "double",
    "declaration-colon-newline-after": null, // not compatible with prettier
    "value-list-comma-newline-after": null, // not compatible with prettier
  },
};
