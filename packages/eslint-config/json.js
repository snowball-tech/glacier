module.exports = {
  extends: ['plugin:jsonc/base', 'plugin:jsonc/recommended-with-json5'],

  overrides: [
    {
      files: ['*.json', '*.json5', '*.jsonc'],
      parser: 'jsonc-eslint-parser',
    },
  ],

  plugins: ['jsonc'],
}
