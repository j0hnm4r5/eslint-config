# @j0hnm4r5/eslint-config

[![GitHub Release](https://img.shields.io/github/v/release/j0hnm4r5/eslint-config.svg?style=flat)](https://github.com/j0hnm4r5/eslint-config/releases)
![NPM Downloads](https://img.shields.io/npm/dw/@j0hnm4r5/eslint-config?style=flat)
![GitHub Build](https://img.shields.io/github/workflow/status/j0hnm4r5/eslint-config/Publish%20Package?style=flat)


## About

This [ESLint](https://eslint.org/) config is built on top of [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) and [Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn). It includes [Prettier](https://prettier.io/) to automatically format code.

## Instructions

1. Install `eslint` and this config in your project with `yarn add -D eslint @j0hnm4r5/eslint-config`

2. In your `.eslintrc` file, add one of the following to the `extends` array:

|   |   |
|---|---|
| Vanilla (default): | `"@j0hnm4r5/eslint-config"` |
| TypeScript without React : | `"@j0hnm4r5/eslint-config/ts"` |
| React: | `"@j0hnm4r5/eslint-config/react"` |
| TypeScript with React: | `"@j0hnm4r5/eslint-config/ts-react"` |


That's it! All of the extended configs, Prettier, and some extra rule changes should just work out of the box.

---

## Example Usage

This should change depending on the project, but here's what I like to use as a baseline:

**.eslintrc**
```js
// .eslintrc
{
  "env": {
    "node": true,
    "browser": true,
    "es2020": true,
  },
  "extends": [
    "@j0hnm4r5/eslint-config"
  ],
}
```

---

### Typescript

If you're using TypeScript, add this to your `.eslintrc` too:

```js
// inside .eslintrc root object
"parserOptions": {
	"project": "./tsconfig.json"
}
```

As well as a **tsconfig.json** file at the root of the project:

**Node**

```js
// tsconfig.json
{
	"extends": "../../tsconfigs/node.json",
}
```

**Browser**

```js
// tsconfig.json
{
	"extends": "../../tsconfigs/browser.json",
}
```

---

### Prettier

And don't forget your Prettier configs! Here's what I use:

**.prettierrc**
```js
// .prettierrc
{
  "printWidth": 62, // perfect size for my vscode window
  "tabWidth": 2,
  "useTabs": true,
  "semicolons": true,
  "singleQuote": false,
  "quoteProps": "consistent",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always"
}
```

**.prettierignore**
```sh
# .prettierignore
package.json
package-lock.json
yarn.lock
node_modules
public
.cache
```

