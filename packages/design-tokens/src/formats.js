const StyleDictionary = require('style-dictionary')

StyleDictionary.registerFormat({
  formatter: ({ dictionary, options }) => {
    const fontPathPrefix = options.fontPathPrefix || './fonts/'

    // https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
    const formatsMap = {
      eot: 'embedded-opentype',
      otf: 'opentype',
      svg: 'svg',
      ttf: 'truetype',
      woff: 'woff',
      woff2: 'woff2',
    }

    const extensions = ['ttf', 'eot', 'woff', 'woff2']

    return dictionary.allTokens
      .reduce((fontList, prop) => {
        const {
          attributes: { item: family, subitem: style },
          display: { value: display },
          value: path,
          weights,
        } = prop

        const fontCss = weights
          .map((weight) =>
            [
              '@font-face {',
              `\n\tfont-family: "${family}";`,
              `\n\tfont-style: ${style};`,
              `\n\tfont-weight: ${weight};`,
              `\n\tsrc: ${extensions
                .map(
                  (extension) =>
                    `url("${fontPathPrefix}${path}.${extension}") format("${formatsMap[extension]}")`,
                )
                .join(',\n\t\t')};`,
              `\n\tfont-display: ${display};`,
              '\n}\n',
            ].join(''),
          )
          .join('\n')

        return [...fontList, fontCss]
      }, [])
      .join('\n')
  },
  name: 'css/fontface',
})
