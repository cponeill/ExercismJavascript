class Isogram {
  constructor(word) {
    this.word = word.toLowerCase().split('').filter(letters);
  }

  isIsogram() {
    return this.word.reduce((isIso, char, i) => (isIso && this.word.indexOf(char) === i), true);
  }
}

const letters = (char) => /[A-zÀ-ÿ]/.test(char)

module.exports = Isogram;