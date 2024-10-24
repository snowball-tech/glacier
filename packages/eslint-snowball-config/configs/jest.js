import jest from 'eslint-plugin-jest'

export default [
  {
    name: 'jest',

    files: ['**/*.test.js', '**/*.test.jsx'],

    ...jest.configs['flat/recommended'],
    ...jest.configs['flat/style'],

    rules: {
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
    },
  },
]
