import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export function patchConfig(configs, pluginsToPatch) {
  return configs.map((entry) => {
    const { plugins } = entry

    for (const key in plugins) {
      if (
        Object.prototype.hasOwnProperty.call(plugins, key) &&
        pluginsToPatch.includes(key)
      ) {
        plugins[key] = fixupPluginRules(plugins[key])
      }
    }

    return entry
  })
}

export default function getCompatConfig(configs, plugins, extraConfig) {
  const compatConfig = configs.flatMap((config) => compat.extends(config))

  const patchedConfig = patchConfig([...compatConfig], plugins)

  return [...patchedConfig, ...extraConfig]
}
