const assert = require("assert");
var call1 = new Date("2000");
var call2 = new Date("1994");
var news = call1.getFullYear(call1) - call2.getFullYear(call2);

 console.log(news);
return news;
assert.equal(call1, call2(news), "6");
