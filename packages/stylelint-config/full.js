module.exports = {
  // Always make sure to have "base" in the first position.
  extends: ['./base', './styled', './tailwind'].map((fileName) =>
    require.resolve(fileName),
  ),
}
