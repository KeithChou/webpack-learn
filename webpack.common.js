/**
 * 1. HMR(hot module replacement, 热模块替换)实现
 * 2. tree shaking实现
 * 3. 生产环境构建(区分开发环境和线上环境)
 * 4. 代码分离
 */

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index',
        // another: './src/another-module'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[hash:8].js', // 用于以entry为入口的chunk
        chunkFilename: '[name].bundle.[chunkhash:8].js', // 用于动态加载的chunk
        sourceMapFilename: 'sourcemaps/[file].map'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: devMode
                }
            }, 'css-loader']
        }]
    },
    resolve: {
        extensions: ['.js', '.json', '.css']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: 'xixixi'
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash:8].css',
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
