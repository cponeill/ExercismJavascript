var scoreLetters = {
	'A': 1, 'B': 3, 'C': 3,
	'D': 2, 'E': 1, 'F': 4,
	'H': 4, 'I': 1, 'J': 8,
	'K': 5, 'L': 1, 'M': 3,
	'N': 1, 'O': 1, 'P': 3,
	'Q': 10, 'R': 1, 'S': 1,
	'T': 1, 'U': 1, 'V': 4,
	'W': 4, 'X': 8, 'Y': 4,
	'Z': 10
}

/* Loop through each word in JS object and if letter equals obj key,
	 add score up and assign it to a variable named count. */
function searchObject(obj, word) {
	var count = 0;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			for (var i = 0; i < word.length; i++) {
				if (key === word[i]) {
					count += obj[key];
				}
			}
		}
	}
	return count;
}

var score = function(word) {
	if (word === '' || word === null) {
		return 0;
	} else {
		return searchObject(scoreLetters, word.toUpperCase());
	}
}

module.exports = score;