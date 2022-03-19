const StylelintPlugin = require("stylelint-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  productionBrowserSourceMaps: process.env.GENERATE_SOURCEMAP === "true",
  webpack: (config, _options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
});
