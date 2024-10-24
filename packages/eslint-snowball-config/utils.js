import getPackage from 'read-pkg-up'

import isEmpty from 'lodash/fp/isEmpty'

export function hasDependency(dependency) {
  const { packageJson, path: packagePath } = getPackage.sync()

  const {
    dependencies = {},
    devDependencies = {},
    peerDependencies = {},
  } = packageJson

  const matchingDependency =
    dependencies[dependency] ||
    devDependencies[dependency] ||
    peerDependencies[dependency]

  if (!isEmpty(matchingDependency)) {
    return true
  }

  // If we don't have a direct reference of the dependency in the "package.json"
  // we should still check if the dependency is available by checking the
  // content of "node_modules".
  const dependencyPackage = getPackage.sync({
    cwd: `${process.cwd()}/node_modules/${dependency}`,
  })

  return dependencyPackage.path !== packagePath
}
