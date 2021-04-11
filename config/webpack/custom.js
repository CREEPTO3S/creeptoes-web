const path = require('path');

module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      '@root': path.resolve(__dirname, '..', '..', 'app/javascript/react'),
      '@pages': path.resolve(__dirname, '..', '..', 'app/javascript/react/pages'),
    },
  },
};
