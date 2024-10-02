import { configDotenv } from "dotenv";

configDotenv();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Use for correct svg imports
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
