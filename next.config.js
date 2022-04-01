/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  env: {
    VERSION: "3.1.0"
  },
  images: {
    loader: "akamai",
    path: '',
  },
  redirects: () => {
    return [
      {
        source: '/',
        destination: '/getting-started/home',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
