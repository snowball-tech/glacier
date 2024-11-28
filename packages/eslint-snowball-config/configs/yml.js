import eslintPluginYml from 'eslint-plugin-yml'

export default [
  eslintPluginYml.configs['flat/standard'][0],

  {
    name: 'yml',

    files: ['**/*.{yml,yaml}'],

    ...eslintPluginYml.configs['flat/standard'][1],
  },

  {
    name: 'github-workflows',

    files: ['**/.github/workflows/*.{yml,yaml}'],

    rules: {
      'yml/no-empty-mapping-value': 'off',
    },
  },
]
