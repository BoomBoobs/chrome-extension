const
  path = require('path'),
  _ = require('lodash'),
  base = require('./webpack.base.babel'),
  config = require('../config'),
  paths = require('../paths');


const babelLoaders = ['babel?loose&stage=0'];

if (config.reactHot) {
  babelLoaders.unshift('react-hot');
}


module.exports = _.extend({}, base, {

  entry: {
    popup: [
      'webpack-dev-server/client',
      'webpack/hot/only-dev-server',
      path.resolve(paths.SRC, 'popup/index.js')
    ]
  },

  output: {
    path: path.join(__dirname, '../dev/popup'),
    filename: '/[name]/[name].bundle.js',
    chunkFilename: '[name]/[id].chunk.js'
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
      // babel transpiler
      {
        test: /\.jsx?$/, // test for both js and jsx
        loaders: babelLoaders,
        exclude: [/node_modules/, paths.ASSETS],
        include: [paths.SRC, paths.TEST]
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader']
        // include: [paths.SRC]
      },
      // SASS loaders
      {
        test: /\.scss?$/,
        exclude: paths.THEME_VARIABLES,
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
        // include: [paths.SRC]
      }
    ])
  })
});
