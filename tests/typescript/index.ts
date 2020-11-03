function buildName(firstName: string, lastName = `Smith`) {
	return `${firstName} ${lastName}`;
}

const result1 = buildName(`Bob`);
const result2 = buildName(`Bob`);
const result3 = buildName(`Bob`, `Adams`, `Sr.`);
const result4 = buildName(`Bob`, `Adams`);
