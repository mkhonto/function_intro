const assert = require("assert");
// this function combines strings and lists
var countRegNumb = function(cars){
  //var string = "CA 182736,CY 523519,CJ 812328";
  var count = cars.split(",");
  var count = count.length;

  console.log(count);
  return count;
}
//after equal is the main function plus funct results plus expected results
var CountReg = countRegNumb("CA 182736,CY 523519,CJ 812328");
assert.equal(CountReg, 3);
