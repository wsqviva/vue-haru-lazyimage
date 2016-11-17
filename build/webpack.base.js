'use strict'
const path = require('path')
const webpack = require('webpack')
const common = require('./common')
const { PATHS } = require('./config')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: PATHS.output,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.styl']
    // alias: {
    //   root: path.join(__dirname, '../client'),
    //   components: path.join(__dirname, '../client/components')
    // }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue-loader']
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      }
      // {
      //   test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      //   loader: 'file',
      //   query: {
      //     name: 'static/media/[name].[hash:8].[ext]'
      //   }
      // }
    ]
  },
  // babel: config.babel,
  // postcss: common.postcss,
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        loaders: {
          // stylus: ExtractTextPlugin.extract('css!stylus')
        },
        postcss: common.postcss
      }
    })
  ],
  target: 'web'
}
