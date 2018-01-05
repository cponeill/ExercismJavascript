
var encode = function(str) {
  return str.replace(/([A-z])\1+/g, function(run, char) {
    return run.length + char;
  });
};

var decode = function(str) {
  return str.replace(/(\d+)([A-z])/g, function(_, runLength, char) {
    return char.repeat(runLength);
  });
}


module.exports = {encode, decode};