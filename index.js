const encode = require("./encode");
const decode = require("./decode");
const args = process.argv.slice(2);
const normalize = require("./normalize");
const calcKeyLen = require("./calcKeyLen");
const crackKey = require("./crackKey");

console.log('-----------------------------');

if (args[0] === "encode") {
	const str = normalize(args[1]);
	const key = normalize(args[2]);
	console.log("encoded: ", encode(str, key));
}

if (args[0] === "decode") {
	const str = normalize(args[1]);
	if (args[2]) {
		const key = normalize(args[2]);
		console.log("decoded: ", decode(str, key));
	} else {
		console.log("Key not provided, attempting to calculate key");

		const keyLen = calcKeyLen(str);
		console.log("Assuming key is len ", keyLen);

		const key = crackKey(str, keyLen);
		console.log("Assuming key is ", key);

		const decoded = decode(str, key);
		console.log("Decoded string: ", decoded);
	}
}
