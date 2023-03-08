// @ts-check
const { i18n } = require('./next-i18next.config.js')

// You can remove the following 2 lines when integrating our example.
const { loadCustomBuildParams } = require('./next-utils.config')
const { esmExternals = false, tsconfigPath } =
  loadCustomBuildParams()

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  async redirects() {
    return [
      {
        source: '/servicios',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/nosotros',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
