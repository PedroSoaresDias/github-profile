/** @type {import('next').NextConfig} */
const nextConfig = {}

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/app",
  sw: "service-worker.js"
});

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  }
}

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true
});