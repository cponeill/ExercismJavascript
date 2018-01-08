class Hamming {
  constructor() {}

  compute(one, two) {
    var diff = 0;
    if (one.length === two.length) {
      for (var i = 0; i <= one.length; i++) {
        if (one[i] !== two[i]) {
          diff += 1;
        }
      }
    } else {
      throw new Error('DNA strands must be of equal length.');
    }
    return diff;
  }
}

module.exports = Hamming;