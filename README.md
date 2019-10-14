# @j0hnm4r5/eslint-config

## About

This [ESLint](https://eslint.org/) config is built on top of [AirBnB's config](https://www.npmjs.com/package/eslint-config-airbnb) and [Unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn). It includes [Prettier](https://prettier.io/) to automatically format code.

## Instructions

1. Install `eslint` in your project with `yarn add eslint`

2. In your `.eslintrc` file, add `"@j0hnm4r5/eslint-config"` to the `extends` array, like so:

```
{
  "env": {
    "shared-node-browser": true,
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "@j0hnm4r5/eslint-config"
  ]
}
```

That's it! All of the extended configs, Prettier, and some extra rule changes should just work out of the box.