const { hasDependency } = require('@snowball-tech/utils')

const hasReact = hasDependency('react')

module.exports = {
  extends: [
    require.resolve('./configs/base.js'),
    require.resolve('./configs/snowball.js'),
    require.resolve('./configs/import.js'),
    hasDependency('jest') && require.resolve('./configs/jest.js'),
    hasDependency('testing-library') &&
      require.resolve('./configs/testing-library.js'),
    hasReact && require.resolve('./configs/react.js'),
    hasDependency('next') && require.resolve('./configs/next.js'),
    hasDependency('typescript') && require.resolve('./configs/typescript.js'),
    hasDependency('lodash') && require.resolve('./configs/lodash.js'),
    require.resolve('./configs/json.js'),
    require.resolve('./configs/markdown.js'),
    require.resolve('./configs/yml.js'),
    // Always import prettier as the last extend so that it can disable any
    // conflicting rules from any plugin above.
    // /!\ If you want to force enable any conflicting rule from a plugin above,
    // you will have to do it inside of the "prettier" config!
    hasDependency('prettier') && require.resolve('./configs/prettier.js'),
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
