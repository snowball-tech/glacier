module.exports = {
  '*': ['prettier --ignore-unknown --write'],
  '*.{js,jsx,ts,tsx,json,yml,yaml}': ['eslint --cache --fix'],
}
