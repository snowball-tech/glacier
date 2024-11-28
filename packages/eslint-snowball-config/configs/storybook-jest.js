import react from './react'

import lodash from './lodash'

import base from './base'
import html from './html'
import importConfig from './import'
import jest from './jest'
import json from './json'
import markdown from './markdown'
import perfectionist from './perfectionist'
import prettier from './prettier'
import secrets from './secrets'
import storybook from './storybook'
import tailwind from './tailwind'
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
  ...jest,
  ...lodash,
  ...storybook,
  ...perfectionist,
  ...tailwind,
  ...prettier,
]
