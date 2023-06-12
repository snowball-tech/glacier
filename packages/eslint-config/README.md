# Snowball ESLint Config

<div style="text-align: center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="50" />
  <img src="https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="50" />
  <img src="https://testing-library.com/img/octopus-128x128.png" width="50" />
  <img src="https://lodash.com/assets/img/lodash.svg" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="50" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/800px-JSON_vector_logo.svg.png" width="50" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" width="50" />
  <img src="https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Official_YAML_Logo.svg/langfr-640px-Official_YAML_Logo.svg.png&w=640&q=50" width="50" />
  <img src="https://prettier.io/icon.png" width="50" />
</div>

---

![eslint-config](https://img.shields.io/npm/v/@snowball-tech/eslint-config)
![eslint-config-dependants](https://img.shields.io/librariesio/dependents/npm/@snowball-tech/eslint-config)
![eslint-config-downloads](https://img.shields.io/npm/dt/@snowball-tech/eslint-config)
![eslint-config-score](https://img.shields.io/npms-io/final-score/@snowball-tech/eslint-config)

---

This package provides a rich, composable and opinionated
[ESLint](https://eslint.org/) configuration based on Snowball engineering
standards.

This configuration supports:

- [ECMAScript](https://www.ecma-international.org/)
  /[JavaScript](https://developer.mozilla.org/en/docs/Web/JavaScript) based on
  the
  [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) and
  using the
  [Airbnb's ESLint base configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
  and
  [`eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- _(auto-fixable)_ Object keys alphabetical sorting
- Proper promise handling using
  [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise)
- Protect from potential secrets leak using
  [`eslint-plugin-no-secrets`](https://github.com/nickdeis/eslint-plugin-no-secrets)
- SQL using [`eslint-plugin-sql`](https://github.com/gajus/eslint-plugin-sql)
- [JSON](https://www.json.org/), JSONC and [JSON5](https://json5.org/) using
  [`eslint-plugin-jsonc`](https://github.com/ota-meshi/eslint-plugin-jsonc)
  and
  [`eslint-plugin-json5`](https://github.com/bayesimpact/eslint-plugin-json5)
- [Markdown](https://www.markdownguide.org/) _(JS/TS in Markdown)_ using
  [`eslint-plugin-markdown`](https://github.com/eslint/eslint-plugin-markdown)
- [YAML](https://yaml.org/) using
  [`eslint-plugin-yaml`](https://github.com/ota-meshi/eslint-plugin-yml)
- Imports check and ordering using
  [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [TypeScript](https://www.typescriptlang.org/) using
  [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- [React](https://react.dev/) based on the
  [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) and
  using the
  [Airbnb's ESLint React configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  as well as
  [React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
  and
  [JSX Accessibility](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Next.JS](https://nextjs.org/) using
  [`eslint-plugin-next`](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)
  and
  [`eslint-config-next`](https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next)
- [TailwindCSS](https://tailwindcss.com/) using
  [`eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- Testing with [Jest](https://jestjs.io/) using
  [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)
  and adding [Testing Library](https://testing-library.com/) support using
  [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)
- [Lodash](https://lodash.com/) using
  [`eslint-plugin-lodash`](https://github.com/wix-incubator/eslint-plugin-lodash)
  and
  [`eslint-plugin-lodash-fp`](https://github.com/jfmengels/eslint-plugin-lodash-fp)
- Code sorting using the
  [`eslint-plugin-perfectionist`](https://github.com/azat-io/eslint-plugin-perfectionist)
  _([learn more](https://eslint-plugin-perfectionist.azat.io))_
- [Prettier](https://prettier.io/) using
  [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
  and
  [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

Checkout all the `js` files to learn more about the configurations.

## Installation

Using Yarn:

```bash
yarn add --dev @snowball-tech/eslint-config
```

Or using NPM:

```bash
npm install --save-dev @snowball-tech/eslint-config
```

## Usage

This package comes with a patch coming from the
[Rushstack project](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch)

This patch allows to use ESLint dependencies bundled with the package instead of
having to manually install them in your repository.

To be able to properly use the config thanks to the patch, **you must** use the
JavaScript style of ESLint configuration _(e.g. `.eslintrc.js`)_ and start your
configuration by importing the patch:

```js
// This allows to use the dependencies installed by the package instead of
// having to manually install all dependencies.
require('@snowball-tech/eslint-config/patch')
```

### Default configuration

The package offers a [default](./index.js) ESLint configuration containing:

- [base rules](./base.js) _(including promise & unicorn)_
- [JSON/JSONC/JSON5](./json.js)
- [Markdown](./mardown.js)
- [Y(A)ML](./yml.js)
- [secrets](./secrets.js)
- [import](./import.js)
- [Lodash](./lodash.js)
- [Prettier](./prettier.js)

To use this default configuration, simply extend it in you own ESLint
configuration using JavaScript configuration file `.eslintrc.js`:

```js
require('@snowball-tech/eslint-config/patch')

module.exports = {
  extends: ['@snowball-tech/eslint-config'],
}
```

#### Ignored files

Ignored files are defined in the `ignorePatterns` config of the
[`base` configuration](./base.js).

### Complete configuration

You also have the possibility to use the full configuration, including:

- [base rules](./base.js) _(including promise & unicorn)_
- [SQL](./sql.js)
- [JSON/JSONC/JSON5](./json.js)
- [Markdown](./mardown.js)
- [Y(A)ML](./yml.js)
- [secrets](./secrets.js)
- [React, hooks and JSX accessibility](./react.js)
- [import](./import.js)
- [TypeScript](./typescript.js)
- [Next.JS](./next.js)
- [TailwindCSS](./tailwind.js)
- [Jest](./jest.js) and [Testing Library](./testing-library.js)
- [Lodash](./lodash.js)
- [Perfectionist](./perfectionist.js)
- [Prettier](./prettier.js)

```js
require('@snowball-tech/eslint-config/patch')

module.exports = {
  extends: ['@snowball-tech/eslint-config/full'],
}
```

### Make your own configuration

Finally, you can also compose you own configuration using each set of
configuration exposed by the config.

To do so, simply extend the configuration you want to use in your own ESLint and
pick whichever you want in the list below:

> It's recommended to **always** include the `base` configuration in the first
> position.
>
> Note that the `base` configuration also contains the default `ignorePatterns`.

```json
{
  "extends": [
    "@snowball-tech/eslint-config/base",
    "@snowball-tech/eslint-config/sql",
    "@snowball-tech/eslint-config/json",
    "@snowball-tech/eslint-config/markdown",
    "@snowball-tech/eslint-config/yml",
    "@snowball-tech/eslint-config/secrets",
    "@snowball-tech/eslint-config/import",
    "@snowball-tech/eslint-config/typescript",
    "@snowball-tech/eslint-config/react",
    "@snowball-tech/eslint-config/next",
    "@snowball-tech/eslint-config/tailwind",
    "@snowball-tech/eslint-config/jest",
    "@snowball-tech/eslint-config/testing-library",
    "@snowball-tech/eslint-config/lodash",
    "@snowball-tech/eslint-config/perfectionist",
    "@snowball-tech/eslint-config/prettier"
  ]
}
```

> ⚠️ **Important notes**: when composing your own configuration, try to keep the
> configurations files in the order above to ensure the proper behavior of the
> linter.
>
> Also note that **Prettier must always be the last**!

Of course, you can also extend any other configuration coming from any other
config or plugin and add you own rules and overrides to your configuration.
