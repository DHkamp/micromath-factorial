module.exports = function(num) {
  var numRounded = Math.round(num);

  if(numRounded < 0) throw new Error('Factorials can only be calculated for non-negative numbers.');
  if(numRounded === 0 || numRounded === 1) return 1;

  var f = 1;

  for(var i = 0, j = numRounded; i < j; i++) {
    f *= (i + 1);
  }

  return f;
};
