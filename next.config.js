/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ["source.unsplash.com", "i.pravatar.cc"],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    //providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX(nextConfig)