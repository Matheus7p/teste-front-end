import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')],
    prependeData: `@import "abstracts/_variables.scss";`
  },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.econverse.com.br',
        pathname: '/teste-front-end/junior/tecnologia/fotos-produtos/**',
      },
    ],
  },

};

export default nextConfig;
