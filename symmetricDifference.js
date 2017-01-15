
function sym(args) {
  var arg = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  return arg.reduce(function(preVal, curVal) {
    var result = [];

    preVal.map(function(val) {
      return curVal.indexOf(val) < 0 && result.indexOf(val) < 0 ? result.push(val) : false;
    });

    curVal.map(function(val) {
      return preVal.indexOf(val) < 0 && result.indexOf(val) < 0 ? result.push(val) : false;
    });

    return result;
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);
