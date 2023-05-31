module.exports = {
  extends: ['plugin:@next/next/core-web-vitals'],

  overrides: [
    {
      files: ['**/route.ts'],
      rules: { 'import/prefer-default-export': 'off' },
    },
  ],
}
