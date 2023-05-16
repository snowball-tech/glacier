module.exports = {
  extends: ['prettier', 'plugin:yml/prettier'],

  rules: {
    // Those rules are conflicting with our Prettier config, so let's disable them.
    // The code will still be properly formatted when running `yarn front format`.
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: false, avoidEscape: true },
    ],
  },
}
