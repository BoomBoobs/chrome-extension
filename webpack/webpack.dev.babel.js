const
  path = require('path'),
  _ = require('lodash'),
  base = require('./webpack.base.babel'),
  config = require('../config'),
  paths = require('../paths');

module.exports = _.extend({}, base, {

  entry: {
    popup: [
      'webpack-dev-server/client',
      path.resolve(paths.SRC, 'popup/index.js')
    ],
    plugin: [
      'webpack-dev-server/client',
      path.resolve(paths.SRC, 'plugin/plugin.js')
    ]
  },

  output: {
    path: paths.DEV,
    publicPath: paths.PUBLIC_PATH || '',
    filename: '/[name]/[name].bundle.js',
    chunkFilename: '/[name]/[name]-[id].chunk.js'
  },

  debug: true,

  devtool: config.devTool || 'source-map',

  devServer: {
    contentBase: paths.DEV,
    hot: true,
    inline: true,
    port: config.port || 3000
  },

  module: _.extend({}, base.module, {
    loaders: base.module.loaders.concat([
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader']
      },
      // SASS loaders
      {
        test: /\.scss$/,
        exclude: paths.THEME_VARIABLES,
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
      }
    ])
  })
});
