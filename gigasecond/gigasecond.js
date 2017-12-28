// Create gigasecond.js module

var GIGASECOND = Math.pow(10, 12);

var Gigasecond = function(day) {
  this.day = day;
};

Gigasecond.prototype.date = function() {
  return new Date(this.day.getTime() + GIGASECOND);
};

module.exports = Gigasecond;