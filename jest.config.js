module.exports = {
  testMatch: [
    '<rootDir>/spec/javascript/**/?(*.)+(test).[jt]s?(x)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/spec/javascript/setup_tests.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/app/javascript/react/layouts/index.js',
    '<rootDir>/app/javascript/react/pages/index.js',
    '<rootDir>/app/javascript/react/components/index.js',
    '<rootDir>/app/javascript/react/vendors/index.js',
  ],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '@root/(.*)': '<rootDir>/app/javascript/react/$1',
    '@layouts/(.*)': '<rootDir>/app/javascript/react/layouts/$1',
    '@layouts': '<rootDir>/app/javascript/react/layouts/index.js',
    '@pages/(.*)': '<rootDir>/app/javascript/react/pages/$1',
    '@pages': '<rootDir>/app/javascript/react/pages/index.js',
    '@components/(.*)': '<rootDir>/app/javascript/react/components/$1',
    '@components': '<rootDir>/app/javascript/react/components/index.js',
    '@helpers': '<rootDir>/app/javascript/react/helpers/index.js',
    '@vendors/(.*)': '<rootDir>/app/javascript/react/vendors/$1',
    '@vendors': '<rootDir>/app/javascript/react/vendors/index.js',
    '@images/(.*)': '<rootDir>/app/assets/images/$1',
  },
};
