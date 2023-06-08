require('@snowball-tech/eslint-config/patch')

module.exports = {
  extends: ['@snowball-tech/eslint-config'],

  parserOptions: {
    project: ['./packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },

  root: true,
}
