/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "umcvfzyvzpnfvnatchxr.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
