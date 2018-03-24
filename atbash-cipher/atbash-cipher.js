let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let reverse = alphabet.reverse();

var AtBash = () => {};

AtBash.encode = (str) => {
	let textout = '';
	for (let i = 0; i < str.length; i++) {
		let letter = str[i];
		var position = alphabet.indexOf(letter.toLowerCase());
		if (position > -1) {
			let newPosition = alphabet.length-1 - position;
			textout += alphabet[newPosition]
		} else {
			textout += letter;
		}
	}
	return textout;
};

AtBash.decode = (str) => {
	let textout = '';
	for (let i = 0; i < str.length; i++) {
		let letter = str[i];
		var position = reverse.indexOf(letter.toLowerCase());
		if (position > -1) {
			let newPosition = reverse.length-1 - position;
			textout += reverse[newPosition]
		} else {
			textout += letter;
		}
	}
	return textout;
};

module.exports = AtBash;