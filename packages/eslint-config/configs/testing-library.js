const { hasDependency } = require('@snowball-tech/utils')

const hasReact = hasDependency('react')

module.exports = {
  overrides: [
    {
      extends: hasReact ? ['plugin:testing-library/react'] : [],

      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
      files: ['**/?(*.)+(spec|test)?(s).[jt]s?(x)'],

      rules: {
        // @testing-library queries throw whenever the element is not found. Because
        // of that, many tests are written without assertions, but are still safe.
        'jest/expect-expect': hasReact ? 'off' : 'error',

        'testing-library/no-debugging-utils': 'off',
        'testing-library/no-node-access': 'off',
        'testing-library/no-wait-for-side-effects': 'error',
        'testing-library/prefer-explicit-assert': 'error',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-query-by-disappearance': 'error',
      },
    },
  ],
}
