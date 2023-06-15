module.exports = {
  extends: ['plugin:markdown/recommended'],

  overrides: [
    {
      files: ['*.md/*.js', '*.mdx/*.js'],

      rules: {
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],

  plugins: ['markdown'],
}
