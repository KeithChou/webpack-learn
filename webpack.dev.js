const config = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(config, {
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        compress: true,
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})
