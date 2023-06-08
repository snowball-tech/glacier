module.exports = {
  extends: ['plugin:lodash/recommended', 'plugin:lodash-fp/recommended'],

  overrides: [
    {
      files: ['**/*.jsx', '**/*.tsx'],

      rules: {
        'lodash-fp/prefer-constant': 'off',
      },
    },
  ],

  plugins: ['lodash', 'lodash-fp'],

  rules: {
    'lodash/prefer-lodash-method': 'off',
  },
}
