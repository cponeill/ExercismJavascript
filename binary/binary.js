// Create binary.js module

var Binary = function(numbers) {
  this.numbers = numbers;
};

Binary.prototype.toDecimal = function() {

  // return parseInt(binaryNumber, 2);
  if (!this.numbers) {
    return 0;
  }
  return this.numbers.split('').reverse().reduce(function(x, y, z) {
    return (y === '1') ? x + Math.pow(2, z) : x;
  }, 0);
};

module.exports = Binary;