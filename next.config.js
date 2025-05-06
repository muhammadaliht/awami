/** @type {import('next').NextConfig} */

const nextConfig = {
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
