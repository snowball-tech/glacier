// Inspired by https://github.com/oleg-koval/semantic-release-npm-github-publish

const plugins = require('./plugins.json')
const transform = require('./transform')

module.exports = {
  branches: ['main'],

  parserOpts: {
    mergeCorrespondence: ['id', 'source'],
    mergePattern: /^Merge pull request #(\d+) from (.*)$/,
  },
  plugins,
  releaseRules: plugins[0][1].releaseRules,
  writerOpts: { transform },
}
