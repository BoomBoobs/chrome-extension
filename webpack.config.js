var
  path = require('path'),
  _ = require('lodash'),
  base = require('./webpack.base'),
  config = require('./config'),
  paths = require('./paths'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

var babelLoaders = ['babel?loose&stage=0'];

if (config.reactHot) {
  babelLoaders.unshift('react-hot');
}

console.log(base.module);

module.exports = _.extend({}, base, {

  entry: [
    'webpack/hot/dev-server',
    path.resolve(paths.SRC, 'index.js')
  ],

  debug: true,

  devtool: config.devTool || 'source-map',

  devServer: {
    contentBase: paths.BUILD,
    hot: true,
    inline: true,
    port: config.port
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
      // style!css loaders for semantic
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css']
      }
    ])
  })
});
