/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'eodhd.com' }],
    },
};

export default nextConfig;
