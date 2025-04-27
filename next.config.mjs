/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  basePath: '/awami', // Add this line to set the base path
};

export default nextConfig;
