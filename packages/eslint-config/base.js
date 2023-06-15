module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:promise/recommended', 'airbnb-base'],
  ignorePatterns: [
    '!.*.cjs',
    '!.*.js',
    '!.*.json',
    '!.*.json5',
    '!.*.jsx',
    '!.*.md',
    '!.*.mdx',
    '!.*.mjs',
    '!.*.ts',
    '!.*.tsx',
    '!.*.yaml',
    '!.*.yml',
    '!.github',
    '!.storybook',
    '.pnp.*',
    '*.lock',
    '*.tsbuildinfo',
    '**/dist/*',
    '**/build/*',
    '**/out/*',
    '**/coverage/*',
    'LICENSE',
  ],

  overrides: [
    {
      files: ['**/.eslintrc.js'],

      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],

  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  plugins: ['promise', 'sort-keys'],

  rules: {
    'class-methods-use-this': 'error',
    'line-comment-position': 'error',
    'newline-before-return': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: [],
        props: true,
      },
    ],
    'no-void': ['error', { allowAsStatement: true }],
    'prefer-destructuring': [
      'error',
      {
        // Prevent assignment expressions to be considered as wrong
        // implementations.
        // For example, instead of writting `[this.item] = array`, we'll have to
        // keep `this.item = array[O]`.
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Disable the default sort-keys rule.
    'sort-keys': 'off',
    // And enable the fixable one instead.
    'sort-keys/sort-keys-fix': 'error',
  },
}
