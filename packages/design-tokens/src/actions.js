const fs = require('fs')
const path = require('path')

const noop = require('lodash/fp/noop')
const isEmpty = require('lodash/fp/isEmpty')
const prettier = require('prettier')
const StyleDictionary = require('style-dictionary')
const ttf2woff = require('ttf2woff')
const ttf2woff2 = require('ttf2woff2')

const { synchronise } = require('./utils')

StyleDictionary.registerAction({
  do: (_, config) =>
    synchronise(async () => {
      const prettierConfig = await prettier.resolveConfig(process.cwd())

      fs.readdirSync(config.buildPath).forEach((filename) => {
        const filepath = path.join(config.buildPath, filename)

        if (!fs.existsSync(filepath) || !fs.lstatSync(filepath).isFile()) {
          return
        }

        const content = fs.readFileSync(filepath, 'utf-8')

        const formatted = prettier.format(content, {
          ...prettierConfig,
          filepath,
        })

        fs.writeFileSync(filepath, formatted)
      })
    }),
  name: 'format',
  undo: noop,
})

StyleDictionary.registerAction({
  do: (dictionary, config) =>
    synchronise(async () => {
      const fontsPath = path.resolve(__dirname, '../assets/fonts/')
      const outPath = path.resolve(config.buildPath, 'fonts')

      if (isEmpty(dictionary.tokens.asset.font)) {
        return
      }

      fs.mkdirSync(outPath, { recursive: true })

      // eslint-disable-next-line no-restricted-syntax
      for (const { styles, value: fontName, weights } of Object.values(
        dictionary.tokens.asset.font,
      )) {
        // eslint-disable-next-line no-restricted-syntax
        for (const weight of weights) {
          // eslint-disable-next-line no-restricted-syntax
          for (const style of styles) {
            const filename = `${fontName}-${weight}${
              style === 'italic' ? '-Italic' : ''
            }.ttf`
            const ttfFilePath = path.join(fontsPath, filename)
            if (
              !fs.existsSync(ttfFilePath) ||
              !fs.lstatSync(ttfFilePath).isFile()
            ) {
              return
            }

            const ttfContent = fs.readFileSync(ttfFilePath)

            const woffFilePath = path.join(
              outPath,
              filename.replace(/ttf$/, 'woff'),
            )
            if (
              !fs.existsSync(woffFilePath) ||
              !fs.lstatSync(woffFilePath).isFile()
            ) {
              const woffContent = ttf2woff(ttfContent)
              fs.writeFileSync(woffFilePath, woffContent)
            }

            const woff2FilePath = path.join(
              outPath,
              filename.replace(/ttf$/, 'woff2'),
            )
            if (
              !fs.existsSync(woff2FilePath) ||
              !fs.lstatSync(woff2FilePath).isFile()
            ) {
              const woff2Content = ttf2woff2(ttfContent)
              fs.writeFileSync(woff2FilePath, woff2Content)
            }
          }
        }
      }
    }),
  name: 'fonts',
  undo(dictionary, config) {
    const outPath = path.resolve(config.buildPath, 'fonts')
    fs.rmdirSync(outPath, { recursive: true })
  },
})
