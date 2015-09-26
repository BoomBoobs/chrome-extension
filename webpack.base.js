var webpack = require('webpack');
var paths = require('./paths');
var config = require('./config');



var preLoaders = config.eslint ? [
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

  output: {
    library: 'boomBoobs',
    libraryTarget: 'var',
    path: paths.BUILD,
    publicPath: paths.PUBLIC_PATH || '',
    filename: '/bundle.js'
  },

  plugins: [
    // Define free variables. Useful for having development builds with debug logging or adding global constants.
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  externals: {
    "window": "window"
  },

  module: {
    preLoaders: preLoaders,
    loaders: [
      // require .json
      {
        test: /\.json$/,
        loader: 'json'
      },
      // copy required static files
      {
        test: paths.ASSETS,
        loader: 'file?name=[path][name].[ext]&context=' + paths.ASSETS,
        exclude: [
          paths.ASSETS + '/css'
        ]
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      }
    ]
  }
};
