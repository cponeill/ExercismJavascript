var Acronyms = function() {
  // leave empty for now.
}

Acronyms.prototype.parse = function(phrase) {
  let arr = phrase.split(' ');
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i][0];
  }

  return answer.toUpperCase();
}

module.exports = Acronyms;