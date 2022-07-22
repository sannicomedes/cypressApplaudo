export default {
  setupNodeEvents(on: any, config: {}) {
    return require('./cypress/plugins/index.ts')(on, config);
  },
  e2e: {
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
}; 