
function dropElements(arr, func) {
  // Drop them elements.
  var res = [];
  arr.findIndex(function(val) {
    if (func(arr[0])) {
      return false;
    } else {
      arr.shift();
    }
  });
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
