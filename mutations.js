
function mutation(arr) {
  var str0 = arr[0].toLowerCase().split('');
  var str1 = arr[1].toLowerCase().split('');
  var count = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str0.indexOf(str1[i]) > -1) {
      count++;
    }
  }
  return count === str1.length;
}

mutation(["hello", "hey"]);
