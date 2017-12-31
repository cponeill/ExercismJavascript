class SecretHandshake {
  constructor(command) {

    // Throw error exception of command is not numbers.
    if (command.toString().match(/[^0-9]/))
      throw new Error('Handshake must be a number');
    
    this.command = command;

    // Dictionary of secret words.
    this.wordDict = {
      1    : ['wink'],
      10   : ['double blink'],
      11   : ['wink', 'double blink'],
      100  : ['close your eyes'],
      1000 : ['jump'],
      10011: ['double blink', 'wink'],
      11111: ['jump', 'close your eyes', 'double blink', 'wink']
    };

    // Return the key value of the word dictionary.
    this.keyValue = function(key) {
      return this.wordDict[key];
    };

    // Shift a decimal number to a binary digit using bitwise operators.
    this.bitShift = function(decimal) {
      return (decimal >>> 0).toString(2);
    };
  }

  commands() {
    // Conditional statements for the secret codes.
    if (this.bitShift(this.command) === '1') {
      return this.keyValue(this.bitShift(this.command));
    }

    if (this.bitShift(this.command) === '10') {
      return this.keyValue(this.bitShift(this.command));
    }

    if (this.bitShift(this.command) === '100') {
      return this.keyValue(this.bitShift(this.command));
    }

    if (this.bitShift(this.command) === '1000') {
      return this.keyValue(this.bitShift(this.command));
    }

    if (this.bitShift(this.command) === '11') {
      return this.keyValue(this.bitShift(this.command));
    }

    if (this.bitShift(this.command) === '10011') {
      return this.keyValue(this.bitShift(this.command));
    }

    if (this.bitShift(this.command) === '11111') {
      return this.keyValue(this.bitShift(this.command));
    }
  }
}

module.exports = SecretHandshake;