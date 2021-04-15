module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/config/webpack/test.js',
  ],
  setupFilesAfterEnv: [
    './spec/javascript/setup_tests.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/app/javascript/react/pages/index.js',
  ],
  moduleNameMapper: {
    '@root/(.*)': '<rootDir>/app/javascript/react/$1',
    '@pages/(.*)': '<rootDir>/app/javascript/react/pages/$1',
    '@pages': '<rootDir>/app/javascript/react/pages/index.js',
  },
};
