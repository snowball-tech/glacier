module.exports = {
  env: {
    jest: true,
  },

  extends: ['plugin:jest/recommended', 'plugin:jest/style'],

  rules: {
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
  },
}
