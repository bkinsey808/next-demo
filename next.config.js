const StylelintPlugin = require("stylelint-webpack-plugin");

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  child-src example.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self';  
  img-src 'self' data:;
`;

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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
});
