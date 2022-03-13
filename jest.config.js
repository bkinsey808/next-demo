module.exports = {
  // Tells Jest that we want to collect via a glob pattern
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    // exclude storybook stories from coverage
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  /* We're using this to "stub out" importing CSS and images, 
     since they are a little special with Next.JS */

  moduleNameMapper: {
    /** handle absolute path alias */
    "^@/(.+)": "<rootDir>/src/$1",

    /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/test/__mocks__/styleMock.js",

    /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/test/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/test/", // ignore playwright tests
  ],
  // Set's the jest environment to jsdom which is a browser-like environment.
  testEnvironment: "jsdom",
  // Transform source files through babel before running the tests.
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  // Ignore transforming files that match this pattern.
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
