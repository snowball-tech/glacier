import tailwind from 'eslint-plugin-tailwindcss'

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

    ...tailwind.configs['flat/recommended'],
  },
]
