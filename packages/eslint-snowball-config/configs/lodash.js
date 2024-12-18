import getCompatConfig from '../compat.js'

const compatConfig = getCompatConfig(
  ['plugin:lodash/recommended', 'plugin:lodash-fp/recommended'],
  ['lodash', 'lodash-fp'],
  [
    {
      name: 'lodash',

      rules: {
        'lodash/prefer-constant': 'off',
        'lodash/prefer-lodash-method': 'off',
        'lodash/prefer-noop': 'off',

        // TODO: re-enable when lodash eslint plugin is updated for ESLint 9.15
        'lodash/callback-binding': 'off',
        'lodash/chain-style': 'off',
        'lodash/chaining': 'off',
        'lodash/collection-method-value': 'off',
        'lodash/collection-ordering': 'off',
        'lodash/collection-return': 'off',
        'lodash/consistent-compose': 'off',
        'lodash/identity-shorthand': 'off',
        'lodash/import-scope': 'off',
        'lodash/matches-prop-shorthand': 'off',
        'lodash/matches-shorthand': 'off',
        'lodash/no-commit': 'off',
        'lodash/no-double-unwrap': 'off',
        'lodash/no-extra-args': 'off',
        'lodash/no-unbound-this': 'off',
        'lodash/path-style': 'off',
        'lodash/prefer-compact': 'off',
        'lodash/prefer-filter': 'off',
        'lodash/prefer-find': 'off',
        'lodash/prefer-flat-map': 'off',
        'lodash/prefer-get': 'off',
        'lodash/prefer-immutable-method': 'off',
        'lodash/prefer-includes': 'off',
        'lodash/prefer-invoke-map': 'off',
        'lodash/prefer-is-nil': 'off',
        'lodash/prefer-lodash-chain': 'off',
        'lodash/prefer-lodash-typecheck': 'off',
        'lodash/prefer-map': 'off',
        'lodash/prefer-matches': 'off',
        'lodash/prefer-over-quantifier': 'off',
        'lodash/prefer-reject': 'off',
        'lodash/prefer-some': 'off',
        'lodash/prefer-startswith': 'off',
        'lodash/prefer-thru': 'off',
        'lodash/prefer-times': 'off',
        'lodash/prefer-wrapper-method': 'off',
        'lodash/preferred-alias': 'off',
        'lodash/prop-shorthand': 'off',
        'lodash/unwrap': 'off',

        // TODO: re-enable when lodash-fp eslint plugin is updated for ESLint 9.15
        'lodash-fp/consistent-name': 'off',
        'lodash-fp/no-argumentless-calls': 'off',
        'lodash-fp/no-chain': 'off',
        'lodash-fp/no-extraneous-args': 'off',
        'lodash-fp/no-extraneous-function-wrapping': 'off',
        'lodash-fp/no-extraneous-iteratee-args': 'off',
        'lodash-fp/no-partial-of-curried': 'off',
        'lodash-fp/no-single-composition': 'off',
        'lodash-fp/no-submodule-destructuring': 'off',
        'lodash-fp/no-unused-result': 'off',
        'lodash-fp/prefer-compact': 'off',
        'lodash-fp/prefer-composition-grouping': 'off',
        'lodash-fp/prefer-constant': 'off',
        'lodash-fp/prefer-flat-map': 'off',
        'lodash-fp/prefer-get': 'off',
        'lodash-fp/prefer-identity': 'off',
        'lodash-fp/use-fp': 'off',
      },
    },
  ],
  ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],
)

export default compatConfig
