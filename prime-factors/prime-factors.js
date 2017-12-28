// Create prime-factors.js module

var primeFactors = function (remainder) {
  let factor = 2;
  let array = [];

  while (Math.pow(factor, 2) <= remainder) {
    while (remainder % factor === 0) {
      array.push(factor);
      remainder /= factor;
    }
    factor += factor == 2 ? 1 : 2;
  }

  if (remainder != 1)
    array.push(remainder);
  return array;
};


module.exports = {for: primeFactors};