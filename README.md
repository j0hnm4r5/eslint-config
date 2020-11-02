# @j0hnm4r5/eslint-config

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

## Example

**.eslintrc**
```js
{
  "env": {
    "node": true,
    "browser": true,
    "es2020": true,
  },
  "extends": [
    "@j0hnm4r5/eslint-config"
  ]
}
```

### And don't forget to include Prettier configs!

**.prettierrc**
```json
{
  "printWidth": 68,
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
```
.cache
package.json
package-lock.json
yarn.lock
public
```

