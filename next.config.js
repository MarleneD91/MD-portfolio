/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  images: {
    deviceSizes: [320, 380, 580, 767, 880, 1240, 1920],
    imageSizes:  [32,  64,  96,  128,   256]
  },
  experimental: { 
    nftTracing: true 
  }
  }

module.exports = nextConfig
