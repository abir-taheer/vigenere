const calcFactors = require("./calcFactors");

const calcRepeats = (str) => {
	const distances = {};

	for (let i = 0; i < str.length; i++) {
		// Get the next 3 letters
		const currentStr = str.substr(i, 3);

		for (let j = i + 3; j < str.length - 3; j++) {
			const testStr = str.substr(j, 3);

			if (currentStr === testStr) {
				const distance = j - i;

				const factors = calcFactors(distance);

				factors.forEach((num) => {
					if (!distances[num]) {
						distances[num] = 0;
					}
					distances[num]++;
				});
			}
		}
	}

	return distances;
};
