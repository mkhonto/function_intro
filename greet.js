//takes name as a param and returns a message
//this is a string function
const assert = require("assert");
var greet = function(name){
var jah = "how is family "+ name;
console.log(jah);
return jah;
};
assert.equal(greet("sipho"), "how is family sipho");

// this function combines strings and lists
var countRegNumb = function(cars){
  //var string = "CA 182736,CY 523519,CJ 812328";
  var count = cars.split(",");
  var count = count.length;

  console.log(count);
  return count;
}
var CountReg = countRegNumb("CA 182736,CY 523519,CJ 812328");
assert.equal(CountReg, 3);

// this is a boolean function using a date
var isTuesday = function(date){
  toDay = date.startsWith("tu");
  //console.log("date");
  return toDay;
}
var results = isTuesday("tuesday");
console.log(results);
assert.equal(isTuesday("tuesday"),true);

// use js string's built in methods(startsWith & endsWith)
var isFromBellville = function(route){
   rout1 = route.startsWith("CY");

  return rout1;
}
var out = isFromBellville("CY");
console.log(out);
assert.equal(isFromBellville("CY"), true);

var isFromCapeTown = function(routeC){
  road = routeC.startsWith("CA");

  return road;
}
var speed = isFromCapeTown("CA");
console.log(speed);
assert.equal(isFromCapeTown("CA"), true);

var isFromPaarl = function(routeP){
  limit = routeP.startsWith("CJ");

  return limit;
}
var put = isFromPaarl("CJ");
console.log(put);
assert.equal(isFromPaarl("CJ"), true);

var isFromGauteng = function(distanceG){
  distance = distanceG.endsWith("GP");

  return distance;
}
var meter = isFromGauteng("GP");
console.log(meter);
assert.equal(isFromGauteng("GP"), true);

var isFromLimpopo = function(longL){
  long = longL.endsWith("2 L");

  return long;
}
var feed = isFromLimpopo("2 L");
console.log(feed);
assert.equal(isFromLimpopo("2 L"), true);
