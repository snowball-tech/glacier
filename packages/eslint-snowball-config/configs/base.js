import js from '@eslint/js'
import pluginPromise from 'eslint-plugin-promise'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

import bestPractices from './best-practices.js'
import errors from './errors.js'
import es6 from './es6.js'
import stylistic from './stylistic.js'
import variables from './variables.js'

export default [
  js.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  pluginPromise.configs['flat/recommended'],

  ...bestPractices,
  ...errors,
  ...es6,
  ...stylistic,
  ...variables,

  {
    name: 'base',

    ignores: [
      '*.css',
      '*.scss',
      '*.sass',
      '!.*.cjs',
      '!.*.js',
      '!.*.json',
      '!.*.json5',
      '!.*.jsx',
      '!.*.md',
      '!.*.mdx',
      '!.*.mjs',
      '!.*.ts',
      '!.*.tsx',
      '!.*.yaml',
      '!.*.yml',
      '!.github',
      '!.storybook',
      '!.vscode',
      '**/translations/*.json',
      '.yarn/**/*',
      '.pnp.*',
      '*.lock',
      '*.tsbuildinfo',
      '**/dist',
      '**/build',
      '**/out',
      '**/storybook-static',
      '**/styled-system',
      '**/coverage',
      '**/node_modules',
      'LICENSE',
    ],
  },

  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.builtin,
        ...globals.es2024,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
      sourceType: 'module',
    },
  },

  {
    rules: {
      strict: ['error', 'never'],

      'unicorn/filename-case': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          ignore: ['e2e', /^ignore/i],
          replacements: {
            acc: {
              accumulator: false,
            },
            arg: {
              argument: false,
            },
            args: {
              arguments: false,
            },
            dev: {
              development: false,
            },
            dist: {
              distribution: false,
            },
            doc: {
              document: false,
            },
            docs: {
              documentation: false,
              documents: false,
            },
            env: {
              environment: false,
            },
            param: {
              parameter: false,
            },
            params: {
              parameters: false,
            },
            prod: {
              production: false,
            },
            prop: {
              property: false,
            },
            props: {
              properties: false,
            },
            ref: {
              reference: false,
            },
            refs: {
              references: false,
            },
          },
        },
      ],
    },
  },
]
