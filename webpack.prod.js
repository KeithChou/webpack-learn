const merge = require('webpack-merge')
const config = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(config, {
    devtool: 'source-map',
    mode: 'production',
    plugins: [
        new webpack.HashedModuleIdsPlugin()
    ]
})
