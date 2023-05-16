module.exports = {
  '*.{js,jsx,ts,tsx,json,yml,yaml}': [`eslint --cache --fix`],
  '*': [`prettier --ignore-unknown --write`],
}
