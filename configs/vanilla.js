const shared = require(`./rules/shared`);

module.exports = {
	extends: [`airbnb-base`, ...shared.extends],
	plugins: [...shared.plugins],
	rules: { ...shared.rules },
};
