/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
  basePath:'/haquedot.github.io',
  assetPrefix: '/haquedot.github.io/',
    images: {
      unoptimized: true,
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
    },
  };
export default nextConfig;
