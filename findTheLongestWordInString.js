
function findLongestWord(str) {
  str = str.split(" ").reduce(function (accumulator, currentValue) {
    return accumulator.length > currentValue.length ? accumulator : currentValue;
    });
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
