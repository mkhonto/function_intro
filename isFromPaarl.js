const assert = require("assert");
var isFromPaarl = function(routeP){
  limit = routeP.startsWith("CJ");

  return limit;
}
var put = isFromPaarl("CJ");
console.log(put);
//after equal is the main function plus funct results plus expected results
assert.equal(isFromPaarl("CJ"), true);
