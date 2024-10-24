import html from 'eslint-plugin-html'

export default [
  {
    name: 'html',

    files: ['**/*.html', '**/*.html5', '**/*.xhtml', '**/*.htm'],

    plugins: { html },
  },
]
