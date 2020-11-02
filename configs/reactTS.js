const shared = require(`./rules/shared`);
const react = require(`./rules/react`);
const ts = require(`./rules/ts`);

module.exports = {
	extends: [
		`airbnb-typescript`,
		...shared.extends,
		...react.extends,
	],
	plugins: [...react.plugins, ...ts.plugins, ...shared.plugins],
	rules: { ...shared.rules, ...ts.rules, ...react.rules },
};
