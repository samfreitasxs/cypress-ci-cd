const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'http://fakerestapi.azurewebsites.net',
    },
  },
  fixturesFolder: false,
})
