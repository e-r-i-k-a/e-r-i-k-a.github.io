/** @type {import('next').NextConfig} */
const nextConfig = {
  build: {
    extend(config, { }) {
      config.node = {
        fs: 'empty'
      }
    }
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
