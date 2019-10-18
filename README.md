## webpack-learn
看着webpack文档学习中..

## 191007问题
1. hash、chunkhash、contenthash区别？
2. production环境下，无法打包在dev环境分离的css文件？
    - 解：在js导入CSS是具有副作用的。请确保在package.json中移除"sideEffects": false, 否则CSS代码会在生产环境构建时被webpack丢掉。
      详情可参考：[https://github.com/vuejs/vue-cli/issues/3580](https://github.com/vuejs/vue-cli/issues/3580)
3. 阅读这篇文章：https://juejin.im/post/5b977a19f265da0ac4469057
4. css分离插件：https://github.com/webpack-contrib/mini-css-extract-plugin#configuration
5. Node环境下无法使用DefinePlugin插件定义的NODE_ENV环境变量？
