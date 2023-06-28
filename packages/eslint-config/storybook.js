module.exports = {
  extends: ['plugin:storybook/recommended', 'plugin:mdx/recommended'],

  overrides: [
    {
      files: ['*.mdx'],

      rules: {
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.jsx', '.tsx', '.mdx'] },
        ],
      },
    },
  ],

  plugins: ['mdx'],

  settings: {
    'mdx/code-blocks': true,
  },
}
