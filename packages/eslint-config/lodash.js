module.exports = {
  extends: ['plugin:lodash/recommended', 'plugin:lodash-fp/recommended'],

  plugins: ['lodash', 'lodash-fp'],

  rules: {
    'lodash/prefer-lodash-method': 'off',
  },
}
