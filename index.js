//bring in the calculator
var Calculator = require('./calculator.js');
var calc = new Calculator(0);

var answer = calc.addition(10);
console.log("Math!");
console.log("0 + 10 is " + answer);
