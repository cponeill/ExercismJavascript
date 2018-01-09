class PhoneNumber {
  constructor(number) {
    this.number = number;
  }

  number() {
    let cleanedNumber = this.number.replace(/\D/g, '');
    let match = cleanedNumber.match(/^1?([2-9][0-9]{2}[2-9][0-9]{2}[0-9]{4})$/);
    if (!match) {
      return null;
    }
    else {
      return match[1];
    }
  }
}

module.exports = PhoneNumber;