const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const base = require('./webpack.base');
const config = require('./config');
const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const plugins = [
  // cause failed production builds to fail faster
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('style', '/style.[hash].min.css'),
];

if (config.uglify) {
  plugins.unshift(
    // Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
    // You can pass an object containing UglifyJs options.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    })
  );
}

if (config.gzip) {
  plugins.unshift(new CompressionPlugin({
    regExp: /\.js$|\.css$/,
  }));
}

module.exports = _.extend({}, base, {

  entry: path.resolve(paths.SRC, 'plugin.js'),

  devtool: 'source-map',

  plugins: base.plugins.concat(plugins),

  stats: { children: false },

  module: _.extend({}, base.module, {
    loaders: base.module.loaders.concat([
      // babel transpiler
      {
        test: /\.jsx?$/, // test for both js and jsx
        loaders: ['babel?stage=0&loose'],
        exclude: [/node_modules/, paths.ASSETS],
        include: [paths.SRC, paths.TEST],
      },
      // style!css loaders for semantic
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        exclude: paths.ASSETS + '/landing'
      }
    ])
  })
});
