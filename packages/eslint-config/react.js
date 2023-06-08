module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'airbnb/hooks',

    // `airbnb' extends `airbnb-base`, so here we are
    // making sure that our own base overrides would still carry over when
    // extending the Airbnb React configuration.
    require.resolve('./base'),
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  rules: {
    'class-methods-use-this': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // With React > v17, we don't need to import React in every file anymore.
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}
