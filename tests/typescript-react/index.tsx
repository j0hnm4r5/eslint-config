import React from "react";

const Index = () => {
	function buildName(firstName: string, lastName = `Smith`) {
		return `${firstName} ${lastName}`;
	}

	const result1 = buildName(`Bob`);
	const result2 = buildName(`Bob`, `Adams`, `Sr.`);
	buildName(`Bob`, `Adams`);

	return <div>Hello, World!</div>;
};

export default Index;
