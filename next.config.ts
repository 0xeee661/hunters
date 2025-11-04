import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permitir acceso desde cualquier dispositivo en la red local
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.1.6', '192.168.0.*', '10.0.0.*', '172.16.*.*'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
