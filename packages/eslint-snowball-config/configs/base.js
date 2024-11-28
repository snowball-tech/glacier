import babelParser from '@babel/eslint-parser'
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
  {
    name: 'base',

    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

    ignores: [
      '!**/.*.{js,mjs,cjs,jsx,ts,mts,tsx}',
      '!.github',
      '!.storybook',
      '!.vscode',
      '**/*.min.{js,mjs,cjs,jsx,ts,mts,tsx}',
      '.yarn/**/*',
      '.pnp.*',
      '**/dist/*',
      '**/build/*',
      '**/out/*',
      '**/storybook-static/*',
      '**/styled-system/*',
      '**/coverage/*',
      '**/node_modules/*',
    ],

    ...js.configs.recommended,

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
    },

    rules: {
      strict: ['error', 'never'],
    },
  },

  {
    name: 'babel-parser',

    files: ['**/*.{js,mjs,cjs}'],

    languageOptions: {
      parser: babelParser,

      parserOptions: {
        babelOptions: {
          babelrc: false,
          configFile: false,
        },
        requireConfigFile: false,
      },

      sourceType: 'module',
    },
  },

  ...bestPractices,
  ...errors,
  ...es6,
  ...stylistic,
  ...variables,

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

    ...pluginPromise.configs['flat/recommended'],
  },

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

    ...eslintPluginUnicorn.configs['flat/recommended'],

    rules: {
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
