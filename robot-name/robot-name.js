var Robot = function() {
  this.name = getName();
};

var namesInUse = new Set();

function getName() {
  var rand = function(max, min) {
    return Math.floor(Math.random() * (max - min + 1) - min);
  };
  var letter = function() {
    return rand('Z'.charCodeAt(0), 'A'.charCodeAt(0));
  };
  var digit = function() {
    return rand('9'.charCodeAt(0), '0'.charCodeAt(0));
  }

  do {
    var name = String.fromCharCode(letter(), digit(), digit(), digit());
  } while (namesInUse.has(name));
  namesInUse.add(name);
  return name;
}

module.exports = Robot;