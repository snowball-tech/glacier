import tailwind from 'eslint-plugin-tailwindcss'

export default [
  ...tailwind.configs['flat/recommended'].map((config) => ({
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,tsx}'],

    ...config,
  })),
]
