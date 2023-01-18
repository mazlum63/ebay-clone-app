/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ebayimg.com', 'upload.wikimedia.org', 'fakestoreapi.com']
  }
}

module.exports = nextConfig