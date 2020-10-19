const decode = require("./decode");
const calcFrequency = require("./calcFrequency");
const engFrequencies = require("./engFrequencies");

const crackKey = (str, keyLen) => {
	let key = '';

	// Calculate each letter of the key
	for (let i = 0; i < keyLen; i++) {
		let testStr = "";

		for (let j = i; j < str.length; j += keyLen) {
			const char = str[j];

			testStr += char;
		}

		let closestChar = "a";
		// Some absurdly large value
		let smallestDist = 100000;

		for (let j = 97; j < 123; j++) {
			const testKeyChar = String.fromCharCode(j);
			const decodedStr = decode(testStr, testKeyChar);
			const frequencies = calcFrequency(decodedStr);

			let dist = 0;

			Object.keys(frequencies).forEach((char) => {
				const expected = engFrequencies[char];
				const actual = frequencies[char];

				dist += Math.abs(expected - actual) * expected;
			});

			if(dist < smallestDist){
				smallestDist = dist;
				closestChar = testKeyChar;
			}
		}

		key += closestChar;
	}

	return key;
};

module.exports = crackKey;

