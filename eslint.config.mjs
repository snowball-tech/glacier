import base from '@snowball-tech/eslint-snowball-config/configs/base.js'
import html from '@snowball-tech/eslint-snowball-config/configs/html.js'
import importConfig from '@snowball-tech/eslint-snowball-config/configs/import.js'
import json from '@snowball-tech/eslint-snowball-config/configs/json.js'
import markdown from '@snowball-tech/eslint-snowball-config/configs/markdown.js'
import perfectionist from '@snowball-tech/eslint-snowball-config/configs/perfectionist.js'
import prettier from '@snowball-tech/eslint-snowball-config/configs/prettier.js'
import secrets from '@snowball-tech/eslint-snowball-config/configs/secrets.js'
import yml from '@snowball-tech/eslint-snowball-config/configs/yml.js'

import lodash from '@snowball-tech/eslint-snowball-config/configs/lodash.js'

export default [
  ...base,
  ...html,
  ...json,
  ...markdown,
  ...yml,
  ...secrets,
  ...importConfig,
  ...lodash,
  ...perfectionist,
  ...prettier,

  {
    files: ['packages/eslint-snowball-config/**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

    rules: {
      'import/extensions': 'off',
    },
  },

  {
    files: ['packages/eslint-snowball-config/**/*.{js,mjs,cjs}'],

    rules: {
      'import/no-unresolved': [
        'error',
        {
          caseSensitive: true,
          commonjs: true,
          ignore: ['eslint-plugin-perfectionist', 'typescript-eslint'],
        },
      ],
    },
  },
]
