// Inspired by https://github.com/oleg-koval/semantic-release-npm-github-publish

module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        config: '@favoloso/conventional-changelog-emoji',
        parserOpts: {
          mergeCorrespondence: ['id', 'source'],
          mergePattern: /^Merge pull request #(d+) from (.*)$/,
        },
        releaseRules: [
          { emoji: '🚨', release: 'major' },
          { release: 'major', type: 'breaking' },
          { emoji: '✨', release: 'minor' },
          { emoji: '🌟', release: 'minor' },
          { emoji: '💫', release: 'minor' },
          { emoji: '🌠', release: 'minor' },
          { emoji: 'feat', release: 'minor' },
          { release: 'minor', type: 'feat' },
          { emoji: '🔒', release: 'patch' },
          { release: 'patch', type: 'security' },
          { emoji: '🛠', release: 'patch' },
          { release: 'patch', type: 'improvement' },
          { emoji: '⚡️', release: 'patch' },
          { release: 'patch', type: 'perf' },
          { emoji: '🐛', release: 'patch' },
          { emoji: '🐞', release: 'patch' },
          { release: 'patch', type: 'fix' },
          { emoji: '📚', release: 'patch' },
          { emoji: '📖', release: 'patch' },
          { release: 'patch', type: 'docs' },
          { release: 'patch', type: 'doc' },
          { emoji: '🏗', release: 'patch' },
          { emoji: '⚙️', release: 'patch' },
          { release: 'patch', type: 'chore' },
          { release: 'patch', type: 'chores' },
          { emoji: '♻️', release: 'patch' },
          { release: 'patch', type: 'refactor' },
          { emoji: '🚦', release: 'patch' },
          { emoji: '✅', release: 'patch' },
          { release: 'patch', type: 'test' },
          { release: 'patch', type: 'tests' },
          { emoji: '🎨', release: 'patch' },
          { emoji: '💄', release: 'patch' },
          { release: 'patch', type: 'style' },
          { release: 'patch', type: 'code-style' },
          { release: 'patch', type: 'lint' },
          { emoji: '📦', release: 'patch' },
          { release: 'patch', type: 'build' },
          { release: 'patch', type: 'deps' },
          { emoji: '🔖', release: 'patch' },
          { emoji: '🚀', release: 'patch' },
          { release: 'patch', type: 'release' },
          { release: 'patch', type: 'bump' },
          { emoji: '🚧', release: 'patch' },
          { release: 'patch', type: 'wip' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
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
