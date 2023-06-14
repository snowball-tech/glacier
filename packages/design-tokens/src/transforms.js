const StyleDictionary = require('style-dictionary')

const { isBreakpointSize, isNotBreakpointSize } = require('./matchers')

StyleDictionary.registerTransform({
  matcher: isNotBreakpointSize,
  name: 'size/other/pxToRem',
  transformer: StyleDictionary.transform['size/pxToRem'].transformer,
  type: 'value',
})

StyleDictionary.registerTransform({
  matcher: isBreakpointSize,
  name: 'size/breakpoint/px',
  transformer: StyleDictionary.transform['size/px'].transformer,
  type: 'value',
})

module.exports = {}
