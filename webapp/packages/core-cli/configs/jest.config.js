// https://jestjs.io/docs/configuration

module.exports = {
  // collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/types.ts'],
  // coverageReporters: ['json'],
  // restoreMocks: true,
  // testEnvironment: 'jsdom',
  setupFiles: ['../tests/setup.ts'],
  transform: {"\\.[jt]sx?$": ['babel-jest', { configFile: require.resolve('./babel.config.js') }]}
};
