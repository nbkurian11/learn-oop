/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        basePath: "/learn-oop",
        assetPrefix: "/learn-oop/",
      }
    : {}),
};

export default nextConfig;
