/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 'images.cryptocompare.com'],
  },
}

module.exports = nextConfig
