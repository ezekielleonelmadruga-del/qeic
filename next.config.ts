import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // This project lives inside a OneDrive-synced folder. Turbopack's
    // on-disk cache (an SST database under .next/dev/cache/turbopack)
    // gets dehydrated into cloud placeholders by OneDrive, which then
    // fails to reopen with "cloud file provider is not running". Keeping
    // the dev cache in memory sidesteps that entirely.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
