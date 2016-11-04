var call = "Fermino";
var mySport = function(){
  //
  var sport = "Soccer";
  console.log(call + "'s favourite sport is " + sport);
};
//this prints Fermino's favourite sport
mySport();
//this should give an error because it's not defined inside the function
console.log(sport);
