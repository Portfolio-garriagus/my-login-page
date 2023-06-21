/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com", "i.pravatar.cc"],
  },
};

module.exports = nextConfig;
