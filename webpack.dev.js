const config = require('./webpack.common.js')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(config, {
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        filename: '[name].[hash:8].js', // 用于以entry为入口的chunk
        chunkFilename: '[name].[hash:8].js' // 用于动态加载的chunk
    },
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
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css'
        }),
        // new webpack.NamedChunksPlugin(),
        new webpack.BannerPlugin({
            banner: '哈哈哈'
        })
    ]
})
