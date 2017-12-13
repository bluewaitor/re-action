
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
        index: './src/sass/index.scss'
    },
    output: {
        filename: 'bundle.js',
        publicPath: '',
        path: './src'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css?sourceMap!postcss!sass?sourceMap!")
            }
        ],
    },
    postcss: [
        require('autoprefixer')({ browsers: ['last 10 versions'] })
    ],
    plugins: [
        new ExtractTextPlugin("index.css")
    ]
};