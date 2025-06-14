import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "res.cloudinary.com"],
  },
  experimental: {
    serverActions: {},
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚨 Liga o modo "Ignora ESLint no build"
  },
};

export default nextConfig;
