import json from '@eslint/json'

export default [
  {
    name: 'json',

    files: ['**/*.json', '**/.*.json'],

    ignores: ['package-lock.json'],

    language: 'json/json',

    ...json.configs.recommended,
  },

  {
    name: 'json5',

    files: ['**/*.json5', '**/.*.json5'],

    language: 'json/json5',

    ...json.configs.recommended,
  },

  {
    name: 'json5',

    files: ['**/*.jsonc', '**/.*.jsonc'],

    language: 'json/jsonc',

    ...json.configs.recommended,
  },

  {
    name: 'json-with-trailing-commas',

    files: ['**/tsconfig.json', '**/.vscode/**/*.json'],

    language: 'json/jsonc',

    languageOptions: {
      allowTrailingCommas: true,
    },

    ...json.configs.recommended,
  },
]
