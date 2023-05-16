// Inspired by https://github.com/oleg-koval/semantic-release-npm-github-publish
// and https://github.com/favoloso/conventional-changelog-emoji

const {
  parserOpts,
  writerOpts,
} = require('@favoloso/conventional-changelog-emoji')

module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          ...parserOpts,
          mergeCorrespondence: ['id', 'source'],
          mergePattern: /^Merge pull request #(d+) from (.*)$/,
        },
        releaseRules: [
          { release: 'major', type: 'breaking' },
          { breaking: true, release: 'major' },
          { release: 'minor', type: 'feat' },
          { release: 'patch', type: 'security' },
          { release: 'patch', type: 'improvement' },
          { release: 'patch', type: 'perf' },
          { release: 'patch', type: 'fix' },
          { release: 'patch', type: 'docs' },
          { release: 'patch', type: 'doc' },
          { release: 'patch', type: 'chore' },
          { release: 'patch', type: 'chores' },
          { release: 'patch', type: 'refactor' },
          { release: 'patch', type: 'test' },
          { release: 'patch', type: 'tests' },
          { release: 'patch', type: 'style' },
          { release: 'patch', type: 'code-style' },
          { release: 'patch', type: 'lint' },
          { release: 'patch', type: 'build' },
          { release: 'patch', type: 'deps' },
          { release: 'patch', type: 'release' },
          { release: 'patch', type: 'bump' },
          { release: 'patch', type: 'wip' },
        ],
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
        assets: ['CHANGELOG.md'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'release: new version ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
}
