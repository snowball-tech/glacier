import eslintConfigPrettier from 'eslint-config-prettier'
import ymlPlugin from 'eslint-plugin-yml'

export default [
  ...ymlPlugin.configs['flat/prettier'],

  {
    name: 'prettier',

    rules: {
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },

  {
    ...eslintConfigPrettier,
  },
]
