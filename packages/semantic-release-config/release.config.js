// Inspired by https://github.com/oleg-koval/semantic-release-npm-github-publish
// and https://github.com/favoloso/conventional-changelog-emoji

const types = require('./types')
const writerOptions = require('./writer-opts')

module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          mergeCorrespondence: ['id', 'source'],
          mergePattern: /^Merge pull request #(d+) from (.*)$/,
          noteKeywords: [
            'BREAKING CHANGE',
            'BREAKING CHANGES',
            'BREAKING-CHANGE',
            'BREAKING-CHANGES',
            'BREAKING',
          ],
        },
        releaseRules: Object.entries(types)
          .flatMap(([typeName, type]) => {
            const releaseRules = [
              { release: type.release || 'patch', type: typeName },
            ]

            if (Array.isArray(type.aliases)) {
              type.aliases.forEach((alias) => {
                releaseRules.push({
                  release: type.release || 'patch',
                  type: alias,
                })
              })
            }

            return releaseRules
          })
          .filter(Boolean),
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        writerOpts: writerOptions,
      },
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'yarn run -T prettier --write CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'release: new version ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
}
