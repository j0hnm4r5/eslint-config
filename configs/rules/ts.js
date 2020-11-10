module.exports = {
	extends: [
		`plugin:@typescript-eslint/recommended`,
		`prettier/@typescript-eslint`,
	],
	plugins: [`@typescript-eslint`],
	rules: {
		"no-loop-func": `off`,
		"no-redeclare": `off`,
		"no-shadow": `off`,
		"no-use-before-define": `off`,
	},
};
