import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/inflearn-demo',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

export default nextConfig;
