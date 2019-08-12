const merge = require('webpack-merge')
const config = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(config, {
    devtool: 'source-map',
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})
