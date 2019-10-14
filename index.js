module.exports = {
	extends: [
		"airbnb",
		"plugin:unicorn/recommended",
		"plugin:prettier/recommended",
		"prettier/react"
	],
	rules: {
		"class-methods-use-this": "off",
		"consistent-return": "off",
		"import/first": "off",
		"import/newline-after-import": "off",
		"import/no-dynamic-require": "off",
		"import/order": "off",
		"no-bitwise": "off",
		"no-console": "off",
		"no-plusplus": "off",
		"no-restricted-globals": "off",
		"no-shadow": [
			"error",
			{
				"allow": [
					"resolve",
					"reject",
					"err",
					"error",
					"cb"
				]
			}
		],
		"no-underscore-dangle": "off",
		"no-use-before-define": "off",
		"prefer-const": "error",
		"prefer-template": "error",
		"quotes": [
			"error",
			"backtick"
		],
		"radix": "off",
		"unicorn/filename-case": "off",
		"unicorn/number-literal-case": "off",
		"unicorn/prevent-abbreviation": "off",
		"react/prop-types": "off",
		"jsx-a11y/accessible-emoji": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"react/no-array-index-key": "off",
		"jsx-a11y/media-has-caption": "off"
	}
};