function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  for (var i = 0; i < arr.length; i = i + size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
