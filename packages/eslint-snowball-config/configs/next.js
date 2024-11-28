import getCompatConfig from '../compat.js'

const compatConfig = getCompatConfig(
  ['plugin:@next/next/core-web-vitals'],
  ['@next/next'],
  [
    {
      name: 'next',

      ignores: ['**/.next/*', '**/.well-known'],

      rules: {
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
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
  ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],
)

export default compatConfig
