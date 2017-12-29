// Create space-age.js module

var SpaceAge = function(seconds) {
  this.seconds = seconds;
};

function anyPlanet(ratio) {
  var earthYears = 31557600;
  return function() {
    var age = this.seconds / (earthYears * ratio)
    return parseFloat(age.toFixed(2));
  }
}

SpaceAge.prototype.onEarth = anyPlanet(1.0);
SpaceAge.prototype.onMercury = anyPlanet(0.2408467);
SpaceAge.prototype.onVenus = anyPlanet(0.61519726);
SpaceAge.prototype.onMars = anyPlanet(1.8808158);
SpaceAge.prototype.onJupiter = anyPlanet(11.862615);
SpaceAge.prototype.onSaturn = anyPlanet(29.447498);
SpaceAge.prototype.onUranus = anyPlanet(84.016846);
SpaceAge.prototype.onNeptune = anyPlanet(164.79132);

module.exports = SpaceAge;