const assert = require("assert");
var isFromGauteng = function(distanceG){
  distance = distanceG.endsWith("GP");

  return distance;
}
var meter = isFromGauteng("GP");
console.log(meter);
//after equal is the main function plus funct results plus expected results
assert.equal(isFromGauteng("GP"), true);
