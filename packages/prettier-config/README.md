# Snowball Prettier Config

<div style="text-align: center">
  <img alt="" src="https://prettier.io/icon.png" width="50" />
  <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" />
  <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" />
  <img alt="" src="https://repository-images.githubusercontent.com/298623011/59bf7000-ff7b-11ea-8450-92c845df2ea3" width="90" />
  <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/tailwindcss-plain.svg" width="50" />
</div>

---

![prettier-config](https://img.shields.io/npm/v/@snowball-tech/prettier-config)
![prettier-config-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/prettier-config)
![prettier-config-downloads](https://img.shields.io/npm/dt/@snowball-tech/prettier-config)
![prettier-config-score](https://img.shields.io/npms-io/final-score/@snowball-tech/prettier-config)

---

This package provides a composable and opinionated
[Prettier](https://prettier.io/) configuration based on Snowball engineering
standards.

This configuration supports:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) files;
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) files;
- [TypeScript](https://www.typescriptlang.org/)
- [JSX/TSX](https://react.dev/);
- CSS-in-JS
- [TailwindCSS](https://tailwindcss.com/)

Checkout all the config files to learn more about the configurations.

## Installation

Using Yarn:

```bash
yarn add --dev @snowball-tech/prettier-config prettier
```

Or using NPM:

```bash
npm install --save-dev @snowball-tech/prettier-config prettier
```

> Note that depending on the configuration you use, you might need to install
> additional dependencies like `tailwindcss`.

## Usage

### Default configuration

The package offers a [default](./.prettierrc.js) Prettier configuration
containing only the base rules.

To use this default configuration, simply re-export it in you own Prettier
configuration using JavaScript configuration file `.prettierrc.js`:

```js
module.exports = require('@snowball-tech/prettier-config/.prettierrc')
```

#### Ignored files

Ignored files are defined in the `.prettierignore` file.

### Complete configuration

You also have the possibility to use the full configuration, including:

- [base rules](./.prettierrc.js) _(including promise & unicorn)_
- [TailwindCSS](./.prettierrc-tailwind.js)

```js
module.exports = require('@snowball-tech/prettier-config/.prettierrc-tailwind')
```

### Make your own configuration

Finally, you can also compose you own configuration using each set of
configuration exposed by the config.

To do so, simply extend the configuration you want to use in your own Prettier
and pick whichever you want in the list below:

> It's recommended to **always** include the `base` configuration in the first
> position.

```js
const config = require('@snowball-tech/prettier-config/.prettierrc-tailwind')

module.exports = {
  ...config,
  plugins: [...(config.plugins || []), 'prettier-plugin-my-awesome-plugin'],
}
```

> ⚠️ **Important notes**: when composing your own configuration, try to keep the
> configurations files in the order above to ensure the proper behavior of the
> formatter.

Of course, you can also extend any other configuration coming from any other
config or plugin and add you own rules and overrides to your configuration.

## Development

If you want to contribute, update or edit this Prettier configuration:

- First, install the needed dependencies:

```bash
yarn
```

Or (if you use NPM):

```bash
npm install
```

- Make the modifications you want
- Test your updates

> All your modification should be immediately picked up by the linter in your
> IDE or using the CLI scripts, so you can check that everything works as
> expected.

- Commit and push your changes and open a Pull Request.
- When your changes are approved and merged in the `main` branch, a new release
  will be automatically created and published to NPM.

### Useful Commands

- `yarn run format-fix` to format the code according to our formatting
  guidelines (using _Prettier_);
- `yarn run lint-fix`: to check that the code matches our coding guidelines and
  automatically fix what can be fixed _(using ESLint)_;
- `yarn run test`: run all the unit tests;
- `yarn run test-dev`: run the tests for modified components and re-trigger runs
  everytime something is modified;

### Linting & Formatting

See [the dedicated `CONVENTIONS.md`](../../docs/CONVENTIONS.md) and
[`TOOLING.md`](../../docs/TOOLING.md) documentations.

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

Also, see the [dedicated `TOOLING.md` documentation](../../docs/TOOLING.md) for
more information.

## Tooling

See [the dedicated `TOOLING.md` documentation](../../docs/TOOLING.md).

## Contributing

See [the dedicated `CONTRIBUTING.md` documentation](../../CONTRIBUTING.md).

### Conventions

See [the dedicated `CONVENTIONS.md` documentation](../../docs/CONVENTIONS.md).

## Help and feedback

If you have any questions or feedback, feel free to reach out to us using this
repository [issues](https://github.com/snowball-tech/glacier/issues) or
[discussions](https://github.com/snowball-tech/glacier/discussions).

You can also use the internal #engineering Slack channel if you are a member of
the Snowball tech team.
