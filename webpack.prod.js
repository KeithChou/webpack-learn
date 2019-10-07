const merge = require('webpack-merge')
const config = require('./webpack.common.js')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = merge(config, {
    devtool: 'source-map',
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].js', // 用于以entry为入口的chunk
        chunkFilename: '[name].[chunkhash:8].js' // 用于动态加载的chunk
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css'
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
})
