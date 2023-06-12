module.exports = {
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:yml/prettier',
    'plugin:jsonc/prettier',
  ],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'off',
  },
}
