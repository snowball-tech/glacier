module.exports = {
  extends: ['plugin:import/recommended'],

  plugins: ['import'],

  rules: {
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        json: 'always',
        sass: 'always',
        svg: 'always',
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
    // no-extraneous-dependencies doesn't work well with monorepos and Yarn
    // workspaces.
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-default': 'off',

    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',

    'sort-imports': [
      'error',
      {
        // "import/order" already handle sorting import statements between them.
        ignoreDeclarationSort: true,
        // However "import/order" doesn't handle sorting of the members of a
        // destructured import.
        // E.g: `import { foo, bar } from 'foobar'` will not fail with
        // "import/order", but will with "sort-imports".
        // And the good thing is that "sort-imports" is also auto-fixable.
      },
    ],
  },
}