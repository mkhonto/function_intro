const assert = require("assert");
//new date function is part of the built in family of javascript methods that doesn't need braces
var date = new Date("Thu Nov 10 2016");
  weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//return index between 0 and 6
  console.log(date.getDay());
  return weekDays;
//new Date();
//look up the week day text string from the Array
console.log(weekDays[date.getDay()]);
assert.equal(new Date(weekDays), "Thu Nov 10 2016");
