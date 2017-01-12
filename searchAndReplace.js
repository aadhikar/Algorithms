
function myReplace(str, before, after) {
  var re = new RegExp(before, 'gi');
  if (str.indexOf(before) > 0) {
    if (/[A-Z]/.test(before[0])) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
  }
  return str.replace(re, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
