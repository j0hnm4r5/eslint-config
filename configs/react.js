const shared = require(`./rules/shared`);
const react = require(`./rules/react`);

module.exports = {
	extends: [`airbnb`, ...shared.extends, ...react.extends],
	plugins: [...react.plugins, ...shared.plugins],
	rules: { ...shared.rules, ...react.rules },
};
