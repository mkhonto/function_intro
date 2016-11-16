//takes name as a param and returns a message
const assert = require("assert");
var greet = function(name){
var jah = "how is family "+ name;
//console.log(jah);
return jah;
};
var print = greet("lulu");
console.log(print);
//after equal is the main function plus funct results plus expected results
assert.equal(print, "how is family lulu");
