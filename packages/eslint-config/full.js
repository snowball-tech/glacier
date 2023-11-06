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
    './typescript-with-type-checking',
    './react',
    './next',
    './jest',
    './testing-library',
    './lodash',
    './storybook',
    './perfectionist',
    './tailwind',
    './prettier',
  ].map((fileName) => require.resolve(fileName)),
}
