const assert = require("assert");
var regCheck = function(plate, location){
  chec = location.endsWith(plate);

  return chec;
}
var isGP = regCheck("GP","123452 GP");
//it shout print true
console.log(isGP);

var isL = regCheck("L", "234567 L");
//it should print true
console.log(isL);

var isEC = regCheck("EC 543217", "EC");
//it should print false
console.log(isEC);

var isMP = regCheck("456789 MP", "MP");
//it should print false
console.log(isMP);
