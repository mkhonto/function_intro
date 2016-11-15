const assert = require("assert");
var getDay = function(){
  const date = new Date();
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekDay = weekDays[date.getDay()];

  //console.log(weekDays);
  return weekDay;
};
var day = getDay();
console.log(day);
assert.equal(getDay(), day);
