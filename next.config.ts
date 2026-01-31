import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cookiegeek-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
