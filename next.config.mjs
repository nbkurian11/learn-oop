/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/learn-oop",
        assetPrefix: "/learn-oop/",
      }
    : {}),
};

export default nextConfig;
