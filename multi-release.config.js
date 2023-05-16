const multiReleaseConfig = require('@snowball-tech/semantic-release-config/multi-release.config')

const releaseConfig = require('./release.config')

module.exports = {
  ...multiReleaseConfig,
  debug: releaseConfig.debug || false,
  dryRun: releaseConfig.dryRun || false,
}
