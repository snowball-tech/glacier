/* eslint-disable unicorn/prevent-abbreviations */

const isEmpty = require('lodash/fp/isEmpty')

const types = require('./types')

const ORDER = [
  'breaking',
  'feat',
  'security',
  'fix',
  'perf',
  'docs',
  'chore',
  'refactor',
  'test',
  'style',
  'build',
  'ci',
  'deps',
  'metadata',
  'revert',
  'release',
  'wip',
]

const expandedTypes = {
  ...types,
}
Object.values(types).forEach((type) => {
  if (Array.isArray(type.aliases)) {
    type.aliases.forEach((alias) => {
      expandedTypes[alias] = { ...type, aliases: undefined }
    })
  }
})

function getTitle(type) {
  const { emoji, title } = expandedTypes[type] || {
    emoji: '❓',
    title: 'Unknown changes',
  }

  return `${isEmpty(emoji) ? '' : `${emoji} `}${title}`
}

const commitGroupOrder = ORDER.map((type) => getTitle(type))

module.exports = {
  commitGroupsSort: (commitGroup, otherCommitGroup) =>
    commitGroupOrder.indexOf(commitGroup.title) -
    commitGroupOrder.indexOf(otherCommitGroup.title),
  commitsSort: ['scope', 'subject'],
  groupBy: 'groupType',
  noteGroupsSort: 'title',
}
