# @j0hnm4r5/eslint-config

## About

This [ESLint](https://eslint.org/) config is built on top of [AirBnB's config](https://www.npmjs.com/package/eslint-config-airbnb) and [Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn). It includes [Prettier](https://prettier.io/) to automatically format code.

## Instructions

1. Install `eslint` and this config in your project with `yarn add -D eslint @j0hnm4r5/eslint-config`

2. In your `.eslintrc` file, add one of the following to the `extends` array:

|   |   |
|---|---|
| React (default): | `"@j0hnm4r5/eslint-config"` |
| TypeScript with React: | `"@j0hnm4r5/eslint-config/ts-react"` |
| Without React: | `"@j0hnm4r5/eslint-config/vanilla"` |
| TypeScript without React : | `"@j0hnm4r5/eslint-config/ts"` |


That's it! All of the extended configs, Prettier, and some extra rule changes should just work out of the box.

## Example

**.eslintrc**
```js
{
  "env": {
		// all available options: https://eslint.org/docs/user-guide/configuring#specifying-environments
		// they're defined in: https://github.com/eslint/eslintrc/blob/main/conf/environments.js
		"node": true, // Node.js global variables and Node.js scoping
		"browser": true, // browser global variables
		// "es6": true, // enable all ECMAScript 6 features except for modules and automatically sets the ecmaVersion parser option to 6
		// "es2017": true, // adds all ECMAScript 2017 globals and automatically sets the ecmaVersion parser option to 8
		"es2020": true, // adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11
		// "es2021": true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12

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

