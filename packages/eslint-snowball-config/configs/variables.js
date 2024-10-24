import confusingBrowserGlobals from 'confusing-browser-globals'

export default [
  {
    name: 'variables',

    rules: {
      // enforce or disallow variable initializations at definition
      'init-declarations': 'off',

      // disallow the catch clause parameter name being the same as a variable in the outer scope
      'no-catch-shadow': 'off',

      // disallow deletion of variables
      'no-delete-var': 'error',

      // disallow labels that share a name with a variable
      // https://eslint.org/docs/rules/no-label-var
      'no-label-var': 'error',

      // disallow specific globals
      'no-restricted-globals': [
        'error',
        {
          message:
            'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
          name: 'isFinite',
        },
        {
          message:
            'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
          name: 'isNaN',
        },
        ...confusingBrowserGlobals.map((g) => ({
          message: `Use window.${g} instead. https://github.com/facebook/create-react-app/blob/HEAD/packages/confusing-browser-globals/README.md`,
          name: g,
        })),
      ],

      // disallow declaration of variables already declared in the outer scope
      'no-shadow': 'error',

      // disallow shadowing of names such as arguments
      'no-shadow-restricted-names': 'error',

      // disallow use of undeclared variables unless mentioned in a /*global */ block
      'no-undef': 'error',

      // disallow use of undefined when initializing variables
      'no-undef-init': 'error',

      // disallow use of undefined variable
      // https://eslint.org/docs/rules/no-undefined
      // TODO: enable?
      'no-undefined': 'off',

      // disallow declaration of variables that are not used in the code
      'no-unused-vars': [
        'error',
        { args: 'after-used', ignoreRestSiblings: true, vars: 'all' },
      ],

      // disallow use of variables before they are defined
      'no-use-before-define': [
        'error',
        { classes: true, functions: true, variables: true },
      ],
    },
  },
]
