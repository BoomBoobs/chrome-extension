const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const base = require('./webpack.base.babel');
const config = require('../config');
const paths = require('../paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const plugins = [
  // cause failed production builds to fail faster
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('style', '/style.[hash].min.css')
];

if (config.uglify) {
  plugins.unshift(
    // Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
    // You can pass an object containing UglifyJs options.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

if (config.gzip) {
  plugins.unshift(new CompressionPlugin({
    regExp: /\.js$|\.css$/
  }));
}

module.exports = _.extend({}, base, {

  entry: {
    plugin: path.resolve(paths.SRC, 'plugin/plugin.js'),
    popup: path.resolve(paths.SRC, 'popup/index.js')
  },

  stats: {
    children: false
  },

  output: {
    library: 'boomBoobs',
    libraryTarget: 'var',
    path: paths.BUILD,
    publicPath: paths.PUBLIC_PATH || '',
    filename: '/[name]/[name].bundle.js',
    chunkFilename: '/[name]/[name]-[id].chunk.js'
  },

  devtool: 'source-map',

  plugins: base.plugins.concat(plugins),

  module: _.extend({}, base.module, {
    loaders: base.module.loaders.concat([
      // babel transpiler
      {
        test: /\.js$/, // test for both js and jsx
        loaders: ['babel?stage=0&loose'],
        exclude: [/node_modules/, paths.ASSETS],
        include: [paths.SRC, paths.TEST]
      },
      // style!css loaders for semantic
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        exclude: paths.ASSETS
      },
      {
        test: /\.scss?$/,
        exclude: paths.THEME_VARIABLES,
        loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
        // include: [paths.SRC]
      }
    ])
  })
});
