const assert = require("assert");
// use js string's built in methods(startsWith & endsWith)
var isFromBellville = function(route){
   rout1 = route.startsWith("CY");

  return rout1;
}
var out = isFromBellville("CY");
console.log(out);
//after equal is the main function plus funct results plus expected results
assert.equal(isFromBellville("CY"), true);
