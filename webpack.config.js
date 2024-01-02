const path = require('path');

module.exports = {
    entry: './front-end/js/index.js',
    output: {
        path: path.resolve(__dirname, 'web/assets/js'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                parser: {
                    amd: false
                }
            }
        ]
    }
};