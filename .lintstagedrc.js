module.exports = {
  'default.json5': [
    `yarn validate:config`,
  ],
  '*.{js,jsx,ts,tsx,json}': [
    `yarn lint:file`,
    `yarn format:file`,
  ],
  '*.{json5,md,css,html,yml,yaml}': [`yarn format:file`],
}
