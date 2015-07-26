var factorial = require('../src/factorial.js');
var expect    = require('chai').expect;

describe('Factorial', function() {
  it('should return 1 as factorial for 0', function() {
    expect(factorial(0)).to.equal(1);
  });

  it('should return 1 as factorial for 1', function() {
    expect(factorial(1)).to.equal(1);
  });

  var n = 2;
  for(var i = n, j = 20; i < j; i++) {
    var f = factorial(i);
    console.log('Expecting ' + f + ' to equal ' + n);

    it('should return ' + n + ' as factorial for ' + i, function() {
      expect(factorial(i)).to.equal(n);
    });

    n *= (i + 1);
  }
});
