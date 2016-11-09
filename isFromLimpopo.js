const assert = require("assert");
var isFromLimpopo = function(longL){
  long = longL.endsWith("2 L");

  return long;
}
var feed = isFromLimpopo("2 L");
console.log(feed);
//after equal is the main function plus funct results plus expected results
assert.equal(isFromLimpopo("2 L"), true);
