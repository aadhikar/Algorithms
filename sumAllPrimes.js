
function sumPrimes(num) {
  var count = 0;
  var res = 0;
  var flag;
  for (var i = 2; i <= num; i++) {
    flag = true;
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res += i;
    }
  }
  return res;
}

sumPrimes(10);
