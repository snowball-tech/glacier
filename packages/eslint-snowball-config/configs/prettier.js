import jsoncPlugin from 'eslint-plugin-jsonc'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import ymlPlugin from 'eslint-plugin-yml'

export default [
  eslintPluginPrettierRecommended,
  ...jsoncPlugin.configs['flat/prettier'],
  ...ymlPlugin.configs['flat/prettier'],

  {
    name: 'prettier',

    rules: {
      'prettier/prettier': 'off',

      'tailwindcss/classnames-order': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
]
