const config = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(config, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true, // hmr
        compress: true, // 所有来之dist目录下面的页面都坐gzip压缩
        port: 8080,
        headers: {
            'kkk': 12123
        }
    },
    plugins: [
        // new webpack.NamedChunksPlugin(),
        new webpack.BannerPlugin({
            banner: '哈哈哈'
        })
    ]
})
