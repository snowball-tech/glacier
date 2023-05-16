/* eslint-disable import/prefer-default-export */

import path from 'node:path'

import isEmpty from 'lodash/isEmpty'
import getPackageFile from 'read-pkg-up'
import semver from 'semver'

function findMonorepoPackageJsonPath() {
  let currentDir = process.cwd()

  while (path.dirname(currentDir) !== currentDir) {
    const packageJsonPath = path.join(currentDir, 'package.json')
    const packageFile = getPackageFile.sync({
      cwd: currentDir,
      normalize: true,
    })

    if (!isEmpty(packageFile?.packageJson?.workspaces)) {
      return packageJsonPath
    }

    currentDir = path.dirname(currentDir)
  }

  return null
}

function hasDependencyInFile(
  depName: string,
  version: string,
  packageJson: getPackageFile.NormalizedReadResult['packageJson'],
) {
  const { dependencies = {}, devDependencies = {} } = packageJson

  const matchingDependency = dependencies[depName] || devDependencies[depName]

  if (matchingDependency !== undefined && !isEmpty(matchingDependency)) {
    return version === '*' || semver.intersects(matchingDependency, version)
  }

  return false
}

export function hasDependency(depName: string, version = '*') {
  // Récupérer les fichiers package.json du package courant et du monorepo (s'il
  // en existe un)
  const packageFile = getPackageFile.sync({ normalize: true })
  if (
    packageFile?.packageJson !== undefined &&
    !isEmpty(packageFile.packageJson) &&
    hasDependencyInFile(depName, version, packageFile.packageJson)
  ) {
    return true
  }

  const monorepoPackageJsonPath = findMonorepoPackageJsonPath()
  if (monorepoPackageJsonPath) {
    const monoRepoPackageFile = getPackageFile.sync({
      cwd: path.dirname(monorepoPackageJsonPath),
      normalize: true,
    })
    if (
      monoRepoPackageFile?.packageJson !== undefined &&
      !isEmpty(monoRepoPackageFile.packageJson) &&
      hasDependencyInFile(depName, version, monoRepoPackageFile.packageJson)
    ) {
      return true
    }
  }

  return false
}
