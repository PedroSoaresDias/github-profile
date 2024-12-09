import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  },
  experimental: {
    reactCompiler: true
  }
}

export default nextConfig;

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/app",
  sw: "service-worker.js"
});

// module.exports = nextConfig

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'avatars.githubusercontent.com'
//       }
//     ]
//   },
// }

module.exports = withPWA({
  reactStrictMode: true,
  // swcMinify: true
});

// module.exports = {
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: "default-src 'self'; script-src 'self' https://api.github.com 'strict-dynamic'; connect-src 'self' https://api.github.com; style-src 'self'; img-src 'self' 'strict-dynamic' https://avatars.githubusercontent.com data:;"
//           },
//         ],
//       },
//     ];
//   },
// };