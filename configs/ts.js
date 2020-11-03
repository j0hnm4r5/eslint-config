const shared = require(`./rules/shared`);
const ts = require(`./rules/ts`);

module.exports = {
	extends: [
		`airbnb-typescript/base`,
		...shared.extends,
		...ts.extends,
	],
	plugins: [...shared.plugins, ...ts.plugins],
	rules: { ...shared.rules, ...ts.rules },
};
