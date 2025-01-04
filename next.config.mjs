/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'dist',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    webpack5: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
