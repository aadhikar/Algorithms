
function smallestCommons(arr) {
  var startVal = Math.min.apply(null, arr);
  var endVal = Math.max.apply(null, arr);
  var findLcmForArr = [];

  for (var i = startVal; i <= endVal; i++) {
    findLcmForArr.push(i);
  }

  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  var multiple = startVal;
  findLcmForArr.map(function(n) {
    multiple = lcm(multiple, n);
    return multiple;
  });
  return multiple;
}


smallestCommons([1,5]);
