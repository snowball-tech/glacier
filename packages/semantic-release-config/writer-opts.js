/* eslint-disable no-param-reassign */

const types = require('./types')

const COMMIT_HASH_LENGTH = 7

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

module.exports = {
  transform: (commit, context) => {
    if (commit.notes) {
      commit.notes.forEach((note) => {
        note.title = 'Breaking changes'
      })
    }

    if (
      expandedTypes[commit.type] &&
      (expandedTypes[commit.type].changelog ||
        (commit.notes && commit.notes.length > 0))
    ) {
      commit.groupType = `${
        expandedTypes[commit.type].emoji
          ? `${expandedTypes[commit.type].emoji} `
          : ''
      }${expandedTypes[commit.type].title}`
    } else {
      return null
    }

    if (commit.scope === '*') {
      commit.scope = ''
    }

    if (typeof commit.hash === 'string') {
      commit.shortHash = commit.hash.slice(0, COMMIT_HASH_LENGTH)
    }

    const references = []

    if (typeof commit.subject === 'string') {
      let url = context.repository
        ? `${context.host}/${context.owner}/${context.repository}`
        : context.repoUrl

      if (url) {
        url += '/issues/'
        // Issue URLs.
        commit.subject = commit.subject.replace(/#(\d+)/g, (_, issue) => {
          references.push(issue)

          return `[#${issue}](${url}${issue})`
        })
      }

      if (context.host) {
        // User URLs.
        commit.subject = commit.subject.replace(
          /\B@([a-z0-9](?:-?[a-z0-9]){0,38})/g,
          `[@$1](${context.host}/$1)`,
        )
      }
    }

    if (commit.references) {
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
