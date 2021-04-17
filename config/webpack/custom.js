const path = require('path');

module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      '@root': path.resolve(__dirname, '..', '..', 'app/javascript/react'),
      '@layouts': path.resolve(__dirname, '..', '..', 'app/javascript/react/layouts'),
      '@pages': path.resolve(__dirname, '..', '..', 'app/javascript/react/pages'),
      '@components': path.resolve(__dirname, '..', '..', 'app/javascript/react/components'),
      '@helpers': path.resolve(__dirname, '..', '..', 'app/javascript/react/helpers'),
    },
  },
};
