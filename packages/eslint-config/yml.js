module.exports = {
  extends: ['plugin:yml/standard'],

  overrides: [
    {
      files: ['.github/workflows/*.yml', '.github/workflows/*.yaml'],

      rules: {
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ],
}
