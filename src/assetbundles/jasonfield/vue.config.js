const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config = {
  https: false,
  host: 'localhost',
  port: 8080,
  watchDir: '../../templates/_components/fields/',
}

module.exports = {
  runtimeCompiler: true,
  outputDir: 'dist',
  filenameHashing: false,
  css: {
    sourceMap: true,
  },
  devServer: {
    host: config.host,
    port: config.port,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: config.https,
    clientLogLevel: 'info',
    disableHostCheck: true,
    contentBase: path.join(__dirname, config.watchDir),
    watchContentBase: true,
  },
  productionSourceMap: false,
  transpileDependencies: [],
  configureWebpack: {
    plugins: [
      new WriteFilePlugin({
        test: /^((?!(hot-update\.js)).)*$/,
      }),
      new MiniCssExtractPlugin({
        // filename: 'css/[name].[contenthash].css',
        filename: 'css/[name].css',
      }),
    ],
  },
  // Disable building a useless index.html file
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
}
