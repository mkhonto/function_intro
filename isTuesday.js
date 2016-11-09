const assert = require("assert");
// this is a boolean function using a date
var isTuesday = function(date){
  toDay = date.startsWith("tu");
  //console.log("date");
  return toDay;
}
var results = isTuesday("tuesday");
console.log(results);
assert.equal(isTuesday("tuesday"),true);
