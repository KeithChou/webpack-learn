/**
 * 1. HMR(hot module replacement, 热模块替换)
 * 2. tree shaking实现
 * 3. 生产环境构建(区分开发环境和线上环境)
 * 4. 代码分离(entry手动配置、插件、动态加载)
 * 5. 按需加载(懒加载)
 */

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const devEnv = process.env.NODE_ENV !== 'production'

/**
 * dev环境下开启hmr模式，使用chunkhash时，webpack4会报错
 */

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index',
        math1: './src/math'
    },
    output: {
        filename: devEnv ? '[name].[hash:8].js' : '[name].[contenthash:8].js', // 用于以entry为入口的chunk
        chunkFilename: devEnv ? '[name].[hash:8].js' : '[name].[contenthash:8].js', // 用于动态加载的chunk
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: 'sourcemaps/[file].map',
        devtoolNamespace: 'webpack'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{ // use多个loader
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: devEnv,
                    reloadAll: true
                }
            }, 'css-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader' // 单个loader
        }]
    },
    resolve: {
        alias: {},
        extensions: ['.js', '.json', '.css', '*'],
        mainFields: ['browser', 'module', 'main'],
        mainFiles: ['index'],
        modules: ['node_modules']
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', // build后要生成的文件
            template: 'index.html', // 基于模板生成对应的html
            title: 'xix呵呵呵ixi', // html文件的title
            excludeChunks: ['math1']
        }),
        new HtmlWebpackPlugin({
            filename: 'math.html', // build后要生成的文件
            template: 'math.html', // 基于模板生成对应的html
            title: 'xix呵呵呵ixi', // html文件的title
            excludeChunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: devEnv ? '[name].css' : '[name].[contenthash:8].css'
        })
    ],
    optimization: {
        runtimeChunk: true,
        sideEffects: false,
        moduleIds: 'hashed',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all'
                },
                common: {
                    test: /\.js$/,
                    name: 'common',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    }
}
