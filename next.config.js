const withImages = require('next-images');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withImages({
    webpack: config => {
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,

            // 開発時に.envを読み込むために残してある
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ]

        return config
    }
})
