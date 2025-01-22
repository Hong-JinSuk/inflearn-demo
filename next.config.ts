import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/inflearn-demo',
};

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
