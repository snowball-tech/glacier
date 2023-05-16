const multiReleaseConfig = require('@snowball-tech/semantic-release-config/release.config.js')

module.exports = {
  ...multiReleaseConfig,
  debug: true,
  dryRun: true,
}
