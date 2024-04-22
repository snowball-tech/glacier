module.exports = {
  env: {
    jest: true,
    'jest/globals': true,
  },

  extends: ['plugin:jest/recommended', 'plugin:jest/style'],

  plugin: ['jest'],

  rules: {
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
  },
}
