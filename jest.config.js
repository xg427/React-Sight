module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/chrome-ext/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/chrome-ext/asset/',
    '<rootDir>/chrome-ext/backend/installHook.js',
    '<rootDir>/chrome-ext/background.js',
    '<rootDir>/chrome-ext/content-script.js',
    '<rootDir>/chrome-ext/frontend/devtools.js',
    '<rootDir>/chrome-ext/frontend/drawChart.js',
    '<rootDir>/chrome-ext/frontend/store-panel.js',
    '<rootDir>/chrome-ext/frontend/breadcrumb.js',
  ],
};
