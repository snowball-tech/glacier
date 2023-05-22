// Inspired by https://github.com/oleg-koval/semantic-release-npm-github-publish
// and https://github.com/favoloso/conventional-changelog-emoji

const types = require('./types')
const writerOpts = require('./writer-opts')

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
          .map(([typeName, type]) => {
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
          .flat()
          .filter(Boolean),
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        writerOpts,
      },
    ],
    '@semantic-release/changelog',
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
