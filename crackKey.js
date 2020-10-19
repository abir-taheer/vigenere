const decode = require("./decode");
const calcFrequency = require("./calcFrequency");
const crackKey = (str, keyLen) => {
	// Calculate each letter of the key
	for (let i = 0; i < keyLen; i++) {
		let testStr = '';

		for (let j = i; j < str.length; j += keyLen) {
			const char = str[j];

			testStr += char;
		}

		for (let j = 97; j < 123; j++) {
			const testKeyChar = String.fromCharCode(j);
			const decodedStr = decode(testStr, testKeyChar);
			const frequencies = calcFrequency(decodedStr);
		}
	}
};

module.exports = crackKey;
