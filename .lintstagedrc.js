module.exports = {
  '!*.{js,cjs,mjs,jsx,ts,tsx,json,json5,jsonc,yml,yaml,md}': [
    'prettier --ignore-unknown --write',
  ],
  '*.{js,cjs,mjs,jsx,ts,tsx,json,json5,jsonc,yml,yaml,md}': [
    'eslint --cache --fix',
    'prettier --ignore-unknown --write',
  ],
}
