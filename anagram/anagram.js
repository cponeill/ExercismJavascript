class Anagram {
  constructor(word) {
    this.word = word;
    this.array = [];

    // Loop through word and push each letter to array.
    for (let i = 0; i <= this.word.length - 1; i++) {
      this.array.push(this.word[i]);
    }

    // Sort the array in alphabetical order.
    this.word = this.array.sort();
  }

  matches(list) {
    // Loop through list of words.
    for (let i = 0; i <= list.length; i++) {
      
    }
  }
}