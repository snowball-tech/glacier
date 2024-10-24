import * as mdx from 'eslint-plugin-mdx'
import storybook from 'eslint-plugin-storybook'

export default [
  ...storybook.configs['flat/recommended'],

  {
    name: 'storybook-mdx-base',

    ...mdx.flat,

    processor: mdx.createRemarkProcessor({
      languageMapper: {},
      lintCodeBlocks: true,
    }),
  },
  mdx.flatCodeBlocks,

  {
    name: 'storybook-mdx',

    files: ['*.mdx'],

    rules: {
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.jsx', '.tsx', '.mdx'] },
      ],
    },
  },
]
