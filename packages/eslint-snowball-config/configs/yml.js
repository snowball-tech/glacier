import eslintPluginYml from 'eslint-plugin-yml'

export default [
  ...eslintPluginYml.configs['flat/standard'],

  {
    name: 'yml',

    files: ['.github/workflows/*.yml', '.github/workflows/*.yaml'],

    rules: {
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
