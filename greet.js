//takes name as a param and returns a message
const assert = require("assert");
var greet = function(name){
var jah = "how is family "+ name;
console.log(jah);
return jah;
};
assert.equal(greet("sipho"), "how is family sipho");

var countRegNumb = function(cars){
  //var string = "CA 182736,CY 523519,CJ 812328";
  var count = cars.split(",");
  var count = count.length;

  console.log(count);
  return count;
}
var CountReg = countRegNumb("CA 182736,CY 523519,CJ 812328");
assert.equal(CountReg, 3);

var isTuesday = function(date){
  toDay = date.startsWith("tu");
  //console.log("date");
  return toDay;
}
var results = isTuesday("tuesday");
console.log(results);
assert.equal(isTuesday("tuesday"),true);
