var Anagram = function(word) {
  this.word = word.toUpperCase();
};

var anagram = function(word) {
  return new Anagram(word);
};

Anagram.prototype.matches = function(wordArray) {
  if (!wordArray instanceof Array) {
    var args = arguments;
    wordArray = Object.keys(args).map(function(key) {
      return args[key];
    });
  }

  let createLetters = function(word) {
    return word.toLowerCase().split('').sort().join('');
  };
  let letters = createLetters(this.word), anagram = this.word;
  let anagrams = function(word) {
    return createLetters(word) === letters && word.toLowerCase() !== anagram;
  };

  return wordArray.filter(anagrams);
}

module.exports = Anagram;