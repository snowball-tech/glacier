import markdown from '@eslint/markdown'

export default [
  {
    ...markdown.configs.recommended[0],

    ignores: ['**/CHANGELOG.md'],
  },

  {
    name: 'markdown',

    files: ['**/*.{md,mdx}'],

    plugins: {
      markdown,
    },

    language: 'markdown/gfm',
  },

  {
    name: 'markdown-fenced-blocks',

    files: ['**/*.md/*.js', '**/*.mdx/*.js', '**/.*.md/*.ts', '**/.*.mdx/*.ts'],

    rules: {
      'import/no-unresolved': 'off',

      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
    },
  },
]
