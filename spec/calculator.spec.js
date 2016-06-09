var Calculator = require('../calculator.js');

describe('Calculator', function() {
  var calc = new Calculator(0);

  it('is present', function() {
    expect(calc !== undefined).toEqual(true);
  });

  it('can math', function() {
    expect(calc.addition(4)).toEqual(4);
    expect(calc.multiply(3)).toEqual(12);
  });
})
