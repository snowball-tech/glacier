import base from './base'
import html from './html'
import importConfig from './import'
import jest from './jest'
import json from './json'
import lodash from './lodash'
import markdown from './markdown'
import perfectionist from './perfectionist'
import prettier from './prettier'
import react from './react'
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
