import base from './base'
import html from './html'
import importConfig from './import'
import json from './json'
import lodash from './lodash'
import markdown from './markdown'
import perfectionist from './perfectionist'
import prettier from './prettier'
import react from './react'
import secrets from './secrets'
import tailwind from './tailwind'
import testingLibrary from './testing-library'
import typescript from './typescript'
import yml from './yml'

export default [
  ...base,
  ...html,
  ...json,
  ...markdown,
  ...yml,
  ...secrets,
  ...importConfig,
  ...typescript,
  ...react,
  ...testingLibrary,
  ...lodash,
  ...perfectionist,
  ...tailwind,
  ...prettier,
]
