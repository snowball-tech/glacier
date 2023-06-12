module.exports = {
  extends: ['plugin:perfectionist/recommended-natural'],

  plugins: ['perfectionist'],

  rules: {
    // Disable all sorting rules from TypeScript ESLint to use the perfectionist
    // ones.
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/sort-type-constituents': 'off',

    // Disable the import sorting rules from the import plugin to use the
    // perfectionist ones.
    'import/order': 'off',
    'import/sort-imports': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          ['builtin-type', 'builtin'],
          ['type', 'external'],
          ['internal-type', 'internal'],
          [
            'parent-type',
            'parent',
            'sibling-type',
            'sibling',
            'index-type',
            'index',
          ],
          ['side-effect', 'object', 'styles'],
          'unknown',
        ],
        'internal-pattern': ['~/**', '@/**'],
        'newlines-between': 'always',
        type: 'natural',
      },
    ],

    // Disable the JSX sorting rules from the React plugin to use the
    // perfectionist one.
    'react/jsx-sort-props': 'off',

    // Make sure the default sort keys rule is disabled.
    'sort-keys': 'off',
    // Also disable the object key sorting rules from the sort-keys plugin to
    // use the perfectionist one.
    'sort-keys/sort-keys-fix': 'off',
  },
}
