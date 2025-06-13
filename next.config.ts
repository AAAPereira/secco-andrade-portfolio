// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // útil para detectar bugs em dev
  images: {
    domains: ["raw.githubusercontent.com", "res.cloudinary.com"], // ajuste se você usar imagens externas
  },
  experimental: {
    serverActions: {} // CORRETO para Next 15+
  }
};

export default nextConfig;
