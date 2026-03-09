import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    // Enable AVIF format for better compression
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
