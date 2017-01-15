
function sumFibs(num) {
  var prev = 0;
  var curr = 1;
  var temp = 0;
  var result = 0;
  if (num === 1) {
    result = 1;
  } else {
    while (temp <= num) {
      if (curr % 2 === 1) {
        result += curr;
      }
      temp = curr + prev;
      prev = curr;
      curr = temp;
    }
  }
  return result;
}

sumFibs(4);
