const assert = require("assert");
var greet = function(name){
var jah = "how is family "+ name;
console.log(jah);
return jah;
};
assert.equal(greet("sipho"), "how is family sipho");
