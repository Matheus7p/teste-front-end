import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')],
    prependeData: `@import "abstracts/_variables.scss";`
  }
};

export default nextConfig;
