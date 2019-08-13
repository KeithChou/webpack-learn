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

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[hash:8].js', // 用于以entry为入口的chunk
        chunkFilename: '[name].bundle.[chunkhash:16].js', // 用于动态加载的chunk
        sourceMapFilename: 'sourcemaps/[file].map',
        library: 'jQuery',
        libraryTarget: 'window'
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
    externals: {
        jquery: 'jQuery'
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
