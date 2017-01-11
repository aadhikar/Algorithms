
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var firstArray, secondArray;
  if (arr1.length >= arr2.length) {
    firstArray = arr1;
    secondArray = arr2;
  } else {
    firstArray = arr2;
    secondArray = arr1;
  }
  var firstArrayResult = firstArray.filter(function(first) {
    return secondArray.indexOf(first) < 0 ? first : '';
  });
  var secondArrayResult = secondArray.filter(function(second) {
    return firstArray.indexOf(second) < 0 ? second : '';
  });
  return newArr.concat(firstArrayResult, secondArrayResult);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
