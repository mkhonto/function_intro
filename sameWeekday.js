const assert = require("assert");
//takes in two dates and check if both dates have the same weekday
var sameDay = function(day1, day2){
day1 = new Date(day1);
day2 = new Date(day2);
//console.log(day1);
var week1 = day1.getDay();
var week2 = day2.getDay();

//console.log(week1 == week2);
  return (week1 == week2);
};
console.log();
assert.equal(sameDay("2015/11/13","2016/11/11"), true);
