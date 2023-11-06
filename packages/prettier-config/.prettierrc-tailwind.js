const config = require('./.prettierrc')

module.exports = {
  ...config,
  plugins: [...(config.plugins || []), 'prettier-plugin-tailwindcss'],
}
