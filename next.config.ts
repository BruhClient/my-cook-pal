import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode : false, 
  eslint: {
    ignoreDuringBuilds: true,
},
  images : {
    domains : ["img.spoonacular.com","spoonacular.com"]
  }
};

export default nextConfig;
