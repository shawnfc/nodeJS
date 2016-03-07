//function statement
function greet () {
    console.log('Hi!');
}
greet();

//functions are first-class
function logGreeting (fn) {
    fn()
}
logGreeting(greet);

//function expression
var greetMe = function () {
    console.log('Yo, Shawn!');
}
greetMe();

// it's first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function () {
    console.log("What up, Freshco?");
});