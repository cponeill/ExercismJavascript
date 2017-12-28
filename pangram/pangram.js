/* Set up pangram.js module
Pangram = function(words) {
  this.words = words;
}

Pangram.prototype.alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

Pangram.prototype.isPangram = function() {
  let letters = this.words.toLowerCase();
  return this.alphabet.every((letter) => letters.includes(letter));
}
module.exports = Pangram;
*/

// Set up pangram.js module

var Pangram = function(text) {
  this.text = text;
  this.letters = this.makeLettersArray();
}

Pangram.prototype.isPangram = function() {
  if (this.text === '') {
    return false;
  }

  var inputCharSet = this.makeInputCharSet(this.text);
  for (var l of this.letters) {
    if (!inputCharSet.has(l)) {
      return false;
    }
  }

  return true;
};

Pangram.prototype.makeLettersArray = function() {
  var output = [];
  for (var i = 97; i <= 122; i++) {
    output.push(String.fromCharCode(i));
  }
  return output;
};

Pangram.prototype.makeInputCharSet = function(input) {
  var output = new Set();
  for (var s of input.split('')) {
    output.add(s.toLowerCase());
  }
  return output
}

module.exports = Pangram;