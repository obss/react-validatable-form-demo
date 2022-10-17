/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    env: {
        VERSION: '3.7.0',
    },
};

module.exports = nextConfig;
