import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allowed image quality values
    qualities: [70, 75, 90, 95],
    // High-performance modern image formats
    formats: ["image/avif", "image/webp"],
    // Responsive device breakpoint widths
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;