
function largestOfFour(arr) {
  // You can do this!
  var LargestArr = [];
  arr.map(function(val){
    var result = val.reduce(function(accumulator, currentValue){
      return (accumulator > currentValue ? accumulator : currentValue);
      });
    LargestArr.push(result);
    });
  return LargestArr;
  }

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
