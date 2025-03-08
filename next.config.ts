import { withContentlayer } from 'next-contentlayer2';
import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/:all*(svg|jpg|png|webp|avif)',
      locale: false,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, must-revalidate',
        },
      ],
    },
    {
      source: '/:all*(js|css)',
      locale: false,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, must-revalidate',
        },
      ],
    },
  ],
};

export default withBundleAnalyzer(withContentlayer(nextConfig));
