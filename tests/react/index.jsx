import React from "react";

const foo = 0xff;
const foo1 = 0xff;
const foo2 = 0xff;
const foo3 = 0xffn;
const foo4 = 0b10;
const foo5 = 0b10n;

const style = css`
	color: 0xffffff;
	background-color: #ffffff;
`;

const Index = () => {
	return <div style={{ color: `#FFFFFF` }}>Hello, World!</div>;
};

export default Index;
