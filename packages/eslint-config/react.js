module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
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
