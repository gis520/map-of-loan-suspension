const path = require('path');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const name = '订单聚合统计';
module.exports = {
  publicPath: './', //打包后的位置(如果不设置这个静态资源会报404)
  outputDir: 'dist', //打包后的目录名称
  assetsDir: 'static', //静态资源目录名称
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      // new CopyWebpackPlugin({
      //   patterns: [
      //     // {
      //       // from: resolve('src/assets/data'),
      //       // to: 'data'
      //     // }
      //   ]
      // })
    ]
  }
};
