import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow product images from Amazon, Flipkart, and CDNs
    remotePatterns: [
      { protocol: 'https', hostname: '**.amazon.com' },
      { protocol: 'https', hostname: '**.amazon.in' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'rukminim2.flixcart.com' },
      { protocol: 'https', hostname: 'rukminim1.flixcart.com' },
      { protocol: 'https', hostname: '**.cloudfront.net' },
    ],
  },
  // Increase serverless function timeout for scraping + AI
  serverExternalPackages: ['cheerio'],
};

export default nextConfig;
