var PhoneNumber = function() {};

PhoneNumber.prototype.number = function(num) {
	let newNum = ("" + num).replace(/\D/g, '');
	let m = newNum.match(/^(\d{3})(\d{3})(\d{4})$/);
  return null ? null : m[0];
}

module.exports = PhoneNumber;