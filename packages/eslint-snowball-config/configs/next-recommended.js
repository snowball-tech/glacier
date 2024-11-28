import react from './react'

import lodash from './lodash'

import base from './base'
import html from './html'
import importConfig from './import'
import json from './json'
import markdown from './markdown'
import next from './next'
import perfectionist from './perfectionist'
import prettier from './prettier'
import secrets from './secrets'
import tailwind from './tailwind'
import testingLibrary from './testing-library'
import typescript from './typescript'

export default [
  ...base,
  ...html,
  ...json,
  ...markdown,
  ...secrets,
  ...importConfig,
  ...typescript,
  ...react,
  ...next,
  ...testingLibrary,
  ...lodash,
  ...perfectionist,
  ...tailwind,
  ...prettier,
]
