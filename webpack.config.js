module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '',
        path: './src'

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};