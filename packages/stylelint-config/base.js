module.exports = {
  allowEmptyInput: true,

  extends: ['stylelint-config-standard', 'stylelint-config-html'],

  // Path for the ignore files is from the installed node_module, not the root
  // of the project...
  ignoreFiles: [
    '../../../**/*.md',
    '../../../**/*.mdx',
    '../../../**/*.js',
    '../../../**/*.cjs',
    '../../../**/*.mjs',
    '../../../**/*.ts',
    '../../../**/*.cts',
    '../../../**/*.mts',
    '../../../**/*.log',
    '../../../**/.*',
    '../../../**/!.*.html',
    '../../../**/!.*.css',
    '../../../**/!.*.jsx',
    '../../../**/!.*.tsx',
    '../../../**/!.github/**/*',
    '../../../**/!.storybook/**/*',
    '../../../**/!.vscode/**/*',
    '../../../**/.pnp.*',
    '../../../**/*.lock',
    '../../../**/*.tsbuildinfo',
    '../../../**/dist/**/*',
    '../../../**/build/**/*',
    '../../../**/out/**/*',
    '../../../**/storybook-static/**/*',
    '../../../**/coverage/**/*',
    '../../../**/node_modules/**/*',
    '../../../**/LICENSE',
  ],

  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,

  rules: {
    'declaration-empty-line-before': null,
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case/BEM-style`,
      },
    ],
    'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(--?[a-z0-9]+)*$',
      {
        message: (selector) =>
          `Expected id selector "${selector}" to be kebab-case/BEM-style`,
      },
    ],
  },
}
