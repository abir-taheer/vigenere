const encode = require("./encode");
const decode = require("./decode");
const args = process.argv.slice(2);
const normalize = require("./normalize");

if(args[0] === "encode"){
	const str = normalize(args[1]);
	const key = normalize(args[2]);
	console.log(encode(str, key));
}

if(args[0] === "decode"){
	const str = normalize(args[1]);
	const key = normalize(args[2]);
	console.log(decode(str, key));
}
