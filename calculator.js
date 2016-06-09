function Calculator(x) {
  this._x = x; //let's talk a moment about _x
}

Calculator.prototype = {
  addition: function(n) { return this._x += n; },
  subtract: function(n) { return this._x -= n; },
  division: function(n) { return this._x /= n; },
  multiply: function(n) { return this._x *= n; }
}

module.exports = Calculator;
