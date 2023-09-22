module.exports = {
  plugins: ['no-secrets'],

  rules: {
    'no-secrets/no-secrets': [
      'error',
      {
        additionalDelimiters: ['/', '_', '.', '-'],
        tolerance: 4.5,
      },
    ],
  },
}
