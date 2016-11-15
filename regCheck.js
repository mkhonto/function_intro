const assert = require("assert");
var regCheck = function(plate, location) {
  chec = location.endsWith(plate);

  return chec;
}
var isGP = regCheck("GP", "123452 GP");
//it shout print true
console.log(isGP);
assert.equal(regCheck("GP", "123452 GP"), true);

var isL = regCheck("L", "234567 L");
//it should print true
console.log(isL);
assert.equal(regCheck("L", "234567 L"), true);

var isEC = regCheck("EC 543217", "EC");
//it should print false
console.log(isEC);
assert.equal(regCheck("EC 543217", "EC"), false);

var isMP = regCheck("456789 MP", "MP");
//it should print false
console.log(isMP);
assert.equal(regCheck('456789 MP', 'MP'), false);
