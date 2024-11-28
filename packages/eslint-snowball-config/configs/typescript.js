import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  name: 'typescript',

  files: ['**/*.ts', '**/*.tsx'],

  ...tseslint.configs.recommended,
  ...importPlugin.flatConfigs.typescript,

  rules: {
    'class-methods-use-this': 'off',

    // Overriding import/extensions configuration to allow TypeScript files.
    // https://github.com/airbnb/javascript/blob/6d05dd8/packages/eslint-config-airbnb-base/rules/imports.js#L139-L143
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        cjs: 'never',
        css: 'always',
        cts: 'never',
        js: 'never',
        json: 'always',
        jsx: 'never',
        mjs: 'never',
        mts: 'never',
        sass: 'always',
        svg: 'always',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // TypeScript is able to guess the type of most of our functions,
    // methods or getters. Let's not make it more verbose than it would need
    // to be.
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Those rule are warning in the recommended config, but we want it to
    // be errors.
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': [
      'off',
      {
        ignoreIIFE: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'off',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // We need to use the specific TS `no-shadow` rule to avoid false
    // positives.
    // See https://github.com/typescript-eslint/typescript-eslint/issues/2483
    'no-shadow': 'off',
    // eslint-disable-next-line perfectionist/sort-objects
    '@typescript-eslint/no-shadow': 'error',

    // These two are to avoid having "'React' was used before it was
    // defined" errors or other weird stuff like that.
    // See https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    // eslint-disable-next-line perfectionist/sort-objects
    '@typescript-eslint/no-use-before-define': 'error',

    // Overriding the base ESLint rule with the TypeScript rule (it throws
    // otherwise).
    'no-useless-constructor': 'off',
    // eslint-disable-next-line perfectionist/sort-objects
    '@typescript-eslint/no-useless-constructor': 'error',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: [
          '.cjs',
          '.cts',
          '.js',
          '.jsx',
          '.mjs',
          '.mts',
          '.ts',
          '.tsx',
        ],
      },
      typescript: {
        alwaysTryTypes: true,
        project: [
          './tsconfig.json',
          'apps/*/tsconfig.json',
          'apps/*/tsconfig.*.json',
          'packages/*/tsconfig.json',
          'packages/*/tsconfig.*.json',
        ],
      },
    },
  },
})
