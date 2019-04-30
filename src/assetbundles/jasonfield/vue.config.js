const path = require('path')
// const ManifestPlugin = require('webpack-manifest-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const globImporter = require('node-sass-glob-importer')
const whitelister = require('purgecss-whitelister')
const glob = require('glob-all')

let config = {
  https: false,
  host: 'localhost',
  port: 8080,
  watchDir: '../../templates/_components/fields/',
  // Whitelist selectors to stop purgecss from removing them from your CSS
  // You can pass in whole stylesheets to whitelist everything from thirdparty libs
  // Accepts string paths, array of strings, globby strings, or array of globby strings:
  // ['./node_modules/lib1/*.css', './node_modules/lib2/*.scss']
  purgecssWhitelist: ['./src/scss/icons.scss'],
  // Whitelist based on a regular expression.
  // Ex: [/red$/] (selectors ending in 'red' will remain)
  // https://www.purgecss.com/whitelisting
  purgecssWhitelistPatterns: [],
}

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:!\/]+/g) || []
  }
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
    before(app, server) {
      const sane = require('sane')
      var watcher = sane(path.join(__dirname, config.watchDir), {
        glob: ['**/*'],
      })
      watcher.on('change', function(filepath, root, stat) {
        console.log('  File saved:', filepath)
        server.sockWrite(server.sockets, 'content-changed')
      })
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      // new CleanWebpackPlugin(['web/dist', 'build']),
      new WriteFilePlugin({
        test: /^((?!(hot-update\.js)).)*$/,
      }),
      // new ManifestPlugin({
      //   publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
      // }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './templates/**/*.html'),
          path.join(__dirname, './templates/**/*.twig'),
          path.join(__dirname, './src/**/*.vue'),
          path.join(__dirname, './src/**/*.js'),
        ]),
        whitelist: whitelister(config.purgecssWhitelist),
        whitelistPatterns: config.purgecssWhitelistPatterns,
        extractors: [
          {
            extractor: TailwindExtractor,
            // Specify the file extensions to include when scanning for class names.
            extensions: ['html', 'js', 'twig', 'vue'],
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'sass-loader',
          options: {
            importer: globImporter(),
          },
        },
      ],
    },
  },
  // Disable building a useless index.html file
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
}
