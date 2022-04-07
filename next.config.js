/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    env: {
        VERSION: '3.2.1',
    },
    images: {
        loader: 'akamai',
        path: '',
    },
};

module.exports = nextConfig;
