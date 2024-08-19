module.exports = {
  env: {
    browser: true,
    es2017: true,
    es2021: true,
    es2022: true,
    es2024: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'airbnb-base',
  ],
  ignorePatterns: [
    '*.css',
    '*.scss',
    '*.sass',
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
    '!.vscode',
    '.pnp.*',
    '*.lock',
    '*.tsbuildinfo',
    '**/dist',
    '**/build',
    '**/out',
    '**/storybook-static',
    '**/styled-system',
    '**/coverage',
    '**/node_modules',
    'LICENSE',
  ],

  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },

  plugins: ['unicorn', 'promise', 'sort-keys'],

  rules: {
    'class-methods-use-this': 'error',
    'line-comment-position': 'error',
    'newline-before-return': 'error',
    'no-console':
      process.env.NODE_ENV === 'production'
        ? [
            'error',
            {
              allow: [
                'clear',
                'error',
                'group',
                'groupCollapsed',
                'groupEnd',
                'info',
                'time',
                'timeEnd',
                'trace',
                'warn',
              ],
            },
          ]
        : 'off',
    'no-continue': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-irregular-whitespace': [
      'error',
      {
        skipJSXText: true,
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        // Allow setting the current value of a MutableRefObject.
        ignorePropertyModificationsForRegex: ['.*Ref$'],
        props: true,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
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

    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        // eslint-disable-next-line unicorn/prefer-string-raw
        ignore: ['e2e', /^ignore/i],
        replacements: {
          acc: {
            accumulator: false,
          },
          arg: {
            argument: false,
          },
          args: {
            arguments: false,
          },
          dev: {
            development: false,
          },
          dist: {
            distribution: false,
          },
          doc: {
            document: false,
          },
          docs: {
            documentation: false,
            documents: false,
          },
          env: {
            environment: false,
          },
          param: {
            parameter: false,
          },
          params: {
            parameters: false,
          },
          prod: {
            production: false,
          },
          prop: {
            property: false,
          },
          props: {
            properties: false,
          },
          ref: {
            reference: false,
          },
          refs: {
            references: false,
          },
        },
      },
    ],
  },
}
