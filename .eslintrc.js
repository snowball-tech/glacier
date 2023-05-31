require('@snowball-tech/eslint-config/patch')

module.exports = {
  extends: ['@snowball-tech/eslint-config/.eslintrc.js'],

  parserOptions: {
    project: ['./packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },

  settings: {
    'import/resolver': {
      typescript: {
        project: ['./packages/*/tsconfig.json'],
      },
    },
  },
}
