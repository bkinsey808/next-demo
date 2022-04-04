module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "string-quotes": "double",
    "declaration-colon-newline-after": null, // not compatible with prettier
    "value-list-comma-newline-after": null, // not compatible with prettier
    "custom-property-pattern": "^[a-z]+[A-Z0-9][a-z0-9]+[A-Za-z0-9]*$", // camelCase,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
        ],
      },
    ],
  },
};
