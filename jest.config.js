module.exports = {
  testMatch: [
    '<rootDir>/spec/javascript/**/?(*.)+(test).[jt]s?(x)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/spec/javascript/setup_tests.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/app/javascript/react/pages/index.js',
  ],
  moduleNameMapper: {
    '@root/(.*)': '<rootDir>/app/javascript/react/$1',
    '@pages/(.*)': '<rootDir>/app/javascript/react/pages/$1',
    '@pages': '<rootDir>/app/javascript/react/pages/index.js',
  },
};
