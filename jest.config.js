module.exports = {
  clearMocks: true,
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  // coverageProvider: 'v8',

  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],

  testEnvironment: 'jsdom',
  testMatch: ['**/*.spec.ts'],
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',

  transform: {
    '\\.(js|jsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
};
