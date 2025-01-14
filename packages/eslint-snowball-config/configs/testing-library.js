import testingLibrary from 'eslint-plugin-testing-library'

export default [
  {
    name: 'testing-library-react',

    ...testingLibrary.configs['flat/react'],

    files: ['**/?(*.)+(spec|test)?(s).[jt]s?(x)'],
  },

  {
    name: 'testing-library-custom',

    files: ['**/?(*.)+(spec|test)?(s).[jt]s?(x)'],

    rules: {
      'jest/expect-expect': 'error',

      'testing-library/no-debugging-utils': 'off',
      'testing-library/no-node-access': 'off',
      'testing-library/no-wait-for-side-effects': 'error',
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-presence-queries': 'error',
      'testing-library/prefer-query-by-disappearance': 'error',
    },
  },
]
