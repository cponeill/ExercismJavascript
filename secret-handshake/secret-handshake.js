class SecretHandshake {
  constructor(command) {
    // Throw error exception of command is not numbers.
    if (command.toString().match(/[^0-9]/))
      throw new Error('Handshake must be a number');
    this.command = command;
  }

  commands() {
    // Conditional statements for the secret codes.
    if (bitShift(this.command) === '1') {
      return keyValue(bitShift(this.command));
    }

    if (bitShift(this.command) === '10') {
      return keyValue(bitShift(this.command));
    }

    if (bitShift(this.command) === '100') {
      return keyValue(bitShift(this.command));
    }

    if (bitShift(this.command) === '1000') {
      return keyValue(bitShift(this.command));
    }

    if (bitShift(this.command) === '11') {
      return keyValue(bitShift(this.command));
    }

    if (bitShift(this.command) === '10011') {
      return keyValue(bitShift(this.command));
    }

    if (bitShift(this.command) === '11111') {
      return keyValue(bitShift(this.command));
    }
  }
}

// Dictionary of secret words.
wordDict = {
  1    : ['wink'],
  10   : ['double blink'],
  11   : ['wink', 'double blink'],
  100  : ['close your eyes'],
  1000 : ['jump'],
  10011: ['double blink', 'wink'],
  11111: ['jump', 'close your eyes', 'double blink', 'wink']
};

function keyValue(key) {
  // Return the key value of the word dictionary.
  return wordDict[key];
}

function bitShift(decimal) {
  // Shift a decimal number to a binary digit using bitwise operators.
  return (decimal >>> 0).toString(2);
}

module.exports = SecretHandshake;