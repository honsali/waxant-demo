module.exports = {
    webpack: {
        mode: 'extends',
        configure: {
            module: {
                rules: [
                    {
                        test: [/\.js?$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
                        enforce: 'pre',
                        exclude: /node_modules/,
                        use: ['source-map-loader'],
                    },
                ],
            },
            ignoreWarnings: [/Failed to parse source map/],
        },
    },
};
