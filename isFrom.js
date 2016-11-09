const assert = require("assert");
var isFrom = function(province, reg){
  prov = reg.startsWith(province);
  //console.log(prov);
  return prov;

}

var call = isFrom('ca','ca 12345');
console.log(call);
assert.equal(isFrom('ca','ca 12345'), true);
