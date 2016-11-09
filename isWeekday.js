const assert = require("assert");
const date = new Date("2020-07-12");
  weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//return index between 0 and 6
  console.log(date.getDay());
//look up the week day text string from the Array
console.log(weekDays[date.getDay()]);
