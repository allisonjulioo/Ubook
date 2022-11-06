module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],

  testEnvironment: 'jsdom',
  testMatch: ['**/*.spec.ts'],
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
};
