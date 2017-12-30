'use strict';

var DnaTranscriber = function () {};

var translations = {
    A: 'U',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  
var transcribeDna = function (dna, lookupTable) {
  return dna.replace(/./g, function (dnaNucleotide) {
    if (!(dnaNucleotide in lookupTable)) { throw Error('Invalid input'); }
      return lookupTable[dnaNucleotide];
  });
};

DnaTranscriber.prototype.toRna = function (dna) {
  return transcribeDna(dna, translations);
}

module.exports = DnaTranscriber;