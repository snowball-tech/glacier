module.exports = {
  // Always make sure to have "base" in the first position.
  extends: ['./base', './styled'].map((fileName) => require.resolve(fileName)),
}
