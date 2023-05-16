require('@snowball/eslint-config/dist/monorepo-patch')

module.exports = {
  extends: ['@snowball/eslint-config/dist/config'],

  parserOptions: {
    tsconfigRootDir: __dirname
  },
}
