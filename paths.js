const path = require('path');

module.exports = {
  SRC: path.resolve(__dirname, 'src'),
  APP: path.resolve(__dirname, 'src/app'),
  BUILD: path.resolve(__dirname, 'build'),
  DEV: path.resolve(__dirname, 'dev'),
  ASSETS: path.resolve(__dirname, 'src/styles'),
  THEME_VARIABLES: path.resolve(__dirname, 'src/app/theme/variables.scss'),
  TEST: path.resolve(__dirname, 'test')
};
