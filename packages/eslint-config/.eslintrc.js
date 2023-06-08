module.exports = {
  extends: [require.resolve('./index')],

  overrides: [
    {
      files: ['*.js'],

      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
}
