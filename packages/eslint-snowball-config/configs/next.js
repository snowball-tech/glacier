import getCompatConfig from '../compat.js'

const compatConfig = getCompatConfig(
  ['plugin:@next/next/core-web-vitals'],
  ['@next/next'],
  [
    {
      name: 'next-custom',

      ignores: ['**/.next/*', '**/.well-known'],

      rules: {
        '@next/next/no-html-link-for-pages': 'off',

        'jsx-a11y/alt-text': [
          'warn',
          {
            elements: ['img'],
            img: ['Image'],
          },
        ],
        'jsx-a11y/aria-props': 'warn',
        'jsx-a11y/aria-proptypes': 'warn',
        'jsx-a11y/aria-unsupported-elements': 'warn',
        'jsx-a11y/role-has-required-aria-props': 'warn',
        'jsx-a11y/role-supports-aria-props': 'warn',

        'react/jsx-no-target-blank': 'off',
        'react/no-unknown-property': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
  ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],
)

export default compatConfig
