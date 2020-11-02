module.exports = {
	extends: [`plugin:react/recommended`, `prettier/react`],
	rules: {
		// "jsx-a11y/click-events-have-key-events": `off`,
		// "jsx-a11y/media-has-caption": `off`,
		// "jsx-a11y/no-static-element-interactions": `off`,
		"react/display-name": `off`,
		"react/jsx-props-no-spreading": `off`,
		"react/no-array-index-key": `off`,
		"react/prop-types": `off`,
	},
	plugins: [`react`],
};
