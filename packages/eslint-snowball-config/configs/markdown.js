import markdown from '@eslint/markdown'

export default [
  {
    name: 'markdown',

    ...markdown.configs.recommended[0],

    files: ['**/*.{md,mdx}'],

    ignores: ['**/CHANGELOG.md'],
  },

  {
    name: 'markdown-custom',

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
