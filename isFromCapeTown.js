const assert = require("assert");
var isFromCapeTown = function(routeC){
  road = routeC.startsWith("CA");

  return road;
}
var speed = isFromCapeTown("CA");
console.log(speed);
//after equal is the main function plus funct results plus expected results
assert.equal(isFromCapeTown("CA"), true);
