//bring in the calculator
var Calculator = require('./calculator.js');
var calc = new Calculator(0);
var prompt = require('prompt');

function collect() {
  // collect some data from the user
  prompt.get(['number', 'operation'], function(error, result) {
    var value = math(result);
    console.log(value);

    ask_again();
  });
}

function ask_again() {
  prompt.get(["again?"], function(error, result) {
    var answer = result["again?"];
    if (answer === "yes") {
      // do it again!
      collect();
    } else {
      // exit!
      console.log('bye!');
      process.exit;
    }
  })
}

function math(result) {
  // receive a number and an operation
  var number = Number(result.number),
      operation = result["operation"];

  // use the `calc` instance to do the math
  // return the solution? result?
  return calc[operation](number);
}

//start prompt - required to be able to capture input
prompt.start();

// kick off the user interaction
collect();
