const { hasDependency } = require('@snowball-tech/utils')

const hasJest = hasDependency('jest')
const hasLodash = hasDependency('lodash')
const hasNext = hasDependency('next')
const hasPrettier = hasDependency('prettier')
const hasReact = hasDependency('react')
const hasTestingLibrary = hasDependency('testing-library')
const hasTypescript = hasDependency('typescript')

module.exports = {
  extends: [
    require.resolve('./configs/base.js'),
    require.resolve('./configs/snowball.js'),
    require.resolve('./configs/import.js'),
    hasTypescript && require.resolve('./configs/typescript.js'),
    hasReact && require.resolve('./configs/react.js'),
    hasLodash && require.resolve('./configs/lodash.js'),
    hasJest && require.resolve('./configs/jest.js'),
    hasJest &&
      hasTestingLibrary &&
      require.resolve('./configs/testing-library.js'),
    require.resolve('./configs/json.js'),
    require.resolve('./configs/markdown.js'),
    require.resolve('./configs/yml.js'),

    // Always left this one last before Prettier.
    hasReact && hasNext && require.resolve('./configs/next.js'),

    // Always import prettier as the last extend so that it can disable any
    // conflicting rules from any plugin above.
    // /!\ If you want to force enable any conflicting rule from a plugin above,
    // you will have to do it inside of the "prettier" config!
    hasPrettier && require.resolve('./configs/prettier.js'),
  ].filter(Boolean),

  ignorePatterns: [
    '!.*.js',
    '!.*.jsx',
    '!.*.cjs',
    '!.*.mjs',
    '!.*.ts',
    '!.*.tsx',
    '!.*.yml',
    '!.*.yaml',
    '!.github',
    '.pnp.*',
    '*.lock',
    '**/dist/*',
    '**/build/*',
    '**/out/*',
    '**/coverage/*',
  ],
}
