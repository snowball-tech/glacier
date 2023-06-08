module.exports = {
  // Always make sure to have "base" in the first position and "prettier" in the
  // last.
  extends: [
    './base',
    './json',
    './markdown',
    './yml',
    './secrets',
    './import',
    './lodash',
    './prettier',
  ].map((fileName) => require.resolve(fileName)),
}
