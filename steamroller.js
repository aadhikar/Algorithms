
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(prev, curr) {
    return prev.concat(Array.isArray(curr) ? steamrollArray(curr) : curr);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
