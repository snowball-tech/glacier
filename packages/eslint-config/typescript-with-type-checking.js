module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      files: ['**/*.ts', '**/*.tsx'],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true,
      },
    },
  ],
}
