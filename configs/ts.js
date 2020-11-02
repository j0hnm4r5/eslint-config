const shared = require(`./rules/shared`);
const ts = require(`./rules/ts`);

module.exports = {
	extends: [`airbnb-typescript/base`, ...shared.extends],
	plugins: [...ts.plugins, ...shared.plugins],
	rules: { ...ts.rules, ...shared.rules },
};
