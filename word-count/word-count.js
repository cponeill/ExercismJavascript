var Words = function() {
	// leave empty.
}

Words.prototype.count = function(wordStr) {
	/* Counts the number of times each words appears */
	var wordCount = {};
	// Splits words on whitespace
	wordStr.trim().split(/\s+/).forEach( function(word) {
		if(word in wordCount && !isNaN(wordCount[word]))
			wordCount[word]++;
		else
			// Initilize new word
			wordCount[word] = 1;
	});
	return wordCount;
};

module.exports = Words;