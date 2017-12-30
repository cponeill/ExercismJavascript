var reverseString = function(str) {
  this.str = str;

  // Assign "str" to array and reverse it.
  let arr = [...this.str].reverse();
  if (!this.str) {
    return '';
  }
  else {
    return arr.join("");
  }

};


module.exports = reverseString;