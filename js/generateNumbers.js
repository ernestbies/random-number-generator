import compareNumbers from './compareNumbers.js';

const generateNumbers = () =>
	Array.from(Array(20))
		.map(() => Math.floor(Math.random() * 100) + 1)
		.sort(compareNumbers);

export default generateNumbers;
