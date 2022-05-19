/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 'images.cryptocompare.com'],
    loader: 'akamai',
    path: '',
  },
  env: {
    API_KEY: 'd2e8e5578df8aee90cd12cbde129e59dba04407cb12711993c81db551ddafa92',
  },
}

module.exports = nextConfig
