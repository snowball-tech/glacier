import importPlugin from 'eslint-plugin-import'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'

import eslintPluginReact from 'eslint-plugin-react'

import getCompatConfig from '../compat.js'

const compatConfig = getCompatConfig(
  ['plugin:react-hooks/recommended'],
  ['react-hooks'],
  [
    {
      name: 'react',

      ...eslintPluginReact.configs.flat.recommended,
      ...eslintPluginJsxA11y.flatConfigs.recommended,
      ...importPlugin.flatConfigs.react,

      rules: {
        'class-methods-use-this': 'off',
        // It can be useful to nest ternary in React component render.
        'no-nested-ternary': 'off',

        // Allow autofocus even if it's not perfectly A11Y, it's so useful for
        // users.
        'jsx-a11y/no-autofocus': 'off',

        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.jsx', '.tsx'] },
        ],

        // With React > v17, we don't need to import React in every file anymore.
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },

      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
  ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],
)

export default compatConfig
