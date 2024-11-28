import noSecrets from 'eslint-plugin-no-secrets'

export default [
  {
    name: 'secrets',

    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

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
