// Those matcher are defined to customize transformation of tokens.

function isIgnored(token) {
  return token.original.ignore === true
}

function isSize(token) {
  return token.attributes.category === 'size' || token.original.group === 'size'
}

function isBreakpointSize(token) {
  return (
    !isIgnored(token) && isSize(token) && token.attributes.type === 'breakpoint'
  )
}

function isNotBreakpointSize(token) {
  return (
    !isIgnored(token) && isSize(token) && token.attributes.type !== 'breakpoint'
  )
}

module.exports = {
  isBreakpointSize,
  isIgnored,
  isNotBreakpointSize,
  isSize,
}
