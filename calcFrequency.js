const calcFrequency = (str) => {
	let total = 0;
	const freq = {};

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		let currentFreq = freq[char];

		if(! currentFreq){
			currentFreq = 0;
		}

		total++;
		freq[char] = currentFreq + 1;
	}

	const percentages = {};

	Object.keys(freq).forEach((char) => {
		percentages[char] = freq[char] / total;
	});

	return percentages;
};

module.exports = calcFrequency;
