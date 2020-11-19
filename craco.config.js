const path = require('path');

module.exports = {
  eslint: {
    enable: false,
  },
  babel: {
    loaderOptions: {
      configFile: path.resolve(__dirname, 'babel.config.js'),
    },
  },
};
