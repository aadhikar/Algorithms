
function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var res = args[0];
  args.map(function(val) {
    val.reduce(function(accumulator, currentValue, currentIndex, array) {
      return array.map(function(val) {
        if (res.indexOf(val) < 0) {
          res.push(val);
        }
      });
    });
  });
  return res;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
