var myFunc = function(){ //this is the function executing
  console.log("you execute a function like this");
}
//guest the results
console.log(myFunc);
console.log(typeof myFunc);
//calling the function
myFunc();
//only now 'this is the function' is printed out to the console
