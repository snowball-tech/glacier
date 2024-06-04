/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable no-param-reassign */

const isEmpty = require('lodash/fp/isEmpty')
const isString = require('lodash/fp/isString')

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
  const { emoji, title } = expandedTypes[type] || {
    emoji: '❓',
    title: 'Unknown changes',
  }

  return `${isEmpty(emoji) ? '' : `${emoji} `}${title}`
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
    const newCommit = {
      ...commit,
      notes: [...commit.notes],
    }

    if (!isEmpty(newCommit.notes)) {
      newCommit.notes.forEach((note) => {
        note.title = 'Breaking changes'
      })
    }

    const { changelog = false } = expandedTypes[newCommit.type] || {
      changelog: true,
    }
    if (changelog || (newCommit.notes && newCommit.notes.length > 0)) {
      newCommit.groupType = getTitle(commit.type)
    } else {
      return null
    }

    if (newCommit.scope === '*') {
      newCommit.scope = ''
    }

    if (isString(newCommit.hash) && !isEmpty(newCommit.hash)) {
      newCommit.shortHash = newCommit.hash.slice(0, COMMIT_HASH_LENGTH)
    }

    const references = []

    if (isString(newCommit.subject) && !isEmpty(newCommit.subject)) {
      let url = context.repository
        ? `${context.host}/${context.owner}/${context.repository}`
        : context.repoUrl

      if (!isEmpty(url)) {
        url += '/issues/'
        // Issue URLs.
        newCommit.subject = newCommit.subject.replaceAll(
          /#(\d+)/g,
          (_, issue) => {
            references.push(issue)

            return `[#${issue}](${url}${issue})`
          },
        )
      }

      if (!isEmpty(context.host)) {
        // User URLs.
        newCommit.subject = newCommit.subject.replaceAll(
          /\B@([\da-z](?:-?[\da-z]){0,38})/g,
          `[@$1](${context.host}/$1)`,
        )
      }
    }

    if (!isEmpty(newCommit.references)) {
      // Remove references that already appear in the subject
      newCommit.references = newCommit.references.filter((reference) => {
        if (!references.includes(reference.issue)) {
          return true
        }

        return false
      })
    }

    return newCommit
  },
}
