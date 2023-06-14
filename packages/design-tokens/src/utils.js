const deasync = require('deasync')

function synchronise(action) {
  let finished = false

  // eslint-disable-next-line promise/catch-or-return
  action().finally(() => {
    finished = true
  })

  deasync.loopWhile(() => !finished)
}

module.exports = {
  synchronise,
}
