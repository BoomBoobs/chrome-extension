const webpack = require('webpack');
const paths = require('../paths');
const config = require('../config');



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
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  externals: {
    'window': 'window',
    'require': 'require'
  },

  module: {
    preLoaders,
    loaders: [
      // copy required static files
      {
        test: /\.(html|jpg|png|json)$/,
        loader: `file-loader?name=[path][name].[ext]&context=${paths.SRC}`
      },
      {
        test: paths.THEME_VARIABLES,
        loader: 'sass-variables'
      }
    ]
  }
};
