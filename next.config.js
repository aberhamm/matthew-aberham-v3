const { withContentlayer } = require('next-contentlayer2');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing config here
};

module.exports = withContentlayer(nextConfig);
