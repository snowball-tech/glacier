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
    // It can be useful to nest ternary in React component render.
    'no-nested-ternary': 'off',

    // Allow autofocus even if it's not perfectly A11Y, it's so useful for
    // users.
    // eslint-disable-next-line sort-keys/sort-keys-fix
    'jsx-a11y/no-autofocus': 'off',

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
