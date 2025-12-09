import type { NextConfig } from "next";

const basePath = "/arachne";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  basePath,

  // Expose basePath to client-side code for fetch calls
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // Enable standalone output for optimized Docker builds
  // This creates a minimal production build with only necessary files
  output: "standalone",
};

export default nextConfig;
