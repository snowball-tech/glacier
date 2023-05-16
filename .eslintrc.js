require('@snowball-tech/eslint-config/patch')

module.exports = {
  extends: ['@snowball-tech/eslint-config/.eslintrc.js'],

  parserOptions: {
    tsconfigRootDir: __dirname,
  },
}
