const injectDevServer = require("@cypress/react/plugins/react-scripts")

// on('dev-server:start', () => startDevServer());

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}