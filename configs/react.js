const shared = require(`./rules/shared`);
const react = require(`./rules/react`);

module.exports = {
	extends: [`airbnb`, ...shared.extends, ...react.extends],
	plugins: [...shared.plugins, ...react.plugins],
	rules: { ...shared.rules, ...react.rules },
};
