const calcRepeats = require("./calcRepeats");

const calcKeyLen = str => {

	const scores = calcRepeats(str);

	let len = 0;
	let score = 0;

	Object.keys(scores).forEach(possibleLen => {
		const currScore = scores[possibleLen];
		if(currScore > score){
			len = possibleLen;
			score = currScore;
		}
	});

	return Number(len);
};

module.exports = calcKeyLen;
