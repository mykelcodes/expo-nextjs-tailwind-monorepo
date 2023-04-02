const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */

module.exports = withExpo({
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ['ui', 'react-native', 'nativewind'],
})
