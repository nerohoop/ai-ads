/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Apply basePath/assetPrefix only in production (e.g. GitHub Pages)
  ...(isProd
    ? {
        basePath: "/ai-ads",
        assetPrefix: "/ai-ads/",
      }
    : {}),
};

export default nextConfig;
