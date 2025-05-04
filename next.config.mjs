/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  reactStrictMode: false, // ← 強制關閉 React 嚴格模式(不推薦),
};

export default nextConfig;
