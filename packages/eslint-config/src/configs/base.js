module.exports = {
  env: {
    es2022: true,
    node: true,
  },

  extends: ['eslint:recommended', 'airbnb-base'],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },

  root: true,

  rules: {
    'class-methods-use-this': 'error',
    'line-comment-position': 'error',
    'newline-before-return': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['state'],
        props: true,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        // Prevent assignment expressions to be considered as wrong implementations. For example,
        // instead of writting `[this.item] = array`, we'll have to keep `this.item = array[O]`.
        AssignmentExpression: {
          array: false,
          object: true,
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
  },
}
