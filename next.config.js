/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Custom image loader path (relative to project root)
const loaderFile = './src/utils/imageLoader.ts';

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      {
        protocol: "https",
        hostname: "x41q9wll8l.ufs.sh",
      },
    ],
    // Add image optimization settings
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days - increase cache time
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Disable image optimization for certain paths
    unoptimized: process.env.NODE_ENV === 'development',
    // Use custom loader for better caching
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    // Reduce the number of cached image variants
    domains: ['utfs.io', 'x41q9wll8l.ufs.sh'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    implementation: "sass-embedded",
  },
};

export default withNextIntl(config);
