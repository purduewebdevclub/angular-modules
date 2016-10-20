module.exports = {
    entry: './src/app.js',
    output: {
        path: './www/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    devServer: {
        contentBase: './www',
        stats: 'minimal'
    }
};
