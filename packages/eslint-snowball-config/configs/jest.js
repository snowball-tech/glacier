import jest from 'eslint-plugin-jest'

export default [
  {
    name: 'jest',

    files: ['**/*.test.{js,jsx,ts,tsx}'],

    ...jest.configs['flat/recommended'],
  },

  {
    name: 'jest-style',

    files: ['**/*.test.{js,jsx,ts,tsx}'],

    ...jest.configs['flat/style'],
  },

  {
    name: 'jest-custom',

    files: ['**/*.test.{js,jsx,ts,tsx}'],

    rules: {
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
    },
  },
]
