import markdown from 'eslint-plugin-markdown'

export default [
  ...markdown.configs.recommended,

  {
    name: 'markdown',

    files: ['*.md/*.js', '*.mdx/*.js'],

    rules: {
      'import/no-unresolved': 'off',

      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
    },
  },
]
