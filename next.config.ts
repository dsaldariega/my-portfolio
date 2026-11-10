import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.VERCEL === "1" ? undefined : "/my-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
