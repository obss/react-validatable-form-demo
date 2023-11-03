/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    env: {
        VERSION: '5.0.0',
    },
};

module.exports = nextConfig;
