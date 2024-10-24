import perfectionist from 'eslint-plugin-perfectionist'

export default [
  perfectionist.configs['recommended-natural'],

  {
    name: 'perfectionist',

    rules: {
      // Disable all sorting rules from TypeScript ESLint to use the perfectionist
      // ones.
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      '@typescript-eslint/sort-type-constituents': 'off',

      // Disable the import sorting rules from the import plugin to use the
      // perfectionist ones.
      'import/order': 'off',
      'import/sort-imports': 'off',

      'perfectionist/sort-enums': [
        'error',
        {
          partitionByComment: true,
          type: 'natural',
        },
      ],

      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {
              react: ['react', 'react-*'],
            },
            value: {
              lodash: ['lodash', 'lodash/*', 'lodash/fp', 'lodash/fp/*'],
              react: ['react', 'react-*'],
            },
          },
          groups: [
            'builtin-type',
            'builtin',
            'external-type',
            'external',
            'react',
            'lodash',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            ['object', 'style'],
            'side-effect',
            'side-effect-style',
            'unknown',
          ],
          internalPattern: ['~/**', '@/**'],
          newlinesBetween: 'always',
          type: 'natural',
        },
      ],

      'perfectionist/sort-interfaces': [
        'error',
        {
          customGroups: {
            callback: 'on*',
          },
          groupKind: 'required-first',
          groups: [['multiline', 'unknown'], 'callback'],
          partitionByNewLine: true,
          type: 'natural',
        },
      ],

      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: {
            callback: 'on*',
            system: ['children', 'id', 'key', 'ref'],
          },
          groups: ['system', ['shorthand', 'multiline', 'unknown'], 'callback'],
          type: 'natural',
        },
      ],

      'perfectionist/sort-named-exports': [
        'error',
        {
          groupKind: 'types-first',
          type: 'natural',
        },
      ],

      'perfectionist/sort-named-imports': [
        'error',
        {
          groupKind: 'types-first',
          type: 'natural',
        },
      ],

      'perfectionist/sort-object-types': [
        'error',
        {
          customGroups: {
            callback: 'on*',
          },
          groupKind: 'required-first',
          groups: [['multiline', 'unknown'], 'callback'],
          partitionByNewLine: true,
          type: 'natural',
        },
      ],

      'perfectionist/sort-objects': [
        'error',
        {
          partitionByComment: 'Group*',
          partitionByNewLine: true,
          type: 'natural',
        },
      ],

      'perfectionist/sort-union-types': [
        'error',
        {
          type: 'natural',
        },
      ],

      // Disable the JSX sorting rules from the React plugin to use the
      // perfectionist one.
      'react/jsx-sort-props': 'off',
      // Make sure the default sort imports rule is disabled.
      'sort-imports': 'off',

      // Make sure the default sort keys rule is disabled.
      'sort-keys': 'off',
    },
  },
]
