import * as mdx from 'eslint-plugin-mdx'
import storybook from 'eslint-plugin-storybook'

export default [
  {
    name: 'storybook',

    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

    ...storybook.configs['flat/recommended'],
  },

  {
    name: 'storybook-mdx-base',

    ...mdx.flat,

    files: ['**/*.mdx'],

    processor: mdx.createRemarkProcessor({
      languageMapper: {},
      lintCodeBlocks: true,
    }),
  },

  {
    name: 'storybook-mdx-code-blocks',

    ...mdx.flatCodeBlocks,

    files: ['**/*.mdx'],
  },

  {
    name: 'storybook-mdx-custom',

    files: ['**/*.mdx'],

    rules: {
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx', '.mdx'] },
      ],
    },
  },
]
