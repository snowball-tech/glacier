module.exports = {
  plugins: ['sql'],

  rules: {
    'sql/format': 'error',
    'sql/no-unsafe-query': 'error',
  },
}
