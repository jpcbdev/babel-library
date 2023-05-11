const env = process.env.NODE_ENV;
const runtimeCaching = require('next-pwa/cache')

module.exports = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        API_URL: env === 'development' ? 'http://localhost:3900' : 'http://45.33.97.136:3900',
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
}
