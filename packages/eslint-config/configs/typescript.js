module.exports = {
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended'],

      files: ['**/*.ts', '**/*.tsx'],

      rules: {
        'class-methods-use-this': 'off',

        // TypeScript is able to guess the type of most of our functions,
        // methods or getters. Let's not make it more verbose than it would need
        // to be.
        // See https://imperatorz.slack.com/archives/G8C7PK073/p1591967476132200
        // eslint-disable-next-line sort-keys/sort-keys-fix
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // Those rule are warning in the recommended config, but we want it to
        // be errors.
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-unused-vars': 'error',

        // We need to use the specific TS `no-shadow` rule to avoid false
        // positives.
        // See https://github.com/typescript-eslint/typescript-eslint/issues/2483
        'no-shadow': 'off',
        // eslint-disable-next-line sort-keys/sort-keys-fix
        '@typescript-eslint/no-shadow': 'error',

        // These two are to avoid having "'React' was used before it was
        // defined" errors or other weird stuff like that.
        // See https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
        'no-use-before-define': 'off',
        // eslint-disable-next-line sort-keys/sort-keys-fix
        '@typescript-eslint/no-use-before-define': 'error',
      },
    },
  ],
}
