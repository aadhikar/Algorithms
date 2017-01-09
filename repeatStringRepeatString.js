
function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatedStr = '';
  if (num < 0) {
    return repeatedStr;
  } else {
    for (var count = 0; count < num; count++) {
      repeatedStr += str;
    }
  }
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);
