const path = require('path');

module.exports = {
  NODE_MODULES: path.resolve(__dirname, 'node_modules'),
  SRC: path.resolve(__dirname, 'src'),
  COMPONENTS: path.resolve(__dirname, 'src/components'),
  BASIC_COMPONENTS: path.resolve(__dirname, 'src/components/Basic'),
  BUILD: path.resolve(__dirname, 'build'),
  DEV: path.resolve(__dirname, 'dev'),
  ASSETS: path.resolve(__dirname, 'src/styles'),
  THEME_VARIABLES: path.resolve(__dirname, 'src/app/theme/variables.scss'),
  TEST: path.resolve(__dirname, 'test')
};
