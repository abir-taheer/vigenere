const calcFrequency = str => {
	const freq = {};

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		const currentFreq = freq[char];

		freq[char] = currentFreq + 1;
	}

	return freq;
};

exports = calcFrequency;
