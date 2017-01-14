
function fearNotLetter(str) {
  if (/[a-z]/i.test(str)) {
    var i = str.charCodeAt(0);
    var j = 0;
    while (i <= 122 && j <= str.length - 1) {
      if (String.fromCharCode(i) !== str.charAt(j)) {
        return String.fromCharCode(i);
      }
      i++;
      j++;
    }
  }
  return undefined;
}

fearNotLetter("abce");
