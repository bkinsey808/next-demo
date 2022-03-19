module.exports = {
  plugins: ["@typescript-eslint", "sonarjs", "redundant-undefined", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-explicit-any": ["error"],
    "redundant-undefined/redundant-undefined": "error",
    curly: "error",
    eqeqeq: ["error", "always"],
    "no-duplicate-imports": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-implicit-globals": "error",
    "no-invalid-this": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-new": "error",
    "no-promise-executor-return": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-unreachable-loop": "error",
    "no-unused-expressions": "error",
    yoda: "error",
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        // our js config files need to use require
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  env: {
    jest: true,
  },
};
