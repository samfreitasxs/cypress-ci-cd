const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'https://portal-api-p1-dev.pmerj.seg.br/',
    },
  },
  fixturesFolder: false,
})
