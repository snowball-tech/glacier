module.exports = {
  // Always make sure to have "base" in the first position and "prettier" in the
  // last.
  extends: [
    './base',
    './sql',
    './json',
    './markdown',
    './yml',
    './secrets',
    './import',
    './typescript',
    './react',
    './next',
    './tailwind',
    './jest',
    './testing-library',
    './lodash',
    './prettier',
  ].map((fileName) => require.resolve(fileName)),
}
