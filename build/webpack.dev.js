
const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')
const { PATHS, title, port } = require('./config')

base.devtool = 'eval-source-map'
base.module.loaders.push({
  test: /\.styl$/,
  loader: 'style-loader!css-loader!stylus-loader',
  include: `${PATHS.root}/example`
})
base.plugins.push(
  new HTMLPlugin({
    title,
    port,
    template: __dirname + '/index.html',
    filename: path.join(PATHS.root, 'dist/index.html'),
    inject: false
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)
// push loader for .css file
// base.module.loaders.push(
//   {
//     test: /\.css$/,
//     loader: `style-loader!${_.cssLoader}!postcss-loader`
//   }
// )

module.exports = base
