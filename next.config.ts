import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  onDemandEntries: {
    // So errors don't constantly reappear during dev
    maxInactiveAge: 1000 * 60 * 60,
  },
};

export default nextConfig;
