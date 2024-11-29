import allJest from './configs/all-jest.js'
import allRecommended from './configs/all-recommended.js'
import html from './configs/html.js'
import importConfig from './configs/import.js'
import jest from './configs/jest.js'
import json from './configs/json.js'
import lodash from './configs/lodash.js'
import markdown from './configs/markdown.js'
import nextJest from './configs/next-jest.js'
import nextRecommended from './configs/next-recommended.js'
import next from './configs/next.js'
import perfectionist from './configs/perfectionist.js'
import prettier from './configs/prettier.js'
import reactJest from './configs/react-jest.js'
import reactRecommended from './configs/react-recommended.js'
import react from './configs/react.js'
import recommended from './configs/recommended.js'
import secrets from './configs/secrets.js'
import storybookJest from './configs/storybook-jest.js'
import storybookRecommended from './configs/storybook-recommended.js'
import storybook from './configs/storybook.js'
import tailwind from './configs/tailwind.js'
import testingLibrary from './configs/testing-library.js'
import typescript from './configs/typescript.js'
import yml from './configs/yml.js'

export default {
  html,
  import: importConfig,
  jest,
  'jest/all': allJest,
  'jest/next': nextJest,
  'jest/react': reactJest,
  'jest/storybook': storybookJest,
  json,
  lodash,
  markdown,
  next,
  perfectionist,
  prettier,
  react,
  recommended,
  'recommended/all': allRecommended,
  'recommended/next': nextRecommended,
  'recommended/react': reactRecommended,
  'recommended/storybook': storybookRecommended,
  secrets,
  storybook,
  tailwind,
  testingLibrary,
  typescript,
  yml,
}
