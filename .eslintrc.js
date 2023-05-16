require('@snowball/eslint-config/patch')

module.exports = {
  extends: ['@snowball/eslint-config/.eslintrc.js'],

  parserOptions: {
    tsconfigRootDir: __dirname,
  },
}
