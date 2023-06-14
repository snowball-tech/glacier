# Snowball Glacier

#### Utils

| [`eslint-config`](./packages/eslint-config)                                                                                               | [`prettier-config`](./packages/prettier-config)                                                                                                 | [`renovate-config`](./packages/renovate-config)                                                                                                 | [`semantic-release-config`](./packages/semantic-release-config)                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![eslint-config](https://img.shields.io/npm/v/@snowball-tech/eslint-config)](https://www.npmjs.com/package/@snowball-tech/eslint-config) | [![prettier-config](https://img.shields.io/npm/v/@snowball-tech/prettier-config)](https://www.npmjs.com/package/@snowball-tech/prettier-config) | [![renovate-config](https://img.shields.io/npm/v/@snowball-tech/renovate-config)](https://www.npmjs.com/package/@snowball-tech/renovate-config) | [![semantic-release-config](https://img.shields.io/npm/v/@snowball-tech/semantic-release-config)](https://www.npmjs.com/package/@snowball-tech/semantic-release-config) |
| ![eslint-config-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/eslint-config)                               | ![prettier-config-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/prettier-config)                                 | ![renovate-config-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/renovate-config)                                 | ![semantic-release-config-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/semantic-release-config)                                         |
| ![eslint-config-downloads](https://img.shields.io/npm/dt/@snowball-tech/eslint-config)                                                    | ![prettier-config-downloads](https://img.shields.io/npm/dt/@snowball-tech/prettier-config)                                                      | ![renovate-config-downloads](https://img.shields.io/npm/dt/@snowball-tech/renovate-config)                                                      | ![semantic-release-config-downloads](https://img.shields.io/npm/dt/@snowball-tech/semantic-release-config)                                                              |
| ![eslint-config-score](https://img.shields.io/npms-io/final-score/@snowball-tech/eslint-config)                                           | ![prettier-config-score](https://img.shields.io/npms-io/final-score/@snowball-tech/prettier-config)                                             | ![renovate-config-score](https://img.shields.io/npms-io/final-score/@snowball-tech/renovate-config)                                             | ![semantic-release-config-score](https://img.shields.io/npms-io/final-score/@snowball-tech/semantic-release-config)                                                     |

#### Design System

| [`design-tokens`](./packages/design-tokens)                                                                                               | [`fractal`](./packages/fractal)                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [![design-tokens](https://img.shields.io/npm/v/@snowball-tech/design-tokens)](https://www.npmjs.com/package/@snowball-tech/design-tokens) | [![fractal](https://img.shields.io/npm/v/@snowball-tech/fractal)](https://www.npmjs.com/package/@snowball-tech/fractal) |
| ![design-tokens-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/design-tokens)                               | ![fractal-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/fractal)                         |
| ![design-tokens-downloads](https://img.shields.io/npm/dt/@snowball-tech/design-tokens)                                                    | ![fractal-downloads](https://img.shields.io/npm/dt/@snowball-tech/fractal)                                              |
| ![design-tokens-score](https://img.shields.io/npms-io/final-score/@snowball-tech/design-tokens)                                           | ![fractal-score](https://img.shields.io/npms-io/final-score/@snowball-tech/fractal)                                     |

#### CI

| CI on `main` branch                                                                                       |
| --------------------------------------------------------------------------------------------------------- |
| ![CI](https://github.com/snowball-tech/glacier/actions/workflows/ci.yml/badge.svg?branch=main&event=push) |

The open-source mono-repository for packages developed, maintained and used by
Snowball.

## Setup

Before anything, start by cloning the repository:

```bash
git clone git@github.com:snowball-tech/glacier.git
```

> If you haven't setup any SSH key to your GitHub account, you will need to do
> so. Check out the documentation on
> [how to connect with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).
> Alternatively, you can also use HTTPS to clone the repository _(but this is
> not recommended)_:
>
> ```bash
> git clone https://github.com/snowball-tech/glacier.git
> ```

> Note that you can also use the [GitHub CLI](https://cli.github.com/) to clone
> the repository:
>
> ```bash
> gh repo clone snowball-tech/glacier
> ```

When clone, go into the repository directory:

```bash
cd glacier
```

### Pre-requisites

Before setting up this repository and start using it/contributing to it, you'll
need to make sure you have some tools installed on your machine.

<details>
  <summary>Click here to see the details</summary>

### **MacOS only**

<details>
<summary>Click for more information</summary>

If you are on MacOS, you will need some extra things to make the steps below
easier.

1. **Homebrew**

First of all, you will need [HomeBrew](https://brew.sh/):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> You can always check the [official documentation](https://brew.sh) if you have
> any question or issue

4. **Shell**

You are probably using Zsh as your default shell.

Some steps below are updating the `.zshrc` file in your home directory.
So we have to make sure this file exists:

```bash
touch ~/.zshrc
```

If you are using Bash as your default shell, run:

```bash
touch ~/.bash_profile
```

> These commands may give you an error if the files already existed.
> You can ignore it.

</details>

### **NodeJS**

To be able to work with this repository, you will have to have a working version
of NodeJS.

You can simply install the latest version of the 18.x LTS branch.

To do so, it's recommended to use a Node Version Manager like
[NVM](https://github.com/nvm-sh/nvm) or [N](https://github.com/tj/n)

#### **NVM**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

> Note that you may check on the
> [official installation documentation](https://github.com/nvm-sh/nvm#install--update-script)
> if a newer version is available.

> You can always check the
> [official documentation](https://github.com/nvm-sh/nvm#node-version-manager---)
> if you have any question or issue

Then restart your terminal _(on MacOS you have to completely quit the Terminal
application before restarting it)_.

Then you can make NVM automatically select the appropriate NodeJS version for
the repository:

```bash
nvm use
```

#### **N**

```bash
curl -L https://bit.ly/n-install | bash
```

Then restart your terminal _(on MacOS you have to completely quit the Terminal
application before restarting it)_.

> Alternatively, on MacOS you can also run:
>
> ```bash
> brew install n
> ```
>
> And then restart your terminal by completely quitting the Terminal application
> and restarting it.

> You can always check the
> [official installation documentation](https://github.com/mklement0/n-install#n-install-mdash-introduction)
> and the [official documentation](https://github.com/tj/n#n--interactively-manage-your-nodejs-versions)
> if you have any question or issue

Then you can make N automatically select the appropriate NodeJS version for
the repository:

```bash
n auto
```

### **Yarn**

This mono-repository is base on Yarn Workspaces.
So you'll have to have [Yarn](https://yarnpkg.com/) on its 3.x.x version.

When having NodeJS installed, simply run:

```bash
corepack enable
corepack prepare yarn@stable --activate
```

> You can always check the
> [official installation documentation](https://yarnpkg.com/getting-started/install)
> if you have any question or issue

Then make sure you have the latest 3.x.x version installed:

```bash
yarn --version
```

This should output a 3.x.x version _(e.g. "3.6.0")_.

</details>

## Installation

There is an automated setup process that will handle all the steps for you
(dependencies, configuration, ...):

```bash
yarn setup
```

### There you go

You are now ready to start working on Glacier.

## Usage & Development

> It's recommended to regularly update the dependencies and the environment on
> your local copy of the repository:
>
> ```bash
> yarn setup
> ```

This repository is a mono-repository. This means that it contains multiple
packages all together in a single Git repository.

Each of these packages contains their own documentation in their own `README.md`
file.

> See the [dedicated `TOOLING.md` documentation](./docs/TOOLING.md) for more
> information about the mono-repository management with Yarn workspaces and
> TurboRepo.

### File structure

This repository is organized around two major directories:

```text
glacier
  |-- packages
  |-- ...
```

#### Packages

Packages are located in the [packages](./packages) directory.

This directory contains packages made to be published in a **private** NPM
repository and used in other packages and/or apps.

There are currently **5** packages available in Glacier:

- **[eslint-config](./packages/eslint-config)**: a composable ESLint
  configuration to enable config, plugin and rules according to your needs;

- **[prettier-config](./packages/prettier-config)**: the base Prettier
  configuration and ignored files. This configuration disables semicolon,
  enforce usage of single quotes and add all trailing commas.  
  It also offers the [organize attributes](prettier-plugin-organize-attributes)
  and [Shell script](https://github.com/un-ts/prettier/tree/master/packages/sh)
  plugins out of the box;

- **[renovate-config](./packages/renovate-config)**: a base opinionated
  [Renovate](https://www.mend.io/renovate/) configuration with support for NPM,
  Golang, secrets and many more;

- **[semantic-release-config](./packages/semantic-release-config)**: a
  mono-repository oriented configuration for
  [Semantic Release](https://github.com/semantic-release/semantic-release) that
  allows to publish multiple packages.  
  It also provide the commit rules for generating changelog and create releases.

You will also find everything related to the Design System, particularly:

- **[design-tokens](./packages/design-tokens)**: the list of design tokens
  defining the Design System and to be used in all the apps _(web, mobile, ...)_
  and packages throughout the organization;
- **[fractal](./packages/fractal)**: the React Design System itself, made of
  components, styles, icons, ....

### TypeScript

See [the dedicated `CONVENTIONS.md`](./docs/CONVENTIONS.md) and
[`TOOLING.md`](./docs/TOOLING.md) documentations.

### Linting & Formatting

See [the dedicated `CONVENTIONS.md`](./docs/CONVENTIONS.md) and
[`TOOLING.md`](./docs/TOOLING.md) documentations.

### Dependencies

> Always remember to add dependency if you **really** need it to avoid
> cluttering the packages and degrading the performance both in the developers
> and users side.

**It is your duty** as a member of the Snowball's engineering team to help
mainting the dependencies up to date. This means that you are expected and
should help reviewing, testing and merging dependencies updates PRs on a regular
basis.

> The best way to do so is to regularly check the
> [Renovate dashboard](https://github.com/snowball-tech/glacier/issues/10) and
> [the list of Pull Requests](https://github.com/snowball-tech/glacier/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc+label%3Adev-deps%2Cdeps),
> for example every morning at the beginning of your day.

Also, see the [dedicated `TOOLING.md` documentation](./docs/TOOLING.md) for more
information.

### Environment variables

See [the dedicated `TOOLING.md` documentation](./docs/TOOLING.md).

## Tooling

See [the dedicated `TOOLING.md` documentation](./docs/TOOLING.md).

## Contributing

See [the dedicated `CONTRIBUTING.md` documentation](./CONTRIBUTING.md).

### Conventions

See [the dedicated `CONVENTIONS.md` documentation](./docs/CONVENTIONS.md).

## FAQ & Troubleshooting

See [the dedicated `TROUBLESHOOTING.md` documentation](./docs/TROUBLESHOOTING.md).
