/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "a-us.storyblok.com" }],
  },
};

export default nextConfig;
