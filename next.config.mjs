/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog-site-f3i2.onrender.com",
        port: "5000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
