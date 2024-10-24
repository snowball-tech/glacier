import noSecrets from 'eslint-plugin-no-secrets'

export default [
  {
    name: 'secrets',

    plugins: {
      'no-secrets': noSecrets,
    },

    rules: {
      'no-secrets/no-secrets': [
        'error',
        {
          additionalDelimiters: ['/', '_', '.', '-'],
          tolerance: 4.5,
        },
      ],
    },
  },
]
