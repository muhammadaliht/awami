/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Required for static export
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
