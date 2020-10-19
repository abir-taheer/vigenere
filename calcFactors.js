const cache = {};

const calcFactors = (num) => {
	const existingEntry = cache[num];
	if (existingEntry) {
		return existingEntry;
	}

	const factors = [];

	for (let i = 3; i < num; i++) {
		if (num % i === 0) {
			factors.push(i);
		}
	}

	cache[num] = factors;

	return factors;
};


module.exports = calcFactors;
