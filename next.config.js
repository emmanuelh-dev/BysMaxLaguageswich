// @ts-check
const { i18n } = require("./next-i18next.config.js");

// You can remove the following 2 lines when integrating our example.
const { loadCustomBuildParams } = require("./next-utils.config");
const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
  },
  experimental: {
    esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
    appDir: true,
    typedRoutes: true,
  },
  i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
