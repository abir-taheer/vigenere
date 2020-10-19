const encode = require("./encode");
const decode = require("./decode");
const args = process.argv.slice(2);
const normalize = require("./normalize");
const calcKeyLen = require("./calcKeyLen");
const crackKey = require("./crackKey");


if (args[0] === "encode") {
	const str = normalize(args[1]);
	const key = normalize(args[2]);
	const encoded = encode(str, key);

	console.log(encoded);
}

if (args[0] === "decode") {
	const str = normalize(args[1]);
	if (args[2]) {
		const key = normalize(args[2]);
		const decoded = decode(str, key);
		console.log(decoded);
	} else {

		const keyLen = calcKeyLen(str);

		const key = crackKey(str, keyLen);

		const decoded = decode(str, key);
		console.log(decoded);
	}
}
