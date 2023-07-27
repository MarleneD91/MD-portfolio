/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains : ['s3-eu-west-1.amazonaws.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-eu-west-1.amazonaws.com',
          port: '',
          pathname: '/course.oc-static.com/projects/front-end-kasa-project//**',
        },
      ],
    },
  }

module.exports = nextConfig
