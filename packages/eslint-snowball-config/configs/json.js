import eslintPluginJsonc from 'eslint-plugin-jsonc'

export default [
  ...eslintPluginJsonc.configs['flat/base'],

  {
    name: 'json',

    files: ['*.json'],

    ...eslintPluginJsonc.configs['flat/recommended-with-json'][2],
  },
  {
    name: 'jsonc',

    files: ['*.jsonc'],

    ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'][2],
  },
  {
    name: 'json5',

    files: ['*.json5'],

    ...eslintPluginJsonc.configs['flat/recommended-with-json5'][2],
  },
]
