const withImages = require('next-images');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withImages({
    webpack: config => {
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,

            // Read the .env file
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ]

        return config
    }
})
