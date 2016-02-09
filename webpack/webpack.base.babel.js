const webpack = require('webpack');
const path = require('path');
const paths = require('../paths');
const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const preLoaders = config.eslint ? [
  // linting with eslint
  {
    test: /\.jsx?$/, // test for both js and jsx
    loader: 'eslint',
    include: paths.SRC,
    exclude: paths.ASSETS
  }
] : [];

module.exports = {
  stats: {
    children: false
  },

  plugins: [
    // Define free variables. Useful for having development builds with debug logging or adding global constants.
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      filename: 'popup/index.html',
      template: path.resolve(__dirname, '../templates/popup/index.html'),
      inject: 'body',
      chunks: ['popup']
    })
  ],
  externals: { window: 'window' },
  module: {
    preLoaders,
    loaders: [
      {
        test: /\.js$/, // test for both js and jsx
        loaders: ['babel?stage=0&loose'],
        exclude: [/node_modules/, paths.ASSETS],
        include: [paths.SRC, paths.TEST, /buildo-react-components/]
      },
      // copy required static files
      {
        test: /\.(jpg|png|json)$/,
        loader: `file-loader?name=[path][name].[ext]&context=${paths.SRC}`
      },
      {
        test: paths.THEME_VARIABLES,
        loader: 'sass-variables'
      }
    ]
  }
};
