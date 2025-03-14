/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/dashboard/card", 
      },
    ]
  },

  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/card",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
