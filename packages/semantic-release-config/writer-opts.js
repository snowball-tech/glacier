/* eslint-disable no-param-reassign */

const isEmpty = require('lodash/isEmpty')
const isString = require('lodash/isString')

const types = require('./types')

const COMMIT_HASH_LENGTH = 7
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
  const { emoji, title } = expandedTypes[type]

  return `${!isEmpty(emoji) ? `${emoji} ` : ''}${title}`
}

const commitGroupOrder = ORDER.map((type) => {
  return getTitle(type)
})

module.exports = {
  commitGroupsSort: (commitGroup, otherCommitGroup) => {
    return (
      commitGroupOrder.indexOf(commitGroup.title) -
      commitGroupOrder.indexOf(otherCommitGroup.title)
    )
  },

  commitsSort: ['scope', 'subject'],
  groupBy: 'groupType',
  noteGroupsSort: 'title',
  transform: (commit, context) => {
    if (!isEmpty(commit.notes)) {
      commit.notes.forEach((note) => {
        note.title = 'Breaking changes'
      })
    }

    const { changelog = false } = expandedTypes[commit.type]
    if (changelog || (commit.notes && commit.notes.length > 0)) {
      commit.groupType = getTitle(commit.type)
    } else {
      return null
    }

    if (commit.scope === '*') {
      commit.scope = ''
    }

    if (isString(commit.hash) && !isEmpty(commit.hash)) {
      commit.shortHash = commit.hash.slice(0, COMMIT_HASH_LENGTH)
    }

    const references = []

    if (isString(commit.subject) && !isEmpty(commit.subject)) {
      let url = context.repository
        ? `${context.host}/${context.owner}/${context.repository}`
        : context.repoUrl

      if (!isEmpty(url)) {
        url += '/issues/'
        // Issue URLs.
        commit.subject = commit.subject.replace(/#(\d+)/g, (_, issue) => {
          references.push(issue)

          return `[#${issue}](${url}${issue})`
        })
      }

      if (!isEmpty(context.host)) {
        // User URLs.
        commit.subject = commit.subject.replace(
          /\B@([a-z0-9](?:-?[a-z0-9]){0,38})/g,
          `[@$1](${context.host}/$1)`,
        )
      }
    }

    if (!isEmpty(commit.references)) {
      // Remove references that already appear in the subject
      commit.references = commit.references.filter((reference) => {
        if (!references.includes(reference.issue)) {
          return true
        }

        return false
      })
    }

    return commit
  },
}
