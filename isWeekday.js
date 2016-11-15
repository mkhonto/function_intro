const assert = require("assert");
var isWeekday = function(day){
//new date function is part of the built in family of javascript methods that doesn't need braces
var date = day.startsWith("Thu");

return date;
};
var two = isWeekday("Thu");
console.log(two);
//look up the week day text string from the Array
assert.equal(isWeekday("Thu"), true);
