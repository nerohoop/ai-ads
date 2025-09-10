/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ai-ads",
  assetPrefix: "/ai-ads/",
};

export default nextConfig;
