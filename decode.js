const decode = (str, key) => {
	let final = "";

	for (let i = 0; i < str.length; i++) {
		const keyCharOffset = key.charCodeAt(i % key.length) - 97;

		const newCharCode =
			((str.charCodeAt(i) - keyCharOffset - 97 + 26) % 26) + 97;
		final += String.fromCharCode(newCharCode);
	}

	return final;
};

module.exports = decode;
