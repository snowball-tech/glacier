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
      },
    },
  ],
)

export default compatConfig
