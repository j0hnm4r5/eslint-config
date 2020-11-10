const shared = require(`./rules/shared`);
const react = require(`./rules/react`);
const ts = require(`./rules/ts`);

module.exports = {
	parser: `@typescript-eslint/parser`,
	extends: [
		`airbnb-typescript`,
		...shared.extends,
		...react.extends,
		...ts.extends,
	],
	plugins: [...shared.plugins, ...react.plugins, ...ts.plugins],
	rules: { ...shared.rules, ...react.rules, ...ts.rules },
};
