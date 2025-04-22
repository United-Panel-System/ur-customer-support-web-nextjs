/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "9001", // Add this if your backend uses a specific port
      },
    ],
  },
};

module.exports = nextConfig;
