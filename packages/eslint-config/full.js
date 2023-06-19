module.exports = {
  // Always make sure to have "base" in the first position and "prettier" in the
  // last.
  extends: [
    './base',
    './html',
    './json',
    './markdown',
    './sql',
    './yml',
    './secrets',
    './import',
    './typescript',
    './react',
    './next',
    './jest',
    './testing-library',
    './lodash',
    './perfectionist',
    './prettier',
  ].map((fileName) => require.resolve(fileName)),
}
